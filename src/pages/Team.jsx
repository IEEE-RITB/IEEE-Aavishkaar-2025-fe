import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Github, Linkedin, Twitter } from 'lucide-react';

// Import team data from the JSON config file
import team from '../configs/team.json';

import NebulaBackground from '../components/NebulaBackground';

const TeamCard = ({ member }) => {
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
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-neon-pink">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="font-orbitron text-xl font-bold text-gradient">
            {member.name}
          </h3>
          <p className="text-electric-blue">{member.role}</p>
        </div>
        <p className="text-gray-300 text-center">{member.bio}</p>
        <div className="flex justify-center space-x-4">
          <a
            href={member.social.twitter}
            className="text-gray-400 hover:text-neon-pink transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={member.social.linkedin}
            className="text-gray-400 hover:text-neon-pink transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={member.social.github}
            className="text-gray-400 hover:text-neon-pink transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </animated.div>
  );
};

const Team = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <NebulaBackground />
      <animated.div style={fadeIn} className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Meet Our Team</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default Team;
