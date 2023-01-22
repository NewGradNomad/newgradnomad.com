import "../style/HeroSection.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <h1 className="title">newgradnomad.com</h1>
        <p className="slogan">
          The best place for new graduates & entry-level talent to find remote
          work.
        </p>
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
