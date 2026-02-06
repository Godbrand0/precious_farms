import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Footer } from "./index";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/src/assets/images/catfish.jpeg",
      alt: "Fresh Catfish from our ponds",
      category: "Fish Farming",
    },
    {
      id: 2,
      src: "/src/assets/images/IMG_7085.JPG.jpeg",
      alt: "Smoked Catfish processing",
      category: "Processing",
    },
    {
      id: 3,
      src: "/src/assets/images/eggs-stacked-crates-on-chicken-farm-dormaa-440nw-9682843r.jpg",
      alt: "Fresh eggs from our poultry",
      category: "Poultry",
    },
    {
      id: 4,
      src: "/src/assets/images/IMG_7088.JPG.jpeg",
      alt: "Healthy chickens in our farm",
      category: "Poultry",
    },
    {
      id: 5,
      src: "/src/assets/images/IMG_7091.JPG.jpeg",
      alt: "Farm facilities",
      category: "Infrastructure",
    },
    {
      id: 6,
      src: "/src/assets/images/IMG_7092.JPG.jpeg",
      alt: "Farm operations",
      category: "Operations",
    },
    {
      id: 7,
      src: "/src/assets/images/IMG_7108.JPG.jpeg",
      alt: "Farm landscape",
      category: "Landscape",
    },
    {
      id: 8,
      src: "/src/assets/images/8jpIhzjA.jpg",
      alt: "Farm overview",
      category: "Overview",
    },
    {
      id: 9,
      src: "/src/assets/images/CPWwS2_b.jpg",
      alt: "Farm activities",
      category: "Activities",
    },
    {
      id: 10,
      src: "/src/assets/images/Ogg-kNeT.jpg",
      alt: "Farm resources",
      category: "Resources",
    },
    {
      id: 11,
      src: "/src/assets/images/xe-LXKvj.jpg",
      alt: "Farm environment",
      category: "Environment",
    },
    {
      id: 12,
      src: "/src/assets/images/XKs5E_Gc.jpg",
      alt: "Farm management",
      category: "Management",
    },
  ];

  const categories = [
    "All",
    "Fish Farming",
    "Processing",
    "Poultry",
    "Infrastructure",
    "Operations",
    "Landscape",
    "Overview",
    "Activities",
    "Resources",
    "Environment",
    "Management",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#F5F5F0] to-transparent" />

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
            Our Farm Gallery
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6"
          >
            Explore Our <span className="text-primary">Farm</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Take a visual journey through our farm operations, facilities, and
            the quality products we produce with care and dedication.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              onClick={() => setSelectedImage(image.id)}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium">{image.category}</p>
                    <p className="text-xs opacity-90 mt-1">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.src}
                alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
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
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <p className="text-lg font-medium">
                  {galleryImages.find((img) => img.id === selectedImage)?.alt}
                </p>
                <p className="text-sm opacity-75 mt-1">
                  {
                    galleryImages.find((img) => img.id === selectedImage)
                      ?.category
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Gallery;
