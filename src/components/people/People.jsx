import React from 'react';
import './People.css';

const team = [
  {
    name: "Stella Martin",
    title: "Owner",
    image: "https://ondb1y.yourbrand.studio/files/dynamicContent/sites/ondb1y/images/en/webpage_25/m5p6l2pi/element_476/pexels-sora-shimazaki-5668771-lpmq2hzb-lqpbnp32-6597d98419252.webp",
    description: "Her leadership has shaped the company's commitment to client-focused solutions."
  },
  {
    name: "Harper Perez",
    title: "Accounting Manager",
    image: "https://ondb1y.yourbrand.studio/files/dynamicContent/sites/ondb1y/images/en/webpage_25/m5p6l2pi/element_478/pexels-sora-shimazaki-5668875-lpmq3yx2-lqpbnxi5-6597d98d16c43.webp",
    description: "At the helm of our day-to-day operations is Harper, our dedicated Accounting Manager."
  },
  {
    name: "Harper Perez",
    title: "Chief accountant",
    image: "https://ondb1y.yourbrand.studio/files/dynamicContent/sites/ondb1y/images/en/webpage_25/m5p6l2pi/element_480/pexels-mikhail-nilov-8297121-6597d8e22e638.webp",
    description: "Her expertise in navigating regulatory landscapes and optimizing processes."
  }
];

const People = () => {
  return (
    <section className="people-section">
      <h4 className="sec-head">PEOPLE</h4>
      <h2 className="people-title">Our expert team</h2>
      <div className="people-list">
        {team.map((person, index) => (
          <div key={index} className="person-card">
            <img src={person.image} alt={person.name} className="person-image" />
            <h3 className="person-name">{person.name}</h3>
            <p className="person-role">{person.title}</p>
            <p className="person-desc">{person.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default People;
