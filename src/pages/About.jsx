const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto relative">
      <div className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">About Aavishkaar</span>
        </h1>

        <div className="mt-12 grid gap-8 max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg rounded-lg p-8 border border-neon-pink/30 hover:border-neon-pink/60 transition-colors">
            <h2 className="font-orbitron text-2xl font-bold mb-6 text-gradient">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Aavishkaar is IEEE MSRIT's flagship technical fest, designed to
              inspire innovation and creativity among engineering students. Our
              vision is to create a platform where technology enthusiasts can
              showcase their skills, learn from industry experts, and
              collaborate on cutting-edge projects.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-lg rounded-lg p-8 border border-neon-pink/30 hover:border-neon-pink/60 transition-colors">
            <h2 className="font-orbitron text-2xl font-bold mb-6 text-gradient">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We aim to bridge the gap between academic learning and practical
              application by providing a diverse range of technical events,
              workshops, and competitions. Through Aavishkaar, we strive to
              nurture the next generation of innovators and problem-solvers who
              will shape the future of technology.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-lg rounded-lg p-8 border border-neon-pink/30 hover:border-neon-pink/60 transition-colors">
            <h2 className="font-orbitron text-2xl font-bold mb-6 text-gradient">
              About IEEE MSRIT
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              IEEE MSRIT Student Branch, established in 2010, is one of the most
              active student branches in the Delhi Section. We are committed to
              fostering technological innovation and excellence for the benefit
              of humanity. Through various events, workshops, and initiatives,
              we provide students with opportunities to enhance their technical
              skills and professional development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
