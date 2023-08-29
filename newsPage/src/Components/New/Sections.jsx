import React from "react";

const Sections = (props) => {
  return (
    <div className="text-white ml-6 mb-6">
      <h2 className="mt-6 font-bold">{props.title}</h2>
      <p className= {`text-[80%] text-gray-500 ${props.padding} `}>{props.content}</p>
    </div>
  );
};

export default Sections;
