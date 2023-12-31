import React, { useState } from "react";
import { Permanent_Marker } from "next/font/google";
import Image from "next/image";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const FishCard = ({ fish }) => {
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
    <div className="flex flex-col mb-4 items-center shadow-lg bg-animal_crossing_brown rounded-lg border-2 border-animal_crossing_tan">
      <div className="flex">
        <div className="align-content-center">
          {/* Fish Image */}
          <Image
            src={fish.image_url}
            alt={fish.name}
            height={100}
            width={100}
            className="w-24 h-24 rounded mr-4"
          />

          {/* Fish Name */}
          <div className={`text-xl mb-2 text-center  ${font.className}`}>
            {fish.name}
          </div>
        </div>
        {/* Card Content */}
        <div className="px-4 py-4">
          {/* Location */}
          <p className="text-gray-800 mb-2">Location: {fish.location}</p>

          {/* Shadow Size */}
          <p className="text-gray-800 mb-2">Shadow Size: {fish.shadow_size}</p>

          {/* Sell Price */}
          <div className="flex items-center text-gray-800 ">
            <span>Sell Price (Nook): </span>
            <span>{fish.sell_nook.toLocaleString()}</span>
            <Image
              src="/img/money_bag.png"
              alt="Bells"
              height={100}
              width={100}
              className="ml-2 h-5 w-5"
            />
          </div>
          <div className="flex items-center text-gray-800 text-base mb-2">
            <span>Sell Price (CJ): </span>
            <span> {fish.sell_cj.toLocaleString()}</span>
            <Image
              src="/img/money_bag.png"
              alt="Bells"
              height={100}
              width={100}
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

export default FishCard;
