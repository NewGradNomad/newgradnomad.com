import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-icons/bs";
import './JobPostings.css';


function PinnedPosting() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <>
      <Container>
        <Card className="mt-4">
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>Job Posting Title</Card.Title>
              </Col>
              <Col xs="auto">
                <Button className="button mx-2" href="https://github.com/NewGradNomad" target="_blank"><strong>Apply</strong></Button>
                {/* possibly get rid of button below */}
            {/* <Button onClick={toggleText} className="button-green">
              <strong>{showText ? "Hide Desc." : "View Desc."}</strong>
            </Button> */}
              </Col>
              <Col xs="auto">
                <p style={{fontSize:"20px"}}>📌</p>
              </Col>
            </Row>

            <div className="onClickWrapper">
              <Card.Subtitle className="text-muted">
                Company Name
              </Card.Subtitle>

              <Card.Text className="mt-3" onClick={toggleText} id='cardy' style={{fontStyle:'italic', fontWeight: 'bold', textDecorationLine: 'underline', color:'#449175'}}>
              <BsFillCaretDownFill/>{showText ? "Hide Job Description" : "View Job Description"}
              </Card.Text>

              {showText && (
                <Card.Text className="mt-2">This text will toggle on and off</Card.Text>
              )}

<div className="mt-3">
              <Card.Link>
                <Button className="button">
                  <strong>Category</strong>
                </Button>
              </Card.Link>
            
          <div className="tag-wrap" >
              <Card.Link>
                <Button variant="secondary" className="button-tag" size="sm">
                  Tag 1
                </Button>
              </Card.Link>
              <Card.Link>
                <Button variant="secondary" className="button-tag" size="sm">
                  Tag 2
                </Button>
              </Card.Link>
              <Card.Link>
                <Button variant="secondary" className="button-tag" size="sm">
                  Tag 3
                </Button>
              </Card.Link>
              </div>
            </div>

            </div>

            
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default PinnedPosting;
