import React, { useState } from 'react';
import pic from '../../assets/about01.png'
import './Collections.scss';

const Collections = () => {
  const collections = [
    {
      name: 'National Convention 2021',
      image: pic,
      fullImage: pic,
    },
    {
      name: 'NSBE in Action',
      image: pic,
      fullImage: pic,
    },
    {
      name: 'Scholarships and Awards',
      image: pic,
      fullImage: pic,
    },
    {
        name: 'National Convention 2021',
        image: pic,
        fullImage: pic,
      },
      {
        name: 'NSBE in Action',
        image: pic,
        fullImage: pic,
      },
      {
        name: 'Scholarships and Awards',
        image: pic,
        fullImage: pic,
      },
      {
        name: 'National Convention 2021',
        image: pic,
        fullImage: pic,
      },
      {
        name: 'NSBE in Action',
        image: pic,
        fullImage: pic,
      },
      {
        name: 'Scholarships and Awards',
        image: pic,
        fullImage: pic,
      },
      {
        name: 'National Convention 2021',
        image: pic,
        fullImage: pic,
      },
      {
        name: 'NSBE in Action',
        image: pic,
        fullImage: pic,
      },
      {
        name: 'Scholarships and Awards',
        image: pic,
        fullImage: pic,
      },
  ];

  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className="collections-page">
      <h1 className="collections-title">Collections</h1>
      <div className="collections-grid">
        {collections.map((collection, index) => (
          <div key={index} className="collection-item">
            <div className="image-container">
              <img
                src={collection.image}
                alt={collection.name}
                className="collection-image"
                onClick={() => handleImageClick(collection.fullImage)}
              />
              <div className="modal-overlay" onClick={handleCloseModal}>
                <div className="modal">
                  <img src={modalImage} alt="Full Size" />
                  <button className="close-modal" onClick={handleCloseModal}>X</button>
                </div>
              </div>
            </div>
            <h2 className="collection-name">{collection.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
