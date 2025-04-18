import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import EasySteps from "./components/easySteps/easySteps.jsx";
import Footer from "./components/footer/footer.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesSection from "./components/ServicesSection.jsx";
import Economic from "./components/Economic.jsx";
import Tax from "./components/Tax.jsx";
import HRPayroll from "./components/HRPayroll.jsx";
import Accounting from "./components/Accounting.jsx"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ServicesSection />} />
        <Route path="/economic" element={<Economic />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/hr-payroll" element={<HRPayroll />} />
        <Route path="/accounting" element={<Accounting />} />
      </Routes>
      <EasySteps />
      <Footer />
    </Router>
  );
}

export default App;

