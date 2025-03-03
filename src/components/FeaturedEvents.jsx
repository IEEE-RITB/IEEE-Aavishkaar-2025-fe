import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from '@react-spring/web';
import { Calendar, ArrowRight } from 'lucide-react';

// Import the events data from the config file
import events from '/src/configs/featured-events.json';

const EventCard = ({ event }) => {
  // Set up in-view detection for each card
  const [ref, inView] = useInView({
    triggerOnce: false, // Keep triggering animations every time the card enters the viewport
    threshold: 0.5, // Trigger when 50% of the card is in view
  });

  // Define the animation for scale and opacity on scroll
  const [props, set] = useSpring(() => ({
    opacity: 0,
    scale: 0.7,
    config: { tension: 300, friction: 40 },
  }));

  React.useEffect(() => {
    if (inView) {
      set({ opacity: 1, scale: 1 });
    } else {
      set({ opacity: 0, scale: 0.7 });
    }
  }, [inView, set]);

  return (
    <animated.div ref={ref} style={props} className="relative group">
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
