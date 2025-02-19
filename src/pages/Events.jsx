import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
  Calendar,
  Users,
  Cpu,
  Gamepad,
  SplitSquareVertical as VirtualReality,
} from 'lucide-react';
import NebulaBackground from '../components/NebulaBackground';

const events = [
  {
    title: 'Hack the Matrix',
    icon: <Cpu className="w-8 h-8 text-neon-pink" />,
    date: '2025-04-15',
    category: 'Hackathon',
    description:
      '48-hour coding challenge to build the next-gen cyberpunk applications',
  },
  {
    title: 'Neural Network Summit',
    icon: <VirtualReality className="w-8 h-8 text-electric-blue" />,
    date: '2025-04-16',
    category: 'Conference',
    description:
      'Deep dive into the latest AI and machine learning breakthroughs',
  },
  {
    title: 'Cyber Gaming Arena',
    icon: <Gamepad className="w-8 h-8 text-hacker-green" />,
    date: '2025-04-17',
    category: 'Gaming',
    description: 'Experience next-gen gaming with full-dive VR technology',
  },
];

const EventCard = ({ event }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    rotateY: 0,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  return (
    <animated.div
      className="relative bg-black/40 backdrop-blur-lg rounded-lg overflow-hidden border border-neon-pink/30 hover:border-neon-pink/60 transition-colors duration-300"
      style={props}
      onMouseEnter={() => set({ scale: 1.02, rotateY: 5 })}
      onMouseLeave={() => set({ scale: 1, rotateY: 0 })}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10" />
      <div className="relative p-6 space-y-4">
        <div className="flex items-center space-x-4">
          {event.icon}
          <div>
            <h3 className="font-orbitron text-xl font-bold text-gradient">
              {event.title}
            </h3>
            <p className="text-gray-400">{event.category}</p>
          </div>
        </div>
        <p className="text-gray-300">{event.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-neon-pink" />
            <span className="text-sm text-gray-400">{event.date}</span>
          </div>
        </div>
        <button className="w-full neon-button mt-4">Register Now</button>
      </div>
    </animated.div>
  );
};

const Events = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <NebulaBackground />
      <animated.div style={fadeIn} className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Upcoming Events</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default Events;
