import React from 'react';
import './Executives.scss';
import zahraHead from '../../images/zahraHead.png';
import yahyaHead from '../../images/yahyaHead.png';
import anisHead from '../../images/anisHead.png';
import kananiHead from '../../images/kananiHead.png';
import tumuraHead from '../../images/tumuraHead.png';
import abdullahiHead from '../../images/abdullahiHead.png';
import khalidHead from '../../images/khalidHead.png';
import ranaaHead from '../../images/ranaAHead.png';
import ranasHead from '../../images/ranaSHead.png';
import atbHead from '../../images/atbHead.png';
import mariyemHead from '../../images/mariyemHead.png';
import luqmanHead from '../../images/luqmanHead.png';
import famoHead from '../../images/fatimaHead.png';

const Executives = () => {
  const members = [
    {
      name: 'Zahra Abdullahi',
      position: 'Co-President',
      image: zahraHead,
    },
    {
      name: 'Yahya Hamu',
      position: 'Co-President',
      image: yahyaHead,
    },
    {
      name: 'Anis Benyousef',
      position: 'Presidential Advisor',
      image: anisHead,
    },
    {
      name: 'Kanani Abera',
      position: 'Vice President',
      image: kananiHead,
    },
    {
      name: 'Tumura Elamo',
      position: 'Treasurer',
      image: tumuraHead,
    },
    {
      name: 'Abdullahi Hassan',
      position: 'Secretary',
      image: abdullahiHead,
    },
    {
      name: 'Khalid Hamu',
      position: 'Programs Chair',
      image: khalidHead,
    },
    {
      name: 'Rana Abdellatif',
      position: 'Professional Delegate',
      image: ranaaHead,
    },
    {
      name: 'Rana Saidmaeruf',
      position: 'Communications Chair',
      image: ranasHead,
    },
    {
      name: 'Ahmed Roble',
      position: 'Freshman Representative',
      image: atbHead,
    },
    {
      name: 'Mariyem Tagir',
      position: 'Conference Planning Chair',
      image: mariyemHead,
    },
    {
      name: 'Luqman Abdurshid',
      position: 'Pre-Collegiate Initiative Chair',
      image: luqmanHead,
    },
    {
      name: 'Fatima Haile',
      position: 'Academic Excellence Chair',
      image: famoHead,
    },
  ];

  return (
    <div className="executive-members">
      <h2>UCD NSBE Board Members</h2>
      <div className="members-container">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executives;
