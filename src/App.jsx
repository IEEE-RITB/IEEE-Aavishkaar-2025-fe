import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="px-14 py-8 flex-grow">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
