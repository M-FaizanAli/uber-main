import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
            onClick={() => {
              props.setvehiclePanel(false);
            }}
            className="p-1 text-center w-[93%] absolute top-0"
          >
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
          </h5>
          <h3 className="text-2xl font-semibold my-3">Choose a Vehicle</h3>
          <div className="w-full border-2 active:border-black rounded-xl flex justify-between items-center mb-2 p-3 border-b">
            <img
              className="h-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPGI-iHeemcF6uAJQFSrVrxBbivtP30Mbsg&s"
              alt=""
            />
            <div className="w-1/2">
              <h4 className="font-medium text-base">
                UberGo{" "}
                <span>
                  <i className="ri-user-3-fill"></i>5
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 Mins Away</h5>
              <p className="font-normal text-xs text-grey0-600">
                {" "}
                Affordable, Comfortable Ride
              </p>
            </div>
            <h2 className="text-lg font-semibold">Rs: 500</h2>
          </div>

          <div className="w-full border-2 active:border-black rounded-xl flex justify-between items-center p-3 mb-2 border-b">
            <img
              className="h-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDPKU_xSuB7JekO9ycEbvmmCpRGK84nuJcg&s"
              alt=""
            />
            <div className="w-1/2">
              <h4 className="font-medium text-base">
                Moto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>3
                </span>
              </h4>
              <h5 className="font-medium text-sm">3 Mins Away</h5>
              <p className="font-normal text-xs text-grey0-600">
                {" "}
                Affordable, Comfortable Moto Ride
              </p>
            </div>
            <h2 className="text-lg font-semibold">Rs: 300</h2>
          </div>

          <div className="w-full border-2 active:border-black rounded-xl flex justify-between items-center p-3 mb-2 border-b">
            <img className="h-16" src="" alt="" />
            <div className="w-1/2">
              <h4 className="font-medium text-base">
                UberAuto{" "}
                <span>
                  <i className="ri-user-3-fill"></i>2
                </span>
              </h4>
              <h5 className="font-medium text-sm">4 Mins Away</h5>
              <p className="font-normal text-xs text-grey0-600">
                {" "}
                Affordable Auto Ride
              </p>
            </div>
            <h2 className="text-lg font-semibold">Rs: 350</h2>
          </div>
    </div>
  )
}

export default VehiclePanel
