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
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { API_ENDPOINTS } from "../configs/api.config";
// Import default data for missing fields
import { getEventDetails } from "../configs/eventDetails.config";
import { getRules } from "../configs/rules.config";
import { getFaqs } from "../configs/faqs.config";

const EventDetail = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [defaultDetails, setDefaultDetails] = useState(null);
  const [rules, setRules] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const toggleFaq = (index) => {
    setExpandedFaqs(
      (prevExpandedFaqs) =>
        prevExpandedFaqs.includes(index)
          ? prevExpandedFaqs.filter((i) => i !== index) // Remove if already expanded
          : [...prevExpandedFaqs, index] // Add if not expanded
    );
  };

  const formatPrizes = (prizesArray) => {
    if (!Array.isArray(prizesArray)) return [];

    return prizesArray.map((prize) => {
      if (typeof prize === "string") return prize;

      // Handle prize objects
      const position = prize.position;
      const amount = prize.amount;

      // Add ordinal suffix to position
      let suffix = "th";
      if (position % 10 === 1 && position % 100 !== 11) suffix = "st";
      else if (position % 10 === 2 && position % 100 !== 12) suffix = "nd";
      else if (position % 10 === 3 && position % 100 !== 13) suffix = "rd";

      return `${position}${suffix} Place: ₹${amount.toLocaleString()}`;
    });
  };
  // console.log(slug)


  // Integrate the API fetching logic
  useEffect(() => {
    fetch(API_ENDPOINTS.EVENT_DETAIL(slug))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API responded with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Received event data from specific endpoint:", data);

        // Set both event and eventDetails
        setEvent(data);

        // Merge API data with default data for eventDetails
        const defaultEventData = getEventDetails();
        setDefaultDetails(defaultEventData);

        // Find the matching default event details using the event I

        // Create the complete details by merging, prioritizing API data
        const completeDetails = {
          id: data.eventId,
          title: data.eventName || defaultEventData.title,
          description: data.eventDescription || defaultEventData.description,
          timeline: data.eventTimeline || defaultEventData.timeline,
          theme: data.eventTheme || defaultEventData.theme,
          maxParticipants:
            data.maxParticipantsPerTeam || defaultEventData.maxParticipants,
          fees: data.registrationFees || defaultEventData.fees,
          organiser: data.organiser || defaultEventData.organiser,
          coordinators: data.coordinators || defaultEventData.coordinators,
          rules: data.rules || defaultEventData.rules || [],
          faqs: data.faqs || defaultEventData.faqs || [],
          img: data.img || defaultEventData.img,
          category: data.eventTheme || defaultEventData.category,
          duration: data.duration || defaultEventData.duration,
          location: data.eventVenue || defaultEventData.location,
          teamSize: data.maxParticipantsPerTeam || defaultEventData.teamSize,
          longDescription:
            data.longDescription || defaultEventData.longDescription,
          prizes: data.prizes || defaultEventData.prizes,
          date: data.date
            ? new Date(data.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })
            : "Date TBA",
        };

        setEventDetails(completeDetails);
        // console.log("Complete ", completeDetails);

        // Set specific state items if needed
        if (completeDetails.rules) setRules(completeDetails.rules);
        if (completeDetails.faqs) setFaqs(completeDetails.faqs);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
        setLoading(false);
      });
  }, [slug]);

  // console.log(eventDetails)

  if (loading) {
    return (
      <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
        {/* Hero Section Skeleton */}
        <section className="relative">
          <div className="bg-[#1E1E2D] h-64 w-full"></div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="h-6 w-32 bg-[#1E1E2D] rounded-md mb-6 animate-pulse"></div>

            <div className="mt-8">
              <div className="h-8 w-24 bg-[#1E1E2D] rounded-full mb-4 animate-pulse"></div>
              <div className="h-12 w-3/4 bg-[#1E1E2D] rounded-md mb-4 animate-pulse"></div>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="h-6 w-48 bg-[#1E1E2D] rounded-md animate-pulse"></div>
                <div className="h-6 w-40 bg-[#1E1E2D] rounded-md animate-pulse"></div>
                <div className="h-6 w-32 bg-[#1E1E2D] rounded-md animate-pulse"></div>
              </div>

              <div className="mt-8 max-w-3xl">
                <div className="h-6 w-full bg-[#1E1E2D] rounded-md mb-3 animate-pulse"></div>
                <div className="h-6 w-full bg-[#1E1E2D] rounded-md mb-3 animate-pulse"></div>
                <div className="h-6 w-2/3 bg-[#1E1E2D] rounded-md animate-pulse"></div>
              </div>

              <div className="mt-8">
                <div className="h-12 w-40 bg-[#1E1E2D] rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections Skeleton */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl lg:max-w-6xl xl:max-w-7xl">
            {/* Event Details Skeleton */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#1E1E2D] mr-3 animate-pulse"></div>
                <div className="h-8 w-40 bg-[#1E1E2D] rounded-md animate-pulse"></div>
              </div>
              <div className="bg-[#1E1E2D]/50 rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
                <div className="h-6 w-full bg-[#1E1E2D] rounded-md mb-3 animate-pulse"></div>
                <div className="h-6 w-full bg-[#1E1E2D] rounded-md mb-3 animate-pulse"></div>
                <div className="h-6 w-full bg-[#1E1E2D] rounded-md mb-3 animate-pulse"></div>
                <div className="h-6 w-3/4 bg-[#1E1E2D] rounded-md animate-pulse"></div>

                <div className="mt-8">
                  <div className="h-7 w-24 bg-[#1E1E2D] rounded-md mb-4 animate-pulse"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-6 w-full bg-[#1E1E2D] rounded-md animate-pulse"></div>
                    <div className="h-6 w-full bg-[#1E1E2D] rounded-md animate-pulse"></div>
                    <div className="h-6 w-full bg-[#1E1E2D] rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules Skeleton */}
            <div className="mb-12">
              <div className="flex itemAres-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#1E1E2D] mr-3 animate-pulse"></div>
                <div className="h-8 w-56 bg-[#1E1E2D] rounded-md animate-pulse"></div>
              </div>
              <div className="bg-[#1E1E2D]/50 rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#1E1E2D] mr-3 flex-shrink-0 animate-pulse"></div>
                      <div className="h-6 w-full bg-[#1E1E2D] rounded-md animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs Skeleton */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#1E1E2D] mr-3 animate-pulse"></div>
                <div className="h-8 w-64 bg-[#1E1E2D] rounded-md animate-pulse"></div>
              </div>
              <div className="bg-[#1E1E2D]/50 rounded-xl border border-[#4F33B3]/30 divide-y divide-[#4F33B3]/20">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="p-4 md:p-6">
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-3/4 bg-[#1E1E2D] rounded-md animate-pulse"></div>
                      <div className="h-6 w-6 bg-[#1E1E2D] rounded-md animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinators Skeleton */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#1E1E2D] mr-3 animate-pulse"></div>
                <div className="h-8 w-48 bg-[#1E1E2D] rounded-md animate-pulse"></div>
              </div>
              <div className="bg-[#1E1E2D]/50 rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-4 bg-[#2E1E8A]/30 rounded-lg">
                      <div className="h-6 w-3/4 bg-[#1E1E2D] rounded-md mb-3 animate-pulse"></div>
                      <div className="h-5 w-1/2 bg-[#1E1E2D] rounded-md mb-2 animate-pulse"></div>
                      <div className="h-5 w-1/2 bg-[#1E1E2D] rounded-md animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Register Banner Skeleton */}
        <section className="py-12 px-4 bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] mt-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to participate?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Don't miss this opportunity to showcase your skills, learn from
              peers, and win exciting prizes.
            </p>
            <button className="px-8 py-4 bg-[#E056C1] rounded-lg text-lg font-bold hover:opacity-90 transition-opacity transform hover:scale-105 duration-200">
              Register for {event?.name || event?.eventName}
            </button>
          </div>
        </section>
      </main>
    );
  }

  // Handle case where event with the given ID was not found
  if (!eventDetails) {
    return (
      <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <p className="text-lg text-white/70 mb-8 text-center">
            We couldn't find the event you're looking for.
          </p>
          <Link
            to="/events"
            className="px-6 py-3 bg-gradient-to-r from-[#E056C1] to-[#4F33B3] rounded-lg text-lg font-bold"
          >
            View All Events
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-12">
        <div className="absolute inset-0 z-0">
          <img
            src={eventDetails?.img}
            alt={eventDetails?.title}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/80 to-[#0D0D1A]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <Link
            to="/events"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 mt-4"
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
              {eventDetails?.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {eventDetails?.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center text-white/80">
                <Clock className="h-5 w-5 mr-2" />
                <span>{eventDetails.date}</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{eventDetails?.location}</span>
              </div>
              <div className="flex items-center text-white/80">
                <Users className="h-5 w-5 mr-2" />
                <span>{eventDetails.teamSize}</span>
              </div>
            </div>

            <div className="mt-8 max-w-3xl">
              <p className="text-lg text-white/90 leading-relaxed">
                {eventDetails?.description}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to={`/${eventDetails?.id}/teamregister`}
                className="px-8 py-4 bg-gradient-to-r from-[#E056C1] to-[#4F33B3] rounded-lg text-lg font-bold hover:opacity-90 transition-opacity transform hover:scale-105 duration-200"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-12">
        <div className="container px-4">
          {/* Event Details */}
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
              Event Details
            </h2>
            <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
              <p className="text-white/80 whitespace-pre-line leading-relaxed text-base md:text-lg">
                {eventDetails.longDescription}
              </p>

              {eventDetails.prizes && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#E056C1]">
                    Prizes
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                    {formatPrizes(eventDetails.prizes).map((prize, index) => (
                      <li key={index}>{prize}</li>
                    ))}
                  </ul>
                </div>
              )}

              {eventDetails.timeline && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#E056C1]">
                    Event Timeline
                  </h3>
                  <div className="space-y-4">
                    {eventDetails.timeline.map((item, index) => (
                      <div
                        key={index}
                        className="flex border-l-2 border-[#4F33B3] pl-4 py-1"
                      >
                        <div className="w-32 md:w-40 font-medium">
                          {item.time}
                        </div>
                        <div className="flex-1 text-white/80">
                          {item.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Rules and Regulations */}
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
              Rules & Regulations
            </h2>
            <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
              <ul className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                {rules.map((rule, index) => (
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

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                3
              </span>
              Frequently Asked Questions
            </h2>
            <div className="bg-[#1E1E2D] rounded-xl border border-[#4F33B3]/30 divide-y divide-[#4F33B3]/20">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 cursor-pointer hover:bg-[#2A2A3D] transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="w-full flex justify-between items-center">
                    <h3 className="text-lg font-medium text-left">
                      {faq.question}
                    </h3>
                    {expandedFaqs.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-[#E056C1]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#E056C1]" />
                    )}
                  </div>
                  {expandedFaqs.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-white/70"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                4
              </span>
              Event Coordinators
            </h2>
            <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {eventDetails.coordinators.map((coordinator, index) => (
                  <div key={index} className="p-4 bg-[#2E1E8A]/30 rounded-lg">
                    <h3 className="font-semibold text-lg">
                      {coordinator.name}
                    </h3>
                    <p className="text-white/70 mt-1">{coordinator.contact}</p>
                    <p className="text-white/70">{coordinator.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Register Banner */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] mt-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to participate?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Don't miss this opportunity to showcase your skills, learn from
            peers, and win exciting prizes.
          </p>
          <Link
            to={`/${eventDetails?.id}/teamregister`}
            className="px-8 py-4 bg-[#E056C1] rounded-lg text-lg font-bold hover:opacity-90 transition-opacity transform hover:scale-105 duration-200"
          >
            Register for {event?.title}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
