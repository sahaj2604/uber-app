import React from "react";

const LocationSearchPanel = ({ setVehiclePanel, setPanelOpen }) => {
  const location = [
    "Shiv Nagar part-1, rewari, haryana",
    "Shiv Nagar part-2, rewari, haryana",
    "Shiv Nagar part-3, rewari, haryana",
    "Shiv Nagar part-4, rewari, haryana",
  ];
  return (
    <div>
      {location.map(function (item, key) {
        return (
          <div
            key={key}
            onClick={() => {
              setVehiclePanel(true);
              setPanelOpen(false);
            }}
            className="flex items-center justify-start my-2 gap-4 border-gray-50 border-2 p-3 rounded-lg active:border-black "
          >
            <h2 className="bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{item}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
