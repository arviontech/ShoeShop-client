import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, ShoppingBag, Eye } from 'lucide-react';
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
  const [showQuickView, setShowQuickView] = useState(false);
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

  // Size item animations
  const sizeItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
  };

  // Quick view overlay animations
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="flex flex-col rounded-lg relative bg-white h-[480px] overflow-hidden"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setShowQuickView(true)}
      onHoverEnd={() => setShowQuickView(false)}
    >
      {/* Card frame with subtle shadow */}
      <div className="absolute inset-0 rounded-lg shadow-md pointer-events-none border border-gray-100"></div>
      
      {/* Image container with overlay on hover */}
      <div className="relative overflow-hidden h-64 rounded-t-lg">
        <div className="h-full w-full flex items-center justify-center p-6 bg-gray-50">
          <motion.img 
            src={image} 
            alt={name} 
            className="max-h-full max-w-full object-contain" 
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        {/* Quick view overlay */}
        <AnimatePresence>
          {showQuickView && (
            <motion.div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.button 
                className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSizes(!showSizes)}
              >
                <Eye size={16} /> Quick View
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Wishlist button */}
      <motion.button 
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-sm border border-gray-100"
        onClick={(e) => {
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart 
          size={18} 
          className={`transition-all duration-300 ${isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'}`} 
        />
      </motion.button>
      
      {/* Sale badge */}
      <motion.div 
        className="absolute top-4 left-4 z-10 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        SALE
      </motion.div>
      
      {/* Product details */}
      <div className="px-5 py-4 flex-grow flex flex-col">
        <div className="mb-auto">
          <motion.div 
            className="flex justify-between items-center mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-gray-700 font-medium text-sm uppercase tracking-wide">{brand}</p>
            <div className="flex items-center">
              <span className="text-yellow-500">★★★★</span>
              <span className="text-gray-300">★</span>
              <span className="text-xs text-gray-500 ml-1">(24)</span>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-gray-800 font-medium mt-1 line-clamp-2 h-12 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {name}
          </motion.p>
          
          <motion.div 
            className="flex items-center mt-2 gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-900 font-bold">{price}</span>
            <span className="text-gray-500 text-sm line-through">Tk 6,999.00</span>
            <span className="text-green-600 text-xs font-medium">Save 30%</span>
          </motion.div>
        </div>
        
        {/* Size selector toggle */}
        <AnimatePresence>
          {showSizes && (
            <motion.div 
              className="mt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs text-gray-500 mb-2 text-center">Select Size</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {sizes.map((size, index) => (
                  <motion.button
                    key={size}
                    variants={sizeItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
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
        
        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <motion.button 
            className="bg-white border border-black text-black py-3 text-sm font-medium rounded flex items-center justify-center gap-1"
            whileHover={{ backgroundColor: "#f9fafb" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowSizes(!showSizes)}
          >
            {showSizes ? "HIDE SIZES" : "SELECT SIZE"}
          </motion.button>
          
          <motion.button 
            className="bg-black text-white py-3 text-sm font-medium rounded flex items-center justify-center gap-1"
            whileHover={{ backgroundColor: "#1f2937" }}
            whileTap={{ scale: 0.98 }}
            disabled={showSizes && !selectedSize}
          >
            <ShoppingBag size={16} />
            ADD TO BAG
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const BestSellers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories'];
  
  const products = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009947/SCLD112-1_qsau8j.webp",
      brand: "BATA",
      name: "BATA RED LABEL MENS OXFORD CASUAL",
      price: "Tk 3,999.00",
      sizes: ["6", "7", "8", "9", "10"]
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009920/SCLD111-1_1024x1024_dvdv2k.webp",
      brand: "NORTH STAR",
      name: "NORTH STAR CLASSIC SLIP ON SNEAKERS",
      price: "Tk 2,799.00",
      sizes: ["7", "8", "9", "10"]
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009947/SCLD112-1_qsau8j.webp",
      brand: "WEINBRENNER",
      name: "WEINBRENNER OUTDOOR HIKING BOOTS",
      price: "Tk 5,499.00",
      sizes: ["6", "7", "8", "9"]
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009915/Lawn_bowls_shoes_swswld.webp",
      brand: "POWER",
      name: "POWER ATHLETIC RUNNING SHOES",
      price: "Tk 3,299.00",
      sizes: ["8", "9", "10", "11"]
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

  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Title animations with emphasis
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.div 
      className="w-full px-4 md:px-12 lg:px-20 py-16 relative max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Section heading with animated underline */}
      <div className="text-center mb-12 relative">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-block"
          variants={titleVariants}
        >
          BEST SELLERS
        </motion.h2>
        <motion.div 
          className="h-1 w-20 bg-black mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.p 
          className="text-gray-600 mt-4 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our most popular products based on sales. Updated daily.
        </motion.p>
      </div>
      
      {/* Category Navigation with improved styling */}
      <motion.div 
        className="flex justify-center flex-wrap gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
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
            transition={{ delay: 0.4 + (index * 0.05), duration: 0.3 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Product Carousel with improved navigation */}
      <div className="relative py-4">
        <motion.button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 md:-ml-6 bg-white rounded-full p-3 shadow-lg z-10 border border-gray-100"
          onClick={handlePrevSlide}
          whileHover={{ scale: 1.1, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ChevronLeft size={18} className="text-gray-800" />
        </motion.button>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 md:-mr-6 bg-white rounded-full p-3 shadow-lg z-10 border border-gray-100"
          onClick={handleNextSlide}
          whileHover={{ scale: 1.1, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ChevronRight size={18} className="text-gray-800" />
        </motion.button>
      </div>
      
      {/* Pagination indicators */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-black w-6' : 'bg-gray-300 w-2'
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      )}
      
      {/* View all button */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button 
          className="bg-white border-2 border-black text-black px-8 py-3 rounded-full text-sm font-medium uppercase hover:bg-black hover:text-white transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          View All Best Sellers
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BestSellers;