import React from "react";
import logoImage from '../images/logo.png'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-flex-container">
                <div className="footer-flex1">
                    <div className="logo-footer">
                                    <div className="logo-footer-image">
                                        <img src={logoImage} alt="logo" />
                                    </div>
                                    <div className="logo-text">
                                        <h3>QuantumQuill</h3>
                                        <p>Financials</p>
                                    </div>
                                </div>
                </div>
                <div className="footer-flex2">
                    <FontAwesomeIcon icon={faHome} className="home-icon" />
                    <div className="house-address">
                        <p>123 Main Street London, W1A </p>
                        <p>1AA United Kingdom</p>
                    </div>

                </div>
                <div className="footer-flex3">
                    <div className="envelope">
                        <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                        <p>office@email.com</p>
                    </div>
                    <div className="phone">
                        <FontAwesomeIcon icon={faPhone} className="phone-icon"/>
                        <p>+00 000 000 000</p>
                    </div>
                </div>
                <div className="footer-flex4">
                    <FontAwesomeIcon icon={faClock} className="clock-icon"/>
                    <div className="house-address">
                        <p>Monday - Friday</p>
                        <p>8.00 - 16.00</p>
                    </div>
                </div>
            </div>
            <hr className="footer-hr"/>
            <div className="footer-links">
            <ul className="footerlinks">
                <li className="home"><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#offer">Offer</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="socials">
            <FontAwesomeIcon icon={faFacebookF} className="fb-icon" />
            <FontAwesomeIcon icon={faInstagram} className="insta-icon" />
            </div>
            </div>
        </footer>
    );
}

export default Footer;