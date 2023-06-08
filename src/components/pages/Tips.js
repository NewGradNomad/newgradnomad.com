import React from "react";
import "../../style/About.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TipsComponent from "./TipPages/Tip_Software_Engineering";

const ButtonResults = () => {
    const [results, setResults] = useState('');
  
    const handleButtonClick = (buttonText) => {
      // Perform some logic or API call to get the results based on the button clicked
      // For this example, we'll simply set the button text as the result
      setResults(buttonText);
    };
  
    return (
      <div>
        <Container className="text-center mt-4">
            <h1>Tips for New Grad Nomads</h1>
            <p>Choose a tip category.</p>
        </Container>

        <Container className="text-center">
            <Button className="mx-2 mb-3" variant="secondary" onClick={() => handleButtonClick(<TipsComponent/>)}>Software Engineering</Button>
            <Button className="mx-2 mb-3" variant="secondary" onClick={() => handleButtonClick('Button 2')}>Button 2</Button>
            <Button className="mx-2 mb-3" variant="secondary" onClick={() => handleButtonClick('Button 3')}>Button 3</Button>

            <div>{results}</div>
        </Container>

        
      </div>
    );

    

}

  export default ButtonResults;