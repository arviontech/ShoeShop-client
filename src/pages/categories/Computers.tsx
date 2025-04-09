import { motion } from 'framer-motion';
import { Laptop, Monitor, Keyboard, Gamepad } from 'lucide-react';

export default function Computers() {
  const categories = [
    {
      title: 'Hardware',
      icon: <Laptop className="w-6 h-6" />,
      subcategories: ['Laptops', 'Desktops', 'Tablets']
    },
    {
      title: 'Peripherals',
      icon: <Monitor className="w-6 h-6" />,
      subcategories: ['Monitors', 'Printers', 'Scanners']
    },
    {
      title: 'Accessories',
      icon: <Keyboard className="w-6 h-6" />,
      subcategories: ['Keyboards', 'Mice', 'External Storage']
    },
    {
      title: 'Gaming',
      icon: <Gamepad className="w-6 h-6" />,
      subcategories: ['Gaming PCs', 'Consoles', 'Gaming Accessories']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        Computers & Accessories
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((category) => (
          <motion.div
            key={category.title}
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
            <ul className="space-y-2">
              {category.subcategories.map((sub) => (
                <motion.li
                  key={sub}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  {sub}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}