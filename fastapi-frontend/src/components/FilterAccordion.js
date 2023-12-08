import Image from "next/image";
import { useState } from "react";

const FilterAccordion = ({ creatures }) => {
  // State variables for filters
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedCreatureType, setSelectedCreatureType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Toggle accordion visibility
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Filtering logic based on selected filters
  const filteredCreatures = creatures?.filter((creature) => {
    return (
      (selectedMonth === "" || creature.month === selectedMonth) &&
      (selectedCreatureType === "" || creature.type === selectedCreatureType) &&
      (selectedLocation === "" || creature.location === selectedLocation)
    );
  });

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
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full border p-2"
              >
                <option value="">All</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
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
                <option value="Villager's heads">Villager's heads</option>
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
          <Image src={creature.image} alt="" height={200} width={200} />
          <p>{creature.name}</p>
          <p>{creature.location}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterAccordion;
