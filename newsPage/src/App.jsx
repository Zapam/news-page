import React from "react";
import Navbar from "./Components/Navbar";
import New from "./Components/New/New";
import Popular from "./Components/Popular/popular";
import Trend from "./Components/Trending/Trend";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="md:grid md:grid-cols-2">
        <Trend className="md:col-span-3" />
        <New className="md:col-span-1" />
      </div>
      <Popular />
    </div>
  );
};

export default App;
