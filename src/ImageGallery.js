import React, { useState, useEffect } from 'react';
import apiData from './apidata';
import './ImageGallery.scss'; // Link to your SCSS file for styles

const ImageGallery = ({ onImageSelect }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(apiData); // fetch data
  }, []);

  return (
    <div className="gallery">
      {posts.map((post) => (
        <div className="image-card" key={post.id} onClick={() => onImageSelect(post)}>
          <img src={post.thumbnail.small} alt={post.title} />
          <div>{post.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
