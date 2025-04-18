import React from "react";
import logoImage from '../images/logo.png'
import "./footer.css"
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/19.0.0/cjs/react.production.min.js" integrity="sha512-nU+Ng6Lv1UThPJ9vMtDIEfW0pNWLZQsRwh0cCl3WJHjReVWnxLEWSY/esU9/v1iBsfoe0Y71xwOcpoVrhNcU4Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-flex-container">
                <div className="footer-flex">
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
                <div className="footer-flex">
                    <div></div>
                    <div className="house-address">
                        <p>123 Main Street London, W1A </p>
                        <p>1AA United Kingdom</p>
                    </div>

                </div>
                <div className="footer-flex">
                    <div>
                        <div></div>
                        <p>office@email.com</p>
                    </div>
                    <div>
                        <div></div>
                        <p>office@email.com</p>
                    </div>
                </div>
                <div className="footer-flex">
                <div></div>
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
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            </div>
        </footer>
    );
}

export default Footer;