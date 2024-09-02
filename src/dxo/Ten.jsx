import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../forRouter/Home";
import Contact from "../forRouter/Contact";
import About from "../forRouter/About";

export default function Ten() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
