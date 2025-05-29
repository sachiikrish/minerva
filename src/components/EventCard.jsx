import React from "react";
import { format } from "date-fns";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { getCategoryColor } from "../utils/category";
import "../static/EventCard.css";

export const EventCard = ({ event, isUpcoming, onRegister }) => {
  const categoryColor = getCategoryColor(event.category);

  return (
    <div className="event-card">
  <div className="event-image-container">
    <img className="event-image" src={event.image} alt={event.title} />
    <div className={`event-category-badge bg-${categoryColor.bg}`}>
      {event.category}
    </div>
  </div>
  <div className="event-content">
    <h3 className="event-title">{event.title}</h3>
    <p className="event-description">{event.description}</p>
    
    <div className="event-meta">
      <div className="event-meta-item">
        <Calendar size={16} className="mr-2" />
        {format(new Date(event.date), 'MMM d, yyyy')}
      </div>
      <div className="event-meta-item">
        <Clock size={16} className="mr-2" />
        {event.time}
      </div>
      <div className="event-meta-item">
        <MapPin size={16} className="mr-2" />
        {event.location}
      </div>
      {event.speakers && (
        <div className="event-meta-item">
          <Users size={16} className="mr-2" />
          {event.speakers}
        </div>
      )}
    </div>

    <div className="event-footer">
      <div className="event-format">
        <span className={`dot bg-${categoryColor.dot}`}></span>
        {event.format}
      </div>
      {isUpcoming && onRegister ? (
        <button className="register-btn" onClick={() => onRegister(event)}>
          Register
        </button>
      ) : (
        <a href="#" className="details-btn">
          Details <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </div>
  </div>
</div>

  );
};
