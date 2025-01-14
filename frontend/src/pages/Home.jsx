import React, { useRef, useState } from "react";
import logo from "../assets/Uber_logo_black.png";
import map from "../assets/uber_map.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current,{
        padding:20,
        height: '70%'
      })
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })
    }
    else{
      gsap.to(panelRef.current,{
        padding:0,
        height: '0%'
      })


      
      gsap.to(panelCloseRef.current,{
        opacity: 0
      })
    }
  },[panelOpen, panelCloseRef])

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src={logo} alt="Uber logo" />
      <div className="w-screen h-screen">
        <img className="h-full w-full " src={map} alt="" />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%]  p-6 bg-white relative">

          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}}
           className="opacity-0 absolute top-6 right-6 text-2xl">
            <i className="ri-arrow-down-s-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              onClick={() => setPanelOpen(true)}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
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

        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
