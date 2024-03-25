import React from 'react'
import './Join.scss'

const Join = () => {
  return (
    <div class="app__join app__flex">
    <section id="become-a-member">
      <div class="content">
        <h2 class="title">Become A Member Today</h2>
        <p class="description">Are you passionate about engineering and making a positive impact in your community? Join NSBE, the premier organization for Black engineers, and be a part of a powerful network that promotes academic excellence, professional development, and community outreach.</p>
        <p class="description">Since 1975, NSBE has been dedicated to increasing the representation of Black engineers in the field, providing members with opportunities to network, learn, and grow both personally and professionally.</p>
        <ul class="benefits-list">
          <li>Access to a network of 24,000+ engineers and 600+ chapters worldwide</li>
          <li>Scholarship opportunities for undergraduate and graduate students</li>
          <li>Career development resources, including job postings and resume reviews</li>
          <li>Leadership development opportunities, such as training and workshops</li>
          <li>Technical training and professional development opportunities</li>
          <li>Community service activities that allow members to give back and positively impact the community</li>
        </ul>
        <p class="join-now">Join now and start making a difference in your life and the lives of others.</p>
        <a href="/" class="join-button">Join NSBE</a>
      </div>
      {/* <div class="image"></div> */}
    </section>
  </div>
  )
}

export default Join