"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import CreatureType from "./Filter/category/Types";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const FilterAccordion = ({ hemisphere, creatures }) => {
  // const hemisphere = 'north'
  // console.log(creatures);
  const initialCreatures = creatures && [creatures];
  // State variables for filters
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedCreatureType, setSelectedCreatureType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredCreatures, setFilteredCreatures] = useState(initialCreatures);

  const locations = creatures
    ? creatures.reduce(
        (ac, cur) => (ac.includes(cur.location) ? ac : [...ac, cur.location]),
        []
      )
    : [];

  // console.log(filteredCreatures);
  // console.log(filteredCreatures?.length);
  // console.log(hemisphere);

  useEffect(() => {
    setFilteredCreatures(creatures);
  }, [creatures]);

  // Toggle accordion visibility
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Filtering logic based on selected filters
  const filteredCreaturesFilter = () =>
    creatures?.filter((creature) => {
      if (hemisphere === "north") {
        // console.log(
        //   creature.north.months_array?.includes(Number(selectedMonth))
        // );
        return (
          (selectedMonth === "" ||
            creature.north.months_array?.includes(Number(selectedMonth))) &&
          (selectedCreatureType === "" ||
            creature.type === selectedCreatureType) &&
          (selectedLocation === "" ||
            creature.location?.includes(selectedLocation))
        );
      }
      if (hemisphere === "south") {
        return (
          (selectedMonth === "" ||
            creature.south.months_array?.includes(Number(selectedMonth))) &&
          (selectedCreatureType === "" ||
            creature.type === selectedCreatureType) &&
          (selectedLocation === "" ||
            creature.location?.includes(selectedLocation))
        );
      }
    });

      // // Helper function to format time
      // const formatTime = (hemisphere, selectedMonth) => {
      //   if (!hemisphere || !hemisphere.availability_array || !hemisphere.times_by_month) {
      //     return "Anytime";
      //   }
      
      //   const monthAvailability = hemisphere.availability_array.find((availability) => {
      //     const [startMonth, endMonth] = availability.months.split(' – ');
      
      //     if (startMonth && endMonth) {
      //       const numSelectedMonth = Number(selectedMonth);
      //       const numStartMonth = Number(startMonth);
      //       const numEndMonth = Number(endMonth);
      
      //       if (numStartMonth <= numEndMonth) {
      //         return numSelectedMonth >= numStartMonth && numSelectedMonth <= numEndMonth;
      //       } else {
      //         // Handle cases where the range wraps around (e.g., Dec - Jan)
      //         return numSelectedMonth >= numStartMonth || numSelectedMonth <= numEndMonth;
      //       }
      //     }
      
      //     return false;
      //   });
      
      //   if (!monthAvailability) {
      //     return "NA";
      //   }
      
      //   return hemisphere.times_by_month[selectedMonth] || "Anytime";
      // };


  useEffect(() => {
    console.log(
      "in useEffect ",
      selectedMonth,
      selectedLocation,
      selectedCreatureType
    );
    setFilteredCreatures(filteredCreaturesFilter);
  }, [selectedMonth, selectedCreatureType, selectedLocation, hemisphere, filteredCreaturesFilter]);

  return (
    <div className="w-full max-w-md">
      <div className="border rounded overflow-hidden">
        <div
          className="border-b cursor-pointer flex justify-between items-center p-4"
          onClick={toggleAccordion}
        >
          <span>Filters</span>
          <svg
            className={`transition-transform transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        {isOpen && (
          <div className="p-4">
            {/* Month Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-bold">Month</label>
              <select
                value={selectedMonth}
                onChange={(e) => {
                  setSelectedMonth(e.target.value);
                }}
                className="w-full border p-2"
              >
                <option value="">All</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            {/* Creature Type Filter */}
            {/* <div className="mb-4">
              <label className="block mb-2 font-bold">Creature Type</label>
              <select
                value={selectedCreatureType}
                onChange={(e) => setSelectedCreatureType(e.target.value)}
                className="w-full border p-2"
              >
                <option value="">All</option>
                <option value="fish">Fish</option>
                <option value="bug">Bug</option>
                <option value="sea">Deep Sea Creatures</option>
              </select>
            </div> */}

            {/* Location Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-bold">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full border p-2"
              >
                <option value="">All</option>
                {/* Dynamically generate location options */}
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      {/* Display the number of filtered creatures */}
      <p className="mt-7">Number of Creatures: {filteredCreatures?.length}</p>
      <div className="flex flex-wrap justify-center">
        {filteredCreatures?.map((creature) => (
          <div key={creature.id} className="flex flex-col m-4 items-center shadow-lg bg-animal_crossing_brown rounded-lg border-2 border-animal_crossing_tan" >
            <div className="align-content-center">
              <Image
                src={creature.image_url}
                alt=""
                height={100}
                width={100}
                className="ml-9"
              />
              <p className={`text-center ${font.className}`}>{creature.name}</p>
              <div className="m-3">
                <p>Location: {creature.location}</p>

                {/* <div>
                <p>Time: {formatTime(creature.hemisphere, selectedMonth)}</p>
                </div> */}

                <div className="flex items-center">
                  {/* {" "} */}
                  <p>Nook Price: {creature.sell_nook.toLocaleString()}</p>
                  <Image
                    src="/img/money_bag.png"
                    alt="Bells"
                    width="5"
                    height="5"
                    className="ml-2 h-5 w-5"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterAccordion;
