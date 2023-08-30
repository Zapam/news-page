import React from "react";
import ImageComponent from "./ImgaeComponent";

const Trend = () => {
  return (
    <div>
      <ImageComponent />
      <div className="grid md:grid-cols-2">
        <h1 className="text-gray-950 font-bold text-[3rem] mt-3 mx-4">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="text-gray-500 p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta
            qui corporis itaque, aliquam tempore, maiores alias obcaecati, optio
            magnam id eum maxime ullam omnis vel.
          </p>
          <button className="px-4 py-3 m-3 bg-red-400 text-white font-bold hover:bg-gray-900 transition duration-300 ease-in-out">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Trend;
