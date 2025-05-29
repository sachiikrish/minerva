import React from 'react';
import { Calendar, Clock, Search } from 'lucide-react';
import "../static/EventHeader.css";

export const EventHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="buttonsSearchContainer bg-white rounded-lg shadow-md p-6 flex flex-col justify-between items-start gap-4">
      <div className="flex space-x-4 buttonsContainer">
        <TabButton 
          isActive={activeTab === 'upcoming'} 
          click={() => setActiveTab('upcoming')}
          icon={<Calendar size={18} />}
          label="Upcoming Events"
        />
        <TabButton 
          isActive={activeTab === 'past'} 
          click={() => setActiveTab('past')}
          icon={<Clock size={18} />}
          label="Past Events"
        />
      </div>

      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search events..."
          className="w-full py-2 px-4 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f2e3d] focus:border-transparent"
        />
        <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

const TabButton = ({ isActive, click, icon, label }) => {
  return (
    <button
      onClick={click}
      className={`btn flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
        isActive 
          ? 'bg-[#0f2e3d] text-[#f6ebdb]' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};