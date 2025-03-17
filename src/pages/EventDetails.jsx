import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { API_ENDPOINTS } from "../configs/api.config";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINTS.EVENT_DETAIL(id))
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
        setError("Failed to load event details. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E056C1]"></div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-2">Error</h2>
          <p className="text-white/80">{error || "Event not found"}</p>
          <Link
            to="/events"
            className="inline-flex items-center text-[#E056C1] hover:text-[#E056C1]/80 transition-colors mt-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/events"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4 sm:mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            {event.eventName}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
            {event.eventDescription}
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-6 sm:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#1E1E2D] rounded-xl p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Event Details
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-white/80">
                  <p>
                    <span className="text-white/60">Theme:</span>{" "}
                    {event.eventTheme}
                  </p>
                  {event.eventVenue && (
                    <p>
                      <span className="text-white/60">Venue:</span>{" "}
                      {event.eventVenue}
                    </p>
                  )}
                  <p>
                    <span className="text-white/60">Team Size:</span> Up to{" "}
                    {event.maxParticipantsPerTeam} members
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Registration Fees
                </h3>
                <div className="space-y-2 text-sm sm:text-base text-white/80">
                  <p>
                    <span className="text-white/60">Standard:</span> ₹
                    {event.registrationFees.standard}
                  </p>
                  <p>
                    <span className="text-white/60">IEEE Members:</span> ₹
                    {event.registrationFees.ieeeMember}
                  </p>
                </div>
              </div>
            </div>

            {/* Rules */}
            {event.rules && event.rules.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3">
                  Rules
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-white/80">
                  {event.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Prizes */}
            {event.prizes && event.prizes.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3">
                  Prizes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {event.prizes.map((prize, index) => (
                    <div
                      key={index}
                      className="bg-[#2E1E8A]/20 p-3 sm:p-4 rounded-lg text-center"
                    >
                      <div className="text-base sm:text-lg font-semibold text-[#E056C1]">
                        {prize.position === 1
                          ? "1st"
                          : prize.position === 2
                          ? "2nd"
                          : prize.position === 3
                          ? "3rd"
                          : `${prize.position}th`}{" "}
                        Prize
                      </div>
                      <div className="text-xl sm:text-2xl font-bold mt-1">
                        ₹{prize.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Flow */}
            {event.eventFlow && event.eventFlow.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3">
                  Event Flow
                </h3>
                <div className="space-y-2">
                  {event.eventFlow.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#2E1E8A] flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-xs sm:text-sm font-medium">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-white/80 pt-0.5 sm:pt-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coordinators */}
            {event.coordinators && event.coordinators.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3">
                  Event Coordinators
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {event.coordinators.map((coordinator, index) => (
                    <div
                      key={index}
                      className="bg-[#2E1E8A]/20 p-3 sm:p-4 rounded-lg"
                    >
                      <div className="text-sm sm:text-base font-medium">
                        {coordinator.name}
                      </div>
                      <div className="text-xs sm:text-sm text-white/60 mt-1">
                        {coordinator.contactNumber}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
