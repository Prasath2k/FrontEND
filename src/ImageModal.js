import React from 'react';
import './ImageModal.scss'; 

// The ImageModal component takes props for the selected image and a close function
const ImageModal = ({ selectedImage, onClose }) => {
  // If there's no image selected, don't display the modal
  if (!selectedImage) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}> // Prevent click inside the modal from closing it
        <img src={selectedImage.thumbnail.large} alt={selectedImage.title} />
        <h2>{selectedImage.title}</h2>
        <p>{selectedImage.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
