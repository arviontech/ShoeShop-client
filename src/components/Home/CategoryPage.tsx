import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface CategoryCardProps {
  title: string;
  backgroundColor: string;
  imageUrl: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  backgroundColor, 
  imageUrl, 
  index 
}) => {
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
      className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg h-80 cursor-pointer"
      style={{ backgroundColor }}
    >
      <div className="absolute z-10 p-6">
        <h2 className="font-bold text-gray-800 uppercase text-xl md:text-2xl tracking-wide mb-1">
          {title}
        </h2>
        <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">COLLECTION</p>
        <motion.button 
          whileHover={{ x: 2 }}
          transition={{ duration: 0.1 }}
          className="mt-4 px-4 py-2 bg-white bg-opacity-90 text-gray-800 text-sm font-semibold rounded-full hover:bg-opacity-100"
        >
          Shop Now →
        </motion.button>
      </div>
      
      <div className="absolute inset-0 flex justify-center items-end h-full">
        <motion.img 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15 }}
          src={imageUrl} 
          alt={`${title} collection`} 
          className="h-3/4 object-contain"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-150"></div>
    </motion.div>
  );
};

const CategoryPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  const categories = [
    {
      title: "Men's",
      backgroundColor: "#E1F0F7",
      imageUrl: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744010005/cld-sample-5_czok9a.jpg",
    },
    {
      title: "Women's",
      backgroundColor: "#FFE6E8",
      imageUrl: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744015805/woman-shoes-high-heels_xflw1l.jpg",
    },
    {
      title: "Kids'",
      backgroundColor: "#FFF8C2",
      imageUrl: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744016040/description-beautiful-banner-features-collection_w6jqgo.webp",
    },
    {
      title: "Accessories",
      backgroundColor: "#E0F7E6",
      imageUrl: "https://res.cloudinary.com/dyuxx8ecm/image/upload/v1744017014/Accesories_pwocv7.avif",
    },
  ];

  return (
    <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-5 py-12 md:py-20">
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={isSectionInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Collections
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the perfect footwear for every occasion in our carefully curated collections.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.title}
            index={index}
            title={category.title}
            backgroundColor={category.backgroundColor}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;