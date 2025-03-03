import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ExternalLink } from 'lucide-react';

// Import sponsors data from the JSON config file
import sponsors from '../configs/sponsors.json';

import NebulaBackground from '../components/NebulaBackground';

const SponsorCard = ({ sponsor }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    rotateY: 0,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  return (
    <animated.div
      className="relative bg-black/40 backdrop-blur-lg rounded-lg overflow-hidden border border-neon-pink/30"
      style={props}
      onMouseEnter={() => set({ scale: 1.05, rotateY: 10 })}
      onMouseLeave={() => set({ scale: 1, rotateY: 0 })}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10" />
      <div className="relative p-6 space-y-4">
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-orbitron text-xl font-bold text-gradient">
            {sponsor.name}
          </h3>
          <span className="inline-block px-2 py-1 text-sm rounded bg-neon-pink/20 text-neon-pink">
            {sponsor.tier}
          </span>
        </div>
        <p className="text-gray-300">{sponsor.description}</p>
        <button className="flex items-center space-x-2 text-neon-pink hover:text-electric-blue transition-colors">
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </animated.div>
  );
};

const Sponsors = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <NebulaBackground />
      <animated.div style={fadeIn} className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Our Sponsors</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default Sponsors;
