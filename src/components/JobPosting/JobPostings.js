import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./JobPostings.css";
import JobPost from "./JobPost";
import { getFirestore, collection, query, where, getDocs, orderBy } from "firebase/firestore";

export default function JobPostings() {
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
        
        // Sort jobs - pinned first, then by creation date
        const allJobs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const sortedJobs = allJobs.sort((a, b) => {
          const aIsPinned = a.pinPost24hr || a.pinPost1wk || a.pinPost1mth;
          const bIsPinned = b.pinPost24hr || b.pinPost1wk || b.pinPost1mth;
          
          if (aIsPinned && !bIsPinned) return -1;
          if (!aIsPinned && bIsPinned) return 1;
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
  }, []);

  if (loading) {
    return <Container className="text-center mt-4">Loading job postings...</Container>;
  }

  return (
    <>
      {jobs.map((job) => (
        <JobPost key={job.id} job={job} />
      ))}
    </>
  );
}
