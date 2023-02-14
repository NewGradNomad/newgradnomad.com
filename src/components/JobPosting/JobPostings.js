import { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import React from 'react'
import './JobPostings.css'
import { useEffect, useState } from "react";
import ToggleCard from "./ToggleCard";

export default class JobSearch extends Component {
    render(){
        return (
            <>
                {/* this page will be used to render job postings, ToggleCard.js is where the "Job Posting" lives per se */}
                <ToggleCard/>
                <ToggleCard/>
                <ToggleCard/>
            </>
        );
    }
}