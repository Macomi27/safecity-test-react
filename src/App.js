import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";


import Footer from "./components/footer/footer.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Economic from "./components/ServicesSection/Economic.jsx";
import Tax from "./components/ServicesSection/Tax.jsx";
import HRPayroll from "./components/ServicesSection/HRPayroll.jsx";
import Accounting from "./components/ServicesSection/Accounting.jsx"; 

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
     
      <Footer />
    </Router>
  );
}

export default App;

