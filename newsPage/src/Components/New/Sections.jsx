import React from "react";

const Sections = (props) => {
  return (
    <div className="text-white ml-6 mb-6 ">
      <h2 className="mt-6 font-bold hover:text-yellow-300 cursor-pointer transition duration-300 ease-in-out">{props.title}</h2>
      <p className= {`text-[80%] text-gray-500 ${props.padding} mr-6`}>{props.content}</p>
    </div>
  );
};

export default Sections;
