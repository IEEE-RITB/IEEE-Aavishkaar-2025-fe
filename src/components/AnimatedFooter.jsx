import { Star } from "lucide-react";

const AnimatedFooter = () => {
  return (
    <section className="mt-auto bg-[#2E1E8A] py-4 relative overflow-hidden">
      <div className="flex animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-nowrap">
            {[...Array(6)].map((_, j) => (
              <div key={j} className="flex items-center flex-nowrap">
                <span className="mx-2 md:mx-4 text-sm md:text-xl font-bold text-[#E056C1]">
                  RIT-B TechFest
                </span>
                <Star className="mx-2 md:mx-4 h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedFooter;
