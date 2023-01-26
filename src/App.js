import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Programs from "./components/pages/Programs";
import Programs_Render from "./components/pages/Programs_Render";
import PostAJob from "./components/pages/PostAJob";

export default function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/Programs_Render" element={<Programs_Render />} />
          <Route path="/PostAJob" element={<PostAJob />} />
        </Routes>
      </Router>
    </>
  );
}
