import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-icons/bs";
import './JobPostings.css';

function JobPost({ job }) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  const getDaysSincePosted = () => {
    const postedDate = new Date(job.createdAt);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - postedDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? 'Today' : diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
  };

  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{job.positionName}</Card.Title>
            </Col>
            <Col xs="auto" className="d-flex align-items-center">
              <small className="text-muted me-3">{getDaysSincePosted()}</small>
              <Button
                className="button mx-2"
                href={job.appURL || `mailto:${job.appEmail}`}
                target="_blank">
                <strong>Apply</strong>
              </Button>
            </Col>
            {job.isPinned && (
              <Col xs="auto">
                <p style={{ fontSize: "20px" }}>📌</p>
              </Col>
            )}
          </Row>

          <div className="onClickWrapper">
            <Card.Subtitle className="text-muted">{job.companyName}</Card.Subtitle>

            <Card.Text
              className="mt-3"
              onClick={toggleText}
              id="cardy"
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                textDecorationLine: "underline",
                color: "#449175",
              }}>
              <BsFillCaretDownFill />
              {showText ? "Hide Job Description" : "View Job Description"}
            </Card.Text>

            {showText && <Card.Text className="mt-2">{job.jobDesc}</Card.Text>}

            <div className="mt-3">
              <Card.Link>
                <Button className="button">
                  <strong>{job.primaryTag}</strong>
                </Button>
              </Card.Link>

              <div className="tag-wrap">
                {job.keywords.map((keyword, index) => (
                  <Card.Link key={index}>
                    <Button variant="secondary" className="button-tag" size="sm">
                      {keyword}
                    </Button>
                  </Card.Link>
                ))}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default JobPost;