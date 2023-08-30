import React from "react";
import Navbar from "./Components/Navbar";
import New from "./Components/New/New";
import Popular from "./Components/Popular/popular";
import Trend from "./Components/Trending/Trend";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="md:flex">
        <div  className="md:w-[75%]">
          {" "}
          <Trend />
        </div>
        <div className="md:w-[25%] h-[]">
          <New />
        </div>
      </div>
      <Popular />
    </div>
  );
};

export default App;
