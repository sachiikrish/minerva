import React from "react";
import "../static/EventPage.css";
import { useState } from "react";
import { EventHeader } from "../components/EventHeader";
import { UpcomingEvents } from "../components/UpcomingEvents";
import { PastEvents } from "../components/PastEvents";

export const EventPage = () => {
  const [activeTag, setActiveTag] = useState("upcoming");
  return (
    <div className="flex flex-col">
      <div
        className="relative w-full h-[256px]"
        style={{
          backgroundImage: `url("/event.png")`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          width: "100%",
        }}
      >
        <div
          id="headingContainer"
          className="absolute flex flex-col justify-center w-full h-full items-center"
        >
          <div>
            <div className="text-[#f1d7b0] text-center">
              <h1 className="heading">Minerva Events</h1>
            </div>
            <p className="text-[#f6ebdb] text-2xl">
              Join us for exciting tech workshops, hackathons, and networking
              opportunities
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 py-8 relative flex justify-center">
        <EventHeader activeTab={activeTag} setActiveTab={setActiveTag} />
      </div>

      <div className="mt-8">
        {activeTag === "upcoming" ? <UpcomingEvents /> : <PastEvents />}
      </div>
    </div>
  );
};
