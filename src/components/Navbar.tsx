import { motion } from "motion/react";
import logo from "../assets/images/Screenshot from 2026-01-20 05-32-13.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Precious Farm Logo"
                className="w-full h-full object-contain scale-150"
              />
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
                  whileHover={{ scale: 1.1, color: "var(--color-accent)" }}
                  className="text-white font-medium transition-colors"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white hover:text-primary-dark px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
