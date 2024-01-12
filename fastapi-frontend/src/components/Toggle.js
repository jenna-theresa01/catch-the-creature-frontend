import axios from "axios";
import React, { useState, useEffect } from "react";
import { Permanent_Marker } from "next/font/google";
import { API_URL } from "@/services/auth.constants";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

export default function Toggle(props) {
  // console.log(props)
  // State to track the hemisphere
  const [isNorthernHemisphere, setIsNorthernHemisphere] = useState(props.hemisphere=='north');
  const [currentTime, setCurrentTime] = useState(new Date().getHours());
  const [fish, setFish] = useState([]);

  // Function to toggle between hemispheres
  const toggleHemisphere = () => {
    setIsNorthernHemisphere((prevIsNorthern) => !prevIsNorthern);
  };

  // Function to set the current time
  const setCurrentHour = () => {
    setCurrentTime(new Date().getHours());
  };

  useEffect(() => {
    const apiEndpoint = `${API_URL}fish/`;

    axios
      .get(apiEndpoint)
      .then((response) => {
        // console.log(response);

        // Extract the array of creatures from the nested structure
        const fishData = response.data.data;

        // Filter fish based on the hemisphere
        const filteredFish = fishData.filter((fish) => {
          const isAvailable =
            fish.isNorthernHemisphere === isNorthernHemisphere &&
            fish.availability.startHour <= currentTime &&
            fish.availability.endHour >= currentTime;

          return isAvailable;
        });

        setFish(filteredFish);
      })
      .catch((error) => console.error("Error fetching fish:", error));
  }, [isNorthernHemisphere, currentTime]);

  // Effect to update the current time every minute
  useEffect(() => {
    const interval = setInterval(setCurrentHour, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow p-8">
      <button
        // onClick={toggleHemisphere}
        onClick={props.onClick}
        className={`bg-animal_crossing_brown hover:bg-animal_crossing_tan text-black font-bold py-2 px-4 rounded-lg shadow-lg`}
      >
        {/* {isNorthernHemisphere ? "Northern" : "Southern"} Hemisphere */}
        {props.hemisphere === 'north' ? "Northern" : "Southern"} Hemisphere
      </button>
      {/* Render your creatures based on the fetched data */}
      {fish.map((fish) => (
        <div key={fish.id} className="my-4">
          {/* Display Creature information */}
          <p className="text-lg font-semibold">Name: {fish.name}</p>
          <p>Type: {fish.type}</p>
          <p>
            Availability: {fish.availability.startHour}-
            {fish.availability.endHour}
          </p>
        </div>
      ))}
    </div>
  );
}
