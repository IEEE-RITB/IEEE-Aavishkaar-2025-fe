import { useState, useEffect } from "react";
import { Link } from "react-router";
import { eventImages } from "../configs/eventImages.config";
import { API_ENDPOINTS } from "../configs/api.config";

// Sample event data for demo purposes
const SAMPLE_EVENTS = [
  {
    id: "sample-1",
    title: "RoboWars",
    category: "Robotics",
    description:
      "Build and battle your robots in this exciting competition. Show off your engineering skills and compete for glory!",
    date: "March 15, 10:00 AM",
    location: "Main Auditorium",
    img: eventImages.Robotics,
    registrationFees: {
      standard: 500,
      ieeeMember: 400,
    },
  },
  {
    id: "sample-2",
    title: "CodeCraft",
    category: "Programming",
    description:
      "A competitive programming contest that tests your problem-solving skills and coding efficiency. Solve complex algorithmic challenges and win exciting prizes!",
    date: "March 16, 9:00 AM",
    location: "Computer Lab 1",
    img: eventImages.Programming || eventImages.Robotics,
    registrationFees: {
      standard: 300,
      ieeeMember: 250,
    },
  },
  {
    id: "sample-3",
    title: "CircuitMaster",
    category: "Electronics",
    description:
      "Design and implement innovative electronic circuits. Showcase your hardware design skills and compete with the best!",
    date: "March 17, 10:00 AM",
    location: "Electronics Lab",
    img: eventImages.Electronics || eventImages.Robotics,
    registrationFees: {
      standard: 600,
      ieeeMember: 500,
    },
  },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Try to fetch from API first
    fetch(API_ENDPOINTS.EVENTS)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        // Transform data regardless of _id field presence
        const transformedEvents = data.map((event, index) => {
          console.log("Event theme:", event.eventTheme);
          console.log("Available images:", Object.keys(eventImages));
          const img = eventImages[event.eventTheme] || eventImages.Robotics;
          console.log("Selected image:", img);

          return {
            // Use event._id if available, otherwise create a unique ID using index
            id: event._id || `event-${index}`,
            title: event.eventName,
            category: event.eventTheme,
            description: event.eventDescription,
            date: event.eventTimeline.dates[0]
              ? new Date(event.eventTimeline.dates[0]).toLocaleDateString(
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
            img: img,
            registrationFees: event.registrationFees,
          };
        });
        setEvents(transformedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        console.log("Using sample data due to API error");
        setEvents(SAMPLE_EVENTS);
        setLoading(false);
      });
  }, []);

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E056C1]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-2">Error</h2>
          <p className="text-white/80">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-8 sm:py-16 rounded-lg">
        <div className="container mx-auto lg:px-32 md:-ml-26">
          {/* <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-16 text-center sm:text-left">
            All Events
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
            Explore all the exciting events happening at Aavishkaar'25. From
            technical competitions to cultural showcases, there's something for
            everyone.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {eventCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
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
      <section className="py-6 sm:py-8 px-4">
        <div className="container mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <p className="text-white/80">No events found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
              {filteredEvents.map((event) => (
                <Link
                  to={`/events/${event.id}`}
                  key={event.id}
                  className="bg-[#1E1E2D] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#4F33B3]/20 transition-shadow w-full"
                >
                  <div className="h-40 sm:h-48 relative">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <span className="px-2 sm:px-3 py-1 bg-[#E056C1] rounded-full text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {event.title}
                    </h3>
                    <div className="mt-2 text-xs sm:text-sm text-white/70">
                      {event.date}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-white/70">
                      {event.location}
                    </div>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/80 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/70">
                      Registration: ₹{event.registrationFees.standard}
                      {event.registrationFees.ieeeMember && (
                        <span className="ml-2 text-[#E056C1]">
                          (IEEE: ₹{event.registrationFees.ieeeMember})
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;
