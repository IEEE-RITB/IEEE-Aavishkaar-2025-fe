import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { eventImages } from "../configs/eventImages.config";
import { API_ENDPOINTS } from "../configs/api.config";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch(API_ENDPOINTS.EVENTS)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched events:", data);
        const transformedEvents = data.map((event, index) => ({
          id: event.id,
          slug: event.slug,
          title: event.eventName,
          category: event.eventTheme,
          description: event.eventDescription,
          date: event.date
            ? new Date(event.date).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }
              )
            : "Date TBA",
          location: event.eventVenue || "TBA",
          img: event.img||  eventImages[event.eventTheme] || eventImages.Robotics,
        }));
        // console.log("Transformed events:", transformedEvents);
        setEvents(transformedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Dynamically generate categories from fetched events
  const eventCategories = [
    "All",
    ...new Set(events.map((event) => event.category)),
  ];

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  if (loading) {
    return (
      <section className="bg-[#0c0c18] min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E056C1]"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#0c0c18] min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">{error}</div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-16 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 mt-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">All Events</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Explore all the exciting events happening at RIT Techfest. From
            technical competitions to cultural showcases, there's something for
            everyone.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
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
      <section className="py-8 px-4 sm:px-6 lg:px-12 flex-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <Link
                to={event.slug}
                key={event.id}
                className="bg-[#1E1E2D] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#4F33B3]/20 transition-shadow"
              >
                <div className="h-48 relative">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="h-full w-full object-cover"
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