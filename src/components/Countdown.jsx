import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalHours: 0
  });
  const [dots, setDots] = useState([]);

  // Generate random dots for background
  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      const dotCount = 150; // More dots for denser background
      
      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.5, // Smaller dots
          speed: Math.random() * 0.1 + 0.05, // Slower movement
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
      
      setDots(newDots);
    };
    
    generateDots();
    
    // Move dots animation
    const moveDots = setInterval(() => {
      setDots(prevDots => 
        prevDots.map(dot => ({
          ...dot,
          y: (dot.y + dot.speed) % 100,
          x: (dot.x + (dot.speed * dot.direction * 0.3) + 100) % 100
        }))
      );
    }, 100); // Slower update for smoother animation
    
    return () => clearInterval(moveDots);
  }, []);

  useEffect(() => {
    const targetDate = new Date("March 28, 2025 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, totalHours });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, totalHours: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to render dot-style digits
  const renderDotDigit = (digit) => {
    // Convert digit to string and ensure it's 2 digits with leading zero if needed
    const digitStr = String(digit).padStart(2, '0');
    
    return (
      <div className="flex justify-center">
        {digitStr.split('').map((num, idx) => (
          <div key={idx} className="mx-0.5 md:mx-2">
            {renderDotMatrix(parseInt(num))}
          </div>
        ))}
      </div>
    );
  };

  // Function to render a single digit as dot matrix
  const renderDotMatrix = (num) => {
    // Define dot patterns for each digit (0-9)
    const dotPatterns = {
      0: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
      1: [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1]
      ],
      2: [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]
      ],
      3: [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ],
      4: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
      ],
      5: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ],
      6: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
      7: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1]
      ],
      8: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ],
      9: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
      ]
    };

    const pattern = dotPatterns[num];
    
    return (
      <div className="grid grid-rows-5 gap-[1px] md:gap-1">
        {pattern.map((row, rowIdx) => (
          <div key={rowIdx} className="flex gap-[1px] md:gap-1">
            {row.map((dot, dotIdx) => (
              <div 
                key={dotIdx} 
                className={`w-1 h-1 md:w-2 md:h-2 rounded-full ${dot ? 'bg-[#5ba8b6]' : 'bg-transparent'}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Render background dots
  const renderBackgroundDots = () => {
    return dots.map(dot => (
      <div
        key={dot.id}
        className="absolute rounded-full bg-[#0a1a2a]"
        style={{
          left: `${dot.x}%`,
          top: `${dot.y}%`,
          width: `${dot.size}px`,
          height: `${dot.size}px`,
          opacity: Math.random() * 0.4 + 0.2,
          transition: 'top 1s linear, left 1s linear'
        }}
      />
    ));
  };

  if (timeLeft.days > 1) {
    return (
      <div className="mt-8 text-center relative h-48">
        {renderBackgroundDots()}
        <div className="text-5xl md:text-9xl font-bold text-[#8be9fd] mb-4 relative z-10">
          {renderDotDigit(timeLeft.days)}
        </div>
        <div className="text-lg md:text-3xl text-[#ff79c6] mt-4 tracking-widest relative z-10 uppercase font-press-start">
          DAYS REMAINING
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-8 text-center relative h-48">
        {renderBackgroundDots()}
        <div className="flex justify-center items-center text-2xl md:text-7xl text-[#ff79c6] space-x-1 md:space-x-4 relative z-10">
          <div className="flex flex-col items-center">
            {renderDotDigit(timeLeft.totalHours)}
            <div className="text-[10px] md:text-base mt-0.5 md:mt-1">HOURS</div>
          </div>
          <div className="mx-0.5 md:mx-2 text-xl md:text-4xl">:</div>
          <div className="flex flex-col items-center">
            {renderDotDigit(timeLeft.minutes)}
            <div className="text-[10px] md:text-base mt-0.5 md:mt-1">MINUTES</div>
          </div>
          <div className="mx-0.5 md:mx-2 text-xl md:text-4xl">:</div>
          <div className="flex flex-col items-center">
            {renderDotDigit(timeLeft.seconds)}
            <div className="text-[10px] md:text-base mt-0.5 md:mt-1">SECONDS</div>
          </div>
        </div>
        <div className="text-lg md:text-3xl text-[#ff79c6] mt-4 tracking-widest relative z-10 uppercase font-press-start">
          REMAINING
        </div>
      </div>
    );
  }
};

export default Countdown;