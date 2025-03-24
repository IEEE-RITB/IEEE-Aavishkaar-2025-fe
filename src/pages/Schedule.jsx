import React, { useState } from "react";
import { Clock, MapPin, ArrowLeft, Calendar, Users, Tag } from "lucide-react";
import { Link } from "react-router";

// Import schedule data from the JSON config file
import { schedule } from "../configs/schedule.json";

// Group events by day for better organization
const groupEventsByDay = (events) => {
  const grouped = {};
  events.forEach(event => {
    // Assuming event has a date field like "March 19, 2025"
    const day = event.date || "Day 1"; // Fallback if date isn't available
    if (!grouped[day]) {
      grouped[day] = [];
    }
    grouped[day].push(event);
  });
  return grouped;
};

const EventCard = ({ event }) => {
  return (
    <div className="bg-[#1E1E2D] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#4F33B3]/20 transition-all duration-300 transform hover:-translate-y-1 border border-[#2A2A3A]">
      <div className="p-6 space-y-4 relative">
        {/* Time indicator */}
        <div className="absolute top-0 right-0 bg-[#4F33B3] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">
          {event.time}
        </div>
        
        {/* Event type tag */}
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E056C1]/20 text-[#E056C1]">
          {event.type || "Session"}
        </div>
        
        <div className="pt-2">
          <h3 className="text-xl font-bold text-white group-hover:text-[#E056C1] transition-colors">
            {event.title}
          </h3>
          
          {/* <div className="flex items-center mt-2 space-x-1">
            <Users className="w-4 h-4 text-[#E056C1]" />
            <p className="text-white/80 font-medium">{event.speaker}</p>
          </div> */}
          
          <div className="flex items-center mt-3 text-sm text-white/70">
            <MapPin className="w-4 h-4 text-[#4F33B3] mr-2" />
            <span>{event.location}</span>
          </div>
          
          {event.description && (
            <p className="mt-3 text-white/60 text-sm line-clamp-2">
              {event.description}
            </p>
          )}
        </div>
        
        {/* View details button */}
        {event.details && (
          <button className="mt-2 text-sm text-[#E056C1] hover:text-[#E056C1]/80 font-medium flex items-center">
            View details
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

const TimelineEvent = ({ event, isLast }) => {
  return (
    <div className="flex">
      {/* Timeline */}
      <div className="flex flex-col items-center mr-4">
        <div className="rounded-full h-3 w-3 bg-[#E056C1] shadow-glow"></div>
        {!isLast && <div className="h-full w-0.5 bg-gradient-to-b from-[#E056C1] to-[#4F33B3]/30"></div>}
      </div>
      
      {/* Event card */}
      <div className="pb-8 w-full">
        <div className="text-sm text-white/50 mb-2 flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {event.time}
        </div>
        <EventCard event={event} />
      </div>
    </div>
  );
};

const DaySchedule = ({ day, events }) => {
  return (
    <div className="mb-12">
      <div className="sticky top-0 z-10 bg-[#121220] py-4 backdrop-blur-sm bg-opacity-80">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-[#E056C1]" />
          {day}
        </h2>
      </div>
      
      <div className="mt-6 pl-4">
        {events.map((event, index) => (
          <TimelineEvent 
            key={index} 
            event={event} 
            isLast={index === events.length - 1} 
          />
        ))}
      </div>
    </div>
  );
};

const Schedule = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const groupedEvents = groupEventsByDay(schedule);
  
  // Filter types from all events
  const eventTypes = ["all", ...new Set(schedule.map(event => event.type).filter(Boolean))];
  
  // Filter events based on selected type
  const filteredSchedule = activeFilter === "all" 
    ? schedule 
    : schedule.filter(event => event.type === activeFilter);
  
  const filteredGroupedEvents = groupEventsByDay(filteredSchedule);

  return (
    <div className="min-h-screen bg-[#121220] text-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-16 relative overflow-hidden px-4 sm:px-6 lg:px-12">
        {/* Abstract shapes in the background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#E056C1] blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-[#4F33B3] blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 mt-4 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            RIT-B TechFest'25 Schedule
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Plan your experience at RIT-B TechFest'25 with our comprehensive event timeline.
            Don't miss any of the exciting sessions, workshops, and competitions!
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-20 bg-[#1A1A2E] border-b border-[#2A2A3A] shadow-lg px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto px-4">
          <div className="py-4 flex items-center overflow-x-auto scrollbar-hide">
            <span className="text-white/70 mr-3 text-sm">Filter by:</span>
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium mr-2 whitespace-nowrap transition-all ${
                  activeFilter === type
                    ? "bg-[#4F33B3] text-white"
                    : "bg-[#2A2A3A] text-white/70 hover:bg-[#3A3A4A]"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Timeline */}
      <section className="py-8 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          {Object.keys(filteredGroupedEvents).length > 0 ? (
            Object.entries(filteredGroupedEvents).map(([day, events]) => (
              <DaySchedule key={day} day={day} events={events} />
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-[#E056C1] text-5xl mb-4">¯\_(ツ)_/¯</div>
              <h3 className="text-xl font-medium">No events found</h3>
              <p className="text-white/60 mt-2">Try selecting a different filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Quick Navigation */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-[#1E1E2D] p-3 rounded-full shadow-xl border border-[#2A2A3A] hover:bg-[#2A2A3A] transition-colors">
          <svg className="w-6 h-6 text-[#E056C1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
