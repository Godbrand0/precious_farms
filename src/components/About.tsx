import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import farmImage from "../assets/images/8jpIhzjA.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            2025
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6"
          >
            Despite Agri-Tech Advances,
            <br />
            Traditional Farming Highlights
            <br />
            Ongoing Inefficiencies
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={farmImage}
                alt="Modern Farming Technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-6"
            >
              Precious Farm: Leading Innovation in Ondo State
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-lg mb-6 leading-relaxed"
            >
              At Precious Farm, we're revolutionizing agriculture in Ondo State
              through cutting-edge technology and sustainable practices. Our
              modern facility operates 24/7, powered entirely by solar energy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">☀️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-1">
                    Solar-Powered Operations
                  </h4>
                  <p className="text-gray-600">
                    100% renewable energy ensures continuous farm operations day
                    and night
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">🐟</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-1">
                    5 Large Catfish Ponds
                  </h4>
                  <p className="text-gray-600">
                    State-of-the-art aquaculture facilities producing premium
                    quality catfish
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">🐔</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-1">
                    Extensive Poultry Operations
                  </h4>
                  <p className="text-gray-600">
                    Large-scale poultry section with dedicated veterinary care
                    and vaccination programs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">📹</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-1">
                    24/7 Security Monitoring
                  </h4>
                  <p className="text-gray-600">
                    Solar-powered CCTV cameras ensure round-the-clock farm
                    security
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-lg">🏠</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-1">
                    Complete Infrastructure
                  </h4>
                  <p className="text-gray-600">
                    Equipped with feed storehouses and worker housing for
                    continuous farm attention
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#F5F5F0] rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-4">
            Get Started Now
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Experience the future of farming with Precious Farm. We combine
            sustainable methods with smart technology to deliver the highest
            quality products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2C2C2C] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary transition-colors"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#2C2C2C] text-[#2C2C2C] px-8 py-4 rounded-lg font-semibold hover:bg-[#2C2C2C] hover:text-white transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
