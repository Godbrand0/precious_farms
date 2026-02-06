import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import techImage from "../assets/images/CPWwS2_b.jpg";
import farmImage1 from "../assets/images/xe-LXKvj.jpg";
import farmImage2 from "../assets/images/Ogg-kNeT.jpg";
import farmImage3 from "../assets/images/XKs5E_Gc.jpg";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Farming Precision",
      description:
        "Advanced technology to optimize every aspect of poultry operations",
      image: farmImage1,
    },
    {
      title: "Farm Surveillance",
      description:
        "Solar-powered monitoring systems for real-time farm oversight and security",
      image: farmImage2,
    },
    {
      title: "Experienced Workers",
      description:
        "Experienced workers to ensure consistent quality and productivity in aquaculture and poultry",
      image: farmImage3,
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-[#FAFAF8] relative overflow-hidden"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Collaborate Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 relative rounded-3xl overflow-hidden"
        >
          <div className="relative h-[400px]">
            <img
              src={techImage}
              alt="Agricultural Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-8 md:px-12">
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  Collaborate And Learn
                  <br />
                  From Industry Experts
                  <br />
                  And Enthusiasts
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="text-sm">🌱 Johnnie Cruiser</span>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-8 right-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-xl"
              >
                <span className="text-2xl">→</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Next-Gen Solutions Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4"
          >
            Next-Gen Solutions For
            <br />
            Optimal farm Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl"
          >
            We deliver cutting-edge solutions that optimize every stage of the
            farming cycle, creating a streamlined and highly efficient
            agricultural experience for maximum productivity and sustainable
            growth.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sustainable Methods Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={farmImage2}
                alt="Sustainable Farming"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-4">
                We Combine Sustainable
                <br />
                Methods With Smart Tech To
                <br />
                Make Farming Efficient, Eco-
                <br />
                Friendly, And Future-Ready.
              </h3>
              <p className="text-gray-600 text-lg">
                At the forefront of farming in Ondo State, using new
                technologies and proven systems of production to deliver
                exceptional results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
