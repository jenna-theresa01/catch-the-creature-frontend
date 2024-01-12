"use client";

import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import authService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
import styles from "../styles/home.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import axios from "axios";
import Toggle from "@/components/Toggle";
import Filter from "@/components/Filter/Filter";
import FilterAccordion from "@/components/FilterAccordion";
import { Permanent_Marker } from "next/font/google";
import { API_URL } from "@/services/auth.constants";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export default function Home() {
  // const [fish, setFish] = useState(null);
  // const [bugs, setBugs] = useState(null);
  const [creatures, setCreatures] = useState();
  // console.log(`this is the creatures \n${creatures} `)
  const [hemisphere, setHemisphere] = useState('north');

  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        const user = jwtDecode(userData);
        console.log("User data:", user);
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      }
    };
    getUserFromLocalStorage();
  }, []);

  // TODO: get all of those requests into one axios call
  // and set it equal to const creatures

  const endpoints = [
    `${API_URL}fish/`,
    `${API_URL}bugs/`,
    `${API_URL}deep-sea-creatures/`
  ];

  useEffect(() => {
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((responses) => {
        // Handle each response individually
        console.log(responses)
        const creaturesArrayData = responses.reduce((acc, response) => [...acc, response.data.data], []);
        console.log(creaturesArrayData)
        const creaturesData = creaturesArrayData.reduce((acc, array) => acc.concat(array));

        console.log(creaturesData);

        // Now you can set your creatures state or do other operations
        setCreatures(creaturesData);
      })
      .catch((error) => {
        console.error("Error fetching creatures:", error);
      });
  }, [endpoints]);
  // console.log(creatures)

  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-animal_crossing_sea mt-24">
        <div className="flex flex-col min-h-screen items-center">
          <NavBar />
          <h1 className={`text-4xl my-4 text-center ${font.className}`}>
            Welcome to Catch the Creatures
          </h1>
          <div>
            <Toggle onClick={() => {
              console.log(`in toggle click ${hemisphere}`)
              setHemisphere(hemisphere === 'south' ? 'north' : 'south')}
            }
              hemisphere={hemisphere}
             />
            <FilterAccordion creatures={creatures} hemisphere={hemisphere} />
          </div>
        </div>
      </main>
    </>
  );
}
