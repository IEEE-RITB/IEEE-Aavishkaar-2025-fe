import React from 'react';
import { Clock, MapPin } from 'lucide-react';

// Import schedule data from the JSON config file
import {schedule} from '../configs/schedule.json';

const ScheduleCard = ({ event }) => {

  return (
    <div
      className="relative bg-black/40 border border-neon backdrop-blur-lg rounded-lg overflow-hidden border-l-0 border-r-0  border-neon-pink"
    >
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-orbitron text-xl font-bold text-gradient">
              {event.title}
            </h3>
            <p className="text-gray-400">{event.speaker}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-neon-pink" />
            <span className="text-sm text-gray-400">{event.time}</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-electric-blue" />
            <span className="text-gray-400">{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Event Schedule</span>
        </h1>
        <div className="space-y-6 mt-8">
          {schedule.map((event, index) => (
            <ScheduleCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
