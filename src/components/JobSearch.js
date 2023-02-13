import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import '../style/JobSearch.css';

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

export default class JobSearch extends Component{

  handleSelect = (value, action) => {
    if (value.length <= maxKeywords || action.name !== "keywords") {
      this.setState({
        [action.name]: value,
      });
    }
    //console.log(value.length);
  };
  render(){
    return (
      <>
        <Container className='search p-4'>
        <Form>
        <Form.Label className='text-center'>
            <h4>Search Remote Jobs</h4>
          </Form.Label>
        <Row>
          <Col lg={9}>
          <div style={{width: '300px'}}>
          <Select
                  name="positionType"
                  value={this.positionType}
                  onChange={this.handleSelect}
                  options={categories}
                  placeholder={"Categories"}
                  menuPlacement="auto"
                  menuPosition="fixed"
                  className='mt-2'
                />
          </div>
          </Col>
              <Col lg={2} >
                <Button className='button mt-2'><strong>Submit</strong></Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}