import { ArrowRight } from "lucide-react";
import bgVideo from "../assets/bg.mp4";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "TECHFEST";
  const typingSpeed = 200;
  const resetInterval = 5000;

  useEffect(() => {
    let charIndex = 0;
    let typingInterval;

    const startTyping = () => {
      setTypedText("");
      charIndex = 0;
      typingInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setTypedText((prevText) => prevText + fullText.charAt(charIndex));
          charIndex+=1;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    };

    startTyping();

    const resetTimer = setInterval(() => {
      clearInterval(typingInterval);
      startTyping();
    }, resetInterval);

    return () => {
      clearInterval(typingInterval);
      clearInterval(resetTimer);
    };
  }, [fullText, typingSpeed, resetInterval]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />

      <section className="relative flex-1 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/80 to-[#4F33B3]/30"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-start px-4 py-16 h-full">
          <div className="text-center mt-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">
              RIT-B
            </h2>
            <h1
              className="text-5xl md:text-8xl lg:text-8xl font-bold tracking-wider leading-tight"
              style={{
                fontFamily: "'Press Start 2P', sans-serif",
                color: "#FFFFFF",
                textShadow: "4px 4px 0px #FF007F, 8px 8px 0px rgba(0,0,0,0.2)",
              }}
            >
              {typedText}
              <span className="inline-block w-1 animate-pulse bg-white"></span>
            </h1>

            <div className="mt-6 flex items-center justify-center">
              <a
                href="#featured"
                className="group flex items-center space-x-2 text-lg md:text-xl font-medium tracking-wide"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;