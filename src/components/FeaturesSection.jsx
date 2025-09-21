import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaShieldAlt, FaFlask, FaRecycle, FaStar } from 'react-icons/fa';


const FeaturesSection = () => {
  const features = [
    {
      icon: FaFlask,
      title: 'Natural Herbal Formula',
      description: 'Carefully crafted liquid herbal remedy made from pure, natural ingredients for effective healing.',
    },
    {
      icon: FaLeaf,
      title: '100% Organic',
      description: 'Made from carefully selected organic herbs, ensuring purity and natural effectiveness.',
    },
    {
      icon: FaHeart,
      title: 'Multi-Purpose Relief',
      description: 'Effective treatment for cold, cough, fever, and migraine - one solution for multiple ailments.',
    },
    {
      icon: FaShieldAlt,
      title: 'Safe & Hygienic',
      description: 'Manufactured in sterile conditions with strict quality control for your safety and peace of mind.',
    },
    {
      icon: FaRecycle,
      title: 'Eco-Friendly',
      description: 'Sustainable packaging and production methods that are good for you and the environment.',
    },
    {
      icon: FaStar,
      title: 'Proven Results',
      description: 'Trusted herbal remedy with proven effectiveness in treating common health issues naturally.',
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="features"
      className="py-8 sm:py-24 bg-[#FDF8E1] relative overflow-hidden quotebg-section"
    >
      {/* Overlay for readability if needed */}
      <div className="absolute inset-0 bg-[#FDF8E1]/40 z-0 pointer-events-none" />
      
      {/* Background Leaf Decorations */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-200 text-green-600">🌿</div>
        <div className="absolute top-32 right-16 text-4xl opacity-200 text-green-500">🌿</div>
        <div className="absolute top-64 left-20 text-5xl opacity-200 text-green-600">🌿</div>
        <div className="absolute top-96 right-24 text-3xl opacity-200 text-green-500">🌿</div>
        <div className="absolute bottom-32 left-16 text-4xl opacity-200 text-green-600">🌿</div>
        <div className="absolute bottom-20 right-12 text-6xl opacity-200 text-green-500">🌿</div>
        <div className="absolute top-1/2 left-8 text-3xl opacity-200 text-green-600">🌿</div>
        <div className="absolute top-1/3 right-8 text-5xl opacity-200 text-green-500">🌿</div>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="font-brand text-2xl sm:text-4xl md:text-5xl font-bold text-[#13381A]">
            Why Choose Nihi Herbal
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-[#13381A]/80 max-w-2xl mx-auto">
            We're passionate about natural healing and organic wellness. Here's what makes Nihi Herbal special.
          </p>
        </div>

        <div className="mt-8 sm:mt-16 grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants}
                className="text-center px-2 sm:px-0"
              >
                <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#18492B] text-accent mx-auto shadow-md transition-all duration-300">
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-[#13381A]">{feature.title}</h3>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-[#13381A]/80">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 