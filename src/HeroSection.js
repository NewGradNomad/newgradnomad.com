import "./HeroSection.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <h1>newgradnomad.com</h1>
        <p>Work without limits (and Borders).</p>
        <Container className="text-center">
          <Button className=" btn btn-lg mx-2" variant="light">
            Post a Job
          </Button>
          <Button className=" btn btn-lg" variant="light" href="./About">
            NGN Info
          </Button>
        </Container>
      </div>
    </>
  );
}
export default HeroSection;
