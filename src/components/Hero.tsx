import { motion } from "motion/react";
import heroBg from "../assets/images/Screenshot from 2026-01-20 05-31-11.png";

const Hero = () => {
  const stats = [
    { number: "35+", label: "Experiences" },
    { number: "260+", label: "Farm Engage" },
    { number: "80,000+", label: "Farms Reached" },
    { number: "$16 Billion", label: "Agrifood Fintech" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-[#F5F5F0] overflow-hidden"
    >
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block bg-white text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
                  Welcome To Precious Farm
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight"
              >
                Cultivating The Future
                <br />
                Of Agriculture
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                A modern farm powered by solar energy, operating 24/7 with 5 large
                catfish ponds and extensive poultry operations. At the forefront of
                farming in Ondo State, using new technologies and proven systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2C2C2C] text-white px-8 py-4 rounded-lg font-semibold text-base shadow-lg hover:bg-[#1a1a1a] transition-colors"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#2C2C2C] text-[#2C2C2C] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#2C2C2C] hover:text-white transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            {/* Right content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroBg}
                  alt="Precious Farm Solar Infrastructure"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Overlay text on image */}
                <div className="absolute bottom-8 left-8 text-white">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-xl md:text-2xl font-bold"
                  >
                    The Journey to a
                    <br />
                    Better Future
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-2">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
