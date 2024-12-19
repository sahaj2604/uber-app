import React from "react";

const VehiclePanel = ({ setVehiclePanel,setConfirmRidePanel }) => {
  return (
    <div>
      <h5
        className="absolute top-1 w-[90%] mx-auto text-center text-gray-300 text-2xl"
        onClick={() => setVehiclePanel(false)}
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 pt-3">Choose a Vehicle</h3>
      <div onClick={()=>setConfirmRidePanel(true)} className="flex w-full p-3 mb-2 items-center justify-between border-2 active:border-black rounded-xl">
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$193.20</h2>
      </div>
      <div onClick={()=>setConfirmRidePanel(true)} className="flex w-full p-3 mb-2 items-center justify-between border-2 active:border-black rounded-xl">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$65.20</h2>
      </div>
      <div onClick={()=>setConfirmRidePanel(true)} className="flex w-full p-3 mb-2 items-center justify-between border-2 active:border-black rounded-xl">
        <img
          className="h-12"
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$118.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
