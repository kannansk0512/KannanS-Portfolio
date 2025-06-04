// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <Router>
      <div className="relative bg-[#0a192f] text-white">
        {/* Blur animation */}
        <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }} />

        {/* Grid background effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.1)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* Main content */}
        <div className="relative z-10 pt-20">
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
