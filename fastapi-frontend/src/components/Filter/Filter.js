'use client';

import { useState } from 'react';
import { Accordion } from 'flowbite-react';
import axios from 'axios';
import Month from './category/Months';
import Location from './category/Locations';
import CreatureType from './category/Types';

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


const Filter = ({ updateMonth }) => {

    return(
        <Accordion className='bg-animal_crossing_brown'>
            <Accordion.Panel>
                <Accordion.Title className='text-black'>Months</Accordion.Title>
                <Accordion.Content className='bg-animal_crossing_tan'>
                    <Month updateMonth={updateMonth} />
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-black'>Creature Type</Accordion.Title>
                <Accordion.Content className='bg-animal_crossing_tan'>
                    <p></p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-black'>Location</Accordion.Title>
                <Accordion.Content className='bg-animal_crossing_tan'>
                    <p></p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )







    // const [filterMonth, setFilterMonth] = useState();
    // // const [filterLocation, setFilterLocation] = useState();
    // // const [filterCreatureType, setFilterCreatureType] = useState();

    // let clear = () => {
    //     setFilterMonth("");
    //     // setFilterLocation("");
    //     // setFilterCreatureType("");
    //     window.location.reload(false);
    // };
    // return (
    //     <div className='lg:col-span-3 col-span-12 mb-5'>
    //         <div className='flex text-center font-bold text-xl mb-2'>Filters</div>
    //         <div
    //             onClick={clear}
    //             className='text-primary underline text-center mb-3'
    //         >
    //             Clear Filters
    //         </div>
    //         <div className='accordion' id='accordion'>
    //             <Month
    //                 setFilterMonth={setFilterMonth}
    //             />
    //             {/* <Location
    //                 setFilterLocation={setFilterLocation}
    //             />
    //             <CreatureType
    //                 setFilterCreatureType={setFilterCreatureType}
    //             /> */}
    //         </div>
    //     </div>
    // );
};

export default Filter;