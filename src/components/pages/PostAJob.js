import "../../style/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/PostAJob.css";

function handleFormData(event) {
  event.preventDefault(); //stops page from reloading

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
                <Form.Text
                  hidden={this.state.companyName}
                  className="form-text"
                  style={{ color: "red" }}
                >
                  &ensp;* Required: Please fill out.
                </Form.Text>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Company Name"
                name="companyName"
                onChange={this.handleChange}
                value={this.state.companyName}
              />
              <Container>
                <Form.Text className="form-text">
                  - Your company's brand name without business entities
                </Form.Text>
              </Container>
            </Form.Group>

            <Form.Group className="mb-2" controlId="positionName">
              <Form.Label>
                <b>Position</b>
              </Form.Label>
              <Form.Text
                hidden={this.state.positionName && this.state.positionType}
                className="form-text"
                style={{ color: "red" }}
              >
                &ensp;* Required: Please fill out name and type.
              </Form.Text>
              <Form.Control
                required
                type="text"
                placeholder="Enter Position Name"
                name="positionName"
                onChange={this.handleChange}
                value={this.state.positionName}
              />
              <Container>
                <Form.Text className="form-text">
                  - Write terms like "Associate Software Engineer" or "Social
                  Media Manager" or "Business Analyst"
                </Form.Text>
              </Container>
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
              <Container>
                <Form.Text className="form-text">
                  - Specify full-time, part-time, etc...
                </Form.Text>
              </Container>
            </Form.Group>

            <Form.Group className="mb-3" controlId="primaryTag">
              <Form.Label className="">
                <b>Primary Tag</b>
              </Form.Label>
              <Form.Text
                hidden={this.state.primaryTag}
                className="form-text"
                style={{ color: "red" }}
              >
                &ensp;* Required: Please fill out.
              </Form.Text>
              <Form.Control
                required
                type="text"
                placeholder="Enter Primary Tag"
                name="primaryTag"
                onChange={this.handleChange}
                value={this.state.primaryTag}
              />
              <Container>
                <Form.Text className="form-text">
                  - Main function of specified job
                </Form.Text>
              </Container>
            </Form.Group>

            <Form.Group className="mb-3" controlId="keywords">
              <Form.Label className="">
                <b>Keywords</b>
              </Form.Label>
              <Form.Text
                hidden={this.state.keywords}
                className="form-text"
                style={{ color: "red" }}
              >
                &ensp;* Required: Please fill out.
              </Form.Text>
              <Form.Control
                required
                type="text"
                placeholder="Enter Keywords"
                name="keywords"
                onChange={this.handleChange}
                value={this.state.keywords}
              />
              <Container>
                <Form.Text className="form-text">
                  - Main function of specified job
                </Form.Text>
              </Container>
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

            <Form.Text
              hidden={this.state.appURL || this.state.appEmail}
              className="form-text"
              style={{ color: "red" }}
            >
              &ensp;* Required: Please choose either email or URL.
            </Form.Text>

            <Form.Group className="mb-3" controlId="appURL">
              <Form.Label className="">
                <b>Application URL</b>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="https://"
                name="appURL"
                disabled={this.state.appEmail}
                onChange={this.handleChange}
                value={this.state.appURL}
              />
              <Container>
                <Form.Text className="form-text">
                  - This is the job link applicants will be forwarded to in
                  order to apply top your job
                </Form.Text>
              </Container>
            </Form.Group>

            <Form.Group className="mb-3" controlId="appEmail">
              <Form.Label className="">
                <b>Gateway Email Address</b>
              </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                name="appEmail"
                disabled={this.state.appURL}
                //pattern="[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+.)[A-Za-z]{2,4}$"
                onChange={this.handleChange}
                value={this.state.appEmail}
              />
              <Form.Text
                hidden={
                  RegExp(
                    "[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+.)[A-Za-z]{2,4}$"
                  ).test(this.state.appEmail) ||
                  this.state.appURL ||
                  !this.state.appEmail
                }
                className="form-text"
                style={{ color: "red" }}
              >
                &ensp;Please provide a valid email.<br></br>
              </Form.Text>
              <Container>
                <Form.Text className="form-text">
                  - Applicant is routed to this email if no application url is
                  provided!
                </Form.Text>
              </Container>
            </Form.Group>

            <Form.Label className="">
              <b>Job Description</b>
            </Form.Label>
            <Form.Text
              hidden={this.state.jobDesc}
              className="form-text"
              style={{ color: "red" }}
            >
              &ensp;* Required: Please fill out.
            </Form.Text>
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
                !(
                  (this.state.appURL && !this.state.appEmail) ||
                  (!this.state.appURL && this.state.appEmail)
                ) ||
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
