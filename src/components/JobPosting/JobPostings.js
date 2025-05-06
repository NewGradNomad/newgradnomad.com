import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./JobPostings.css";
import StandardPosting from "./StandardPosting";
import PinnedPosting from "./PinnedPosting";
import { getFirestore, collection, query, where, getDocs, orderBy } from "firebase/firestore";

export default function JobPostings() {
  const [pinnedJobs, setPinnedJobs] = useState([]);
  const [standardJobs, setStandardJobs] = useState([]);
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
        
        // Separate pinned and standard jobs
        const pinned = [];
        const standard = [];
        
        snapshot.docs.forEach(doc => {
          const job = { id: doc.id, ...doc.data() };
          if (job.pinPost24hr || job.pinPost1wk || job.pinPost1mth) {
            pinned.push(job);
          } else {
            standard.push(job);
          }
        });

        setPinnedJobs(pinned);
        setStandardJobs(standard);
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
      {pinnedJobs.map((job) => (
        <PinnedPosting key={job.id} job={job} />
      ))}
      {standardJobs.map((job) => (
        <StandardPosting key={job.id} job={job} />
      ))}
    </>
  );
}
