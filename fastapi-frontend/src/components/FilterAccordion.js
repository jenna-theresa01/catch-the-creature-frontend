"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import CreatureType from "./Filter/category/Types";

const FilterAccordion = ({hemisphere, creatures}) => {
  // const hemisphere = 'north'
  console.log(creatures)
  const initialCreatures = creatures && [creatures]
  // State variables for filters
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedCreatureType, setSelectedCreatureType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredCreatures, setFilteredCreatures] = useState(initialCreatures);
  
  console.log(filteredCreatures)
  console.log(filteredCreatures?.length)
  console.log(hemisphere)

  useEffect(() => {
    setFilteredCreatures(creatures)
  },[creatures])

  // Toggle accordion visibility
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Filtering logic based on selected filters
  const filteredCreaturesFilter = () => creatures?.filter((creature) => {
    if (hemisphere === 'north') {
      console.log(creature.north.months_array?.includes(Number(selectedMonth)))
      return (
        (selectedMonth === "" || creature.north.months_array?.includes(Number(selectedMonth))) &&
        (selectedCreatureType === "" || creature.type === selectedCreatureType) &&
        (selectedLocation === "" || creature.location?.includes(selectedLocation))
      );
    }
    if (hemisphere === 'south') {
      
      return (
        (selectedMonth === "" || creature.south.months_array?.includes(Number(selectedMonth))) &&
        (selectedCreatureType === "" || creature.type === selectedCreatureType) &&
        (selectedLocation === "" || creature.location?.includes(selectedLocation))
      );
    }
  });

  useEffect(() => {
    console.log('in useEffect ', selectedMonth, selectedLocation, selectedCreatureType)
    setFilteredCreatures(filteredCreaturesFilter)
  },[selectedMonth, selectedCreatureType, selectedLocation, hemisphere])

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
                  console.log('hello onChange')
                  setSelectedMonth(e.target.value)
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
                {/* TODO: */}
              </select>
            </div>

            {/* Creature Type Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-bold">Creature Type</label>
              <select
                value={selectedCreatureType}
                onChange={(e) => setSelectedCreatureType(e.target.value)}
                className="w-full border p-2"
              >
                <option value="">All</option>
                <option value="Fish">Fish</option>
                <option value="Bug">Bug</option>
                <option value="Deep Sea Creatures">Deep Sea Creatures</option>
              </select>
            </div>

            {/* Location Filter */}
            <div className="mb-4">
              <label className="block mb-2 font-bold">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full border p-2"
              >
                <option value="">All</option>
                <option value="Beach disguised as shells">
                  Beach disguised as shells
                </option>
                <option value="Flying">Flying</option>
                <option value="Flying by hybrid flowers">
                  Flying by hybrid flowers
                </option>
                <option value="Flying by light">Flying by light</option>
                <option value="Hitting rocks">Hitting rocks</option>
                <option value="On beach rocks">On beach rocks</option>
                <option value="On flowers">On flowers</option>
                <option value="On flowers (white)">On flowers (white)</option>
                <option value="On palm trees">On palm trees</option>
                <option value="On palms and rivers">Pond</option>
                <option value="On rocks and bushes (rain)">
                  On rocks and bushes (rain)
                </option>
                <option value="On rotten food">On rotten food</option>
                <option value="On the ground">On the ground</option>
                <option value="On the ground (rolling snowballs)">
                  On the ground (rolling snowballs)
                </option>
                <option value="On trash items">On trash items</option>
                <option value="On tree stumps">On tree stumps</option>
                <option value="On trees">On trees</option>
                <option value="Shaking trees">Shaking trees</option>
                <option value="Under trees disguised as leaves">
                  Under trees disguised as leaves
                </option>
                <option value="Underground">Underground</option>
                <option value="villagers">Villager's heads</option>
                <option value="River">River</option>
                <option value="Pond">Pond</option>
                <option value="Pier">Pier</option>
                <option value="River (clifftop)">River (clifftop)</option>
                <option value="River (clifftop) Pond">
                  River (clifftop) Pond
                </option>
                <option value="River (mouth)">River (mouth)</option>
                <option value="Sea">Sea</option>
                <option value="Sea (rain)">Sea (rain)</option>
              </select>
            </div>
          </div>
        )}
      </div>
      {/* Display the number of filtered creatures */}
      <p className="mt-7">Number of Creatures: {filteredCreatures?.length}</p>

      {filteredCreatures?.map((creature) => (
        <div className="flex flex-col">
          {/* TODO: MAKE THIS LOOK HOW YOU WANT */}
          <img src={creature.image_url} alt="" height={200} width={200} />
          <p>{creature.name}</p>
          <p>{creature.location}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterAccordion;
