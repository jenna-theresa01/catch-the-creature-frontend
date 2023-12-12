// import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import BugCard from "@/components/BugCard";
import axios from "axios";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const BugsPage = () => {
    const [bugData, setBugData] = useState([]);

    useEffect(() => {
    // Fetch all bug data from the API
    const fetchBugData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/v1/bugs/");
            setBugData(response.data.data);
        } catch (error) {
            console.error("Error fetching bug data:", error);
        }
    };
    fetchBugData();
    }, []);
    console.log(bugData)

    return (
        <div className="bg-animal_crossing_sea">
            <NavBar />
            <div className="container mx-auto mt-24">
                <h1 className={`text-4xl my-8 text-center ${font.className}`}>
                    Bugs in Animal Crossing: New Horizons
                </h1>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-4">
                    {bugData.map((bugs) => (
                        <div key={bugs.id}>
                            <BugCard bug={bugs} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BugsPage;
