import { BrowserRouter as Router, Routes, Route } from "react-router";
import Events from "./pages/Events";
import EventDetail from "./components/EventDetail";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import { BaseLayout } from "./layouts/base-layout";
import ScrollToTop from "./utils/scroll-to-top";
import Sponsors from "./pages/Sponsors";
import Preloader from "./components/preloader";
import { useState } from "react";
import AddTeamForm from "./components/forms/AddTeamForm";

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route
            path="/"
            element={
              loading ? <Preloader setLoading={setLoading} /> : <Home />
            }
          />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:id/teamregister" element={<AddTeamForm/>} />
          
        </Routes>
        <ScrollToTop />
      </BaseLayout>
    </Router>
  );
}
