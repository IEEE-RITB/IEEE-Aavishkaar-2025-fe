import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import scheduleData from '../configs/schedule.json'; 

const Hero = () => {
  const numberCanvasRef = useRef(null);
  const dotsCanvasRef = useRef(null);
  const [countdownDays, setCountdownDays] = useState(0);
  const dotsRef = useRef([]);
  const numberPixelCoordinatesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const tweenAnimationsRef = useRef([]);
  const colors = ['61, 207, 236', '255, 244, 174', '255, 211, 218', '151, 211, 226'];
  const circleRadius = 2;
  const numberStageWidth = 300; 
  const numberStageHeight = 200; 
  useEffect(() => {
    const fetchEventDate = () => {
      try {
        const startDate = new Date(scheduleData.startDate); // Use imported JSON
        const currentDate = new Date();
        const timeDiff = startDate.getTime() - currentDate.getTime();
        const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
        setCountdownDays(Math.max(0, daysRemaining));
      } catch (error) {
        console.error('Error loading event date:', error);
        setCountdownDays(40);
      }
    };

    fetchEventDate();
  }, []);
  useEffect(() => {
    if (!numberCanvasRef.current || !dotsCanvasRef.current) return;
    dotsRef.current = [];
    tweenAnimationsRef.current.forEach(tween => tween?.kill());
    tweenAnimationsRef.current = [];

    const numberStage = numberCanvasRef.current;
    const numberStageCtx = numberStage.getContext('2d');
    numberStage.width = numberStageWidth;
    numberStage.height = numberStageHeight;
    
    const stage = dotsCanvasRef.current;
    const stageCtx = stage.getContext('2d');
    const countdownContainer = document.getElementById('countdown-container');
    
    if (!countdownContainer) return;
    
    stage.width = countdownContainer.offsetWidth;
    stage.height = countdownContainer.offsetHeight;

    const numberOffsetX = (stage.width - numberStageWidth) / 2;
    const numberOffsetY = stage.height - numberStageHeight + 50; // Adjust `-20` to fine-tune positioning


    class Dot {
      constructor(x, y, color, alpha) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.alpha = alpha;
      }
      
      draw() {
        stageCtx.beginPath();
        stageCtx.arc(this.x, this.y, circleRadius, 0, 2 * Math.PI, false);
        stageCtx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        stageCtx.fill();
      }
    }

    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const dotCount = Math.floor((stage.width * stage.height) / 800);
    for (let i = 0; i < dotCount; i++) {
      dotsRef.current.push(new Dot(
        randomNumber(0, stage.width),
        randomNumber(0, stage.height),
        colors[randomNumber(0, colors.length)],
        0.3
      ));
    }

    const drawNumber = (num) => {
      numberStageCtx.clearRect(0, 0, numberStageWidth, numberStageHeight);
      numberStageCtx.fillStyle = "rgba(36, 40, 47, 0)";
      numberStageCtx.fillRect(0, 0, numberStageWidth, numberStageHeight);
      
      numberStageCtx.fillStyle = "rgba(13, 13, 26, 0.1)";
      numberStageCtx.textAlign = 'center';
      numberStageCtx.font = "bold 120px Lato";
      numberStageCtx.fillText(num, numberStageWidth/2, numberStageHeight/2 + 30);
      
      const imageData = numberStageCtx.getImageData(0, 0, numberStageWidth, numberStageHeight).data;
      numberPixelCoordinatesRef.current = [];
      
      for (let i = 0; i < imageData.length; i += 4) {
        if (imageData[i] !== 0) {
          const x = (i / 4) % numberStageWidth;
          const y = Math.floor(i / 4 / numberStageWidth);
          
          if ((x % (circleRadius * 2 + 3) === 0) && (y % (circleRadius * 2 + 3) === 0)) {
            numberPixelCoordinatesRef.current.push({ x, y });
          }
        }
      }
      
      formNumber();
    };

    const formNumber = () => {
      const limit = Math.min(numberPixelCoordinatesRef.current.length, dotsRef.current.length);
      
      dotsRef.current.forEach(dot => tweenDots(dot, null, 'space'));

      setTimeout(() => {
        for (let i = 0; i < limit; i++) {
          tweenDots(dotsRef.current[i], numberPixelCoordinatesRef.current[i], 'number');
        }

        for (let j = limit; j < dotsRef.current.length; j++) {
          tweenDots(dotsRef.current[j], null, 'space');
        }
      }, 500);
    };

    const loop = () => {
      stageCtx.clearRect(0, 0, stage.width, stage.height);
      dotsRef.current.forEach(dot => dot.draw());
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    function tweenDots(dot, pos, type) {
      dot.tween?.kill();
      
      if (type === 'space') {
        dot.tween = gsap.to(dot, {
          x: randomNumber(0, stage.width),
          y: randomNumber(0, stage.height),
          alpha: 0.3,
          duration: 3 + Math.random() * 2,
          ease: "power2.inOut",
          onComplete: () => tweenDots(dot, null, 'space')
        });
      } else if (type === 'number') {
        dot.tween = gsap.to(dot, {
          x: pos.x + numberOffsetX,
          y: pos.y + numberOffsetY,
          alpha: 1,
          duration: 1.5 + Math.random(),
          ease: "power2.out"
        });
      }
      
      tweenAnimationsRef.current.push(dot.tween);
    }

    loop();
    dotsRef.current.forEach(dot => tweenDots(dot, null, 'space'));

    setTimeout(() => {
      drawNumber(countdownDays.toString());
    }, 1000);
    
    return () => {
      animationFrameRef.current && cancelAnimationFrame(animationFrameRef.current);
      tweenAnimationsRef.current.forEach(tween => tween?.kill());
    };
  }, [countdownDays]);

  return (
    <section className="relative flex-1">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/80 to-[#4F33B3]/30"></div>
      </div>
      <div className="relative z-10 px-4 py-3 h-full">
        <div className="mb-6 pt-10 text-center">
          <div id="countdown-container" className="relative mx-auto h-48 w-full max-w-md mb-4">
            <canvas ref={numberCanvasRef} className="absolute top-0 left-0 z-20"></canvas>
            <canvas ref={dotsCanvasRef} className="absolute top-0 left-0 z-30"></canvas>
          </div>
          <h3 className="text-3xl font-bold tracking-wider md:text-1xl mb-10">Days to go</h3>
          <h1 className="text-5xl mb-15 font-bold tracking-wider md:text-7xl">Aavishkaar'25</h1>
          <div className="mt-6 flex items-center justify-center">
            <a href="#featured" className="group flex items-center space-x-2 text-xl font-medium tracking-wide">
              <span>REGISTER NOW</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
