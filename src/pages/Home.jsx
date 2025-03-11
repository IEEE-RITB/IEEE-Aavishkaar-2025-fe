import Hero from "../components/Hero";
import FeaturedEvents from "../components/FeaturedEvents";
import Navbar from "../components/Navbar";
import AnimatedFooter from "../components/AnimatedFooter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AnimatedFooter />
      <FeaturedEvents />
    </>
  );
};

export default Home;
