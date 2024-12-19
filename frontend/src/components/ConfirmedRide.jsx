import React from "react";

const ConfirmedRide = ({ setConfirmRidePanel, setVehicleFound }) => {
  return (
    <div>
      <h5
        className="absolute top-1 w-[90%] mx-auto text-center text-gray-300 text-2xl"
        onClick={() => setConfirmRidePanel(false)}
      >
        <i className="ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">563/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div>
          <div className="flex gap-5 items-center p-3 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">563/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
            </div>
          </div>
          <div>
          <div className="flex gap-5 items-center p-3 ">
          <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash Cash
              </p>
            </div>
            </div>
          </div>
        </div>
        <button onClick={()=>{setVehicleFound(true); setConfirmRidePanel(false)}} className="w-full mt-5 bg-green-600 text-white font-semibold rounded-lg p-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
