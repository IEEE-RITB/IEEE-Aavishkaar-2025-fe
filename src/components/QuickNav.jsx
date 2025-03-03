import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Building2, Users2, MessageSquare } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const navItems = [
  {
    title: 'Events',
    path: '/events',
    icon: <Calendar className="w-6 h-6" />,
    description: 'Explore our upcoming tech events'
  },
  {
    title: 'Schedule',
    path: '/schedule',
    icon: <Calendar className="w-6 h-6" />,
    description: 'View the complete event timeline'
  },
  {
    title: 'Sponsors',
    path: '/sponsors',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Meet our technology partners'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <Users2 className="w-6 h-6" />,
    description: 'Get to know our organizers'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <MessageSquare className="w-6 h-6" />,
    description: 'Reach out to us'
  }
];

const QuickNavCard = ({ item }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    rotateY: 0,
    config: { mass: 5, tension: 500, friction: 80 }
  }));

  return (
    <Link to={item.path}>
      <animated.div
        style={props}
        onMouseEnter={() => set({ scale: 1.05, rotateY: 5 })}
        onMouseLeave={() => set({ scale: 1, rotateY: 0 })}
        className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-neon-pink/30 hover:border-neon-pink/60 transition-colors"
      >
        <div className="text-neon-pink mb-4">{item.icon}</div>
        <h3 className="font-orbitron text-xl font-bold mb-2 text-gradient">{item.title}</h3>
        <p className="text-gray-300">{item.description}</p>
      </animated.div>
    </Link>
  );
};

const QuickNav = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">Quick Navigation</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Navigate through our cyberpunk tech festival
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {navItems.map((item, index) => (
          <QuickNavCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default QuickNav;
