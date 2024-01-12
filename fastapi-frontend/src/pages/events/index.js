// import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import axios from "axios";
import { Permanent_Marker } from "next/font/google";
import EventsCalendar from "@/components/EventsTable";
import { API_URL } from "@/services/auth.constants";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const EventsPage = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Fetch all bug data from the API
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}events/`
        );
        setEventData(response.data.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEventData();
  }, []);
  console.log(eventData);

  return (
    <div className="bg-animal_crossing_sea">
      <NavBar />
      <div className="container mx-auto mt-24">
        <h1 className={`text-4xl my-8 text-center ${font.className}`}>
                    Events in Animal Crossing: New Horizons
                </h1>
        <EventsCalendar />
      </div>
    </div>
  );
};

export default EventsPage;
