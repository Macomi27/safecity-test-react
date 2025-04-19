import React from "react";
import logoImage from '../images/logo.png'
import "./header.css"

const Header = () => {
    return (
        <header className="header">
        <nav>
            <div className="navbar">
            <div className="logo">
                <div className="logo-image">
                    <img src={logoImage} alt="logo" />
                </div>
                <div className="logo-text">
                    <h3>QuantumQuill</h3>
                    <p>Financials</p>
                </div>
            </div>
            <ul className="navlinks">
                <li className="home"><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#offer">Offer</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>

        <div className="hero-section">
            <div className="hero-text">
            <div>
                <h1>Streamline your financial journey</h1>
            </div>  
            <div>
                 <p>A Holistic Approach to Streamlining Your Financial Journey for Long-Term Success and Prosperity</p>
            </div>
            <div className="hero-buttons">
                <button className="btn-seemore ">See more {'>'}</button>
                <button className="btn-offer ">Offer {'>'}</button>
            </div> 
        </div>
        </div>
        </header>
    );
}

export default Header;