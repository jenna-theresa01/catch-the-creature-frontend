// import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import axios from "axios";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const FaqsPage = () => {


    return (
        <div className="bg-animal_crossing_sea">
            <NavBar />
            <div className="container mx-auto mt-24">
                <h1 className={`text-4xl my-8 text-center ${font.className}`}>
                    FAQs
                </h1>

                
            </div>
        </div>
    );
};

export default FaqsPage;