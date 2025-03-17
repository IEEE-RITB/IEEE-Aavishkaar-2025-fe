import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { eventsData, eventCategories } from "../configs/events.config";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? eventsData
      : eventsData.filter((event) => event.category === activeCategory);

  return (
    <>

      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-16">
        <div className="container px-4 mx-auto">
          <Link
            to="/"
            className="inline-flex items-center mt-4 mb-6 transition-colors text-white/80 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">All Events</h1>
          <p className="max-w-2xl mt-4 text-lg text-white/80">
            Explore all the exciting events happening at Aavishkaar'25. From
            technical competitions to cultural showcases, there's something for
            everyone.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#E056C1] text-white"
                    : "bg-[#1E1E2D] text-white/70 hover:bg-[#2E1E8A] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="flex-1 px-4 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredEvents.map((event) => (
              <Link
                to={`/events/${event.id}`}
                key={event.id}
                className="bg-[#1E1E2D] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#4F33B3]/20 transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#E056C1] rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="mt-2 text-sm text-white/70">{event.date}</div>
                  <div className="mt-1 text-sm text-white/70">
                    {event.location}
                  </div>
                  <p className="mt-3 text-sm text-white/80 line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Events;