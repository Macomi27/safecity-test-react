"use client"

import { useState, useEffect } from "react"
import "./Testimonial.css"

const TestimonialSlider = () => {
  const [activeKey, setActiveKey] = useState("1")


  const testimonials = {
    1: {
      text: "Communication has always been a strong point for QuantumQuill Financials. They take the time to explain complex financial matters in a way that is clear and easy to understand. This level of transparency has been invaluable to me, as it empowers me to make informed decisions for my business.",
      author: "Grace Williams",
      position: "Business Owner",
      
    },
    2: {
      text: "Exceptional expertise! Quantum Quill provided insightful financial advice that significantly impacted our business strategy. Their attention to detail and commitment to excellence make them our trusted financial partner. Their insights have been instrumental in shaping our financial goals.",
      author: "John Evans",
      position: "Business Owner",
      
    },
    3: {
      text: "Quantum Quill consistently delivers excellence in every service. From accounting to economic consultancy, their dedication to quality has made them an indispensable asset to our business. Their innovative solutions have enhanced our financial processes, making them an essential part of our growth strategy.",
      author: "Gregory Thomas",
      position: "Business Owner",
      
    },
  }


  const testimonialKeys = Object.keys(testimonials)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKey((prevKey) => {
        const currentIndex = testimonialKeys.indexOf(prevKey)
        const nextIndex = (currentIndex + 1) % testimonialKeys.length
        return testimonialKeys[nextIndex]
      })
    }, 7500)

    return () => clearInterval(interval)
  }, [testimonialKeys])

  const handleDotClick = (key) => {
    setActiveKey(key)
  }

  return (
       
    

  
      
    <div className="testimonial-container">
      <h3 className="testimonial-heading">TESTIMONIAL</h3>
      <h2 className="testimonial-title">Our customer review</h2>

      <div className="quote-mark">
           <img src="data:image/svg+xml,%3Csvg%20fill%3D%27rgb%2865%2C%20196%2C%20106%29%27%20id%3D%27ww-quote-right%27%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27100%25%27%20height%3D%27100%25%27%20viewBox%3D%270%200%2013%2014%27%3E%3Cpath%20d%3D%27M6%202.5v5.5q0%200.813-0.316%201.551t-0.855%201.277-1.277%200.855-1.551%200.316h-0.5q-0.203%200-0.352-0.148t-0.148-0.352v-1q0-0.203%200.148-0.352t0.352-0.148h0.5q0.828%200%201.414-0.586t0.586-1.414v-0.25q0-0.312-0.219-0.531t-0.531-0.219h-1.75q-0.625%200-1.062-0.438t-0.438-1.062v-3q0-0.625%200.438-1.062t1.062-0.438h3q0.625%200%201.062%200.438t0.438%201.062zM13%202.5v5.5q0%200.813-0.316%201.551t-0.855%201.277-1.277%200.855-1.551%200.316h-0.5q-0.203%200-0.352-0.148t-0.148-0.352v-1q0-0.203%200.148-0.352t0.352-0.148h0.5q0.828%200%201.414-0.586t0.586-1.414v-0.25q0-0.312-0.219-0.531t-0.531-0.219h-1.75q-0.625%200-1.062-0.438t-0.438-1.062v-3q0-0.625%200.438-1.062t1.062-0.438h3q0.625%200%201.062%200.438t0.438%201.062z%27%3E%3C%2Fpath%3E%3C%2Fsvg%3E" alt="" />
          </div>




      <div className="testimonial-text-container">
        <div className="testimonial-text-animation fadeOutSlideOut">
          {Object.entries(testimonials).map(([key, testimonial]) => (
            <div key={key} className={`testimonial-slide ${key === activeKey ? "active" : ""}`}>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonialKeys.map((key) => (
          <button
            key={key}
            className={`testimonial-dot ${key === activeKey ? "active" : ""}`}
            onClick={() => handleDotClick(key)}
            aria-label={`View testimonial ${key}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider
