import React from 'react';

const ImageComponent = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      {/* Show first image on medium and large screens */}
      <img
        src="/home/amirreza/Desktop/Projects/Projects/news page/news-page/newsPage/src/assets/image-web-3-desktop.jpg"
        className="hidden md:block max-w-full h-auto"
      />

      {/* Show second image on small screens */}
      <img
        src='newsPage/src/Components/Trending/image-web-3-mobile.jpg'
        className="md:hidden max-w-full h-auto"
      />
    </div>
  );
};

export default ImageComponent;
