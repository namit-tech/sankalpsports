import React, { useState } from 'react';
import './gallery.css';
import basketballImages from './basketballImages';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const openModal = (media) => {
    setCurrentMedia(media);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  const handleHoverEnd = () => {
    setHoveredItem(null);
  };

  const closeDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Sankalp Sports Academy Gallery</h1>
      <p className="gallery-subtitle">Moments of Excellence, Growth, and Teamwork</p>
      
      {showDisclaimer && (
        <div className="disclaimer-banner">
          <p>Click on any photo or video to view in full screen. All media is property of our academy.</p>
          <button onClick={closeDisclaimer} className="disclaimer-close">×</button>
        </div>
      )}

      <div className="gallery-grid">
        {basketballImages.map((media, index) => (
          <div 
            className={`gallery-item ${media.src.endsWith('.mp4') ? 'video-item' : ''}`}
            key={index}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleHoverEnd}
            onClick={() => openModal(media)}
          >
            {media.src.endsWith('.mp4') ? (
              <>
                <video 
                  src={media.src} 
                  className="gallery-media"
                  muted
                  loop
                  playsInline
                  preload="none"
                />
                <div className="video-play-icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                  </svg>
                </div>
              </>
            ) : (
              <img 
                src={media.src} 
                alt={media.alt || 'Basketball academy image'} 
                className={`gallery-media ${hoveredItem === index ? 'hovered' : ''}`}
              />
            )}
            <div className="image-overlay">
              <div className="media-type-tag">
                {media.src.endsWith('.mp4') ? 'VIDEO' : 'PHOTO'}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {currentMedia && (
          <div className="modal-content">
            {currentMedia.src.endsWith('.mp4') ? (
              <video 
                src={currentMedia.src} 
                className="modal-media"
                controls
                autoPlay
                preload="none"
              />
            ) : (
              <img 
                src={currentMedia.src} 
                alt={currentMedia.alt || 'Sankalp Sports Academy image'} 
                className="modal-media"
              />
            )}
            <div className="modal-footer">
              <p className="modal-disclaimer">
                © {new Date().getFullYear()} Sankalp Sports Academy. All media content is property of the academy.
              </p>
              <button className="close-button" onClick={closeModal}>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;