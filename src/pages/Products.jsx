import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    name: 'Tropical Combo',
    price: 199,
    description: 'A mix of pineapple, mango, and papaya, freshly cut and chilled.'
  },
  {
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    name: 'Berry Blast',
    price: 249,
    description: 'Strawberries, blueberries, and grapes for a sweet antioxidant boost.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    name: 'Melon Medley',
    price: 179,
    description: 'Watermelon, muskmelon, and cantaloupe, perfect for summer.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    name: 'Citrus Zing',
    price: 189,
    description: 'Oranges, kiwi, and pomegranate for a tangy treat.'
  },
];

const Products = ({ onAddToCart }) => (
  <div className="bg-gradient-to-b from-secondary via-[#FDF8E1] to-neutral min-h-screen py-16">
    <div className="max-w-6xl mx-auto px-4">
      {/* Highlight Area */}
      <section className="mb-12">
        <div className="bg-accent/10 border-l-4 border-accent rounded-xl p-6 shadow-glass flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-accent mb-2 font-brand">This Week's Special</h2>
            <p className="text-primary/80">Try our <span className="font-semibold text-primary">Berry Blast</span> combo for a sweet antioxidant boost!</p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 rounded-full bg-accent text-[#FDF8E1] font-bold shadow hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent" onClick={() => onAddToCart(products[1])}>Order Berry Blast</button>
        </div>
      </section>
      {/* Product Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} onAddToCart={() => onAddToCart(product)} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Products; 