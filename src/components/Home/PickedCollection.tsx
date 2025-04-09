import React from "react";
import { motion } from "framer-motion";

type CollectionItem = {
  title: string;
  image: string;
  overlayText: string;
  description: string;
};

const collections: CollectionItem[] = [
  {
    title: "NORTH STAR CURATED",
    overlayText: "New Striker",
    image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744023398/lstv115290-red_nov1l4.jpg", 
    description: "Here goes the trendiest lifestyle sneakers to redefine all your moves! Ensuring a look brimming with coolness.",
  },
  {
    title: "MENS CASUAL",
    overlayText: "Cool CASUALS",
    image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744023168/960x0_ggkltx.webp", 
    description: "Discover the premium men's casual footwear, ensuring confidence, & effortless elegance for every occasion.",
  },
];

const PickedCollection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <motion.h2 
        className="text-2xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        OUR HAND PICKED COLLECTION FOR YOU
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {collections.map((item, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Container with Hover Effects */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  loading="lazy"
                />
                
                {/* Overlay Text */}
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-white font-bold text-3xl md:text-4xl tracking-wide"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.overlayText}
                  </motion.span>
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div 
                className="relative bg-white p-6 md:p-8 -mt-8 mx-4 shadow-lg rounded-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg md:text-xl font-light text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm md:text-base text-gray-600 mb-4">{item.description}</p>
                <motion.button 
                  className="bg-white text-gray-800 font-semibold border border-gray-300 text-sm px-6 py-2 rounded-md"
                  whileHover={{ 
                    backgroundColor: "#1f2937",
                    color: "#ffffff",
                    borderColor: "#1f2937"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  SHOP NOW
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PickedCollection;