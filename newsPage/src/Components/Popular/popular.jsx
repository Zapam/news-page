import React from "react";
import firstImage from "./image-retro-pcs.jpg";
import secondImage from "./image-top-laptops.jpg";
import thirdImage from "./image-gaming-growth.jpg";

const Popular = () => {
  return (
    <div className="md:flex">
      <div className="mt-[5rem] grid grid-cols-2 md:mt-10 md:mb-10 md:grid-span-3">
        <img src={firstImage} alt="Retro PCs" className="w-[80%] ml-6" />
        <div className="flex flex-col mr-5  mb-1">
          <h1 className="font-bold text-[2.5rem] text-gray-500">01</h1>
          <h2 className="font-semibold hover:text-red-500 transition duration-300 ease-in-out cursor-pointer">Reviving Retro PCs</h2>
          <p className="font-thin">What Happens When Old PCs are Given Modern Upgrades</p>
        </div>
      </div>
      <div className="mt-[2.5rem] grid grid-cols-2 md:mt-10 md:mb-10 md:grid-span-3">
        <img src={secondImage} alt="Retro PCs" className="w-[80%] ml-6" />
        <div className="flex flex-col justify-center mr-5">
          <h1 className="font-bold text-[2.5rem] text-gray-500">02</h1>
          <h2 className="font-semibold hover:text-red-500 transition duration-300 ease-in-out cursor-pointer">Reviving Retro PCs</h2>
          <p className="font-thin">What Happens When Old PCs are Given Modern Upgrades</p>
        </div>
      </div>
      <div className="my-[2.5rem] grid grid-cols-2 md:mt-10 md:mb-10 md:grid-span-3">
        <img src={thirdImage} alt="Retro PCs" className="w-[80%] ml-6" />
        <div className="flex flex-col justify-center mr-5">
          <h1 className="font-bold text-[2.5rem] text-gray-500">03</h1>
          <h2 className="font-semibold hover:text-red-500 transition duration-300 ease-in-out cursor-pointer">Reviving Retro PCs</h2>
          <p className="font-thin">What Happens When Old PCs are Given Modern Upgrades</p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
