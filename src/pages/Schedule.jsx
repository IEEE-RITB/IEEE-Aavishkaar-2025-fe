import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Clock, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Import schedule data from the JSON config file
import schedule from '../configs/schedule.json';

import NebulaBackground from '../components/NebulaBackground';

const ScheduleCard = ({ event }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    opacity: 0,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  // Trigger scale and opacity changes when the element comes into view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it enters the viewport
    threshold: 0.3, // Trigger animation when 30% of the element is visible
  });

  React.useEffect(() => {
    if (inView) {
      set({ opacity: 1, scale: 1 }); // Animate to visible and normal scale
    } else {
      set({ opacity: 0, scale: 0.95 }); // Animate out by fading and scaling down
    }
  }, [inView, set]);

  return (
    <animated.div
      ref={ref}
      className="relative bg-black/40 border border-neon backdrop-blur-lg rounded-lg overflow-hidden border-l-0 border-r-0  border-neon-pink"
      style={props}
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
