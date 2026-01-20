import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      title: "Fish Farming",
      description:
        "Fresh catfish raised in our sustainable aquaculture ponds with the highest quality standards.",
      icon: "🐟",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Fresh Catfish Supply",
      description:
        "Daily supply of fresh, live catfish directly from our farm to your doorstep.",
      icon: "🐠",
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-cyan-50",
    },
    {
      title: "Smoked Catfish",
      description:
        "Traditionally smoked catfish processed with care, perfect for long storage and rich flavor.",
      icon: "🔥",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Poultry Farming",
      description:
        "Free-range chickens and farm-fresh eggs from healthy, well-cared-for birds.",
      icon: "🐔",
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Fresh Eggs",
      description:
        "Premium quality eggs collected daily from our happy, healthy hens.",
      icon: "🥚",
      color: "from-amber-400 to-yellow-500",
      bgColor: "bg-amber-50",
    },
    {
      title: "Bulk Orders",
      description:
        "Special pricing for restaurants, retailers, and bulk buyers. Contact us for wholesale rates.",
      icon: "📦",
      color: "from-[#0f6e32] to-[#124225]",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section id="products" className="py-20 bg-[#124225] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFF700] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#0f6e32] rounded-full blur-3xl"
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-[#FFF700] text-[#124225] px-4 py-1 rounded-full text-sm font-semibold mb-4"
          >
            Our Products & Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            What We <span className="text-[#FFF700]">Offer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            From fresh catfish to farm eggs, we provide a wide range of
            high-quality agricultural products to meet your needs.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <span className="text-3xl">{product.icon}</span>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#124225] mb-3 group-hover:text-[#0f6e32] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Learn more link */}
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-[#0f6e32] font-semibold"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 247, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFF700] text-[#124225] px-10 py-4 rounded-full font-bold text-lg shadow-lg"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
