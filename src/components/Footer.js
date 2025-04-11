import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-section subscribe">
            <h4 className="footer-heading">BE THE FIRST TO KNOW</h4>
            <p className="footer-text">Sign up for updates from mettā muse.</p>
            <form className="subscribe-form">
              <input
                type="email"
                className="subscribe-input"
                placeholder="Enter your e-mail..."
              />
              <button type="button" className="subscribe-button">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="footer-section contact">
            <h4 className="footer-heading">CONTACT US</h4>
            <p className="footer-text">+44 221 133 5360</p>
            <p className="footer-text">customercare@mettamuse.com</p>
            <h4 className="footer-heading">CURRENCY</h4>
            <p className="footer-text currency">
              <img
                src="https://flagcdn.com/us.svg"
                alt="US Flag"
                className="flag"
              />
              USD
            </p>
            <small className="footer-note">
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </small>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-section">
            <h4 className="footer-heading">Product Lists</h4>
            <ul className="footer-list">
              <li className="footer-list-item">About Us</li>
              <li className="footer-list-item">Stories</li>
              <li className="footer-list-item">Artisans</li>
              <li className="footer-list-item">Boutiques</li>
              <li className="footer-list-item">Contact Us</li>
              <li className="footer-list-item">EU Compliances Docs</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul className="footer-list">
              <li className="footer-list-item">Orders & Shipping</li>
              <li className="footer-list-item">Join/Login as a Seller</li>
              <li className="footer-list-item">Payment & Pricing</li>
              <li className="footer-list-item">Return & Refunds</li>
              <li className="footer-list-item">FAQs</li>
              <li className="footer-list-item">Privacy Policy</li>
              <li className="footer-list-item">Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">FOLLOW US</h4>
            <div className="social-icons">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="social-icon"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </div>
            <h4 className="footer-heading">Product Lists ACCEPTS</h4>
            <div className="payment-icons">
              <img
                src="https://img.icons8.com/color/48/google-pay.png"
                alt="Google Pay"
                className="payment-icon"
              />
              <img
                src="https://img.icons8.com/color/48/mastercard-logo.png"
                alt="MasterCard"
                className="payment-icon"
              />
              <img
                src="https://img.icons8.com/color/48/visa.png"
                alt="Visa"
                className="payment-icon"
              />
              <img
                src="https://img.icons8.com/color/48/paypal.png"
                alt="Paypal"
                className="payment-icon"
              />
              <img
                src="https://img.icons8.com/color/48/amex.png"
                alt="Amex"
                className="payment-icon"
              />
              <img
                src="https://img.icons8.com/color/48/apple-pay.png"
                alt="Apple Pay"
                className="payment-icon"
              />
              <img
                src="https://img.icons8.com/fluency/48/000000/payment-history.png"
                alt="Other"
                className="payment-icon"
              />
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="footer-copy">Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
