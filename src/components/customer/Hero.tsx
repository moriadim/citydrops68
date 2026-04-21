"use client";

import React from 'react';
import { Search, MapPin, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6 backdrop-blur-sm border border-secondary/30">
            Fastest delivery in your city
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Deliveries in a <span className="text-secondary italic">blink.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
            Restaurants, supermarkets, pharmacies, and custom orders—delivered to your doorstep in under 30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow flex items-center bg-white rounded-2xl p-2 shadow-2xl">
              <div className="flex items-center space-x-2 px-4 border-r border-gray-200 min-w-[150px]">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-600 font-medium truncate">New York, NY</span>
              </div>
              <div className="flex-grow flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="What are you craving?" 
                  className="bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-400 w-full"
                />
              </div>
            </div>
            <button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 group">
              <span>Order Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-white/80">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Restaurants</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">30min</span>
              <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Avg Delivery</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">4.9/5</span>
              <span className="text-sm font-medium opacity-80 uppercase tracking-widest">User Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
