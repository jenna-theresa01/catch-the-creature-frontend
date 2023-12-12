import React from "react";

const FilterButton = ({ input, task, index, name }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <button
          onClick={() => {
            task(input);
          }}
          className="bg-animal_crossing_brown px-4 py-2 rounded-lg border-2 border-animal_crossing_tan"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
