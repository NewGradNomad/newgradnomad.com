import { useState } from "react";
import HeroSection from "../HeroSection";
import JobSearch from "../JobSearch";
import JobPostings from "../JobPosting/JobPostings";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <HeroSection />
      <JobSearch onSearch={handleSearch}/>
      <JobPostings selectedCategory={selectedCategory}/>
    </>
  );
}
