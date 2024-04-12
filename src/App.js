import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ImageModal from './ImageModal';
import './App.scss';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <ImageGallery onImageSelect={handleImageSelect} />
      <ImageModal selectedImage={selectedImage} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
