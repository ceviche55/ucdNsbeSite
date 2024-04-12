import React from 'react';
import './Sponsor.scss';

const Sponsor = () => {
  return (
    <div className="sponsor-page">
      <h1 className="sponsor-title">Become a Sponsor of NSBE</h1>
      <p className="sponsor-description">NSBE is dedicated to increasing the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community. We couldn't do it without the support of our sponsors. </p>
      <div className="sponsor-levels">
        <div className="sponsor-level">
          <h2 className="sponsor-level-title">Platinum Sponsor</h2>
          <p className="sponsor-level-description">Our Platinum Sponsors are recognized as our highest level of support. With this level of sponsorship, you'll receive:</p>
          <ul className="sponsor-benefits">
            <li>Exclusivity in your industry category</li>
            <li>Logo placement on all NSBE materials, including website, marketing materials, and conference signage</li>
            <li>Recognition during opening and closing ceremonies at NSBE events</li>
            <li>Complimentary registration for all NSBE events</li>
            <li>Opportunities to speak at NSBE events</li>
          </ul>
        </div>

        <div className="sponsor-level">
          <h2 className="sponsor-level-title">Gold Sponsor</h2>
          <p className="sponsor-level-description">Our Gold Sponsors are recognized as a high level of support. With this level of sponsorship, you'll receive:</p>
          <ul className="sponsor-benefits">
            <li>Logo placement on all NSBE materials, including website, marketing materials, and conference signage</li>
            <li>Recognition during opening and closing ceremonies at NSBE events</li>
            <li>Complimentary registration for all NSBE events</li>
          </ul>
        </div>

        <div className="sponsor-level">
          <h2 className="sponsor-level-title">Silver Sponsor</h2>
          <p className="sponsor-level-description">Our Silver Sponsors are recognized as an important level of support. With this level of sponsorship, you'll receive:</p>
          <ul className="sponsor-benefits">
            <li>Logo placement on all NSBE materials, including website and marketing materials</li>
            <li>Recognition during opening and closing ceremonies at NSBE events</li>
            <li>Complimentary registration for NSBE conferences</li>
          </ul>
        </div>

        <div className="sponsor-level">
          <h2 className="sponsor-level-title">Bronze Sponsor</h2>
          <p className="sponsor-level-description">Our Bronze Sponsors are recognized as a valuable level of support. With this level of sponsorship, you'll receive:</p>
          <ul className="sponsor-benefits">
            <li>Logo placement on all NSBE materials, including website</li>
            <li>Recognition during opening and closing ceremonies at NSBE events</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
