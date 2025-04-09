import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductCardProps {
  id: number;
  image: string;
  brand: string;
  name: string;
  price: string;
  sizes: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ image, brand, name, price, sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSizes, setShowSizes] = useState(false);

  // Card animations
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    hover: { 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Button animations
  const buttonVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } },
    tap: { scale: 0.98 }
  };

  // Size selection animations
  const sizeContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto", 
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05
      } 
    }
  };

  const sizeItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div 
      className="flex flex-col rounded-lg relative overflow-hidden bg-white h-[480px]"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Card frame with subtle shadow */}
      <div className="absolute inset-0 rounded-lg shadow-md pointer-events-none border border-gray-100"></div>
      
      {/* Image container with zoom effect */}
      <div className="overflow-hidden h-64 rounded-t-lg">
        <motion.div
          className="h-full w-full flex items-center justify-center p-6 bg-gray-50"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img 
            src={image} 
            alt={name} 
            className="max-h-full max-w-full object-contain" 
            loading="lazy"
          />
        </motion.div>
      </div>
      
      {/* Wishlist button with floating animation */}
      <motion.button 
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-sm"
        onClick={(e) => {
          e.preventDefault();
          setIsWishlisted(!isWishlisted);
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
      >
        <Heart 
          size={18} 
          className={`transition-all duration-300 ${isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'}`} 
        />
      </motion.button>
      
      {/* Product details with staggered animation */}
      <div className="px-5 py-4 flex-grow flex flex-col">
        <div className="mb-auto">
          <motion.p 
            className="text-gray-700 font-medium text-sm uppercase tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {brand}
          </motion.p>
          
          <motion.p 
            className="text-gray-800 font-medium mt-1 line-clamp-2 h-12 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {name}
          </motion.p>
          
          <motion.p 
            className="text-gray-900 font-semibold mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {price}
          </motion.p>
        </div>
        
        {/* Size selector toggle button */}
        <motion.button
          className="flex items-center justify-center w-full py-2 mt-3 text-xs font-medium text-gray-600 border border-gray-200 rounded-md"
          onClick={() => setShowSizes(!showSizes)}
          whileHover={{ backgroundColor: "#f9fafb" }}
          whileTap={{ scale: 0.98 }}
        >
          {showSizes ? "HIDE SIZES" : "SELECT SIZE"}
        </motion.button>
        
        {/* Size selection with improved animation */}
        <AnimatePresence>
          {showSizes && (
            <motion.div 
              className="mt-3"
              variants={sizeContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex justify-center gap-2 flex-wrap">
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    variants={sizeItemVariants}
                    className={`w-8 h-8 rounded-full text-xs flex items-center justify-center ${
                      selectedSize === size 
                        ? 'bg-black text-white' 
                        : 'bg-white border border-gray-300 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedSize(size)}
                    whileHover={selectedSize !== size ? { scale: 1.05 } : {}}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Shop now button with gradient animation */}
        <motion.button 
          className="w-full bg-black text-white py-3 mt-4 text-sm font-medium rounded-md flex items-center justify-center gap-2 uppercase"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileTap="tap"
          whileHover={{ 
            backgroundColor: "#333",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          }}
          disabled={!selectedSize && showSizes}
        >
          <ShoppingBag size={16} />
          SHOP NOW
        </motion.button>
      </div>
    </motion.div>
  );
};

const JustLanded: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Casuals');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const categories = [
    'Casuals',
    'Ladies Flats',
    'Sneakers',
    'Sandals',
    'Formals',
    'Accessories'
  ];
  
  const products = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009947/SCLD112-1_qsau8j.webp",
      brand: "BATA",
      name: "BATA (MEN) ANSON MENS CASUAL MOCCASIN",
      price: "Tk 4,499.00",
      sizes: ["6", "7", "8", "9"]
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009920/SCLD111-1_1024x1024_dvdv2k.webp",
      brand: "BATA",
      name: "BATA (MEN) ANSON MENS CASUAL MOCCASIN",
      price: "Tk 4,499.00",
      sizes: ["6", "7", "8", "9"]
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009947/SCLD112-1_qsau8j.webp",
      brand: "COMFIT",
      name: "COMFIT FIGARO MENS DRESS MENS CLOSED",
      price: "Tk 4,499.00",
      sizes: ["6", "7", "8", "9"]
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009915/Lawn_bowls_shoes_swswld.webp",
      brand: "COMFIT",
      name: "COMFIT FIGARO MENS DRESS MENS CLOSED",
      price: "Tk 4,499.00",
      sizes: ["6", "7", "8", "9"]
    }
  ];
  
  const totalSlides = Math.ceil(products.length / 4);
  const visibleProducts = products.slice(currentSlide * 4, (currentSlide * 4) + 4);
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Staggered animation for products
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className="w-full px-4 md:px-12 lg:px-20 py-10 relative max-w-7xl mx-auto">
      <motion.h2 
        className="text-2xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        JUST LANDED
      </motion.h2>
      
      {/* Category Navigation with improved indicators */}
      <motion.div 
        className="flex justify-start md:justify-center flex-nowrap overflow-x-auto pb-4 mb-10 gap-2 scrollbar-hide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-black text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
            }`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (index * 0.05), duration: 0.3 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Product Carousel with improved navigation */}
      <div className="relative">
        <motion.button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 md:-ml-6 bg-white rounded-full p-3 shadow-lg z-10 border border-gray-100"
          onClick={handlePrevSlide}
          whileHover={{ scale: 1.1, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronLeft size={18} />
        </motion.button>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </motion.div>
        
        <motion.button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 md:-mr-6 bg-white rounded-full p-3 shadow-lg z-10 border border-gray-100"
          onClick={handleNextSlide}
          whileHover={{ scale: 1.1, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
      
      {/* Pagination indicators */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-black w-6' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default JustLanded;