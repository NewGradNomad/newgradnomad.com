import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "../style/JobSearch.css";

const maxKeywords = 4;
const categories = [
  { value: "Software Development", label: "Software Development" },
  { value: "Customer Support", label: "Customer Support" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT", label: "IT" },
  { value: "Writing", label: "Writing" },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Design", label: "Design" },
  { value: "Recruiter", label: "Recruiter" },
];

export default class JobSearch extends Component {
  handleSelect = (value, action) => {
    if (value.length <= maxKeywords || action.name !== "keywords") {
      this.setState({
        [action.name]: value,
      });
    }
    //console.log(value.length);
  };
  render() {
    return (
      <>
        <Form>
          <Form.Label className="text-center mt-4" style={{width: "100%"}}>
            <h4>Search Remote Jobs</h4>
          </Form.Label>
          <Row className="d-flex align-items-center justify-content-center mx-2">
            <Col md={4} sm={12} lg={2}>
              <Select
                name="positionType"
                value={this.positionType}
                onChange={this.handleSelect}
                options={categories}
                placeholder={"Categories"}
                className="mt-2"
                style={{ maxWidth: "300px" }}
              />
            </Col>
            <Col md={2} sm={12} lg={1}>
              <Button className="mt-2 button" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}
