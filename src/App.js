import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

export default function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
