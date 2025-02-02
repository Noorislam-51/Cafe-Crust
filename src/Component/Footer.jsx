import React from 'react';
// import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up"  data-aos-duration="3000" >
      <div className="footer-container" >
        <div class="footerlogo">Café Crust</div>
        <div className="footer-section">
          <h4>PRIVACY</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookies</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SERVICES</h4>
          <ul>
            <li><a href="/pricing">Plan & Pricing</a></li>
            <li><a href="/store">Store Locator</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>ABOUT US</h4>
          <ul>
            <li><a href="/about">Our Vision</a></li>
            <li><a href="/team">Our Story</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>INFORMATION</h4>
          <ul>
            <li><a href="/sell-products">Sell Your Products</a></li>
            <li><a href="/help">Help & FAQs</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
