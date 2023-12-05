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
        const fetchDeepSeaData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/bugs/")
            }
        }
    })
}

export default DeepSeaCreaturesPage;
