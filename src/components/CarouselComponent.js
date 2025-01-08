import React, { useEffect, useState } from 'react';
import image1 from '../assets/left.png';
import image2 from '../assets/right.png';
import logo1 from '../assets/logo3.png';
import './CarouselComponent.css'

const CarouselComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2];
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    // Set an interval to change images every 3 seconds
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000); 

    // After 3 seconds (image animation completes), show the text
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000); // Wait for images to finish moving

    return () => {
      clearInterval(interval);
      clearTimeout(textTimer);
    };
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage(prev => (prev + 1) % images.length);
  //   }, 3000); // Change image every 3 seconds
  //   return () => clearInterval(interval);
  // }, []);
  
  return (
    <div className="animation-container">
      <div className="image-left">
        <img src={image1} alt="left" className="image"/>
      </div>
      <div className="image-right">
        <img src={image2} alt="right" className="image"/>
      </div>
         {/* Text element that appears after the image swap */}
         <div className={`text ${showText ? 'text-show' : 'text-hide'}`}>
        A Dramatic Experience
      </div>
    </div>
  );
};

export default CarouselComponent;
