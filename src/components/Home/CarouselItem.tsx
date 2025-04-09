import { ICarouselItemProps } from "@/types/banner/banner.types";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";

const CarouselItem = ({
  image,
  title,
  subtitle,
  buttonText,
  active,
}: ICarouselItemProps) => {
  // Variants for image animation
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Variants for text animation (bottom to top)
  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${image})`,
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {/* Text Container */}
          <motion.div
            className="md:-ml-[40%] text-center text-white rounded-lg"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: 0.5, duration: 0.5 }} // Delay text animation until image animation completes
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">{title}</h1>
            <p className="text-sm sm:text-base md:text-lg mt-4  max-w-md mx-auto md:p-1 p-6">{subtitle}</p>
            <Button className="bg-rose-500 hover:bg-rose-700 mt-4  px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base h-[45px] rounded text-md">
              <ShoppingBag
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="mr-1"
              />{" "}
              {buttonText}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarouselItem;
