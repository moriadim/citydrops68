"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-[#020617]">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[30s] scale-110"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="hero-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs mb-8 border border-emerald-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-widest">Live in New York City</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            The city, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              at your door.
            </span>
          </h1>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-lg font-medium">
            Experience the next generation of local delivery. From gourmet kitchens to essential pharmacies, we bring the best of your city to you in minutes.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl"
          >
            <div className="flex-grow flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 focus-within:border-emerald-500/50 transition-all shadow-2xl">
              <div className="flex items-center space-x-3 px-4 py-2 border-r border-white/10">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-white text-sm font-semibold">Downtown</span>
              </div>
              <input 
                type="text" 
                placeholder="Search for restaurants..." 
                className="bg-transparent border-none outline-none text-white px-4 text-sm w-full placeholder:text-gray-500"
              />
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center space-x-3 group button-shine">
              <span>Start Order</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="mt-16 flex items-center space-x-8">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white">
                  +2k
                </div>
             </div>
             <p className="text-xs text-gray-500 font-bold max-w-[150px]">
               Trusted by over <span className="text-white">25,000+</span> customers citywide.
             </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-10 bg-emerald-500/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative glass-premium rounded-[3rem] p-4 border border-white/10 shadow-2xl animate-float">
               <img 
                 src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600" 
                 alt="Premium Delivery" 
                 className="rounded-[2.5rem] w-full h-[500px] object-cover"
               />
               <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                 <Play className="w-8 h-8 text-emerald-500 fill-current ml-1" />
               </button>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-8 top-20 glass-premium p-4 rounded-2xl border border-white/20 shadow-2xl flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Delivery Time</p>
                <p className="text-sm text-white font-black">12-15 Minutes</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
