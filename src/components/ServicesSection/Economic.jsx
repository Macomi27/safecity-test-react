
import React from 'react';
import './ServicesPages.css';

const Economic = () => {
  return (
    <div className="service-page">
      <div className="image-box-wrapper">
        <img 
          src="https://ondb1y.yourbrand.studio/files/dynamicContent/sites/ondb1y/images/en/webpage_28/m5p6l1p9/element_515/pexels-pixabay-209224-6597db3dc4ea1.webp" 
          alt="" 
          className="service-image"
        />
        <div className="text-badge">Economic Consultancy</div>
      </div>

    
      <p className="service-subtitle">
        Driving business excellence: economic consultancy to optimize your financial health and propel your growth journey.
      </p>
      <p className="service-description">
        Gain a competitive edge with our economic consultancy services. Our team of consultants provides in-depth analyses of market trends, economic indicators, and industry benchmarks.
        Whether you're a startup or an established business, our strategic insights can guide you towards sustainable growth and profitability.
      </p>
    </div>
  );
};

export default Economic;
