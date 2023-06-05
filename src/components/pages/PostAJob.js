import "../../style/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/PostAJob.css";
import Select from "react-select";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";

const standardListingPrice = 150;
const supportPrice = 79;
const highlightPostPrice = 39;
const pinPost24hrPrice = 99;
const pinPost1wkPrice = 199;
const pinPost1mthPrice = 349;

const maxKeywords = 2;
const positionTypeOptions = [
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Contract", label: "Contract" },
];

const primaryTagOptions = [
  { value: "Software Development", label: "Software Development" },
  { value: "Customer Support", label: "Customer Support" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT", label: "IT" },
  { value: "Writing", label: "Writing" },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Design", label: "Design" },
  { value: "Recruiter", label: "Recruiter" },
];

const keywordOptions = [
  { value: "Developer", label: "Developer" },
  { value: "Engineer", label: "Engineer" },
  { value: "Full Stack", label: "Full Stack" },
  { value: "Finance", label: "Finance" },
  { value: "Accounting", label: "Accounting" },
  { value: "UX/UI", label: "UX/UI" },
  { value: "Technical", label: "Technical" },
  { value: "Non Technical", label: "Non Technical" },
  { value: "Manager", label: "Manager" },
  { value: "Crypto", label: "Crpyto" },
  { value: "Testing", label: "Testing" },
];

function PostAJob() {
  const [state, setState] = useState({
    companyName: "",
    positionName: "",
    positionType: "",
    primaryTag: "",
    keywords: "",
    appURL: "",
    appEmail: "",
    jobDesc: "",
    support: "off",
    highlightPost: "off",
    pinPost24hr: "off",
    pinPost1wk: "off",
    pinPost1mth: "off",
    totalCost: standardListingPrice,
  });

  const handleSelect = (value, action) => {
    if (value.length <= maxKeywords || action.name !== "keywords") {
      setState((prevState) => ({
        ...prevState,
        [action.name]: value,
      }));
    }
    //console.log(value.length);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckBox = (e) => {
    const { value, name } = e.target;
    let newCost = 0.0;
    if (value === "on") {
      switch (true) {
        case name === "support":
          newCost -= supportPrice;
          break;
        case name === "highlightPost":
          newCost -= highlightPostPrice;
          break;
        case name === "pinPost24hr":
          newCost -= pinPost24hrPrice;
          break;
        case name === "pinPost1wk":
          newCost -= pinPost1wkPrice;
          break;
        case name === "pinPost1mth":
          newCost -= pinPost1mthPrice;
          break;
        default:
          break;
      }
      setState((prevState) => ({
        ...prevState,
        [name]: "off",
      }));
    } else {
      switch (true) {
        case name === "support":
          newCost += supportPrice;
          break;
        case name === "highlightPost":
          newCost += highlightPostPrice;
          break;
        case name === "pinPost24hr":
          newCost += pinPost24hrPrice;
          break;
        case name === "pinPost1wk":
          newCost += pinPost1wkPrice;
          break;
        case name === "pinPost1mth":
          newCost += pinPost1mthPrice;
          break;
        default:
          break;
      }
      setState((prevState) => ({
        ...prevState,
        [name]: "on",
      }));
    }
    //computePrice();
    setState((prevState) => ({
      ...prevState,
      totalCost: state.totalCost + newCost,
    }));
  };

  // compute the total price of the job posting
  const computePrice = () => {
    let sum = standardListingPrice;
    //console.log(state.support);
    if (state.support === "on") {
      sum += supportPrice;
    }
    if (state.highlightPost === "on") {
      sum += highlightPostPrice;
    }
    if (state.pinPost24hr === "on") {
      sum += pinPost24hrPrice;
    }
    if (state.pinPost1wk === "on") {
      sum += pinPost1wkPrice;
    }
    if (state.pinPost1mth === "on") {
      sum += pinPost1mthPrice;
    }
    setState((prevState) => ({
      ...prevState,
      totalCost: sum,
    }));
  };

  const navigate = useNavigate();
  const handleFormData = (event) => {
    event.preventDefault(); //stops page from reloading


  render() {
    return (
      <>

      <Container className="mt-4 px-3 text-center">
        <h2>Hire New Grads Naturally.</h2>
        <p className="lead"><b> We aggregates jobs listings from all around the web, but posting your job directly to our site gives top priority to your job posting.</b> </p>
      </Container>

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
                autoFocus
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

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    formValues.keywords = formData.getAll("keywords");
    //const formDataAsJsonStrings = JSON.stringify(formValues, null, 3);
    //console.log(formDataAsJsonStrings);
    navigate("/Checkout", { state: formValues });
  };


  return (
    <>
      <Container className="gray-form mt-4 px-3">
        <Form noValidate onSubmit={handleFormData}>
          <Form.Label className="section-title mt-3">
            <b>Getting Started</b>
          </Form.Label>

          <Form.Group className="mb-3" controlId="companyName">
            <Form.Label className="">
              <b>Company Name</b>
              <Form.Text
                hidden={state.companyName}
                className="form-text"
                style={{ color: "red" }}
              >
                &ensp;* Required: Please fill out.
              </Form.Text>
            </Form.Label>
            <Form.Control
              required
              autoFocus
              type="text"
              placeholder="Enter Company Name"
              name="companyName"
              onChange={handleChange}
              value={state.companyName}
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
              hidden={state.positionName && state.positionType}
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
              onChange={handleChange}
              value={state.positionName}
            />
            <Container>
              <Form.Text className="form-text">
                - Write terms like "Associate Software Engineer" or "Social
                Media Manager" or "Business Analyst"
              </Form.Text>
            </Container>
          </Form.Group>
          <Form.Group className="mb-3" controlId="positionType">
            <Select
              name="positionType"
              value={state.positionType}
              onChange={handleSelect}
              options={positionTypeOptions}
              placeholder={"Position Type..."}
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
              hidden={state.primaryTag}
              className="form-text"
              style={{ color: "red" }}
            >
              &ensp;* Required: Please fill out.
            </Form.Text>
            <Select
              name="primaryTag"
              value={state.primaryTag}
              onChange={handleSelect}
              options={primaryTagOptions}
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
              hidden={state.keywords}
              className="form-text"
              style={{ color: "red" }}
            >
              &ensp;* Required: Max of {maxKeywords}.
            </Form.Text>
            <Form.Text
              hidden={!(state.keywords.length === maxKeywords)}
              className="form-text"
              style={{ color: "green" }}
            >
              &ensp;* You reached the {maxKeywords} keyword limit.
            </Form.Text>
            <Select
              isMulti
              name="keywords"
              value={state.keywords}
              onChange={handleSelect}
              options={keywordOptions}
            />
            <Container>
              <Form.Text className="form-text">
                - Add keywords that pertain to the jobs purpose
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
              label={"Basic Job Posting ($" + standardListingPrice + ")"}
              name="basicPosting"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="support">
            <Form.Check
              type="checkbox"
              label={
                "Receive 24-hour support for your job posting (+$" +
                supportPrice +
                ")"
              }
              name="support"
              onChange={handleCheckBox}
              value={state.support}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="highlightPost">
            <Form.Check
              type="checkbox"
              label={
                "Highlight your job post in orange 🍊 to gain more views (+$" +
                highlightPostPrice +
                ")"
              }
              name="highlightPost"
              onChange={handleCheckBox}
              value={state.highlightPost}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pinPost24hr">
            <Form.Check
              type="checkbox"
              label={
                "Pin post on front page for 24 hours (+$" +
                pinPost24hrPrice +
                ")"
              }
              name="pinPost24hr"
              onChange={handleCheckBox}
              value={state.pinPost24hr}
              disabled={state.pinPost1wk === "on" || state.pinPost1mth === "on"}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pinPost1wk">
            <Form.Check
              type="checkbox"
              label={
                "Pin post on front page for 1 week (+$" + pinPost1wkPrice + ")"
              }
              name="pinPost1wk"
              onChange={handleCheckBox}
              value={state.pinPost1wk}
              disabled={
                state.pinPost1mth === "on" || state.pinPost24hr === "on"
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pinPost1mth">
            <Form.Check
              type="checkbox"
              label={
                "Pin post on front page for 1 month (+$" +
                pinPost1mthPrice +
                ")"
              }
              name="pinPost1mth"
              onChange={handleCheckBox}
              value={state.pinPost1mth}
              disabled={state.pinPost1wk === "on" || state.pinPost24hr === "on"}
            />
          </Form.Group>

          <Form.Label className="section-title">
            <b>Job Details</b>
          </Form.Label>

          <Form.Text
            hidden={state.appURL || state.appEmail}
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
              disabled={state.appEmail}
              onChange={handleChange}
              value={state.appURL}
            />
            <Container>
              <Form.Text className="form-text">
                - This is the job link applicants will be forwarded to in order
                to apply top your job
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
              disabled={state.appURL}
              //eslint-disable-next-line
              //pattern="[A-Za-z0-9._%+-]+@([A-Za-z0-9.-]+.)[A-Za-z]{2,4}$"
              onChange={handleChange}
              value={state.appEmail}
            />
            <Form.Text
              hidden={
                //eslint-disable-next-line
                RegExp(
                  //eslint-disable-next-line
                  /^\w+([\.-]?(?=(\w+))\1)*@\w+([\.-]?(?=(\w+))\1)*(\.\w{2,3})+$/
                ).test(state.appEmail) ||
                state.appURL ||
                !state.appEmail
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
            hidden={state.jobDesc}
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
              onChange={handleChange}
              value={state.jobDesc}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="totalCost">
            <Form.Check
              required
              checked
              hidden
              readOnly
              name="totalCost"
              value={state.totalCost}
            />
          </Form.Group>

          <Button
            className="mt-4 mb-4 checkout-Button form-control"
            variant="primary"
            type="submit"
            disabled={
              !state.companyName ||
              !state.positionName ||
              !state.positionType ||
              !state.primaryTag ||
              !state.keywords ||
              !(
                (state.appURL && !state.appEmail) ||
                (!state.appURL &&
                  state.appEmail &&
                  RegExp(
                    //eslint-disable-next-line
                    /^\w+([\.-]?(?=(\w+))\1)*@\w+([\.-]?(?=(\w+))\1)*(\.\w{2,3})+$/
                  ).test(state.appEmail))
              ) ||
              !state.jobDesc
            }
          >
            {/* append price to end of checkout button */}
            <b>Checkout Job Posting ${state.totalCost}</b>
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default PostAJob;
