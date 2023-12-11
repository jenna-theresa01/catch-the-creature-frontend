import React, { useState, useEffect } from "react";
import axios from 'axios';


const EventsCalendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/events/');
        setEvents(response.data.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Animal Crossing Events Calendar</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Type</th>
              {/* Add more headers if needed */}
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.date}>
                <td>{event.event}</td>
                <td>{event.date}</td>
                <td>{event.type}</td>
                {/* Add more cells if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EventsCalendar;
