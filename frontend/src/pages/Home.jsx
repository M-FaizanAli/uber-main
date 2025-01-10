import React, { useState } from "react";
import logo from "../assets/Uber_logo_black.png";
import map from "../assets/uber_map.jpeg";
import {useGSAP} from '@gsap/react'

const Home = () => {
  const [pickUp, setPickUp] = useState();
  const [destination, setDestination] = useState();
  const [panelOpen, setPanelOpen] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
  }

  
  return (
    <div className="h-screen relative">
      <img className="w-16 absolute left-5 top-5" src={logo} alt="Uber logo" />
      <div className="w-screen h-screen">
        <img className="h-full w-full " src={map} alt="" />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) =>{
            submitHandler(e);
          }}>
            <input
            onClick={() => setPanelOpen(true)}
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
            onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div className="bg-red-500 h-0">

        </div>
      </div>
    </div>
  );
};

export default Home;
