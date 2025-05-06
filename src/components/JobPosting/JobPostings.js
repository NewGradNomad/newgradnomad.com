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

        // Query for active pinned jobs
        const pinnedQuery = query(
          jobsRef,
          where("status", "==", "active"),
          where("pinPost24hr", "==", true),
          orderBy("createdAt", "desc")
        );

        // Query for active standard jobs
        const standardQuery = query(
          jobsRef,
          where("status", "==", "active"),
          orderBy("createdAt", "desc")
        );

        const [pinnedSnapshot, standardSnapshot] = await Promise.all([
          getDocs(pinnedQuery),
          getDocs(standardQuery),
        ]);

        setPinnedJobs(
          pinnedSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );

        setStandardJobs(
          standardSnapshot.docs
            .filter((doc) => !doc.data().pinPost24hr)
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
        );

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
