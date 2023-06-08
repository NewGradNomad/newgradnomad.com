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
import Tips from "./components/pages/Tips";
import About from "./components/pages/About";
import Programs from "./components/pages/Programs";
import NewGradPrograms from "./components/pages/NewGradPrograms";
import PostAJob from "./components/pages/PostAJob";
import Checkout from "./components/pages/Checkout";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Tips" exact element={<Tips />} />
          <Route path="/About" element={<About />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/NewGradPrograms" element={<NewGradPrograms />} />
          <Route path="/PostAJob" element={<PostAJob />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
