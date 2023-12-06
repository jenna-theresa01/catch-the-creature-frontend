import { useState } from 'react';

const CreatureFilter = ({ creatures }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filterCreatures = (filter) => {
    // Your filtering logic goes here
    // You may need to filter based on months, locations, and creature types
    // Update the state with the filtered creatures
    };

    const handleClick = (filter) => {
        setActiveFilter(filter);
        filterCreatures(filter);
    };

    return (
        <div>
            {/* Control Buttons */}
            <div id="myBtnContainer">
                <button
                className={`btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleClick('all')}
                >
                    Show All
                </button>
                <button
            </div>
        </div>
    )
}
