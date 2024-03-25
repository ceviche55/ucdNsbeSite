import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Events.scss'

const speakers = [
    {
      name: 'Kanani Abera',
      title: 'Founder & CEO, ABC Company',
      bio: 'John Smith is the founder and CEO of ABC Company, a leading tech startup that is revolutionizing the industry. With over 10 years of experience in the field, John is an expert in software development and entrepreneurship.',
      image: 'https://i.pravatar.cc/150?img=16'
    },
    {
      name: 'Jane Doe',
      title: 'VP of Marketing, XYZ Corporation',
      bio: 'Jane Doe is the VP of Marketing at XYZ Corporation, where she oversees all marketing initiatives for the company. With a background in digital marketing and branding, Jane is a sought-after speaker and thought leader in the industry.',
      image: 'https://i.pravatar.cc/150?img=2'
    }
  ];

const Events = () => {

    const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const eventDate = moment('2023-04-13 18:50:00', 'YYYY-MM-DD HH:mm:ss');
      const duration = moment.duration(eventDate.diff(now));
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="event-page">
      <div className="event-hero">
        <h1 className="event-title">Tech Conference 2023</h1>
        <h2 className="event-date">April 1, 2023</h2>
        <div className="event-countdown">{countdown}</div>
      </div>

      <div className="event-details">
        {/* <div className="event-section">
          <h3 className="event-section-title">Speakers</h3>
          <div className="event-speakers">
            {speakers.map((speaker, index) => (
              <div className="event-speaker" key={index}>
                <img className="event-speaker-image" src={speaker.image} alt={speaker.name} />
                <div className="event-speaker-details">
                  <h4 className="event-speaker-name">{speaker.name}</h4>
                  <p className="event-speaker-title">{speaker.title}</p>
                  <p className="event-speaker-bio">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="google-calendar">
    <iframe
    className='calendar'
      title="Google Calendar"
      src="https://calendar.google.com/calendar/embed?src=cu.nsbe.denver%40gmail.com&ctz=America%2FChicago"
      width="1000"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
  </div>
</div>

  )
}

export default Events