import React from 'react';
import sravaniImage from '../assets/Sravani.png';

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-background relative overflow-hidden quotebggg-section">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#FDF8E1' }}>
        A note from our founder
      </h2>
      {/* Overlay for readability if needed */}
      <div className="absolute inset-0 bg-background/90 z-0 pointer-events-none" />
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 rounded-3xl border border-white/40 backdrop-blur-md bg-white/10 p-6 sm:p-10 lg:p-16">
          {/* Left Side: Image Card */}
          <div className="flex-shrink-0 w-full max-w-sm flex justify-center items-center">
            <div className="bg-white rounded-2xl p-2 flex items-center justify-center" style={{ boxShadow: '0 2px 24px 0 rgba(0,0,0,0.04)' }}>
              <div className="w-64 h-80 rounded-2xl overflow-hidden">
                <img 
                  src={sravaniImage} 
                  alt="Sravani - Founder of Nihi Herbal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Right Side: Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FDF8E1' }}>
              Meet Sravani, founder
            </h3>
            <p className="text-base md:text-lg mb-6" style={{ color: '#FDF8E1' }}>
              Hi, I'm Sravani, and I'm passionate about natural healing and organic wellness. My journey with Nihi Herbal began from a deep belief in the power of natural herbs to cure common ailments. I created this organic liquid herbal remedy to provide a natural solution for cold, cough, fever, and migraine.<br/><br/>
              Nihi Herbal is made from carefully selected natural herbs and is completely organic. Every bottle is crafted with care to ensure the highest quality and effectiveness. Join me in embracing natural healing and let's make healthy living simple, effective, and accessible to everyone!
            </p>
            <div className="mt-6">
              <div className="font-bold" style={{ color: '#FDF8E1' }}>Sravani, Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection; 