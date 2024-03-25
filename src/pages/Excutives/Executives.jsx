import React from 'react';
import './Executives.scss';
import pic from '../../assets/about01.png'

const Executives = () => {
  const members = [
    {
      name: 'Zahra Abdullahi',
      position: 'President',
      image: '../../images/zahraHead.png',
    },
    {
      name: 'Yahya Hamu',
      position: 'Vice President',
      image: '../../images/yahyaHead.png',
    },
    {
      name: 'Anis Benyousef',
      position: 'Treasurer',
      image: '../../images/zahraHead.png',
    },
    {
      name: 'Kanani Abera',
      position: 'Treasurer',
      image: '../../images/kananiHead.png',
    },
    {
      name: 'Tumura Elamo',
      position: 'Treasurer',
      image: '../../images/tumuraHead.png',
    },
    {
      name: 'Abdullahi Hassan',
      position: 'Treasurer',
      image: '../../images/abdullahiHead.png',
    },
    {
      name: 'Khalid Hamu',
      position: 'Treasurer',
      image: '../../images/khalidHead.png',
    },
    {
      name: 'Rana Abdellatif',
      position: 'Treasurer',
      image: '../../images/ranaAHead.png',
    },
    {
      name: 'Rana Saidmaeruf',
      position: 'Treasurer',
      image: '../../images/ranaSHead.png',
    },
    {
      name: 'Ahmed Roble',
      position: 'Treasurer',
      image: '../../images/atbHead.png',
    },
    {
      name: 'Mariyem Tagir',
      position: 'Treasurer',
      image: '../../images/mariyemHead.png',
    },
    {
      name: 'Luqman Abdurshid',
      position: 'Treasurer',
      image: '../../images/luqmanHead.png',
    },
    {
      name: 'Fatima Haile',
      position: 'Treasurer',
      image: '../../images/fatimaHead.png',
    },
  ];

  return (
    <div className="executive-members">
      <h2>UC Denver NSBE Board Members</h2>
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
