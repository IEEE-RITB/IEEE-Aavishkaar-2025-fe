export const eventDetailsTemplate = {
  longDescription:
    "Join us for an exciting event. This is a premier opportunity to showcase your skills, creativity, and problem-solving abilities in a competitive and collaborative environment.\n\nParticipants will have access to mentors, workshops, and resources throughout the event. The best projects will be awarded prizes and potential opportunities for further development with our industry partners.",
  duration: "24 Hours",
  teamSize: "2-4 members",
  prizes: [
    "First Prize: ₹50,000 and internship opportunities",
    "Second Prize: ₹30,000",
    "Third Prize: ₹20,000",
    "Best UI/UX: ₹10,000",
    "Most Innovative Idea: ₹10,000",
  ],
  timeline: [
    { time: "09:00 AM", activity: "Registration and Check-in" },
    {
      time: "10:00 AM",
      activity: "Opening Ceremony and Problem Statement Release",
    },
    { time: "11:00 AM", activity: "Event Begins" },
    { time: "01:00 PM", activity: "Lunch" },
    { time: "04:00 PM", activity: "Mentorship Session" },
    { time: "08:00 PM", activity: "Dinner" },
    { time: "10:00 AM (Day 2)", activity: "Event Ends" },
    { time: "11:00 AM - 01:00 PM", activity: "Project Presentations" },
    { time: "02:00 PM", activity: "Prize Distribution and Closing Ceremony" },
  ],
  coordinators: [
    {
      name: "Rahul Sharma",
      contact: "rahul.sharma@example.com",
      phone: "+91 9876543210",
    },
    {
      name: "Priya Patel",
      contact: "priya.patel@example.com",
      phone: "+91 9876543211",
    },
  ],
};

export const getEventDetails = () => {
  return eventDetailsTemplate;
};
