import React, { useState } from 'react';
import {Permanent_Marker} from 'next/font/google'

const font = Permanent_Marker({subsets: ['latin'], weight:'400'})

const DeepSeaCard = ({ deepSea }) => {

    // set useState to be able to create a toggle function for buttons on the card
    const [caught, setCaught] = useState(false);
    const [donated, setDonated] = useState(false);
    
    const handleToggleCaught = () => {
        setCaught(!caught);
    };
    
    const handleToggleDonated = () => {
        setDonated(!donated);
    };

    return (
        <div className="flex flex-col mb-4 items-center shadow-lg bg-animal_crossing_white">
            {/* Deep Sea Creature Image */}
            <img src={deepSea.image_url} alt={deepSea.name} className="w-24 h-24 rounded mr-4" />

            {/* Deep Sea Creature Name */}
            <div className={`font-bold text-xl mb-2 ${font.className}`}>{deepSea.name}</div>

            {/* Card Content */}
            <div className="px-6 py-4">

                {/* Shadow Size */}
                <p className="text-base mb-2">
                    Shadow Size: {deepSea.shadow_size}
                </p>

                {/* Sell Price */}
                <div className="flex items-center text-gray-800 text-base mb-2">
                    <span>Sell Price (Nook):</span>
                    <span>{deepSea.sell_nook}</span>
                    <img src="/img/money_bag.png" alt="Bells" className="ml-2 h-5 w-5" />
                </div>
            </div>

            {/* Tracking buttons */}
            <div className='mt-4'>
                    <button
                    className={`bg-${caught ? 'gray' : 'green'}-500 text-black px-4 py-2 mr-2 rounded`}
                    onClick={handleToggleCaught}
                    >
                        {caught ? 'Caught!' : 'Caught'}
                    </button>
                    <button
                    className={`bg-${donated ? 'gray' : 'green'}-500 text-black px-4 py-2 mr-2 rounded`}
                    onClick={handleToggleDonated}
                    >
                        {donated ? 'Donated!' : 'Donated'}
                    </button>
            </div>
        </div>

    )
}

export default DeepSeaCard