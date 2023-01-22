import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
export default function About() {
  return (
    <>
      <Container>
        <h1 className="text-center mt-4">Our Mission</h1>
        <p className="p-font text-center mt-2 mr-4 ml-4">
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
          Ever since the pandemic, remote work has been on the rise for
          entry-level, mid-level, and senior-level talent. However, job boards
          websites and mobile applications are most often flooded with remote
          opportunities for more experienced talent with multiple years of
          experience. The goal of NewGradNomad is to make it easier for recently
          graduated individuals to find remote jobs with a seamless application
          process. Remote work allows individuals to save time commuting and
          more money. Gen Z and young professionals joining the full-time
          workforce do not want to be shackled down by a company’s office.
          Travel and working on one's own time are much more valued than onsite
          productivity and NewGradNomad is going to help be the bridge in
          attaining that independent corporate remote experience.
        </p>
      </Container>
    </>
  );
}
