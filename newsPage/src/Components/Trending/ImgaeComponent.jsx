import React from 'react';
import imageDesktop from './image-web-3-desktop.jpg'
import imageMobile from './image-web-3-mobile.jpg'

const ImageComponent = () => {
  return (
    <div>
      {/* Show first image on medium and large screens */}
      <img
        src={imageDesktop}
        className="hidden md:block max-w-full h-auto px-4 pt-3 rounded"
      />

      {/* Show second image on small screens */}
      <img
        src={imageMobile}
        className="md:hidden px-4 pt-3 rounded"
      />
    </div>
  );
};

export default ImageComponent;
