import { motion } from "motion/react";
import logo from "../assets/images/Screenshot from 2026-01-20 05-32-13.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Precious Farm Logo"
                className="w-full h-full object-contain scale-150"
              />
            </div>
            <div className="text-primary-dark">
              <h1 className="text-xl font-bold leading-tight">AGRI-POWER</h1>
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
                  whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
                  className="text-[#2C2C2C] font-medium transition-colors hover:text-primary"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2C2C2C] text-white px-6 py-2 rounded-lg font-semibold transition-colors hover:bg-primary"
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
