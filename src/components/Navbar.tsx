import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/Screenshot from 2026-01-20 05-32-13.png";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <h1 className="md:text-2xl font-extrabold ">preciousfarms</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              "Home",
              "About",
              "Products",
              "Services",
              "Gallery",
              "Contact",
            ].map((item, index) => {
              // Special handling for Gallery which is a separate route
              if (item === "Gallery") {
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.5 }}
                  >
                    <Link
                      to="/gallery"
                      className={`font-medium transition-colors ${
                        location.pathname === "/gallery"
                          ? "text-primary"
                          : "text-[#2C2C2C] hover:text-primary"
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              }

              // For other items, check if we're on the home page
              const isHomeActive = location.pathname === "/";

              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                >
                  {isHomeActive ? (
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[#2C2C2C] font-medium transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  ) : (
                    <Link
                      to={`/#${item.toLowerCase()}`}
                      className="text-[#2C2C2C] font-medium transition-colors hover:text-primary"
                    >
                      {item}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              className="w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              className="w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 right-0 h-auto bg-white shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
              <nav className="px-6 py-8 text-center">
                {[
                  "Home",
                  "About",
                  "Products",
                  "Services",
                  "Gallery",
                  "Contact",
                ].map((item, index) => {
                  // Special handling for Gallery which is a separate route
                  if (item === "Gallery") {
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Link
                          to="/gallery"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-3 px-6 font-medium transition-colors rounded-lg ${
                            location.pathname === "/gallery"
                              ? "bg-primary text-white"
                              : "text-[#2C2C2C] hover:bg-gray-100"
                          }`}
                        >
                          {item}
                        </Link>
                      </motion.div>
                    );
                  }

                  // For other items, check if we're on the home page
                  const isHomeActive = location.pathname === "/";

                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {isHomeActive ? (
                        <a
                          href={`#${item.toLowerCase()}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 px-6 text-[#2C2C2C] font-medium transition-colors rounded-lg hover:bg-gray-100"
                        >
                          {item}
                        </a>
                      ) : (
                        <Link
                          to={`/#${item.toLowerCase()}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 text-[#2C2C2C] font-medium transition-colors hover:text-primary"
                        >
                          {item}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 h-screen md:hidden"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
