import React from "react";
import "./about.css"
import aboutImage from "../images/aboutImage.jpeg";
function About() {
  return (
   <div className="section">
            <div className="about-image">
      <img src={aboutImage}  alt="ladies"/>
   <p>Precise and timely results</p>
   </div>
            <div className="About-Us">
                <h3>ABOUT US</h3>
                <h1>We make your business our top priority</h1>
                <p>We take pride in being a trusted partner on your journey to financial success. Our team of seasoned professionals brings a wealth of experience in accounting, taxation, and financial advisory services.
 At Quantum Quill, we believe in more than just numbers, we believe in relationships. We strive to understand the unique needs of each client, tailoring our services to match your specific goals and aspirations. Our commitment to excellence is reflected in every detail, ensuring accuracy, transparency, and efficiency in all our financial solutions.</p>
            </div>
        </div>
        
  );
}
export default About;