import { useState } from 'react';
import { API_URL } from '@/services/auth.constants';
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

const Filter =({
    updateMonth,
    updateLocation,
    updateCreatureType,
}) => {
    let clear = () => {
        updateMonth("");
        updateLocation("");
        updateCreatureType("");
        window.location.reload(false);
    };
    return (
        <div className='lg:col-span-3 col-span-12 mb-5'>
            <div className='text-center font-bold text-xl mb-2'>Filters</div>
            <div
                onClick={clear}
                className='text-primary underline text-center mb-3'
            >
                Clear Filters
            </div>
            <div className='accordion' id='accordion'>
                <Month
                    updateMonth={updateMonth}
                />
                <Location
                    updateLocation={updateLocation}
                />
                <CreatureType
                    updateCreatureType={updateCreatureType}
                />
            </div>
        </div>
    );
};

export default Filter;