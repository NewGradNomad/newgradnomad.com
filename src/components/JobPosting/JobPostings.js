import { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import React from 'react'
import './JobPostings.css'
import { useEffect, useState } from "react";
import StandardPosting from "./StandardPosting";
import PinnedPosting from "./PinnedPosting";

export default class JobSearch extends Component {
    render(){
        return (
            <>
                {/* this page will be used to render job postings, StandardPosting.js is where the "Job Posting" lives per se */}
                <PinnedPosting/>
                <StandardPosting/>
                <StandardPosting/>
            </>
        );
    }
}