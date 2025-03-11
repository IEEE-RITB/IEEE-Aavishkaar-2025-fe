import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Send } from "lucide-react";
import NebulaBackground from "../NebulaBackground";

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    venue: "",
    theme: "",
    maxParticipants: 4,
    prizePool: [
      {
        position: 1,
        amount: 1000,
      },
    ],
    registrationFees: {
      standard: 100,
      ieeeMember: 50,
    },
    rules: [""],
    coordinators: [
      {
        name: "",
        contactNumber: "",
      },
    ],
  });

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <NebulaBackground />
      <animated.div style={fadeIn} className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Register For Event</span>
        </h1>

        <div className="flex flex-col mt-12 items-center">
          <div className="w-1/2 bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-neon-pink/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="venue"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Venue
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="theme"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Theme
                </label>
                <input
                  type="text"
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <label
                    htmlFor="maxParticipants"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Max Participants
                  </label>
                  <input
                    type="number"
                    id="maxParticipants"
                    name="maxParticipants"
                    value={formData.maxParticipants}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="prizePool"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Prize Pool
                  </label>
                  <input
                    type="number"
                    id="prizePool"
                    name="prizePool"
                    value={formData.prizePool[0].amount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="registrationFees"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Registration Fees
                </label>
                <div className="flex space-x-6 w-full">
                  <div>
                    <label
                      htmlFor="registrationFeesStandard"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Standard
                    </label>
                    <input
                      type="number"
                      id="registrationFeesStandard"
                      name="registrationFeesStandard"
                      value={formData.registrationFees.standard}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="registrationFeesMember"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      IEEE Member
                    </label>
                    <input
                      type="number"
                      id="registrationFeesMember"
                      name="registrationFeesMember"
                      value={formData.registrationFees.ieeeMember}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="rules"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Rules
                </label>
                <input
                  type="text"
                  id="rules"
                  name="rules"
                  value={formData.rules[0]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="coordinators"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Coordinators
                </label>
                <input
                  type="text"
                  id="coordinators"
                  name="coordinators"
                  value={formData.coordinators[0].name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="neon-button w-full flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default EventForm;
