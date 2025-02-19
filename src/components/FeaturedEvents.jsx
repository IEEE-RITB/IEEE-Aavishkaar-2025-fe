import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Calendar, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Hack the Matrix',
    date: 'April 15, 2025',
    attendees: 300,
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&fit=crop',
    description:
      '48-hour coding challenge to build next-gen cyberpunk applications',
  },
  {
    title: 'Neural Network Summit',
    date: 'April 16, 2025',
    attendees: 200,
    image:
      'https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?w=800&fit=crop',
    description:
      'Deep dive into the latest AI and machine learning breakthroughs',
  },
  {
    title: 'Cyber Gaming Arena',
    date: 'April 17, 2025',
    attendees: 500,
    image:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&fit=crop',
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
      style={props}
      onMouseEnter={() => set({ scale: 1.05, rotateY: 10 })}
      onMouseLeave={() => set({ scale: 1, rotateY: 0 })}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-md border border-neon-pink/30">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20" />
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover opacity-60 transition-transform group-hover:scale-110"
        />
        <div className="p-6 relative">
          <h3 className="font-orbitron text-xl font-bold mb-2 text-gradient">
            {event.title}
          </h3>
          <p className="text-gray-300 mb-4">{event.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-neon-pink" />
                <span className="text-sm text-gray-400">{event.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

const FeaturedEvents = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Featured Events</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience the future of technology with our cutting-edge events
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="neon-button group">
          View All Events
          <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedEvents;
