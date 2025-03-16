import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex-1 w-full bg-[#1A0F33] md:rounded-lg md:overflow-hidden">
      <div className="absolute inset-0 z-0 w-full">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Event background"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 w-full bg-[#1A0F33]"></div>
      </div>
      <div className="relative z-10 px-4 py-16 h-full sm:py-20 w-full">
        <div className="mb-6 pt-40 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider">
            Aavishkaar'25
          </h1>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="#featured"
              className="group flex items-center space-x-2 text-lg sm:text-xl font-medium tracking-wide px-4 py-2 bg-neon-pink rounded-md shadow-md hover:bg-black  text-[#E056C1] transition-all"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
