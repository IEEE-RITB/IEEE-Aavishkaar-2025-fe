import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Events } from "./components/Events";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-14 py-8 flex-grow bg-gray-950 text-white">
        <Header />
        <Events />
      </div>
      <Footer />
    </div>
  );
}

export default App;
