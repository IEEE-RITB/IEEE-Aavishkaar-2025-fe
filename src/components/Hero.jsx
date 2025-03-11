import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex-1">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Event background"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D1A]/80 to-[#4F33B3]/30"></div>
      </div>

      <div className="relative z-10 px-4 py-16 h-full">
        <div className="mb-6 pt-40 text-center">
          <h1 className="text-5xl font-bold tracking-wider md:text-7xl">
            Aavishkaar'25
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
  );
};

export default Hero;
