import HeroSection from "../HeroSection";
import JobSearch from "../JobSearch";
import JobPostings from "../JobPosting/JobPostings";
export default function Home() {
  return (
    <>
      <HeroSection />
      <JobSearch/>
      <JobPostings/>
    </>
  );
}
