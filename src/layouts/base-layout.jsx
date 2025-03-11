import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function BaseLayout({ children }) {
    return (
        <main className="min-h-screen w-full bg-[#0D0D1A] text-white flex flex-col">
            <Navbar/>
            {children}
            <Footer/>
        </main>
    )
}
