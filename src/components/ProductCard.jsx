import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ image, name, price, description, onAddToCart }) => (
  <motion.div
    className="relative bg-[#FDF8E1]/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden w-64 h-80 cursor-pointer group flex flex-col"
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <img
      src={image}
      alt={name}
      className="w-full h-40 object-cover object-center rounded-t-2xl group-hover:opacity-80 transition duration-300"
    />
    <div className="p-4 flex flex-col h-full justify-between flex-1">
      <div>
        <h3 className="text-xl font-bold text-[#13381A] mb-1">{name}</h3>
        <p className="text-lg font-semibold text-[#13381A]/80">₹{price}</p>
      </div>
      <motion.div
        className="absolute inset-0 bg-[#FDF8E1]/90 backdrop-blur-md flex items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-[#13381A] font-medium">{description}</span>
      </motion.div>
      <button
        onClick={onAddToCart}
        className="mt-4 w-full px-4 py-2 rounded-full bg-accent text-[#FDF8E1] font-semibold shadow hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Add to Cart
      </button>
    </div>
  </motion.div>
);

export default ProductCard; 