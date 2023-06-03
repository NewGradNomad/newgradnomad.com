import { useLocation } from "react-router-dom";
import HeroSection from "../HeroSection";
import "../../style/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Checkout() {
  const formValues = useLocation();

  const processFormData = (event) => {
    event.preventDefault(); //stops page from reloading
    const formDataAsJsonStrings = JSON.stringify(formValues, null, 3);
    console.log(formDataAsJsonStrings);
  };

  return (
    <>
      <Container className="gray-form mt-4 px-3">
        <Form noValidate onSubmit={processFormData}>
          <Form.Label className="section-title mt-3">
            <b>Checkout</b>
          </Form.Label>

          <Form.Group className="mb-3" controlId="cardNumber">
            <Form.Label className="">
              <b>Card Number</b>
            </Form.Label>
            <Form.Control
              required
              autoFocus
              type="text"
              placeholder="Enter card number"
              name="cardNumber"
            />
          </Form.Group>

          <Button
            className="mt-4 mb-4 checkout-Button form-control"
            variant="primary"
            type="submit"
          >
            <b>Place Order</b>
          </Button>
        </Form>
      </Container>
    </>
  );
}
