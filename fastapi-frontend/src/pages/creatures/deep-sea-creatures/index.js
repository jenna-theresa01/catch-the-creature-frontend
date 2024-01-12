// import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import DeepSeaCard from "@/components/DeepSeaCard";
import axios from "axios";
import { Permanent_Marker } from "next/font/google";
import { API_URL } from "@/services/auth.constants";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const DeepSeaCreaturesPage = () => {
    const [deepSeaData, setDeepSeaData] = useState([]);

    useEffect(() => {
        // Fetch all deep sea creature data from API
        const fetchDeepSeaData = async () => {
            try {
                const response = await axios.get(`${API_URL}deep-sea-creatures`);
                setDeepSeaData(response.data.data);
            } catch (error) {
                console.error("Error fetching deep sea creature data:", error);
            }
        };
        fetchDeepSeaData();
    }, []);
    console.log(deepSeaData);

    return (
        <div className="bg-animal_crossing_sea">
            <NavBar />
            <div className="container mx-auto mt-24">
                <h1 className={`text-4xl my-4 text-center ${font.className}`}>
                    Deep Sea Creatures in Animal Crossing: New Horizons
                </h1>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-4">
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
