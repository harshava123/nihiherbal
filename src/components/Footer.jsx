import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaArrowUp, FaTimes } from 'react-icons/fa';

const Footer = () => {
  const [showQuantityPopup, setShowQuantityPopup] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [showUsageGuide, setShowUsageGuide] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quantityOptions = [
    { value: '1', label: '1 Bottle (30ml)', price: '₹80', mrp: '₹120' },
    { value: '2', label: '2 Bottles (60ml)', price: '₹160', mrp: '₹240' },
    { value: '3', label: '3 Bottles (90ml)', price: '₹240', mrp: '₹360' },
    { value: '5', label: '5 Bottles (150ml)', price: '₹400', mrp: '₹600' },
    { value: '10', label: '10 Bottles (300ml)', price: '₹800', mrp: '₹1,200' },
    { value: 'custom', label: 'Custom Quantity', price: '₹80', mrp: '₹120' }
  ];

  const handleWhatsAppClick = () => {
    setShowQuantityPopup(true);
  };

  const handleQuantitySelect = () => {
    if (selectedQuantity) {
      const selectedOption = quantityOptions.find(opt => opt.value === selectedQuantity);
      const message = selectedQuantity === 'custom' 
        ? `Hi! I want to buy Nihi Herbal bottle. I need a custom quantity. Please help me with pricing and delivery details. (Price: ${selectedOption?.price} after discount from MRP ${selectedOption?.mrp})`
        : `Hi! I want to buy ${selectedOption?.label} of Nihi Herbal. Price: ${selectedOption?.price} after discount from MRP ${selectedOption?.mrp}. Please provide delivery details.`;
      
      const whatsappUrl = `https://wa.me/917569460743?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setShowQuantityPopup(false);
      setSelectedQuantity('');
    }
  };

  const closePopup = () => {
    setShowQuantityPopup(false);
    setSelectedQuantity('');
  };

  const handleUsageGuideClick = (e) => {
    e.preventDefault();
    setShowUsageGuide(true);
  };

  const closeUsageGuide = () => {
    setShowUsageGuide(false);
  };

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/nihiherbals' },
    { name: 'WhatsApp', icon: FaWhatsapp, onClick: handleWhatsAppClick },
  ];

  const footerLinks = {
    'Our Company': [
      { name: 'About Us', href: '#story' },
      { name: 'Our Process', href: '#lifecycle' },
      { name: 'Testimonials', href: '#testimonials' },
    ],
    'Products': [
      { name: 'Nihi Herbal', href: '#features' },
      { name: 'Bulk Orders', href: 'https://wa.me/917569460743?text=Hi! I am interested in bulk orders of Nihi Herbal for my business. Please provide more details about wholesale pricing and delivery options.' },
      { name: 'Custom Solutions', href: 'https://wa.me/917569460743?text=Hi! I would like to discuss custom herbal solutions. Please help me with personalized herbal remedies and packaging options.' },
    ],
    'Support': [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Usage Guide', href: '#', onClick: handleUsageGuideClick },
    ],
  };

  return (
    <footer className="bg-[#FDF8E1] border-t border-neutral-light">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="font-brand text-3xl sm:text-4xl font-bold text-[#13381A]">
                  Nihi Herbal
                </span>
              </div>
              <p className="mt-6 text-[#13381A]/80 max-w-md leading-relaxed">
                Natural Healing, Organic Wellness. Premium herbal remedies for cold, cough, fever, and migraine - crafted with care for your health.
              </p>
              <div className="mt-8 flex gap-4">
                {socialLinks.map((social) => (
                  social.name === 'WhatsApp' ? (
                    <button
                      key={social.name}
                      onClick={social.onClick}
                      aria-label={social.name}
                      className="w-12 h-12 bg-[#18492B] text-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#194528] cursor-pointer"
                    >
                      <social.icon className="h-6 w-6" />
                    </button>
                  ) : (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-12 h-12 bg-[#18492B] text-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#194528]"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold text-[#13381A] uppercase tracking-wider text-sm mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.onClick ? (
                        <button
                          onClick={link.onClick}
                          className="text-[#13381A]/80 hover:text-accent transition-colors duration-300 font-medium text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-[#13381A]/80 hover:text-accent transition-colors duration-300 font-medium"
                          target={link.href.startsWith('https://wa.me/') ? '_blank' : '_self'}
                          rel={link.href.startsWith('https://wa.me/') ? 'noopener noreferrer' : ''}
                          onClick={(e) => {
                            if (link.href.startsWith('#')) {
                              e.preventDefault();
                              document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - 100% Width */}
      <div className="w-full bg-[#194528]/5 border-t border-[#194528]/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-base font-semibold text-[#13381A]/90">
                  &copy; 2025 Nihi Herbal. All Rights Reserved.
                </p>
              </div>

              {/* Links and Credit */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                {/* Policy Links */}
                

                {/* Developer Credit */}
                <div className="text-sm text-[#13381A]/70">
                  Designed and developed with ❤️ by{' '}
                  <a 
                    href="https://harsha-penthala.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F88B42] hover:text-[#194528] font-semibold transition-colors duration-300 underline decoration-2 underline-offset-2"
                  >
                    Harsha Vardhan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#18492B] text-[#FDF8E1] p-3 rounded-full shadow-soft-lg hover:bg-[#18492B] transition-all duration-300 hover:scale-110 z-40"
      >
        <span className="inline-flex items-center justify-center bg-[#18492B] rounded-full p-2 shadow-md transition-all duration-300">
          <FaArrowUp className="h-6 w-6 text-accent" />
        </span>
      </button>

      {/* Quantity Selection Popup */}
      {showQuantityPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#13381A]">Choose Quantity</h3>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-[#13381A]/80 mb-6">
              Select the quantity of Nihi Herbal bottles you want to purchase:
            </p>
            
            <div className="space-y-3 mb-6">
              {quantityOptions.map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="quantity"
                      value={option.value}
                      checked={selectedQuantity === option.value}
                      onChange={(e) => setSelectedQuantity(e.target.value)}
                      className="mr-3 text-green-600 focus:ring-green-500"
                    />
                    <span className="text-[#13381A] font-medium">{option.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-bold">{option.price}</div>
                    <div className="text-gray-500 text-sm line-through">{option.mrp}</div>
                  </div>
                </label>
              ))}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={closePopup}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleQuantitySelect}
                disabled={!selectedQuantity}
                className="flex-1 px-4 py-3 bg-[#18492B] text-white rounded-lg hover:bg-[#194528] transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Usage Guide Popup */}
      {showUsageGuide && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#13381A]">How to Use Nihi Herbal</h3>
              <button
                onClick={closeUsageGuide}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4 text-[#13381A]/80">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-[#13381A] mb-2">For Cold & Cough:</h4>
                <p className="text-sm">
                  Put 2 drops on a cotton ball and place it near your nose. Inhale gently for relief.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-semibold text-[#13381A] mb-2">For Headache:</h4>
                <p className="text-sm">
                  Apply 1-2 drops directly on your forehead and gently rub it in circular motions.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-[#13381A] mb-2">For Fever & Migraine:</h4>
                <p className="text-sm">
                  Use 2 drops on cotton and place near nose, or apply 1-2 drops on temples and massage gently.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={closeUsageGuide}
                className="w-full px-4 py-3 bg-[#18492B] text-white rounded-lg hover:bg-[#194528] transition-colors font-medium"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 