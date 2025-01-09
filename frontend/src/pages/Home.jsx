import React from "react";
import logo from "../assets/Uber_logo_black.png";
import map from "../assets/uber_map.jpeg";

const Home = () => {
  return (
    <div className="h-screen relative">
      <img className="w-16 absolute left-5 top-5" src={logo} alt="Uber logo" />
      <div className="w-screen h-screen">
        <img className="h-full w-full " src={map} alt="" />
      </div>

      <div className="bg-white absolute top-0 w-full p-5">
        <h4 className="text-2xl font-semibold">Find a trip</h4>
        <form>
          <input className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-3"  type="text" placeholder="Add a pick-up location" />
          <input className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter your destination" />
        </form>
      </div>
    </div>
  );
};

export default Home;
