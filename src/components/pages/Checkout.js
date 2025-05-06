import { useLocation, useNavigate } from "react-router-dom";
import "../../style/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const formValues = location.state;

  const processFormData = async (event) => {
    event.preventDefault();

    try {
      // Here you would normally process the payment with Stripe or another payment processor

      // After successful payment, update the job posting status in Firestore
      const db = getFirestore();
      const jobRef = doc(db, "jobs", formValues.jobId);
      await updateDoc(jobRef, {
        status: "active",
        paidAt: new Date().toISOString(),
      });

      // Redirect to success page or home
      navigate("/");
    } catch (error) {
      console.error("Error processing payment:", error);
      setError("Failed to process payment. Please try again.");
    }
  };

  if (!formValues) {
    return <div>No job posting data found</div>;
  }

  return (
    <>
      <Container className="gray-form mt-4 px-3">
        <Form noValidate onSubmit={processFormData}>
          <Form.Label className="section-title mt-3">
            <b>Checkout</b>
          </Form.Label>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="mb-3">
            <h5>Order Summary</h5>
            <p>Company: {formValues.companyName}</p>
            <p>Position: {formValues.positionName}</p>
            <p>Total: ${formValues.totalCost}</p>
          </div>

          <Form.Group className="mb-3" controlId="cardNumber">
            <Form.Label className="">
              <b>Card Number</b>
            </Form.Label>
            <Form.Control
              required
              autoFocus
              type="text"
              placeholder="Enter card number"
              name="cardNumber"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="expiryDate">
            <Form.Label className="">
              <b>Expiry Date</b>
            </Form.Label>
            <Form.Control required type="text" placeholder="MM/YY" name="expiryDate" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cvv">
            <Form.Label className="">
              <b>CVV</b>
            </Form.Label>
            <Form.Control required type="text" placeholder="CVV" name="cvv" />
          </Form.Group>

          <Button
            className="mt-4 mb-4 checkout-Button form-control"
            variant="primary"
            type="submit">
            <b>Place Order - ${formValues.totalCost}</b>
          </Button>
        </Form>
      </Container>
    </>
  );
}
