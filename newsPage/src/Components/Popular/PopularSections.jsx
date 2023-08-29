import React from "react";

const PopularSections = (props) => {
  return (
    <div className=" grid grid-cols-2 mt-11 mr-5">
      <img src={props.imgLink} className='ml-6'/>
      <div className="pl-5 h-auto">
        <h1 className="text-gray-400 font-bold text-5xl">{props.rank}</h1>
        <h2 className="font-bold mt-2">{props.topic}</h2>
        <p className={`font-thin ${props.marginButton}`}>{props.content}</p>
      </div>
    </div>
  );
};

export default PopularSections;
