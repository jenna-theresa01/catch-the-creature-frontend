import React, { useState } from "react";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const DeepSeaCard = ({ deepSea }) => {
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
    <div className="flex flex-col mb-4 items-center shadow-lg bg-animal_crossing_brown rounded-lg border-2 border-animal_crossing_tan max-w-md mx-auto">
      <div className="flex items-center">
        <div>
          {/* Deep Sea Creature Image */}
          <img
            src={deepSea.image_url}
            alt={deepSea.name}
            className="w-24 h-24 rounded mr-4"
          />

          {/* Deep Sea Creature Name */}
          <div className={`text-xl text-center ${font.className}`}>
            {deepSea.name}
          </div>
        </div>
        {/* Card Content */}
        <div className="px-4 py-4">
          {/* Shadow Size */}
          <p className="text-base mb-2">Shadow Size: {deepSea.shadow_size}</p>

          {/* Shadow Movement */}
          <p className="text-base mb-2">Shadow Movement: {deepSea.shadow_movement}</p>

          {/* Sell Price */}
          <div className="flex items-center text-gray-800 text-base mb-2">
            <span>Sell Price (Nook): </span>
            <span>{deepSea.sell_nook.toLocaleString()}</span>
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
            caught ? "bg-animal_crossing_sage" : "bg-animal_crossing_tan"
          } px-4 py-2 mr-2 rounded-full`}
          onClick={handleToggleCaught}
        >
          {caught ? "Caught!" : "Caught"}
        </button>
        <button
          className={`text-black ${
            donated ? "bg-animal_crossing_sage" : "bg-animal_crossing_tan"
          } px-4 py-2 mr-2 rounded-full`}
          onClick={handleToggleDonated}
        >
          {donated ? "Donated!" : "Donated"}
        </button>
      </div>
    </div>
  );
};

export default DeepSeaCard;
