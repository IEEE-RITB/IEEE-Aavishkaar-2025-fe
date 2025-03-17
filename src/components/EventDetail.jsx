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
import { eventsData } from "../configs/events.config";
import { getEventDetails } from "../configs/eventDetails.config";
import { getRules } from "../configs/rules.config";
import { getFaqs } from "../configs/faqs.config";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  const [rules, setRules] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const handleRegister=()=>{
    return(
      <Link to="/register"
        className="px-6 py-3 bg-gradient-to-r from-[#E056C1] to-[#4F33B3] rounded-lg text-lg font-bold"
      >
      </Link>
    )
  }
  useEffect(() => {
    // Find the event with the matching ID from the config files
    const fetchEventData = () => {
      // Parse the ID as a number since URL params are strings
      const eventId = parseInt(id, 10);

      // Find the basic event in our config data
      const foundEvent = eventsData.find((event) => event.id === eventId);

      // Get additional data from other config files
      const details = getEventDetails(eventId);
      const eventRules = getRules(eventId);
      const eventFaqs = getFaqs(eventId);

      if (foundEvent && details) {
        setEvent(foundEvent);
        setEventDetails(details);
        setRules(eventRules);
        setFaqs(eventFaqs);
      }

      // Simulate a loading delay
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    fetchEventData();
  }, [id]);

  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
        <Navbar />
        
        {/* Hero Section Skeleton */}
        <section className="relative">
          <div className="bg-[#1E1E2D] h-64 w-full"></div>
          <div className="container relative px-4 py-16 mx-auto">
            <div className="h-6 w-32 bg-[#1E1E2D] rounded-md mb-6 animate-pulse"></div>
            
            <div className="mt-8">
              <div className="h-8 w-24 bg-[#1E1E2D] rounded-full mb-4 animate-pulse"></div>
              <div className="h-12 w-3/4 bg-[#1E1E2D] rounded-md mb-4 animate-pulse"></div>
              
              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="h-6 w-48 bg-[#1E1E2D] rounded-md animate-pulse"></div>
                <div className="h-6 w-40 bg-[#1E1E2D] rounded-md animate-pulse"></div>
                <div className="h-6 w-32 bg-[#1E1E2D] rounded-md animate-pulse"></div>
              </div>
              
              <div className="max-w-3xl mt-8">
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
        <section className="px-4 py-12">
          <div className="container max-w-4xl mx-auto lg:max-w-6xl xl:max-w-7xl">
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
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="h-6 w-full bg-[#1E1E2D] rounded-md animate-pulse"></div>
                    <div className="h-6 w-full bg-[#1E1E2D] rounded-md animate-pulse"></div>
                    <div className="h-6 w-full bg-[#1E1E2D] rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rules Skeleton */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#1E1E2D] mr-3 animate-pulse"></div>
                <div className="h-8 w-56 bg-[#1E1E2D] rounded-md animate-pulse"></div>
              </div>
              <div className="bg-[#1E1E2D]/50 rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                    <div className="flex items-center justify-between">
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
        <section className="py-12 px-4 bg-gradient-to-r from-[#2E1E8A]/50 to-[#4F33B3]/50 mt-12">
          <div className="container mx-auto text-center">
            <div className="h-8 w-64 bg-[#1E1E2D] rounded-md mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 w-full max-w-2xl mx-auto mb-8 bg-[#1E1E2D] rounded-md animate-pulse"></div>
            <div className="h-12 w-48 bg-[#1E1E2D] rounded-lg mx-auto animate-pulse"></div>
          </div>
        </section>
        
        <Footer />
      </main>
    );
  }

  // Handle case where event with the given ID was not found
  if (!event || !eventDetails) {
    return (
      <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
        <div className="flex flex-col items-center justify-center flex-1 p-4">
          <h1 className="mb-4 text-4xl font-bold">Event Not Found</h1>
          <p className="mb-8 text-lg text-center text-white/70">
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={event.img}
            alt={event.title}
            className="object-cover w-full h-full opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A]/80 to-[#0D0D1A]"></div>
        </div>

        <div className="container relative z-10 px-4 py-16 mx-auto">
          <Link
            to="/events"
            className="inline-flex items-center mt-4 mb-6 transition-colors text-white/80 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-[#E056C1] text-sm font-medium mb-4">
              {event.category}
            </div>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              {event.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div className="flex items-center text-white/80">
                <Clock className="w-5 h-5 mr-2" />
                <span>
                  {event.date} | {eventDetails.duration}
                </span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-white/80">
                <Users className="w-5 h-5 mr-2" />
                <span>{eventDetails.teamSize}</span>
              </div>
            </div>

            <div className="max-w-3xl mt-8">
              <p className="text-lg leading-relaxed text-white/90">
                {event.description}
              </p>
            </div>

            <div className="mt-8">
              <button onClick={handleRegister} 
              className="px-8 py-4 bg-gradient-to-r from-[#E056C1] to-[#4F33B3] rounded-lg text-lg font-bold hover:opacity-90 transition-opacity transform hover:scale-105 duration-200">
                Register Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="px-4 py-12">
        <div className="container max-w-4xl mx-auto lg:max-w-6xl xl:max-w-7xl">
          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="flex items-center mb-6 text-2xl font-bold md:text-3xl">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                1
              </span>
              Event Details
            </h2>
            <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
              <p className="text-base leading-relaxed whitespace-pre-line text-white/80 md:text-lg">
                {eventDetails.longDescription}
              </p>

              {eventDetails.prizes && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#E056C1]">
                    Prizes
                  </h3>
                  <ul className="pl-5 space-y-2 list-disc text-white/80 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                    {eventDetails.prizes.map((prize, index) => (
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
                        <div className="w-32 font-medium md:w-40">
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
            <h2 className="flex items-center mb-6 text-2xl font-bold md:text-3xl">
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
            <h2 className="flex items-center mb-6 text-2xl font-bold md:text-3xl">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                3
              </span>
              Frequently Asked Questions
            </h2>
            <div className="bg-[#1E1E2D] rounded-xl border border-[#4F33B3]/30 divide-y divide-[#4F33B3]/20">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 md:p-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full"
                  >
                    <h3 className="text-lg font-medium text-left">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-[#E056C1]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#E056C1]" />
                    )}
                  </button>
                  {expandedFaq === index && (
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
            <h2 className="flex items-center mb-6 text-2xl font-bold md:text-3xl">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4F33B3] mr-3 text-lg">
                4
              </span>
              Event Coordinators
            </h2>
            <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-[#4F33B3]/30">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {eventDetails.coordinators.map((coordinator, index) => (
                  <div key={index} className="p-4 bg-[#2E1E8A]/30 rounded-lg">
                    <h3 className="text-lg font-semibold">
                      {coordinator.name}
                    </h3>
                    <p className="mt-1 text-white/70">{coordinator.contact}</p>
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
          <h2 className="mb-4 text-3xl font-bold">Ready to participate?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Don't miss this opportunity to showcase your skills, learn from
            peers, and win exciting prizes.
          </p>
          <button className="px-8 py-4 bg-[#E056C1] rounded-lg text-lg font-bold hover:opacity-90 transition-opacity transform hover:scale-105 duration-200">
            Register for {event.title}
          </button>
        </div>
      </section>
    </main>
  );
};

export default EventDetail;
