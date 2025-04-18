import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css'; 

const ServicesSection = () => {
  return (
    <section className="services">
      <h5>OFFER</h5>
      <h2>Support for your business</h2>
      <div className="services-grid">
        <div className="card">
          <i className="fas fa-calculator"></i>
          <h3>Accounting services</h3>
          <p>From bookkeeping to financial statement preparation, we've got your accounting needs covered.</p>
          <Link to="/accounting">See more &gt;</Link>
        </div>
        <div className="card">
          <i className="fas fa-chart-line"></i>
          <h3>Economic consultancy</h3>
          <p>Unleash your potential and gain a competitive edge with our economic consultancy services.</p>
          <Link to="/economic">See more &gt;</Link>
        </div>
        <div className="card">
          <i className="fas fa-file-invoice-dollar"></i>
          <h3>Tax consultancy</h3>
          <p>Stay ahead of the ever-changing tax landscape with our tax consultancy services.</p>
          <Link to="/tax">See more &gt;</Link>
        </div>
        <div className="card">
          <i className="fas fa-users-cog"></i>
          <h3>Human resources and payroll</h3>
          <p>Let us handle the intricacies, allowing you to focus on your core business activities.</p>
          <Link to="/hr-payroll">See more &gt;</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
