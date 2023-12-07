import React from "react";
import FilterButton from "../FilterButton";

const Location = ({ updateLocation }) => {
    let location = [
        "Beach disguised as shells",
        "Flying",
        "Flying by hybrid flowers",
        "Flying by light",
        "Hitting rocks",
        "On beach rocks",
        "On flowers",
        "On flowers (white)",
        "On palm trees",
        "On palms and rivers",
        "On rocks and bushes (rain)",
        "On rotten food",
        "On the ground",
        "On the ground (rolling snowballs)",
        "On trash items",
        "On tree stumps",
        "On trees",
        "Shaking trees",
        "Under trees disguised as leaves",
        "Underground",
        "Villager's heads",
        "River",
        "Pond",
        "Pier",
        "River (clifftop)",
        "River (clifftop) Pond", 
        "River (mouth)",
        "Sea",
        "Sea (rain)"

    ];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button
                    className="accordion collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                >
                    Location
                </button>
            </h2>
            <div 
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
            >
                <div className="accordion-body flex flex-wrap gap-3">
                    {location.map((item, index) => {
                        return(
                            <FilterButton
                                name="Location"
                                index={index}
                                key={index}
                                task={updateLocation}
                                input={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Location