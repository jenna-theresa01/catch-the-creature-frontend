import { useState } from 'react';
import { API_URL } from '@/services/auth.constants';
import axios from 'axios';

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let endpoints = [
    'http://127.0.0.1:8000/api/v1/fish/',
    'http://127.0.0.1:8000/api/v1/bugs/',
    'http://127.0.0.1:8000/api/v1/deep-sea-creatures/'
]

axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    (data) => console.log(data)
);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const CreatureFilter = ({ creatures }) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredCreatures, setFilteredCreatures] = useState();
    const [filteredMonth, setFilteredMonths] = useState();
    const [filterType, setFilteredType] = useState();
    const [filteredLocation, setFilteredLocation] = useState();

    const Filter = ({
        
    })

    // const filterCreatures = (filter) => {
    // // Assuming creatures is an array of objects with properties like 'type', 'location', 'months'
    // const filteredCreatures = creatures.filter((creature) => {
    //     // Implement filtering logic here
    //     // might want to filter based on the selected 'filter' value

    //     if (filter === 'all') {
    //         // if filter is 'all', return true for all creatures
    //         return true;
    //     }

    //     // Example: Filter based on the 'type' property
    //     if(creature.type === filter) {
    //         return true;
    //     }

    //     // add more conditions based on your requirements (e.g. months, locations)

    //     return false;
    // });

    // // Update the state with the filtered creatures
    // // assuming you have a state variable like 'setFilteredCreatures'
    // setFilteredCreatures(filteredCreatures)
    // };

    // // const handleClick = (filter) => {
    // //     setActiveFilter(filter);
    // //     filterCreatures(filter);
    // };

    return (
        <div>
            {/* Control Buttons
            <div id="myBtnContainer" className='flex space-x-4 mb-4'>
                <button
                className={`bg-animal_crossing_brown px-4 py-2 rounded-lg border-2 border-animal_crossing_brown ${activeFilter === 'all' ? 'bg-animal_crossing_tan' : ''}`}
                onClick={() => handleClick('all')}
                >
                    Show All
                </button>
                <button
                    className={`bg-animal_crossing_brown px-4 py-2 rounded-lg border-2 border-animal_crossing_tan ${activeFilter === 'fish' ? 'bg-animal_crossing_tan' : ''}`}
                    onClick={() => handleClick('fish')}
                >
                    Fish
                </button>
                <button
                    className={`bg-animal_crossing_brown px-4 py-2 rounded-lg border-2 border-animal_crossing_tan ${activeFilter === 'bugs' ? 'bg-animal_crossing_tan' : ''}`}
                    onClick={() => handleClick('fish')}
                >
                    Bugs
                </button>
                <button
                    className={`bg-animal_crossing_brown px-4 py-2 rounded-lg border-2 border-animal_crossing_tan ${activeFilter === 'deepSeaCreatures' ? 'bg-animal_crossing_tan' : ''}`}
                    onClick={() => handleClick('deepSeaCreatures')}
                >
                    Deep Sea Creatures
                </button>
            </div> */}

            {/* The filterable elements */}
            {/* <div className='container'>
                {creatures.map((creature) => 
                <div key={creature.id} className={`filterDiv ${creature.type} bg-animal_crossing_brown p-4 mb-4 rounded-lg`}>
                    {creature.name}
                </div>
                )}
            </div> */}
        </div>
    );
};

export default CreatureFilter;
