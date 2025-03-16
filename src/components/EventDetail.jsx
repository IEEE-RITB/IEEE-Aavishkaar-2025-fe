import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../configs/api.config";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINTS.EVENT_DETAIL(id))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API responded with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received event data from specific endpoint:", data);
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching specific event details:", error);
        console.log("Trying to fetch all events instead...");

        fetch(API_ENDPOINTS.EVENTS)
          .then((response) => response.json())
          .then((allEvents) => {
            console.log("Received all events:", allEvents);

            if (id.startsWith("event-")) {
              const indexStr = id.split("-")[1];
              const index = parseInt(indexStr, 10);

              if (!isNaN(index) && index >= 0 && index < allEvents.length) {
                console.log(`Found event at index ${index}`);
                setEvent(allEvents[index]);
                setLoading(false);
              } else {
                throw new Error("Event index out of range");
              }
            } else {
              const foundEvent = allEvents.find((e) => e._id === id);
              if (foundEvent) {
                console.log("Found event by _id");
                setEvent(foundEvent);
                setLoading(false);
              } else {
                throw new Error("Event not found in the collection");
              }
            }
          })
          .catch((err) => {
            console.error("Error in fallback event fetching:", err);
            setError("Failed to load event details. Please try again later.");
            setLoading(false);
          });
      });
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#E056C1] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </main>
    );
  }

  if (error || !event) {
    return (
      <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-lg text-white/70 mb-8 text-center">
            {error || "We couldn't find the event you're looking for."}
          </p>
          <Link
            to="/events"
            className="px-6 py-3 bg-gradient-to-r from-[#E056C1] to-[#4F33B3] rounded-lg text-lg font-bold"
          >
            View All Events
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={`https://source.unsplash.com/800x600/?${event.eventTheme.toLowerCase()}`}
            alt={event.eventName}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/80 to-[#0D0D1A]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <Link
            to="/events"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-[#E056C1] text-sm font-medium mb-4">
              {event.eventTheme}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {event.eventName}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              {event.eventTimeline &&
                event.eventTimeline.dates &&
                event.eventTimeline.dates[0] && (
                  <div className="flex items-center text-white/80">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>
                      {event.eventTimeline.dates[0] !== null
                        ? new Date(
                            event.eventTimeline.dates[0]
                          ).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })
                        : "Date TBA"}
                    </span>
                  </div>
                )}
              {event.eventVenue && (
                <div className="flex items-center text-white/80">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.eventVenue}</span>
                </div>
              )}
              {event.maxParticipantsPerTeam && (
                <div className="flex items-center text-white/80">
                  <Users className="h-5 w-5 mr-2" />
                  <span>
                    Up to {event.maxParticipantsPerTeam} members per team
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8 max-w-3xl">
              <p className="text-lg text-white/90 leading-relaxed">
                {event.eventDescription}
              </p>
            </div>

            <div className="mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-[#E056C1] to-[#4F33B3] rounded-lg text-lg font-bold hover:opacity-90 transition-opacity transform hover:scale-105 duration-200">
                Register Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl lg:max-w-6xl xl:max-w-7xl">
          {/* Basic Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                1
              </span>
              Registration Details
            </h2>
            <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {event.registrationFees && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#E056C1]">
                      Registration Fees
                    </h3>
                    <div className="space-y-2">
                      {event.registrationFees.standard !== undefined && (
                        <p className="text-white/80">
                          <span className="font-medium">Standard:</span> ₹
                          {event.registrationFees.standard}
                        </p>
                      )}
                      {event.registrationFees.ieeeMember !== undefined && (
                        <p className="text-white/80">
                          <span className="font-medium">IEEE Members:</span> ₹
                          {event.registrationFees.ieeeMember}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {event.maxParticipantsPerTeam && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#E056C1]">
                      Team Size
                    </h3>
                    <p className="text-white/80">
                      Up to {event.maxParticipantsPerTeam} members per team
                    </p>
                  </div>
                )}
              </div>

              {event.coordinators && event.coordinators.length > 0 && (
                <div className="mt-8 pt-8 border-t border-[#4F33B3]/20">
                  <h3 className="text-xl font-semibold mb-4 text-[#E056C1]">
                    Event Coordinators
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {event.coordinators.map((coordinator, index) => (
                      <div
                        key={index}
                        className="bg-[#4F33B3]/10 p-4 rounded-lg"
                      >
                        <p className="font-medium text-white">
                          {coordinator.name}
                        </p>
                        {coordinator.contactNumber && (
                          <p className="text-white/60 mt-1">
                            {coordinator.contactNumber}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Prize Money Card */}
          {event.prizes && event.prizes.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                  2
                </span>
                Prize Money
              </h2>
              <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {event.prizes.map((prize, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#4F33B3]/20 to-[#E056C1]/20 p-6 rounded-lg text-center shadow-lg"
                    >
                      <div className="inline-block p-3 rounded-full bg-[#E056C1]/20 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#E056C1]"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                      </div>
                      <div className="text-xl font-bold text-[#E056C1]">
                        {prize.position === 1
                          ? "1st"
                          : prize.position === 2
                          ? "2nd"
                          : prize.position === 3
                          ? "3rd"
                          : `${prize.position}th`}{" "}
                        Prize
                      </div>
                      <div className="text-3xl font-bold mt-2">
                        ₹{prize.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Event Venue Card */}
          {event.eventVenue && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                  {event.prizes && event.prizes.length > 0 ? "3" : "2"}
                </span>
                Event Venue
              </h2>
              <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="p-4 rounded-full bg-[#4F33B3]/20 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                    <MapPin className="h-8 w-8 text-[#E056C1]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Location
                    </h3>
                    <p className="text-white/80 text-lg">{event.eventVenue}</p>
                    {event.eventTimeline &&
                      event.eventTimeline.dates &&
                      event.eventTimeline.dates[0] && (
                        <div className="mt-4 flex items-center text-white/60">
                          <Clock className="h-5 w-5 mr-2" />
                          <span>
                            {event.eventTimeline.dates[0] !== null
                              ? new Date(
                                  event.eventTimeline.dates[0]
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                })
                              : "Date TBA"}
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Rules Section - Update numbering based on preceding cards */}
          {event.rules && event.rules.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                  {(event.prizes && event.prizes.length > 0 ? 1 : 0) +
                    (event.eventVenue ? 1 : 0) +
                    2}
                </span>
                Rules & Guidelines
              </h2>
              <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4F33B3]/30 mr-3 text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-white/80">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Event Flow Section - Update numbering based on preceding cards */}
          {event.eventFlow && event.eventFlow.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                  {(event.prizes && event.prizes.length > 0 ? 1 : 0) +
                    (event.eventVenue ? 1 : 0) +
                    (event.rules && event.rules.length > 0 ? 1 : 0) +
                    2}
                </span>
                Event Flow
              </h2>
              <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
                <div className="space-y-4">
                  {event.eventFlow.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4F33B3]/30 flex items-center justify-center mr-3">
                        <span className="text-sm font-medium">{index + 1}</span>
                      </div>
                      <p className="text-white/80 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
