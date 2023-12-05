import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const BugCard = ({ bug }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Bug Image */}
            <img src={bug.image_url} alt={bug.name} className="w-full" />

            {/* Card Content */}
            <div className="px-6 py-4">

                {/* Bug Name */}
                <div className={`font-bold text-xl mb-2 ${font.className}`}>{bug.name}</div>

                {/* Location */}
                <p className="text-base mb-2">
                    Location: {bug.location}
                </p>

                {/* Sell Price */}
                <div className="flex items-center text-gray-800 text-base mb-2">
                    <span>Sell Price (Nook):</span>
                    <span>{bug.sell_nook}</span>
                    <img src="/img/money_bag.png" alt="Bells" className="ml-2 h-5 w-5" />
                </div>
            </div>
        </div>

    )
}

export default BugCard