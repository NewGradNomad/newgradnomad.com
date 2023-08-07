import "../style/HeroSection.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function HeroSection() {
  return (
    <>
      <Container fluid className="text-center hero-container">
        <h1 className="fs-1 text-center">Find Remote New Grad Jobs</h1>
        <p className="fs-4 lead text-center">
          The best place for new graduates & entry-level talent to find remote
          work.
        </p>
        <Button
          className=" btn btn-lg mx-1 mb-3"
          variant="light"
          href="/PostAJob"
        >
          Post a Job
        </Button>
        {/* <Button
          className=" btn btn-lg mx-1 mb-3"
          variant="light"
          href="/NewGradPrograms"
        >
          New Grad Programs
        </Button> */}
      </Container>
    </>
  );
}
export default HeroSection;
