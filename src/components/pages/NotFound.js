import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function NotFound() {
  return (
    <Container className="text-center">
      <h1 className="mt-3">Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Button style={{'background-color':"#ed6f26", border:"none"}} className="mx-2" href="/">Home</Button>
      <Button style={{'background-color':"#ed6f26", border:"none"}} className="mx-2" href="/PostAJob">Post a Job</Button>
      <Button style={{'background-color':"#ed6f26", border:"none"}} className="mx-2" href="/about">About</Button>
    </Container>
  );
}
