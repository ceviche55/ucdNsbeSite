import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="app__what app__flex">
    <section id="what-is-nsbe">
      <div className="content">
        <h2 className="title">Empowering Black Engineers for a Better Future</h2>
        <p className="description">Welcome to the National Society of Black Engineers (NSBE), a dynamic and impactful non-profit organization dedicated to increasing the representation of culturally responsible Black engineers in academia and industry.</p>
        <p className="description">Founded in 1975 by six visionary Purdue University students, NSBE has been at the forefront of promoting excellence, leadership, and service among Black engineers, serving as a beacon of hope and inspiration for countless students, professionals, and communities across the United States and abroad.</p>
        <ul className="benefits-list">
          <li>Connect with a vast network of like-minded professionals and industry leaders through our 600+ chapters in the US and abroad.</li>
          <li>Access exclusive scholarship opportunities and resources to support your academic and professional goals.</li>
          <li>Boost your career prospects with our comprehensive job postings, resume reviews, and interview coaching.</li>
          <li>Develop your leadership skills through our world-class training and workshops.</li>
          <li>Stay ahead of the curve with our technical training and professional development opportunities.</li>
          <li>Make a positive impact on your community through our extensive community service activities and initiatives.</li>
        </ul>
        <p className="join-now">Join NSBE today and unlock your full potential as a Black engineer, while making a meaningful contribution to society.</p>
        <a href="/" className="join-button">Join NSBE</a>
      </div>
      <div className="image"></div>
    </section>
  </div>
);

export default Header;