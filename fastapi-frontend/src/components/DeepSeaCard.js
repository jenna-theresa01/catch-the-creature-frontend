// import {Permanent_Marker} from 'next/font/google'

// const font = Permanent_Marker({subsets: ['latin'], weight:'400'})

const DeepSeaCard = ({ deepSea }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Deep Sea Creature Image */}
            <img src={deepSea.image_url} alt={deepSea.name} className="w-full" />

            {/* Card Content */}
            <div className="px-6 py-4">
                {/* Deep Sea Creature Name */}
                <div className="font-bold text-xl mb-2">{deepSea.name}</div>

                {/* Location */}
                <p className="text-base mb-2">
                    Location: {deepSea.location}
                </p>

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
        </div>

    )
}

export default DeepSeaCard