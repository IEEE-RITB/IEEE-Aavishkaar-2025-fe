import Hero from "../components/Hero";
import FeaturedEvents from "../components/FeaturedEvents";
import Navbar from "../components/Navbar";
import AnimatedFooter from "../components/AnimatedFooter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="h-screen w-full bg-[#0D0D1A] text-white flex flex-col overflow-y-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <AnimatedFooter />
      <Footer />
    </main>
  );
};

export default Home;
