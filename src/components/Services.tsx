import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Households",
      description: "Fresh products delivered to your home for family meals",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Retailers",
      description: "Consistent supply for your store shelves",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: "Restaurants",
      description: "Quality ingredients for your culinary creations",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Bulk Buyers",
      description: "Wholesale pricing for large volume orders",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
  ];

  const products = [
    {
      title: "Fresh Catfish",
      description: "Daily supply of live catfish from our 5 large ponds",
      image: "/src/assets/images/catfish.jpeg",
    },
    {
      title: "Smoked Catfish",
      description: "Traditionally processed for rich flavor and long storage",
      image: "/src/assets/images/IMG_7088.JPG.jpeg",
    },
    {
      title: "Fresh Eggs",
      description: "Premium quality eggs from our healthy poultry",
      image:
        "/src/assets/images/eggs-stacked-crates-on-chicken-farm-dormaa-440nw-9682843r.jpg",
    },
    {
      title: "Live Poultry",
      description: "Vaccinated and well-cared-for chickens",
      image: "/src/assets/images/IMG_7092.JPG.jpeg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5F5F0] to-transparent" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Services & Products
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6"
          >
            Who We <span className="text-primary">Serve</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            We serve diverse customers across Ondo State and beyond, building
            long-term partnerships based on quality, reliability, and
            innovation.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-[#F5F5F0] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Products Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-8 text-center"
          >
            What We <span className="text-primary">Offer</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#2C2C2C] mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Veterinary Care Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-primary rounded-3xl p-6 sm:p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                Professional Veterinary Care
              </h3>
              <p className="text-white/90 text-base md:text-lg mb-4 md:mb-6">
                Our standby veterinarian ensures all poultry receive regular
                vaccinations and health monitoring, maintaining the highest
                standards of animal welfare and product quality.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💉</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    Regular Vaccination Programs
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Ensuring healthy, disease-free poultry
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 order-1 md:order-2 mb-4 md:mb-0">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center min-w-[100px] sm:min-w-[120px]"
              >
                <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 block">
                  ✓
                </span>
                <p className="font-semibold text-sm sm:text-base">Quality</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center min-w-[100px] sm:min-w-[120px]"
              >
                <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 block">
                  🌱
                </span>
                <p className="font-semibold text-sm sm:text-base">
                  Sustainability
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center min-w-[100px] sm:min-w-[120px]"
              >
                <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 block">
                  ⚡
                </span>
                <p className="font-semibold text-sm sm:text-base">Innovation</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
