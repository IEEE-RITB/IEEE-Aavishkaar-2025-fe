import React from "react";
import { Clock, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

// Import schedule data from the JSON config file
import { schedule } from "../configs/schedule.json";

const ScheduleCard = ({ event }) => {
  return (
    <div className="bg-[#1E1E2D] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#4F33B3]/20 transition-shadow">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-white/70">{event.speaker}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#E056C1]" />
            <span className="text-sm text-white/70">{event.time}</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#4F33B3]" />
            <span className="text-white/70">{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 mt-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Event Schedule</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Check out the complete schedule for Aavishkaar'25. Plan your day and make sure
            you don't miss any of the exciting events we have lined up.
          </p>
        </div>
      </section>

      {/* Schedule List */}
      <section className="py-8 px-4 flex-1">
        <div className="container mx-auto">
          <div className="space-y-6">
            {schedule.map((event, index) => (
              <ScheduleCard key={index} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
