import React from "react";
import Container from "react-bootstrap/Container";
import Programs from "./Programs";
import JSON_data from "./programs_data.json";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import NewGraduatePrograms from "../../style/NewGraduatePrograms.css"

// Programs_Render() fetches Programs.js's table to then be rendered here via search
function Programs_Render() {
  const [query, setQuery] = useState("");

  //console.log(JSON_data.filter(item=>item.company_name.toLowerCase().includes("at")));
  const keys = ["company_name", "program_name", "industry"];

  // search functionality that looks for keywords related to the above keys
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) =>
        item[key].toLowerCase().includes(query.toLowerCase().trim())
      )
    );
  };

  return (
    <>
      <Container>
        <div className="mt-4 text-center">
          <h1>New Graduate Programs</h1>
          <p>
            Lot's of companies have programs completely dedicated to the development of new
            graduates. You can search for the programs below but do note that
            not all these programs are remote.{" "}
          </p>
          <p>
            <a href="#form" style={{ color: "#ed6f26" }}>
              {" "}
              Want your program featured on this page? Click here.{" "}
            </a>
          </p>
        </div>
      </Container>
      <Container className="">
        <FormControl
          type="text"
          placeholder="Search"
          className="mt-3 form-control sm mb-3"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Container className="text-center">
          <Button value={"Internet & Software"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Internet & Software
          </Button>
          <Button value={"Finance"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Finance
          </Button>
          <Button value={"Technology & Engineering"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Technology & Engineering
          </Button>
          <Button value={"Healthcare"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Healthcare
          </Button>
          <Button value={"Insurance"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Insurance
          </Button>
          <Button value={"Aerospace"} className="mx-2 mb-3" variant="secondary" onClick={(e) => setQuery(e.target.value)}>
            Aerospace
          </Button>
          <Button value={""} className="button mx-2 mb-3" onClick={(e) => setQuery(e.target.value)}>
            Reset
          </Button>
        </Container>

        <Programs data={search(JSON_data)} />
      </Container>
    </>
  );
}

export default Programs_Render;
