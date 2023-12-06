import React, { useState } from "react";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const BugCard = ({ bug }) => {
  // set useState to be able to create a toggle function for buttons on the card
  const [caught, setCaught] = useState(false);
  const [donated, setDonated] = useState(false);

  const handleToggleCaught = () => {
    setCaught(!caught);
  };

  const handleToggleDonated = () => {
    setDonated(!donated);
  };

  return (
    <div className="flex flex-col mb-4 items-center shadow-lg bg-animal_crossing_white">
      <div className="flex">
        <div className="align-content-center">
          {/* Bug Image */}
          <img
            src={bug.image_url}
            alt={bug.name}
            className="w-24 h-24 rounded mr-4"
          />

          {/* Bug Name */}
          <div className={`text-xl mb-2 text-center ${font.className}`}>
            {bug.name}
          </div>
        </div>
        {/* Card Content */}
        <div className="px-4 py-4">
          {/* Location */}
          <p className="text-gray-800  mb-2">Location: {bug.location}</p>

          {/* Sell Price */}
          <div className="flex items-center text-gray-800 mb-2">
            <span>Sell Price (Nook):</span>
            <span>{bug.sell_nook}</span>
            <img
              src="/img/money_bag.png"
              alt="Bells"
              className="ml-2 h-5 w-5"
            />
          </div>
        </div>
      </div>
      {/* Tracking buttons */}
      <div className="m-4">
        <button
          className={`text-black ${
            caught ? "bg-green-500" : "bg-gray-500"
          } px-4 py-2 mr-2 rounded`}
          onClick={handleToggleCaught}
        >
          {caught ? "Caught!" : "Caught"}
        </button>
        <button
          className={`text-black ${
            donated ? "bg-green-500" : "bg-gray-500"
          } px-4 py-2 mr-2 rounded`}
          onClick={handleToggleDonated}
        >
          {donated ? "Donated!" : "Donated"}
        </button>
      </div>
    </div>
  );
};

export default BugCard;
