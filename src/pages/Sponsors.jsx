import { ExternalLink, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import sponsors from "../configs/sponsors.json";

const Sponsors = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-20 relative overflow-hidden px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Sponsors
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Meet the amazing sponsors behind RIT Techfest. From industry
            leaders to tech innovators, they are making this event possible.
          </p>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-12 px-6 bg-[#1A1A2E]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="relative bg-[#1E1E2D]/90 border border-[#4F33B3]/30 rounded-xl p-8 flex flex-col items-center w-full sm:w-[300px] md:w-[320px] lg:w-[350px] shadow-lg hover:shadow-[#4F33B3]/50 transition-all"
              >
                {/* Tier Badge */}
                {/* <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r from-[#E056C1] to-[#4F33B3] shadow-md">
                  {sponsor.tier}
                </span> */}

                {/* Sponsor Logo */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#E056C1]/60 shadow-md">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Sponsor Name */}
                <h3 className="text-2xl font-bold mt-4 text-white text-center">
                  {sponsor.name}
                </h3>

                {/* Sponsor Description */}
                <p className="mt-3 text-sm text-white/70 text-center">
                  {sponsor.description}
                </p>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  <a
                    href={sponsor.twitter || "#"}
                    className="text-white/70 hover:text-[#E056C1] transition-all hover:scale-110"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={sponsor.linkedin || "#"}
                    className="text-white/70 hover:text-[#E056C1] transition-all hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={sponsor.website || "#"}
                    className="text-white/70 hover:text-[#E056C1] transition-all hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
