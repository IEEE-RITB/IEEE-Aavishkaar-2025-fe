import React, { useState, useRef } from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import {
  Calendar,
  Cpu,
  Gamepad,
  SplitSquareVertical as VirtualReality,
} from 'lucide-react';

// Import event data from JSON config file
import events from '../configs/events.json';

import NebulaBackground from '../components/NebulaBackground';

// EventCard Component
const EventCard = ({ event, style }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    rotateY: 0,
    config: { mass: 5, tension: 500, friction: 80 },
  }));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTitleRef = useRef(null); // Ref for the modal title

  // Dynamically load icon based on the event's icon value
  const iconComponents = {
    Cpu: <Cpu className="w-8 h-8 text-neon-pink" />,
    VirtualReality: <VirtualReality className="w-8 h-8 text-electric-blue" />,
    Gamepad: <Gamepad className="w-8 h-8 text-hacker-green" />,
  };

  // Handle modal open/close
  const openModal = () => {
    setIsModalOpen(true);

    // Wait for the modal to be rendered and then scroll to the title
    setTimeout(() => {
      modalTitleRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Center the modal title in the viewport
        inline: 'center', // Ensure it's horizontally aligned
      });
    }, 50); // Small delay to allow the modal rendering before scrolling
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <animated.div
        className="relative bg-black/40 backdrop-blur-lg rounded-lg overflow-hidden border border-neon-pink/30 hover:border-neon-pink/60 transition-colors duration-300"
        style={{ ...props, ...style }}
        onMouseEnter={() => set({ scale: 1.02, rotateY: 5 })}
        onMouseLeave={() => set({ scale: 1, rotateY: 0 })}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10" />
        <div className="relative p-6 space-y-4">
          <div className="flex items-center space-x-4">
            {iconComponents[event.icon]} {/* Render the dynamic icon */}
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
          <div className="flex justify-between items-center">
            <button className="w-full neon-button mt-4" onClick={openModal}>
              Read More
            </button>
          </div>
        </div>
      </animated.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="relative bg-black/80 border border-neon-pink rounded-lg p-8 max-w-lg w-full z-50">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white font-bold text-xl"
            >
              &times;
            </button>
            {/* Add ref to the modal title for smooth scrolling */}
            <h2
              ref={modalTitleRef}
              className="text-2xl font-bold text-white mb-4"
            >
              {event.title}
            </h2>
            <p className="text-lg text-gray-300 mb-6">{event.description}</p>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-neon-pink" />
              <span className="text-sm text-gray-400">{event.date}</span>
            </div>
            <button className="w-full neon-button mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Events Component
const Events = () => {
  // Fade and scale effect for the entire page using useSpring
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  // Staggered animation for event cards using useTrail
  const trail = useTrail(events.length, {
    opacity: 1,
    scale: 1,
    from: { opacity: 0, scale: 0.95 },
    config: { mass: 5, tension: 250, friction: 30 },
    delay: 200, // delay the whole sequence for a better effect
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
            <EventCard key={index} event={event} style={trail[index]} />
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default Events;
