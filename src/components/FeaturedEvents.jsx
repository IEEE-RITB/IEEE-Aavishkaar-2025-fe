import { ArrowRight } from "lucide-react";
import { eventsData } from "../configs/events.config";
import { Link } from "react-router-dom";

const FeaturedEvents = () => {
  // Filter events that are marked as featured
  const featuredEvents = eventsData.filter((event) => event.featured);

  return (
    <section id="featured" className="px-8 md:px-16 lg:px-24 py-8 bg-[#0c0c18]">
      <div className="mb-6 flex items-center justify-center">
        <h2 className="text-3xl font-bold tracking-wide text-center text-white">
          Featured Events
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
          {/* Event Cards */}
          {featuredEvents.map((event) => (
            <Link
              to={`/events/${event.id}`}
              key={event.id}
              className="overflow-hidden rounded-lg bg-[#1e1e2d] hover:shadow-lg hover:shadow-[#4F33B3]/30 transition-all duration-300"
            >
              <div className="relative">
                {/* Category Tag */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="px-3 py-1 text-xs font-medium bg-[#ff3e9d] text-white rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Image */}
                <div className="h-48">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{event.title}</h3>
                <div className="mt-2 text-sm font-medium text-white/80">
                  {event.date}
                </div>
                <div className="mt-1 text-sm text-white/70">{event.venue}</div>
                <p className="mt-3 text-sm text-white/60 line-clamp-3">
                  {event.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/events"
          className="group flex items-center space-x-2 px-6 py-3 text-xl font-medium tracking-wide bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] rounded-lg hover:opacity-90 transition-opacity"
        >
          <span>View All Events</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedEvents;
