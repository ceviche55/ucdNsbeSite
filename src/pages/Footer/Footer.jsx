import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Site Map</h3>
            <ul className="footer-links">
              <li><a href="/HOME">Home</a></li>
              <li><a href="/NSBE">What is NSBE?</a></li>
              <li><a href="/SPONSORSHIP">Sponsor NSBE</a></li>
              <li><a href="/BOARD">Executive Board</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Links</h3>
            <ul className="footer-links">
              <li><a href="https://www.instagram.com/cudenvernsbe/">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/cudenvernsbe/">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>Address: University of Colorado</p>
            <p>1201 Larimer St,</p>
            <p>Denver, CO 80204</p>
            <p>Email: yahya.hamu@ucdenver.edu</p>
          </div>
        </div>
        <div>
          <div className="col-md-12">
            <hr />
          </div>
        </div>
        <div>
          <div className="col-md-6">
            <p>&copy; 2023 National Society of Black Engineers</p>
          </div>
          <div className="col-md-6">
            <ul className="social-media-icons">
              <li><a href="/"><i className="fab fa-facebook"></i></a></li>
              <li><a href="/"><i className="fab fa-twitter"></i></a></li>
              <li><a href="/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
