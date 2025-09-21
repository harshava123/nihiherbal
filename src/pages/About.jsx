import React from 'react';

const About = () => (
  <div className="bg-gradient-to-b from-secondary via-[#FDF8E1] to-neutral min-h-screen py-16">
    <div className="max-w-3xl mx-auto px-4 space-y-16">
      {/* Brand Story */}
      <section className="bg-glass rounded-2xl shadow-glass p-8 border border-neutral/20">
        <h2 className="text-2xl font-bold text-primary mb-4 font-brand">Our Story</h2>
        <p className="text-primary/80">Fruit Delight was born from a passion for healthy, joyful snacking. We believe everyone deserves fresh, delicious fruit, delivered with care and a smile. Our journey began in 2023, inspired by the vibrant markets and the need for convenient, hygienic options for busy lives.</p>
      </section>
      {/* Mission & Vision */}
      <section className="bg-glass rounded-2xl shadow-glass p-8 border border-neutral/20">
        <h2 className="text-2xl font-bold text-primary mb-4 font-brand">Mission & Vision</h2>
        <ul className="list-disc pl-6 text-primary/80 space-y-2">
          <li>Mission: To make healthy snacking easy, fun, and accessible for all.</li>
          <li>Vision: To be the most loved fruit delivery brand, known for freshness, care, and delight.</li>
        </ul>
      </section>
      {/* Process */}
      <section className="bg-glass rounded-2xl shadow-glass p-8 border border-neutral/20">
        <h2 className="text-2xl font-bold text-primary mb-4 font-brand">How It Works</h2>
        <ol className="list-decimal pl-6 text-primary/80 space-y-2">
          <li>Pick: Choose your favorite combos from our menu.</li>
          <li>Cut: We handpick and freshly cut your fruits.</li>
          <li>Pack: Hygienically packed with eco-friendly materials.</li>
          <li>Deliver: Same-day delivery, cold and clean, to your door.</li>
        </ol>
      </section>
    </div>
  </div>
);

export default About; 