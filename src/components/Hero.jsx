import React, { useEffect } from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web';
import { ChevronRight } from 'lucide-react';
import NebulaBackground from './NebulaBackground';
import confetti from 'canvas-confetti';

const Hero = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
  });

  const words = ['Aavishkaar', '2025'];
  const trail = useTrail(words.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 50 },
    delay: 500,
  });

  useEffect(() => {
    // Function to trigger confetti
    const fireConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    };

    // Trigger confetti after a delay (e.g., 1 second after the component mounts)
    const timer = setTimeout(() => {
      fireConfetti();
    }, 1000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <NebulaBackground />

      <animated.div
        style={fadeIn}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <h1 className="font-orbitron text-3xl md:text-6xl lg:text-7xl font-bold mb-6 glitch flex justify-center">
          {trail.map((style, index) => (
            <animated.span
              key={index}
              style={style}
              className="text-gradient mx-2"
            >
              {words[index]}
            </animated.span>
          ))}
        </h1>
        <p className="font-rajdhani text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the future of technology at the most immersive tech
          festival of the year
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="neon-button group">
            Register Now
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="neon-button bg-transparent border border-neon-pink">
            Learn More
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
