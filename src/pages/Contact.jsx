import { Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from "react-router";
import ieeeData from "../configs/ieee-data.config.json";

const Contact = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 mt-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Contact Us</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Have questions about Aavishkaar'25? Get in touch with our team and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 px-4 flex-1">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#1E1E2D] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#4F33B3]/20 transition-shadow p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#E056C1] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p className="text-white">{ieeeData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#E056C1] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Address</p>
                    <p className="text-white">{ieeeData.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-white/80 mb-6">
                  Follow us on social media for updates and announcements about Aavishkaar'25.
                </p>
                <div className="flex space-x-4">
                  <a href={ieeeData.socials?.instagram || "#"} className="bg-[#1E1E2D] hover:bg-[#2E1E8A] p-3 rounded-full text-white/70 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href={ieeeData.socials?.linkedin || "#"} className="bg-[#1E1E2D] hover:bg-[#2E1E8A] p-3 rounded-full text-white/70 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;