import React from "react";
import "../../style/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
export default function About() {
  return (
    <>
      <Container>
        <h1 className="text-center mt-4">Our Mission</h1>
        <p className="p-font text-center mt-2 mr-4 ml-4" id='p-font'>
          NewGradNomad’s mission is to connect recent college graduates with
          meaningful remote work opportunities that allow them to utilize their
          skills and knowledge, while also providing them with the flexibility
          and independence of remote work. We strive to create a diverse and
          inclusive community of young professionals who can thrive in a remote
          work environment, and to help bridge the gap between education and the
          professional world for the next generation of workers.
        </p>
        <h1 className="text-center mt-4">Why?</h1>
        <p className=" p-font text-center mt-2 mr-4 ml-4">
          The pandemic has led to a surge in remote work across all levels of talent, from entry-level to senior-level. 
          However, job board platforms are much more frequently saturated with remote opportunities for more seasoned professionals with extensive experience.
          NewGradNomad aims to simplify the process of finding remote jobs for recent graduates, by providing a plethora of catered remote jobs of all types. 
          All while cultivating a community of remote-minded young professionals. 
        </p>
      </Container>
    </>
  );
}
