import React, { useState } from "react";
import FilterButton from "../FilterButton";

const Month = ({ updateMonth }) => {
  const [filterMonth, setFilterMonth] = useState("");
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {month.map((item, index) => {
        return (
          <FilterButton
            name="month"
            index={index}
            key={index}
            task={(selectedMonth) => {
              setFilterMonth(selectedMonth);
            //   updateMonth(selectedMonth);
            }}
            input={item}
          />
        );
      })}
    </div>
  );
};

export default Month;
