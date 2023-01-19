import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="green-nav" collapseOnSelect variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">newgradnomad.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="post-job" href="#postJob">
              Post a Job
            </Nav.Link>
            <Nav.Link className="nav-links" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-links" href="#login">
              Log in
            </Nav.Link>
            <Nav.Link className="nav-links" href="#signup">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
