import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import nihiImage from '../assets/NIHI.png';

const OrderSection = () => {
  const [showQuantityPopup, setShowQuantityPopup] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerContact, setCustomerContact] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const quantityOptions = [
    { value: '1', label: '1 Bottle (8ml)', price: '₹75', mrp: '₹120' },
    { value: '2', label: '2 Bottles (16ml)', price: '₹150', mrp: '₹240' },
    { value: '3', label: '3 Bottles (24ml)', price: '₹225', mrp: '₹360' },
    { value: '5', label: '5 Bottles (40ml)', price: '₹375', mrp: '₹600' },
    { value: '10', label: '10 Bottles (80ml)', price: '₹750', mrp: '₹1,200' },
    { value: 'custom', label: 'Custom Quantity', price: '₹75', mrp: '₹120' }
  ];

  const handleOrderClick = () => {
    setShowQuantityPopup(true);
  };

  const handleQuantitySelect = () => {
    if (selectedQuantity && customerName && customerContact && deliveryAddress) {
      const selectedOption = quantityOptions.find(opt => opt.value === selectedQuantity);
      const message = selectedQuantity === 'custom' 
        ? `Hi! I want to buy Nihi Herbal bottle. I need a custom quantity. Please help me with pricing and delivery details. (Price: ${selectedOption?.price} after discount from MRP ${selectedOption?.mrp})\n\nCustomer Details:\nName: ${customerName}\nContact: ${customerContact}\nDelivery Address: ${deliveryAddress}`
        : `Hi! I want to buy ${selectedOption?.label} of Nihi Herbal. Price: ${selectedOption?.price} after discount from MRP ${selectedOption?.mrp}.\n\nCustomer Details:\nName: ${customerName}\nContact: ${customerContact}\nDelivery Address: ${deliveryAddress}`;
      
      const whatsappUrl = `https://wa.me/917569460743?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setShowQuantityPopup(false);
      setSelectedQuantity('');
      setCustomerName('');
      setCustomerContact('');
      setDeliveryAddress('');
    }
  };

  const closePopup = () => {
    setShowQuantityPopup(false);
    setSelectedQuantity('');
    setCustomerName('');
    setCustomerContact('');
    setDeliveryAddress('');
  };

  return (
    <section id="order" className="py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-60 text-green-600 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0s' }}>🍃</div>
        <div className="absolute top-32 right-16 text-4xl opacity-60 text-green-500 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>🌱</div>
        <div className="absolute top-64 left-20 text-5xl opacity-60 text-green-600 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>🌿</div>
        <div className="absolute top-96 right-24 text-3xl opacity-60 text-green-500 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>🍃</div>
        <div className="absolute bottom-32 left-16 text-4xl opacity-60 text-green-600 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>🌱</div>
        <div className="absolute bottom-20 right-12 text-6xl opacity-60 text-green-500 animate-bounce" style={{ animationDuration: '6s', animationDelay: '0.8s' }}>🌿</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#13381A] mb-4">
            Order Nihi Herbal
          </h2>
          <p className="text-xl text-[#13381A]/80 max-w-3xl mx-auto">
            Experience the power of natural healing with our premium herbal remedy. 
            Choose your quantity and get started on your wellness journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Display */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-200">
              {/* Product Image */}
              <div className="mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-80 h-80 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={nihiImage} 
                      alt="Nihi Herbal Bottle" 
                      className="w-full h-full object-contain rounded-3xl shadow-2xl animate-bounce"
                      style={{ animationDuration: '3s' }}
                    />
                  </div>
                  <div className="text-green-700 font-bold text-lg">Nihi Herbal</div>
                  <div className="text-green-600 text-sm">8ml Bottle</div>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#13381A] mb-3">Nihi Herbal</h3>
                <p className="text-[#13381A]/70 mb-4">
                  Natural remedy for cold, cough, fever & migraine. Made from carefully selected organic herbs.
                </p>
                
                {/* Pricing */}
                <div className="bg-green-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-green-600">₹75</span>
                    <span className="text-lg text-gray-500 line-through">₹120</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    Save ₹45 per bottle!
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-[#13381A]/70">100% Organic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-[#13381A]/70">Free Delivery -5km radius </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-[#13381A]/70">Natural Herbs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Options */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-[#13381A] mb-6 text-center">
                Choose Your Order
              </h3>

              {/* Quick Order Options */}
              <div className="space-y-4 mb-8">
                {quantityOptions.slice(0, 4).map((option) => (
                  <div key={option.value} className="flex items-center justify-between p-4 border border-green-200 rounded-xl hover:bg-green-50 transition-colors">
                    <div>
                      <div className="font-semibold text-[#13381A]">{option.label}</div>
                      <div className="text-sm text-[#13381A]/70">Perfect for {option.value === '1' ? 'trying out' : option.value === '2' ? 'personal use' : option.value === '3' ? 'family use' : 'bulk orders'}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">{option.price}</div>
                      <div className="text-xs text-gray-500 line-through">{option.mrp}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Button */}
              <button 
                onClick={handleOrderClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Order Now
              </button>

              <div className="text-center mt-4 text-sm text-[#13381A]/70">
                Click to select quantity and continue to WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantity Selection Popup */}
      {showQuantityPopup && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
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
                    <span className="text-[#13381A] font-medium text-sm">{option.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-bold text-sm">{option.price}</div>
                    <div className="text-gray-500 text-xs line-through">{option.mrp}</div>
                  </div>
                </label>
              ))}
            </div>
            
            {/* Customer Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#13381A] mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#13381A] mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={customerContact}
                  onChange={(e) => setCustomerContact(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#13381A] mb-2">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <textarea
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Enter your complete delivery address..."
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none text-black"
                rows="2"
                required
              />
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
                disabled={!selectedQuantity || !customerName || !customerContact || !deliveryAddress}
                className="flex-1 px-4 py-3 bg-[#18492B] text-white rounded-lg hover:bg-[#194528] transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderSection;
