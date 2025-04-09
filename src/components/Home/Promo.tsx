import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define the types for our promotional offers
type PromotionType = 'discount' | 'sale' | 'limited' | 'eid';

interface Promotion {
  id: number;
  type: PromotionType;
  title: string;
  description: string;
  code?: string;
  expiryDate?: string;
  backgroundImage: string;
}

// PromotionCard component
const PromotionCard: React.FC<{ promo: Promotion }> = ({ promo }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getOverlayColor = (type: PromotionType) => {
    switch (type) {
      case 'discount': return 'bg-blue-600 bg-opacity-80';
      case 'sale': return 'bg-green-600 bg-opacity-80';
      case 'limited': return 'bg-red-600 bg-opacity-80';
      case 'eid': return 'bg-purple-600 bg-opacity-80';
      default: return 'bg-gray-600 bg-opacity-80';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg shadow-lg overflow-hidden relative mb-6"
      style={{ minHeight: '200px' }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover mx-w-7xl mx-auto bg-center z-0"
        style={{ 
          backgroundImage: `url(${promo.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Colored overlay */}
      <div className={`absolute inset-0 ${getOverlayColor(promo.type)} z-10`} />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between p-6">
        <div className="flex-1 text-white mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">
            {promo.title}
          </h3>
          <p className="mt-2 text-lg">
            {promo.description}
          </p>
          {promo.expiryDate && (
            <p className="mt-2 text-sm opacity-90">
              Valid until: {promo.expiryDate}
            </p>
          )}
        </div>
        
        <div className="  flex flex-col items-center">
          {promo.code ? (
            <div className=" flex flex-col items-center">
              <motion.div 
                className=" bg-white px-6 py-3 rounded-md text-gray-800 font-mono text-xl font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {promo.code}
              </motion.div>
              <motion.button
                onClick={() => copyToClipboard(promo.code as string)}
                className="mt-3 bg-white bg-opacity-30 hover:bg-opacity-40 text-white px-4 py-1 rounded-full text-sm transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? "Copied!" : "Copy Code"}
              </motion.button>
            </div>
          ) : (
            <motion.button
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// DiscountPromo component
export const DiscountPromo: React.FC = () => {
  const promo: Promotion = {
    id: 1,
    type: 'discount',
    title: '20% OFF All Running Shoes',
    description: 'Use code RUNFAST for 20% off on all running shoes',
    code: 'RUNFAST',
    expiryDate: 'May 15, 2025',
    backgroundImage: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  };

  return <PromotionCard promo={promo} />;
};

// SalePromo component
export const SalePromo: React.FC = () => {
  const promo: Promotion = {
    id: 2,
    type: 'sale',
    title: 'Summer Sale',
    description: 'Get up to 40% off on selected sandals and casual shoes',
    expiryDate: 'June 30, 2025',
    backgroundImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  };

  return <PromotionCard promo={promo} />;
};

// LimitedPromo component
export const LimitedPromo: React.FC = () => {
  const promo: Promotion = {
    id: 3,
    type: 'limited',
    title: 'Flash Deal',
    description: 'Buy one get one free on all athletic shoes this weekend only!',
    expiryDate: 'April 12, 2025',
    backgroundImage: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  };

  return <PromotionCard promo={promo} />;
};
// EidPromo component
export const EidPromo: React.FC = () => {
    const promo: Promotion = {
      id: 4,
      type: 'eid',
      title: 'Eid Special Sale',
      description: 'Enjoy 30% off on all traditional footwear and luxury shoes',
      code: 'EID30',
      expiryDate: 'April 15, 2025',
      backgroundImage: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    };
  
    return <PromotionCard promo={promo} />;
  };

// Main component that renders all promotions
const ShoeShopPromo: React.FC = () => {
  return (
    <div className="w-full my-8 px-4">
      <DiscountPromo />
      <SalePromo />
      <LimitedPromo />
    </div>
  );
};

export default ShoeShopPromo;