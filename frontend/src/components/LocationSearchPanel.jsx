import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const locations = [
    "Lakhanwal Kalan P/O Lakhanwal Khas district Gujrat",
    "Lakhanwal Khas P/O Lakhanwal Khas district Gujrat",
    "Kalan P/O Lakhanwal Khas district Gujrat",
    "Kalan Lakhanwal Khas district Gujrat",
  ];
  return (
    <div>
      {locations.map(function (elem,ind) {
        return (
          <div onClick={()=>{
            props.setvehiclePanel(true)
            props.setPanelOpen(false)
          }} className="flex gap-4 my-4 items-center border-2 border-gray-50 active:border-black rounded-xl p-2" key={ind} >
            <h2 className="h-8 w-12 flex items-center justify-center rounded-full bg-[#eeeeee]">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">
              {elem}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
