import { motion } from "framer-motion";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    sale: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Premium Backpack",
    price: 79.99,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 159.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    sale: true,
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-16">
      <div className=" mx-auto px-4">
        <div className="text-3xl font-bold  mb-12">
          <h2>Trending Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.sale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    SALE
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-600">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">৳{product.price}</span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#2663EB] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
