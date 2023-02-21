import "../style/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";

function NavBar() {
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
      <Navbar className="green-nav" collapseOnSelect variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">newgradnomad.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav flex-column align-items-end">
            <Nav className="ms-auto">
              <Nav.Link className="nav-links" href="/PostAJob">
                <Button className="button">
                  <strong>Post a Job</strong>
                </Button>
              </Nav.Link>
              <Nav.Link className="nav-links" href="/">
                <Button className="button-hide">
                  <strong>Home</strong>
                </Button>
              </Nav.Link>
              <Nav.Link className="nav-links" href="/About">
                <Button className="button-hide">
                  <strong>About</strong>
                </Button>
              </Nav.Link>

              <DropdownButton
                title={<strong>Community</strong>}
                variant="button-hide"
                className="button-hide nav-links mt-auto mb-auto"
              >
                <Dropdown.Item
                  target="_blank"
                  href="https://discord.gg/khfQcbtHw8"
                  className="nav-links"
                >
                  <Button className="button-hide">
                    <strong>Discord</strong>
                  </Button>
                </Dropdown.Item>
                {/* <Dropdown.Divider /> */}
                <Dropdown.Item
                  onClick={newsletterShow}
                  //className="nav-links"
                >
                  <Button className="button-hide">
                    <strong>Newsletter</strong>
                  </Button>
                </Dropdown.Item>
              </DropdownButton>
              {/* <NavDropdown
                className="nav-links"
                title="Community"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  target="_blank"
                  href="https://discord.gg/khfQcbtHw8"
                  className="nav-links"
                >
                  Discord
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="nav-links"
                  onClick={newsletterShow}
                >
                  Newsletter
                </NavDropdown.Item>
              </NavDropdown> */}

              {/* <Nav.Link
                className="nav-links"
                target="_blank"
                href="https://discord.gg/khfQcbtHw8"
              >
                <Button className="button-hide">
                  <strong>Discord</strong>
                </Button>
              </Nav.Link>
              <Nav.Link className="nav-links" onClick={newsletterShow}>
                <Button className="button-hide">
                  <strong>Newsletter</strong>
                </Button>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={newsletterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Newsletter Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Signing up for the newsletter will enable you to get notified via
            email when a new job listing is posted.
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
              <Modal.Footer>
                <Button variant="secondary" onClick={newsletterClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Sign up
                </Button>
              </Modal.Footer>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBar;
