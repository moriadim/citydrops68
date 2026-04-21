"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MapPin, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-[#020617]">
      {/* Dynamic Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[30s]"
        style={{ backgroundImage: 'url("/hero-bg.png")', y: y1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/20" />
      </motion.div>

      <div className="hero-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          style={{ opacity }}
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
            <span className="uppercase tracking-widest text-[8px]">Session Active: New York City</span>
          </motion.div>

          <h1 className="text-6xl md:text-[9rem] font-black text-white mb-8 leading-[0.9] tracking-tighter">
            City<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-500">
              Pulse.
            </span>
          </h1>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-lg font-medium">
            The ultimate city delivery OS. We've synchronized thousands of merchants to deliver anything to your pinpoint location in record time.
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl"
          >
            <div className="flex-grow flex items-center bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-2 focus-within:border-emerald-500/50 transition-all shadow-2xl">
              <div className="flex items-center space-x-3 px-6 py-3 border-r border-white/10">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-white text-[10px] font-black uppercase tracking-widest">HQ1</span>
              </div>
              <input 
                type="text" 
                placeholder="Initialize order sequence..." 
                className="bg-transparent border-none outline-none text-white px-6 text-xs font-black uppercase tracking-wider w-full placeholder:text-gray-600"
              />
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-black py-4 px-10 rounded-[2rem] transition-all shadow-[0_20px_50px_rgba(16,185,129,0.4)] flex items-center justify-center space-x-3 group button-shine text-xs uppercase tracking-[0.2em]">
              <span>Order Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="mt-16 flex items-center space-x-10">
             <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                    className="w-12 h-12 rounded-2xl border-4 border-[#020617] bg-gray-800 overflow-hidden cursor-pointer"
                  >
                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" />
                  </motion.div>
                ))}
             </div>
             <div className="h-10 w-px bg-white/10" />
             <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-loose">
               Trusted by <span className="text-white">World Leaders</span> <br />& City Residents alike.
             </p>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-20 bg-emerald-500/10 blur-[150px] rounded-full animate-pulse transition-opacity group-hover:opacity-100 opacity-50" />
            <div className="relative glass-premium rounded-[4rem] p-6 border border-white/10 shadow-2xl animate-float">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-[4rem] pointer-events-none" />
               <img 
                 src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600" 
                 alt="Premium Delivery" 
                 className="rounded-[3.5rem] w-full h-[600px] object-cover shadow-2xl"
               />
               <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] hover:scale-110 transition-all group active:scale-95">
                 <Play className="w-10 h-10 text-emerald-500 fill-current ml-1" />
               </button>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-12 top-40 glass-premium p-6 rounded-[2rem] border border-white/20 shadow-2xl flex items-center space-x-4 group-hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#020617] shadow-xl">
                <Navigation className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-tighter">Live Traffic</p>
                <p className="text-sm text-white font-black">Optimal Routes</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -left-12 bottom-40 glass-premium p-6 rounded-[2rem] border border-white/20 shadow-2xl flex items-center space-x-4 bg-emerald-500/20"
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-tighter">Velocity</p>
                <p className="text-sm text-white font-black">⚡ Real-time</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
