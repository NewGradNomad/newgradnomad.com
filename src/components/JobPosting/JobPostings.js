import { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import React from 'react'
import './JobPostings.css'
import { useEffect, useState } from "react";
import StandardCard from "./StandardCard";

export default class JobSearch extends Component {
    render(){
        return (
            <>
                {/* this page will be used to render job postings, StandardCard.js is where the "Job Posting" lives per se */}
                <StandardCard/>
                <StandardCard/>
                <StandardCard/>
            </>
        );
    }
}