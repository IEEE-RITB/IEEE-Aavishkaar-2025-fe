export const eventsData = [
  {
    id: 1,
    title: "Hack The Matrix",
    category: "Technical",
    date: "April 15 · 10:00 AM",
    location: "Main Auditorium",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&fit=crop",
    description:
      "A 24-hour hackathon focused on building innovative solutions for real-world problems.",
    featured: true,
  },
  {
    id: 2,
    title: "Neural Network Summit",
    category: "Technical",
    date: "April 16 · 10:00 AM",
    location: "Conference Hall B",
    img: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?w=800&fit=crop",
    description:
      "Join experts to explore the latest advancements in neural networks and deep learning.",
    featured: true,
  },
  {
    id: 3,
    title: "Cyber Gaming Arena",
    category: "Gaming",
    date: "April 17 · 10:00 AM",
    location: "Gaming Zone",
    img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&fit=crop",
    description:
      "Compete in tournaments featuring popular esports titles with exciting prizes.",
    featured: true,
  },
  {
    id: 4,
    title: "Murder Mystery",
    category: "Cultural",
    date: "April 18 · 10:00 AM",
    location: "Central Plaza",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVc3Z2AwmAI2524rR2ojCx1ojHqG1h5i-GQA&s",
    description:
      "Solve a thrilling mystery with clues hidden throughout the venue.",
    featured: true,
  },
  {
    id: 5,
    title: "Art Exhibition",
    category: "Cultural",
    date: "April 19 · 10:00 AM",
    location: "Art Gallery",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85DLe82Kt2SKZp5JH4KiGYjrOWzbkKV5ZQA&s",
    description:
      "Discover creativity through visual arts, photography, and digital media.",
    featured: true,
  },
  {
    id: 6,
    title: "Robotics Challenge",
    category: "Technical",
    date: "April 20 · 9:00 AM",
    location: "Engineering Block",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&fit=crop",
    description:
      "Test your robot's capabilities in navigation, object manipulation, and more.",
    featured: false,
  },
  {
    id: 7,
    title: "Dance Competition",
    category: "Cultural",
    date: "April 21 · 5:00 PM",
    location: "Open Air Theatre",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&fit=crop",
    description:
      "Showcase your dance talent across various styles including contemporary, classical, and street.",
    featured: false,
  },
  {
    id: 8,
    title: "Business Pitch Contest",
    category: "Management",
    date: "April 22 · 11:00 AM",
    location: "Seminar Hall",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&fit=crop",
    description:
      "Present your innovative business ideas to a panel of industry experts and investors.",
    featured: false,
  },
];

export const eventCategories = [
  "All",
  ...new Set(eventsData.map((event) => event.category)),
];

export const getEventDetailsById = (id) => {
  return eventDetails.find((detail) => detail.id === id);
};
