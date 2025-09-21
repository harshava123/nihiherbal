import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaLeaf } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Priya Sharma',
      address: 'Andheri West, Mumbai, Maharashtra',
      quote: "Nihi Herbal cured my chronic migraine! I've been using it for 3 months and the headaches are completely gone. Natural healing at its best!",
      rating: 5,
    },
    {
      name: 'Arjun Gupta',
      address: 'Connaught Place, New Delhi',
      quote: "Amazing results with Nihi Herbal! My cold and cough disappeared within 2 days. The organic formula is gentle yet effective. Highly recommend!",
      rating: 5,
    },
    {
      name: 'Anjali Mehta',
      address: 'Koramangala, Bangalore, Karnataka',
      quote: "Perfect for my family's health needs. One bottle treats multiple ailments - cold, fever, everything! Natural, safe, and effective.",
      rating: 5,
    },
    {
      name: 'Kavya Nair',
      address: 'T. Nagar, Chennai, Tamil Nadu',
      quote: "My kids love the taste and I love the results! Nihi Herbal boosted their immunity and they rarely fall sick now. Organic and trustworthy!",
      rating: 5,
    },
    {
      name: 'Rajesh Patel',
      address: 'Baner, Pune, Maharashtra',
      quote: "Been using Nihi Herbal for 6 months. The consistency in quality and effectiveness is outstanding. No side effects, only positive results!",
      rating: 5,
    },
    {
      name: 'Venkata Ramana',
      address: 'Jubilee Hills, Hyderabad, Telangana',
      quote: "The herbal formula is perfectly balanced. Works wonders for fever and cold. I trust Sravani's expertise in natural healing completely!",
      rating: 5,
    },
    {
      name: 'Srinivas Rao',
      address: 'Vijayawada, Andhra Pradesh',
      quote: "Nihi Herbal delivered right to my door! The quality never disappoints and the natural healing is exceptional. My go-to remedy now!",
      rating: 5,
    },
    {
      name: 'Lakshmi Devi',
      address: 'Warangal, Telangana',
      quote: "The customer service is exceptional. They guide you on proper usage and the herbal remedy works perfectly every time. Highly satisfied!",
      rating: 5,
    },
  ];

  // Responsive: 1 card per view on mobile, 2 on tablet, 3 on desktop
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    // Set initial value after component mounts
    setCardsPerView(getCardsPerView());
    
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      if (newCardsPerView !== cardsPerView) {
        setCardsPerView(newCardsPerView);
        setCurrentIndex(0); // Reset to first slide when screen size changes
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardsPerView]);

  const totalSlides = cardsPerView === 1 ? testimonials.length : Math.ceil(testimonials.length / cardsPerView);

  const nextSlide = () => {
    if (cardsPerView === 1) {
      // Mobile: scroll one card at a time
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      // Desktop/Tablet: scroll by groups
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (cardsPerView === 1) {
      // Mobile: scroll one card at a time
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    } else {
      // Desktop/Tablet: scroll by groups
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
      );
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Slightly faster for better mobile experience

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, totalSlides]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsAutoPlaying(true);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setIsAutoPlaying(true);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#EEE5BA] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#EEE5BA]/50 z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="font-brand text-4xl md:text-5xl font-bold text-[#194528] mb-2">
            Trusted by Our Customers
          </h2>
          <p className="mt-4 text-lg text-[#194528]/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their Nihi Herbal experience.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="mt-16 relative" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 z-20 bg-white/95 hover:bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group touch-manipulation"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#194528] group-hover:text-[#F88B42] transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 z-20 bg-white/95 hover:bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 group touch-manipulation"
            aria-label="Next testimonials"
          >
            <FaChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#194528] group-hover:text-[#F88B42] transition-colors" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-4 sm:mx-0">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: cardsPerView === 1 
                  ? `translateX(-${currentIndex * (100 / testimonials.length)}%)` 
                  : `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                width: cardsPerView === 1 
                  ? `${testimonials.length * 100}%` 
                  : `${(testimonials.length / cardsPerView) * 100}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ 
                    width: cardsPerView === 1 
                      ? `${100 / testimonials.length}%` 
                      : `${100 / testimonials.length}%`,
                    paddingLeft: cardsPerView === 1 ? '0' : '0.75rem',
                    paddingRight: cardsPerView === 1 ? '0' : '0.75rem'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Card */}
                  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#D6DC64]/20 h-full flex flex-col min-h-[280px] sm:min-h-[300px] mx-auto max-w-sm relative overflow-hidden">
                    
                    {/* Background Herb Decorations */}
                    <div className="absolute inset-0 pointer-events-none opacity-50 z-5">
                      <div className="absolute top-4 right-4 text-2xl text-green-600">🌿</div>
                      <div className="absolute top-8 left-6 text-lg text-green-500">🌱</div>
                      <div className="absolute bottom-12 right-8 text-xl text-green-600">🍃</div>
                      <div className="absolute bottom-8 left-4 text-lg text-green-500">🌿</div>
                      <div className="absolute top-1/2 right-2 text-sm text-green-600">🌱</div>
                      <div className="absolute top-1/3 left-2 text-sm text-green-500">🍃</div>
                    </div>
                    
                    {/* Quote Icon */}
                    <div className="flex justify-start mb-3 sm:mb-4 relative z-10">
                      <div className="bg-[#D6DC64] rounded-full p-2">
                        <FaQuoteLeft className="h-3 w-3 sm:h-4 sm:w-4 text-[#194528]" />
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-[#194528] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow relative z-10">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="border-t border-[#D6DC64]/20 pt-3 sm:pt-4 relative z-10">
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-[#194528] text-sm sm:text-base">
                          {testimonial.name}
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="h-3 w-3 text-[#F88B42]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#F88B42] scale-125' 
                    : 'bg-[#194528]/30 hover:bg-[#194528]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;