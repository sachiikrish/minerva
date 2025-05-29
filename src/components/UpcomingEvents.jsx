import React from "react";
import { upcomingEventsData } from "../data/eventsData";
import { EventCard } from "./EventCard";
import { useState } from "react";
import { RegistrationForm } from "./RegistrationForm";
import "../static/UpcomingEvents.css";

export const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegister = (event) => {
    setSelectedEvent(event);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeForm = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      {selectedEvent ? (
        <RegistrationForm />
      ) : (
        <div className="cardsContainer">
          {upcomingEventsData.map((event) => {
            return (
              <EventCard
                key={event.id}
                event={event}
                onRegister={handleRegister}
                isUpcoming={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
