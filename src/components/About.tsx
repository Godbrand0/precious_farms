import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1000+", label: "Happy Customers" },
    { number: "50+", label: "Products" },
    { number: "100%", label: "Fresh & Organic" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#124225]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFF700]/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image placeholder with brand colors */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#124225] rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden"
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H24v-2zm0 4h20v2H24v-2zm0 4h20v2H24v-2zm0 4h20v2H24v-2z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Logo display */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-48 h-48 md:w-64 md:h-64 relative z-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="30" y="30" width="140" height="140" rx="20" fill="white" />
                  <path
                    d="M50 50 Q50 150 100 150 Q150 150 150 100 Q150 50 100 50 L50 50"
                    fill="#FFF700"
                  />
                  <path
                    d="M55 140 Q75 100 95 140 Q115 100 135 140 Q155 100 175 140"
                    stroke="#124225"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M65 120 Q85 80 105 120 Q125 80 145 120"
                    stroke="#0f6e32"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M75 100 Q95 60 115 100"
                    stroke="#124225"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-[#FFF700] p-6 rounded-2xl shadow-xl"
              >
                <p className="text-[#124225] font-bold text-lg">Since 2019</p>
                <p className="text-[#124225]/70 text-sm">Serving Communities</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block bg-[#0f6e32]/10 text-[#0f6e32] px-4 py-1 rounded-full text-sm font-semibold mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#124225] mb-6"
            >
              Our Mission is
              <span className="text-[#0f6e32]"> Food Security</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg mb-6 leading-relaxed"
            >
              Our mission is to contribute to food security by delivering
              affordable, nutritious, and farm-fresh products while supporting
              local communities and promoting sustainable farming practices.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              We serve households, retailers, restaurants, and bulk buyers,
              building long-term relationships based on trust, quality, and
              reliability.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <p className="text-2xl md:text-3xl font-bold text-[#0f6e32]">
                    {stat.number}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
