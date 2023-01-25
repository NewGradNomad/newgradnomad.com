import React from 'react'
import Container from 'react-bootstrap/Container';
import Programs from './Programs';
import JSON_data from './programs_data.json';
import { useState } from "react";
import { FormControl } from 'react-bootstrap';

// Programs_Render() fetches Programs.js's table to then be rendered here via search
function Programs_Render() {
    const [query, setQuery] = useState("");

    //console.log(JSON_data.filter(item=>item.company_name.toLowerCase().includes("at")));
    const keys = ["company_name", "program_name", "industry", "remote"]

    // search functionality that looks for keywords related to the above keys
    const search = (data) => {
        return data.filter(
          (item) => 
            keys.some(key=>item[key].toLowerCase().includes(query.toLowerCase().trim()))
        );
    };

    return (
      <>
      <Container>
        <div className='mt-4 text-center'>
          <h1>New Graduate Programs</h1>
          <p>Lot's of companies have programs completely dedicated to new graduates. You can search for the programs below but do note that not all these programs are remote. </p>
          <p><a href="#form" style={{color:'#ed6f26'}}> Want your program featured on this page? Click here. </a></p>
        </div>
      </Container>
      <Container className=''>   
          <FormControl 
            type='text' 
            placeholder='Search' 
            className='mt-3 form-control sm'
            onChange={(e) => setQuery(e.target.value)} 
          />
        <Programs data={search(JSON_data)}/>
      </Container>
      </>
    );
}
  
export default Programs_Render;
