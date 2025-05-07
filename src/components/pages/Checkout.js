import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "../../style/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default function Checkout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState(location.state);

  // Store job data in sessionStorage when available
  useEffect(() => {
    if (location.state?.jobId) {
      sessionStorage.setItem('checkoutJobData', JSON.stringify(location.state));
      setFormValues(location.state);
    } else if (!formValues && sessionStorage.getItem('checkoutJobData')) {
      setFormValues(JSON.parse(sessionStorage.getItem('checkoutJobData')));
    }
  }, [location.state, formValues]);

  const handlePaymentSuccess = useCallback(async (sessionId) => {
    try {
      // Get job data from sessionStorage if formValues is not available
      const jobData = formValues || JSON.parse(sessionStorage.getItem('checkoutJobData'));
      
      if (!jobData?.jobId) {
        throw new Error('Job data not found');
      }

      // Update job status in Firestore
      const db = getFirestore();
      const jobRef = doc(db, "jobs", jobData.jobId);
      
      // Verify the job exists first
      const jobSnap = await getDoc(jobRef);
      if (!jobSnap.exists()) {
        throw new Error('Job posting not found');
      }

      await updateDoc(jobRef, {
        status: "active",
        paidAt: new Date().toISOString(),
        stripeSessionId: sessionId
      });

      setMessage("Payment successful! Your job posting is now live.");
      
      // Clear session storage
      sessionStorage.removeItem('checkoutJobData');
    } catch (err) {
      console.error("Error updating job status:", err);
      setError("Payment was successful but there was an error activating your job posting. Please contact support.");
    }
  }, [formValues]); // Add formValues as a dependency

  useEffect(() => {
    // Check URL params on mount and after redirect
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      handlePaymentSuccess(query.get("session_id"));
    }

    if (query.get("canceled")) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, [handlePaymentSuccess]);

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost/newgradnomad.com/api/checkout.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: formValues.jobId,
          totalCost: formValues.totalCost,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Redirect to Stripe checkout
      window.location.href = data.url;
    } catch (err) {
      console.error("Error creating checkout session:", err);
      setError(err.message || "Failed to initiate checkout. Please try again.");
      setLoading(false);
    }
  };

  if (!formValues) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          No job posting data found. Please try posting your job again.
        </Alert>
      </Container>
    );
  }

  if (message) {
    return (
      <Container className="py-5">
        <Alert variant={error ? "danger" : "success"}>{message}</Alert>
        <div className="text-center mt-4">
          <a href="/" className="btn btn-primary">Return to Home</a>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Checkout Summary</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{formValues.positionName}</h5>
          <h6 className="card-subtitle mb-3 text-muted">{formValues.companyName}</h6>
          
          <div className="mb-3">
            <strong>Package Details:</strong>
            <ul className="list-unstyled mt-2">
              <li>Basic Job Posting: $150</li>
              {formValues.support && <li>24-hour Support: $79</li>}
              {formValues.pinPost24hr && <li>24-hour Pin: $99</li>}
              {formValues.pinPost1wk && <li>1-week Pin: $199</li>}
              {formValues.pinPost1mth && <li>1-month Pin: $349</li>}
            </ul>
          </div>
          
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Total: ${formValues.totalCost}</h4>
            <button 
              className="btn btn-primary"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </div>

      {error && <Alert variant="danger">{error}</Alert>}
    </Container>
  );
}
