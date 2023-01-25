import "../style/HeroSection.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function HeroSection() {
  return (
    <>
      <Container fluid className="text-center hero-container">
        <h1 className="fs-1 text-center">newgradnomad.com</h1>
        <p className="fs-4 text-center">
          The best place for new graduates & entry-level talent to find remote
          work.
        </p>
        <Button className=" btn btn-lg mx-1 mb-3" variant="light">
          Post a Job
        </Button>
        <Button className=" btn btn-lg mx-1 mb-3" variant="light" href="/Programs_Render">
          Programs
        </Button>
      </Container>
    </>
  );
}
export default HeroSection;
