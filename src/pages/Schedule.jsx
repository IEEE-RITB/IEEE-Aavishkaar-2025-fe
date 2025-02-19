import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Clock, MapPin, Users } from 'lucide-react';
import NebulaBackground from '../components/NebulaBackground';

const schedule = [
  {
    time: '09:00 AM',
    date: 'April 15, 2025',
    title: 'Opening Ceremony',
    location: 'Main Stage',
    speaker: 'Dr. Sarah Chen',
    attendees: 1000,
  },
  {
    time: '10:30 AM',
    date: 'April 15, 2025',
    title: 'Future of AI Panel',
    location: 'Tech Hub',
    speaker: 'Various Industry Leaders',
    attendees: 500,
  },
  {
    time: '02:00 PM',
    date: 'April 15, 2025',
    title: 'VR Workshop',
    location: 'Innovation Lab',
    speaker: 'James Rodriguez',
    attendees: 200,
  },
];

const ScheduleCard = ({ event }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  return (
    <animated.div
      className="relative bg-black/40 border border-neon backdrop-blur-lg rounded-lg overflow-hidden border-l-0 border-r-0 border-neon-pink"
      style={props}
      onMouseEnter={() => set({ scale: 1.02 })}
      onMouseLeave={() => set({ scale: 1 })}
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
    </animated.div>
  );
};

const Schedule = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <NebulaBackground />
      <animated.div style={fadeIn} className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Event Schedule</span>
        </h1>
        <div className="space-y-6 mt-8">
          {schedule.map((event, index) => (
            <ScheduleCard key={index} event={event} />
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default Schedule;
