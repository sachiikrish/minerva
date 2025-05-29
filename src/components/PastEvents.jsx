import React from "react";
import { pastEventsData } from "../data/eventsData";
import { EventCard } from "./EventCard";
import "../static/PastEvents.css";

export const PastEvents = () => {
  return (
    <div className="cardsContainer">
      {pastEventsData.map((event) => {
        return <EventCard key={event.id} event={event} isUpcoming={false} />;
      })}
    </div>
  );
};
