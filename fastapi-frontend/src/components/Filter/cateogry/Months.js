import React from "react";
import FilterButton from "../FilterButton";

const Months = ({ updateMonths }) => {
    let months = [
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
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button
                    className="accordion collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                >
                    Months
                </button>
            </h2>
            <div 
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
            >
                <div className="accordion-body flex flex-wrap gap-3">
                    {months.map((item, index) => {
                        return(
                            <FilterButton
                                name="months"
                                index={index}
                                key={index}
                                task={updateMonths}
                                input={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Months