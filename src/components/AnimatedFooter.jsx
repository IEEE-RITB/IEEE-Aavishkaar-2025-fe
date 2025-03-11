import { Star } from "lucide-react";

const AnimatedFooter = () => {
  return (
    <section className="mt-auto bg-[#2E1E8A] py-4 relative">
      <div className="flex animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] cursor-grab whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {[...Array(6)].map((_, j) => (
              <div key={j} className="flex">
                <span className="mx-4 text-xl font-bold text-[#E056C1]">
                  AAVISHKAAR 2025
                </span>
                <span className="mx-4 text-xl font-bold text-white">
                  <Star />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedFooter;
