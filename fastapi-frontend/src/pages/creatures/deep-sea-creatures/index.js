// import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import DeepSeaCard from "@/components/DeepSeaCard";
import axios from "axios";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const DeepSeaCreaturesPage = () => {
    const [deepSeaData, setDeepSeaData] = useState([]);

    useEffect(() => {
        // Fetch all deep sea creature data from API
        const fetchDeepSeaData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/deep-sea-creatures/");
                setDeepSeaData(response.data.data);
            } catch (error) {
                console.error("Error fetching deep sea creature data:", error);
            }
        };
        fetchDeepSeaData();
    }, []);
    console.log(deepSeaData);

    return (
        <div>
            <NavBar />
            <div className="container mx-auto my-8">
                <h1 className={font.className}>
                    Deep Sea Creatures in Animal Crossing: New Horizons
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {deepSeaData.map((deepSea) => (
                        <div key={deepSea.id}>
                            <DeepSeaCard deepSea={deepSea} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeepSeaCreaturesPage;
