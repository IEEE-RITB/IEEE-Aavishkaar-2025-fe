import { ExternalLink, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import sponsors from "../configs/sponsors.json";

const Sponsors = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 mt-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">All Sponsors</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Meet the amazing sponsors behind Aavishkaar'25. From industry
            leaders to tech innovators, they're here to make this event
            possible.
          </p>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-8 px-4 flex-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-[#1E1E2D] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#4F33B3]/20 transition-shadow"
              >
                <div className="flex flex-col items-center p-8 h-full">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[#E056C1]/50 mb-6">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="px-3 py-1 bg-[#E056C1] rounded-full text-xs font-medium mb-4">
                    {sponsor.tier}
                  </span>
                  <h3 className="text-xl font-bold">{sponsor.name}</h3>
                  <p className="mt-3 text-sm text-white/80">
                    {sponsor.description}
                  </p>
                  <div className="flex justify-center space-x-6 mt-6">
                    <a
                      href={sponsor.twitter || "#"}
                      className="text-white/70 hover:text-[#E056C1] transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={sponsor.linkedin || "#"}
                      className="text-white/70 hover:text-[#E056C1] transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={sponsor.website || "#"}
                      className="text-white/70 hover:text-[#E056C1] transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
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
