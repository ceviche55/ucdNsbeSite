import React from 'react';
import './SponsorPage.scss';

const sponsorPage = () => (
  <div className="sponsorPage">
    <div className='header'>
      <h1>Sponsorship</h1>
      <h2>Become a sponsor of the UCD NSBE and partner with us to unlock opportunities for our members! From sending members to conventions to spicing up events your contribution will stretch to the corners of our chapter.</h2>
      <p>If your interested in partnering up with us and contributing to taking our chapter further, email us at yahya.hamu@ucdenver.edu</p>
    </div>
    <h2>National Convention</h2>
    <p>Every year in the spring semester the National Society of Black Engineers Executive Board plans a national convention. At the convention there are thousands of attendents, hundreds of companies, and thousands of general sessions. Members elect regional and national leadership, participate in competitions, and engages in professional development. A testament to NSBE pursuing its mission, “to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community.”</p>
    <div className='natConImages'>
      <img src={require("../../images/sponsorImages/natCon1.jpg")} />
      <img src={require("../../images/sponsorImages/natCon2.jpg")} />
      <img src={require("../../images/sponsorImages/natCon3.jpg")} />
    </div>
    <h2>University Events</h2>
    <p>At UC Denver we host events throughout the year with our mission in mind. From interviews prep to movie nights, we are seeing to our general members getting a holistic in personal and professional development. A contribution can mean more elaborate and frequent events!</p>
    <div className='uniEventImages'>
      <img src={require("../../images/sponsorImages/locEvent1.png")} />
      <img src={require("../../images/sponsorImages/locEvent2.png")} />
      <img src={require("../../images/sponsorImages/locEvent3.png")} />
    </div>
    <h2>Other Away Events</h2>
    <p>Sponsoring our chapter would mean we can start to send members to other events. Whether it is hack-a-thons in another state or Afro Tech the ambition of our members are high and you could take it even further!</p>
  </div>
);

export default sponsorPage;
