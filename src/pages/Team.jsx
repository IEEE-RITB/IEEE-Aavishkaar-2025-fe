import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { teamMembers } from "../configs/team.config";

const TeamCard = ({ member }) => {
  return (
    <div className="bg-[#1E1E2D] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#4F33B3]/20 transition-shadow">
      <div className="p-6 space-y-4">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#E056C1]/50">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-[#E056C1]">{member.role}</p>
        </div>
        <p className="text-white/80 text-center text-sm">{member.bio}</p>
        <div className="flex justify-center space-x-4">
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              className="text-white/70 hover:text-[#E056C1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="text-white/70 hover:text-[#E056C1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              className="text-white/70 hover:text-[#E056C1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2E1E8A] to-[#4F33B3] py-16 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6 mt-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Our Team</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Meet the dedicated team behind RIT Techfest. From technical
            experts to creative minds, we're here to make this event
            exceptional.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-12 flex-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
