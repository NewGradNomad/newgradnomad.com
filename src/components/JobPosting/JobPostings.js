import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./JobPostings.css";
import JobPost from "./JobPost";
import { getFirestore, collection, query, where, getDocs, orderBy } from "firebase/firestore";

const checkPinStatus = (job) => {
  const createdAt = new Date(job.createdAt);
  const now = new Date();
  const diffHours = Math.abs(now - createdAt) / 36e5; // Convert to hours
  const diffDays = diffHours / 24;

  if (job.pinPost24hr && diffHours > 24) {
    return false;
  }
  if (job.pinPost1wk && diffDays > 7) {
    return false;
  }
  if (job.pinPost1mth && diffDays > 30) {
    return false;
  }
  return job.pinPost24hr || job.pinPost1wk || job.pinPost1mth;
};

export default function JobPostings({ selectedCategory }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const db = getFirestore();
        const jobsRef = collection(db, "jobs");

        // Query for active jobs
        const jobsQuery = query(
          jobsRef,
          where("status", "==", "active"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(jobsQuery);
        
        // Map jobs and check pin status
        let allJobs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          isPinned: checkPinStatus(doc.data())
        }));

        // Filter by category if one is selected
        if (selectedCategory) {
          allJobs = allJobs.filter(job => job.primaryTag === selectedCategory);
        }

        // Sort jobs - valid pins first, then by creation date
        const sortedJobs = allJobs.sort((a, b) => {
          if (a.isPinned && !b.isPinned) return -1;
          if (!a.isPinned && b.isPinned) return 1;
          return 0;
        });

        setJobs(sortedJobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [selectedCategory]); // Re-run when category changes

  if (loading) {
    return <Container className="text-center mt-4">Loading job postings...</Container>;
  }

  if (jobs.length === 0) {
    return (
      <Container className="text-center mt-4">
        {selectedCategory 
          ? `No jobs found in ${selectedCategory} category` 
          : "No jobs found"}
      </Container>
    );
  }

  return (
    <>
      {jobs.map((job) => (
        <JobPost key={job.id} job={job} />
      ))}
    </>
  );
}
