import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard';

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

const ProductsCarousel = ({ onAddToCart }) => (
  <section id="products" className="py-16 bg-gradient-to-b from-secondary via-neutral to-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center font-brand">
        Our Combos
      </h2>
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} onAddToCart={() => onAddToCart(product)} />
        ))}
      </div>
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={24}
          slidesPerView={1.1}
          className="pb-8"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <ProductCard {...product} onAddToCart={() => onAddToCart(product)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

export default ProductsCarousel; 