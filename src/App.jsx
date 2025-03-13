import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import EventDetail from "./components/EventDetail";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BaseLayout } from "./layouts/base-layout";
import ScrollToTop from "./utils/scroll-to-top";

export default function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTop />
      </BaseLayout>
    </Router>
  );
}
