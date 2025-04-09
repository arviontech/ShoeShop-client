import React, { useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: number;
  image: string;
  brand: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  sizes: string[];
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  brand, 
  name, 
  price, 
  originalPrice, 
  discount, 
  sizes,
  index
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(cardRef, { once: true });

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -4,
      transition: { duration: 0.15 }
    }
  };

  if (isInView) {
    controls.start("visible");
  }

  return (
    <motion.div 
      ref={cardRef}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      variants={cardVariants}
      className="flex flex-col rounded-lg relative overflow-hidden h-[480px] bg-white shadow-sm"
    >
      {/* Discount badge if available */}
      {discount && (
        <motion.div 
          className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {discount}
        </motion.div>
      )}
      
      {/* Heart icon for wishlist */}
      <motion.button 
        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-sm"
        initial={{ opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
        onClick={(e) => {
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
      >
        <Heart 
          size={18} 
          className={`transition-colors ${isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'}`} 
        />
      </motion.button>
      
      {/* Product image with zoom effect */}
      <div className="overflow-hidden h-64 rounded-t-lg">
        <motion.div
          className="h-full w-full flex items-center justify-center p-6 bg-gray-50"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src={image} 
            alt={name} 
            className="max-h-full max-w-full object-contain" 
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          />
        </motion.div>
      </div>
      
      {/* Product details */}
      <div className="px-5 py-4 flex-grow flex flex-col">
        <div className="mb-auto">
          <motion.p 
            className="text-gray-700 font-medium text-sm uppercase tracking-wide"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {brand}
          </motion.p>
          
          <motion.p 
            className="text-gray-800 font-medium mt-1 line-clamp-2 h-12 text-sm"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 + index * 0.1 }}
          >
            {name}
          </motion.p>
          
          <motion.div 
            className="flex items-center mt-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <p className="text-gray-900 font-semibold">{price}</p>
            {originalPrice && (
              <p className="text-gray-500 line-through text-sm ml-2">{originalPrice}</p>
            )}
          </motion.div>
        </div>
        
        {/* Size selector toggle button */}
        <motion.button
          className="flex items-center justify-center w-full py-2 mt-3 text-xs font-medium text-gray-600 border border-gray-200 rounded-md"
          onClick={() => setShowSizes(!showSizes)}
          whileHover={{ backgroundColor: '#f3f4f6' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 + index * 0.1 }}
        >
          {showSizes ? "HIDE SIZES" : "SELECT SIZE"}
        </motion.button>
        
        {/* Size selection */}
        {showSizes && (
          <motion.div 
            className="mt-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center gap-2 flex-wrap">
              {sizes.map((size) => (
                <motion.button
                  key={size}
                  className={`w-8 h-8 rounded-full text-xs flex items-center justify-center ${
                    selectedSize === size 
                      ? 'bg-black text-white' 
                      : 'bg-white border border-gray-300 hover:border-gray-500'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {size}
                </motion.button>
              ))}
              {sizes.length > 5 && (
                <motion.button 
                  className="w-8 h-8 rounded-full text-xs flex items-center justify-center bg-white border border-gray-300 text-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +1
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
        
        {/* Shop now button */}
        <motion.button 
          className="w-full bg-black text-white py-3 mt-4 text-sm font-medium rounded-md flex items-center justify-center gap-2 uppercase"
          disabled={showSizes && !selectedSize}
          whileHover={{ backgroundColor: '#1a1a1a' }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <ShoppingBag size={16} />
          SHOP NOW
        </motion.button>
      </div>
    </motion.div>
  );
};

// FeaturedProducts component
const FeaturedProducts: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true });
  const products = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009947/SCLD112-1_qsau8j.webp",
      brand: "BATA",
      name: "BATA WOMEN'S ELEGANT HEELS",
      price: "Tk 3,499.00",
      originalPrice: "Tk 4,999.00",
      discount: "-30%",
      sizes: ["5", "6", "7", "8"]
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009920/SCLD111-1_1024x1024_dvdv2k.webp",
      brand: "NORTH STAR",
      name: "NORTH STAR PREMIUM LEATHER SANDALS",
      price: "Tk 2,499.00",
      originalPrice: "Tk 3,299.00",
      discount: "-25%",
      sizes: ["6", "7", "8", "9"]
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009947/SCLD112-1_qsau8j.webp",
      brand: "HUSH PUPPIES",
      name: "HUSH PUPPIES EXECUTIVE FORMAL SHOES",
      price: "Tk 6,499.00",
      originalPrice: "Tk 7,999.00",
      discount: "-20%",
      sizes: ["7", "8", "9", "10"]
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744009915/Lawn_bowls_shoes_swswld.webp",
      brand: "SCHOLL",
      name: "SCHOLL ORTHOPEDIC COMFORT FOOTWEAR",
      price: "Tk 3,999.00",
      originalPrice: "Tk 4,799.00",
      discount: "-15%",
      sizes: ["6", "7", "8", "9"]
    }
  ];
  
  // Display 4 products at a time on desktop
  const totalSlides = Math.ceil(products.length / 4);
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const visibleProducts = products.slice(currentSlide * 4, (currentSlide * 4) + 4);
  
  return (
    <div ref={sectionRef} className="w-full px-4 md:px-20 py-12 bg-gray-50 relative max-w-7xl mx-auto">
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={isSectionInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-left mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800">FEATURED PRODUCTS</h2>
      </motion.div>
      
      {/* Product Carousel */}
      <div className="relative">
        <motion.button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 md:-ml-6 bg-white rounded-full p-3 shadow-lg z-10 border border-gray-100"
          onClick={handlePrevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ChevronLeft size={18} />
        </motion.button>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {visibleProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              index={index}
            />
          ))}
        </div>
        
        <motion.button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 md:-mr-6 bg-white rounded-full p-3 shadow-lg z-10 border border-gray-100"
          onClick={handleNextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
      
      {/* Pagination indicators */}
      {totalSlides > 1 && (
        <motion.div 
          className="flex justify-center mt-8 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              className={`transition-all duration-200 rounded-full ${
                currentSlide === index ? 'bg-black w-6 h-2' : 'bg-gray-300 w-2 h-2'
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FeaturedProducts;