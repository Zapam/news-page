import React from "react";
import Sections from "./Sections";

const New = () => {
  return (
    <div className="bg-[rgb(4,2,27)] mx-6 mt-6 md:float-right ">
      <h1 className="text-yellow-300 font-bold text-[2rem] pt-6 pl-6">NEW</h1>
      <Sections
        title="Hydrogen VS Elctric Cars"
        content="To pass props to a functional component in React,"
      />
      <hr className="w-[90%] mx-auto text-gray-500" />
      <Sections
        title="Hydrogen VS Elctric Cars"
        content="To pass props to a functional component in React,"
      />
      <hr className="w-[90%] mx-auto text-gray-500" />
      <Sections
        title="Hydrogen VS Elctric Cars"
        content="To pass props to a functional component in React,"
        padding='pb-6'
      />
    </div>
  );
};

export default New;
