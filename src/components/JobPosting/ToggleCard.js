import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import './JobPostings.css';


function ToggleCard() {
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
                <Button className="button mx-2"><strong>Apply</strong></Button>
                {/* possibly get rid of button below */}
            {/* <Button onClick={toggleText} className="button-green">
              <strong>{showText ? "Hide Desc." : "View Desc."}</strong>
            </Button> */}
              </Col>
            </Row>

            <div className="onClickWrapper" onClick={toggleText}  id='cardy'>
              <Card.Subtitle className="text-muted">
                Company Name
              </Card.Subtitle>

              {showText && (
                <Card.Text className="mt-2">This text will toggle on and off</Card.Text>
              )}

            <div className="mt-3">
              <Card.Link>
                <Button className="button">
                  <strong>Category</strong>
                </Button>
              </Card.Link>
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

            
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ToggleCard;
