import { ArrowRight } from "lucide-react";
import bgVideo from "../assets/bg.mp4";

const Hero = () => {
  return (
    <>
      {/* Use Google Fonts or Custom Hosted Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />

      <section className="relative flex-1 h-[600px] md:h-[500px] lg:h-[600px]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain md:object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/80 to-[#4F33B3]/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center px-4 py-16 h-full">
          <div className="mb-6 pt-40 text-center">
            {/* RIT-B with Gold Glow Effect */}
            <h2 className="text-4xl font-bold tracking-wide md:text-5xl text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">
              RIT-B
            </h2>
            {/* TECHFEST in Public Pixel or Press Start 2P */}
            <h1
              className="text-6xl md:text-8xl font-bold tracking-wider"
              style={{
                fontFamily: "'Press Start 2P', sans-serif",
                color: "#FFFFFF",
                textShadow: "4px 4px 0px #FF007F, 8px 8px 0px rgba(0,0,0,0.2)",
              }}
            >
              TECHFEST
            </h1>

            <div className="mt-6 flex items-center justify-center">
              <a
                href="#featured"
                className="group flex items-center space-x-2 text-xl font-medium tracking-wide"
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
