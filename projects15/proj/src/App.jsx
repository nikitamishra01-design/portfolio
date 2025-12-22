
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact"; // aapke src me file
import Home from "./Pages/Home";

export default function App() {
  return (
    <Routes>
      {/* Main Portfolio / Home */}
      <Route path="/" element={<Portfolio />} />
       <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
         <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
