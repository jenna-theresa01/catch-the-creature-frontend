// import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import { Permanent_Marker } from "next/font/google";
import FishCard from "@/components/FishCard";
import axios from "axios";
import { API_URL } from "@/services/auth.constants";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const FishPage = () => {
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    // Fetch all fish data from the API
    const fetchFishData = async () => {
      try {
        const response = await axios.get(`${API_URL}fish/`);
        setFishData(response.data.data);
      } catch (error) {
        console.error("Error fetching fish data:", error);
      }
    };

    fetchFishData();
  }, []);
  console.log(fishData);

  return (
    <div className="bg-animal_crossing_sea">
      <div>
      <NavBar />
      </div>
      <div className="container mx-auto mt-24">
        <h1 className={`text-3xl text-center pb-8 ${font.className}`}>
          Fish in Animal Crossing: New Horizons
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {fishData.map((fish) => (
            <div key={fish.id}>
              <FishCard fish={fish} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FishPage;
