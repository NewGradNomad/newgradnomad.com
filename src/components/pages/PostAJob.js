import "../../style/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/PostAJob.css";

function handleFormData(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());
  const formDataAsJsonStrings = JSON.stringify(formValues, null, 3);
  console.log(formDataAsJsonStrings);
}

export default class PostAJob extends Component {
  state = {
    companyName: "",
    positionName: "",
    positionType: "",
    primaryTag: "",
    keywords: "",
    appURL: "",
    appEmail: "",
    jobDesc: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Container className="gray-form mt-4 px-3">
          <form noValidate onSubmit={handleFormData}>
            <Form.Label className="section-title mt-3">
              <b>Getting Started</b>
            </Form.Label>

            <Form.Group className="mb-3" controlId="companyName">
              <Form.Label className="">
                <b>Company Name</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Company Name"
                name="companyName"
                onChange={this.handleChange}
                value={this.state.companyName}
              />
              <Form.Text className="form-text">
                * Your company's brand name without business entities
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-2" controlId="positionName">
              <Form.Label>
                <b>Position</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Position Name"
                name="positionName"
                onChange={this.handleChange}
                value={this.state.positionName}
              />

              <Form.Text className="form-text">
                * Write terms like "Associate Software Engineer" or "Social
                Media Manager" or "Business Analyst"
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="positionType">
              <Form.Control
                required
                type="text"
                placeholder="Enter Position Type"
                name="positionType"
                onChange={this.handleChange}
                value={this.state.positionType}
              />
              <Form.Text className="form-text">
                * Specify full-time, part-time, etc...
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="primaryTag">
              <Form.Label className="">
                <b>Primary Tag</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Primary Tag"
                name="primaryTag"
                onChange={this.handleChange}
                value={this.state.primaryTag}
              />
              <Form.Text className="form-text">
                * Main function of specified job
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="keywords">
              <Form.Label className="">
                <b>Keywords</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Keywords"
                name="keywords"
                onChange={this.handleChange}
                value={this.state.keywords}
              />
              <Form.Text className="form-text">
                * Main function of specified job
              </Form.Text>
            </Form.Group>

            <Form.Label className="section-title">
              <b>Job Post Perks</b>
            </Form.Label>

            <Form.Group className="mb-3" controlId="basicPosting">
              <Form.Check
                required
                checked
                readOnly
                type="checkbox"
                label="Basic Job Posting ($150)"
                name="basicPosting"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="support">
              <Form.Check
                type="checkbox"
                label="Receive 24-hour support for your job posting (+$79)"
                name="support"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="highlightPost">
              <Form.Check
                type="checkbox"
                label="Highlight your job post in orange 🍊 to gain more views (+$39)"
                name="highlightPost"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pinPost24hr">
              <Form.Check
                type="checkbox"
                label="Pin post on front page for 24 hours (+$99)"
                name="pinPost24hr"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pinPost1wk">
              <Form.Check
                type="checkbox"
                label="Pin post on front page for 1 week (+$199)"
                name="pinPost1wk"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="pinPost1mnth">
              <Form.Check
                type="checkbox"
                label="Pin post on front page for 1 month (+$349)"
                name="pinPost1mnth"
              />
            </Form.Group>

            <Form.Label className="section-title">
              <b>Job Details</b>
            </Form.Label>

            <Form.Group className="mb-3" controlId="appURL">
              <Form.Label className="">
                <b>Application URL</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="https://"
                name="appURL"
                onChange={this.handleChange}
                value={this.state.appURL}
              />
              <Form.Text className="form-text">
                * This is the job link applicants will be forwarded to in order
                to apply top your job
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="appEmail">
              <Form.Label className="">
                <b>Gateway Email Address</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="..."
                name="appEmail"
                onChange={this.handleChange}
                value={this.state.appEmail}
              />
              <Form.Text className="form-text">
                * Applicant is routed to this email if no application url is
                provided!
              </Form.Text>
            </Form.Group>

            <Form.Label className="">
              <b>Job Description</b>
            </Form.Label>
            <Form.Group controlId="jobDesc">
              <Form.Control
                as="textarea"
                placeholder=""
                name="jobDesc"
                style={{ height: "150px" }}
                onChange={this.handleChange}
                value={this.state.jobDesc}
              />
            </Form.Group>

            <Button
              className="mt-4 mb-4 checkout-Button form-control"
              variant="primary"
              type="submit"
              disabled={
                !this.state.companyName ||
                !this.state.positionName ||
                !this.state.positionType ||
                !this.state.primaryTag ||
                !this.state.keywords ||
                (!this.state.appURL && !this.state.appEmail) ||
                !this.state.jobDesc
              }
            >
              <b>Checkout Job Posting</b>
            </Button>
          </form>
        </Container>
      </>
    );
  }
}