import React from "react";
import Container from "react-bootstrap/Container";
import Programs from "./Programs";
import JSON_data from "./programs_data.json";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import NewGraduatePrograms from "../../style/NewGraduatePrograms.css"

// Programs_Render() fetches Programs.js's table to then be rendered here via search
function Programs_Render() {
  const [query, setQuery] = useState("");

  //console.log(JSON_data.filter(item=>item.company_name.toLowerCase().includes("at")));
  const keys = ["company_name", "program_name", "industry"];

  // search functionality that looks for keywords related to the above keys
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) =>
        item[key].toLowerCase().includes(query.toLowerCase().trim())
      )
    );
  };

  // modal
  const [show, setShow] = useState(false);

  const newsletterClose = () => setShow(false);
  const newsletterShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const newsletterSubmit = (event) => {
    const inpObj = event.currentTarget;
    if (inpObj.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (inpObj.checkValidity() === true) {
      setShow(false);
    }

    setValidated(true);
  };

  return (
    <>
      <Container>
        <div className="mt-4 text-center">
          <h1>New Graduate Programs</h1>
          <p>
            Lot's of companies have programs completely dedicated to the development of new
            graduates. You can search for the programs below but do note that
            not all these programs are remote.{" "}
          </p>
          <p>
            <a href="#form" style={{ color: "#ed6f26" }} onClick={newsletterShow}>
              {" "}
              Want your program featured on this page? Click here.{" "}
            </a>
          </p>
        </div>
      </Container>
      <Container className="">
        <FormControl
          type="text"
          placeholder="Search"
          className="mt-3 form-control sm mb-3"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Container className="text-center">
          <Button value={"Internet & Software"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Internet & Software
          </Button>
          <Button value={"Finance"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Finance
          </Button>
          <Button value={"Technology & Engineering"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Technology & Engineering
          </Button>
          <Button value={"Healthcare"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Healthcare
          </Button>
          <Button value={"Retail"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Retail
          </Button>
          <Button value={"Media"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Media
          </Button>
          <Button value={"Insurance"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Insurance
          </Button>
          <Button value={"Aerospace"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Aerospace
          </Button>
          <Button value={""} className="button mx-2 mb-3" onClick={(e) => setQuery(e.target.value)}>
            Reset
          </Button>
        </Container>

        <Programs data={search(JSON_data)} />
      </Container>

      <Modal show={show} onHide={newsletterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Highlight your program!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your program will be highlight on the top of this page for users to see first no matter what.
          </p>
          <p id="error"></p>
          <Form
            noValidate
            validated={validated}
            onSubmit={newsletterSubmit}
            action="/#emailList"
          >
            <Form.Group
              className="mb-3"
              controlId="newsletterForm.ControlInput"
            >
              <Form.Label>Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </InputGroup>
              
              <Form.Label className="mt-2">Company Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="company_name"
                  placeholder="Company"
                  pattern=""
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name.
                </Form.Control.Feedback>
              </InputGroup>

              <Form.Label className="mt-2">Program Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="program_name"
                  placeholder="Leadership Development Program"
                  pattern=""
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid program name.
                </Form.Control.Feedback>
              </InputGroup>

              <Form.Label className="mt-2">Payment information</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="name_on_card"
                  placeholder="Name on card"
                  pattern=""
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </InputGroup>
              
              <InputGroup hasValidation className="mt-2">
                <Form.Control
                  required
                  type="card_number"
                  placeholder="Card Number"
                  pattern=""
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Card Number.
                </Form.Control.Feedback>
              </InputGroup>

              <InputGroup hasValidation className="mt-2">
                <Form.Control
                  required
                  type="exp"
                  placeholder="MM / YY"
                  pattern=""
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid expiration date in MM / YY.
                </Form.Control.Feedback>
              </InputGroup>

              <InputGroup hasValidation className="mt-2">
                <Form.Control
                  required
                  type="cvv"
                  placeholder="CVV"
                  pattern=""
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid card verification value.
                </Form.Control.Feedback>
              </InputGroup>
              
              <Modal.Footer>
                <Button variant="secondary" onClick={newsletterClose}>
                  Cancel
                </Button>
                <Button className="button" variant="secondary" type="submit" style={{ backgroundColor: "#ed6f26 !important", borderColor: "#ed6f26 !important"  }} >
                  Submit
                </Button>
              </Modal.Footer>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Programs_Render;
