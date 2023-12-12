import React from "react";
import FilterButton from "../FilterButton";

const CreatureType = ({ updateCreatureType }) => {
    let creatureType = [
        "Fish",
        "Bugs",
        "Deep Sea Creatures"
    ];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                >
                    Creature Type
                </button>
            </h2>
            <div 
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
            >
                <div className="accordion-body flex flex-wrap gap-3">
                    {creatureType.map((item, index) => {
                        return(
                            <FilterButton
                                name="creatureType"
                                index={index}
                                key={index}
                                task={updateCreatureType}
                                input={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CreatureType