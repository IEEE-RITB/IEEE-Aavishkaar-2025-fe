import { ArrowRight } from "lucide-react";
import { eventsData } from "../configs/events.config";
import { Link } from "react-router";
import { useState, useEffect } from "react"; // Add these imports
import { eventImages } from "../configs/eventImages.config";
import { API_ENDPOINTS } from "../configs/api.config";

const FeaturedEvents = () => {
  // Add state management for API data
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Add data fetching effect
  useEffect(() => {
    fetch(API_ENDPOINTS.FEATURED_EVENTS)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched events:", data);
        const transformedEvents = data.map((event, index) => ({
          id: event.id,
          slug: event.slug,
          img:
            event.img || eventImages[event.eventTheme] || eventImages.Robotics,
          title: event.eventName,
          category: event.eventTheme,
          description: event.eventDescription,
          date: event.date
            ? new Date(event.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })
            : "Date TBA",
          venue: event.eventVenue || "TBA",
          organiser: event.organiser ? event.organiser : "",
        }));
        setEvents(transformedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Add loading state
  if (loading) {
    return (
      <section
        id="featured"
        className="px-8 md:px-16 lg:px-24 py-8 bg-[#0c0c18]"
      >
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E056C1]"></div>
        </div>
      </section>
    );
  }

  // Add error state
  if (error) {
    return (
      <section
        id="featured"
        className="px-8 md:px-16 lg:px-24 py-8 bg-[#0c0c18]"
      >
        <div className="text-center text-red-500">{error}</div>
      </section>
    );
  }

  // Your existing render code remains the same, but use featuredEvents from API
  return (
    <section id="featured" className="px-8 md:px-16 lg:px-24 py-8 bg-[#0c0c18]">
      <div className="mb-6 flex items-center justify-center">
        <h2 className="text-3xl font-bold tracking-wide text-center text-white">
          Featured Events
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Link
              to={`/events/${event.slug}`}
              key={event.id}
              className="w-full overflow-hidden rounded-lg bg-[#1e1e2d] hover:shadow-lg hover:shadow-[#4F33B3]/30 transition-all duration-300"
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
                <h3 className="text-lg font-bold text-white">
                  {event.title}
                </h3>
                <div className="mt-2 text-sm font-medium text-white/80">
                  {event.date}
                </div>
                <div className="mt-1 text-sm text-white/70">
                  {event.venue}
                </div>
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
