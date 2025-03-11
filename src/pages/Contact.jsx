import { Mail, Phone, MapPin } from 'lucide-react';
import ieeeData from "../configs/ieee-data.config.json";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Contact Us</span>
        </h1>

        <div className="flex items-center justify-center mt-12">
          {/* Contact Information */}
          <div className="max-w-[500px] w-full">
            <div className="bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-neon-pink/30">
              <h2 className="font-orbitron text-2xl font-bold mb-6 text-gradient">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-neon-pink" />
                  <span className="text-gray-300">{ieeeData.email}</span>
                </div>
                {/* <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-electric-blue" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div> */}
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-neon-pink" />
                  <span className="text-gray-300">{ieeeData.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;