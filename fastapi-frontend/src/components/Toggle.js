import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Toggle() {

// State to track the hemisphere
const [isNorthernHemisphere, setIsNorthernHemisphere] = useState(true);
const [currentTime, setCurrentTime] = useState(new Date().getHours());
const [fish, setFish] = useState([]);

// Function to toggle between hemispheres
const toggleHemisphere = () => {
    setIsNorthernHemisphere((prevIsNorthern) => !prevIsNorthern);
};

// Function to set the current time
const setCurrentHour = () => {
    setCurrentTime(new Date().getHours());
}

useEffect(() => {
    const apiEndpoint = "http://127.0.0.1:8000/api/v1/fish/";

    axios
        .get(apiEndpoint)
        .then((response) => {
            console.log(response)

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
        .catch((error) => console.error('Error fetching fish:', error));
}, [isNorthernHemisphere, currentTime]);

// Effect to update the current time every minute
useEffect(() => {
    const interval = setInterval(setCurrentHour, 60000) // update every minute
    return () => clearInterval(interval);
}, []); 

return (
    <div className='flex-grow p-8'>
        <h1 className="text-3xl font-bold mb-4">
            Welcome to the Animal Crossing Creatures Guide
        </h1>
        <button 
        onClick={toggleHemisphere}
        className="bg-animal_crossing_blue hover:bg-blue-200 text-black font-bold py-2 px-4 rounded "
        >
            {isNorthernHemisphere ? "Northern" : "Southern"} Hemisphere
        </button>
        {/* Render your creatures based on the fetched data */}
        {fish.map((fish) =>
            <div key={fish.id} className='my-4'>
                {/* Display Creature information */}
                <p className='text-lg font-semibold'>Name: {fish.name}</p>
                <p>Type: {fish.type}</p>
                <p>Availability: {fish.availability.startHour}-{fish.availability.endHour}</p>
            </div>
        )}
    </div>
);
}