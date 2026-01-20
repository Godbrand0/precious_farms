import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#124225]/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20 Q20 80 50 80 Q80 80 80 50 Q80 20 50 20 L20 20"
                  fill="#FFF700"
                />
                <path
                  d="M25 75 Q35 55 45 75 Q55 55 65 75 Q75 55 85 75"
                  stroke="#124225"
                  strokeWidth="6"
                  fill="none"
                />
                <path
                  d="M30 65 Q40 45 50 65 Q60 45 70 65"
                  stroke="#0f6e32"
                  strokeWidth="5"
                  fill="none"
                />
                <path
                  d="M35 55 Q45 35 55 55"
                  stroke="#124225"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold leading-tight">PRECIOUS</h1>
              <h1 className="text-xl font-bold leading-tight">FARM</h1>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Products", "Services", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  whileHover={{ scale: 1.1, color: "#FFF700" }}
                  className="text-white font-medium transition-colors"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#FFF700" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0f6e32] text-white hover:text-[#124225] px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
