"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ShoppingBag, ArrowRight, Heart, Map } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: "Burger Artisan",
    category: "Premium Dining",
    rating: 4.8,
    reviews: "1.2k+",
    time: "20-30 min",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=600",
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "Organic Harvest",
    category: "Fresh Grocery",
    rating: 4.9,
    reviews: "800+",
    time: "15-25 min",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "CityCare Rx",
    category: "Pharmacy",
    rating: 4.7,
    reviews: "2.1k+",
    time: "10-20 min",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=600",
    color: "bg-blue-500",
  }
];

interface FeaturedStoresProps {
  onOrderClick: () => void;
}

const FeaturedStores: React.FC<FeaturedStoresProps> = ({ onOrderClick }) => {
  return (
    <section className="py-40 bg-gray-50/50 dark:bg-[#020617] relative transition-colors duration-500 text-left border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em] block mb-6">High Demand</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#020617] dark:text-white tracking-tighter">Nearby Elite.</h2>
          </motion.div>
          <motion.button 
            whileHover={{ x: 10, scale: 1.05 }}
            className="text-[#020617] dark:text-white font-black text-xs uppercase tracking-[0.2em] flex items-center space-x-3 border-b-4 border-emerald-500 pb-3 transition-all"
          >
            <Map className="w-5 h-5 text-emerald-500" />
            <span>Operational Map</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {stores.map((store, index) => (
            <motion.div 
              key={store.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group bg-white dark:bg-white/5 rounded-[4rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 border border-gray-100 dark:border-white/5 flex flex-col h-full relative"
            >
              <div className="h-80 relative overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-8 right-8">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-[1.5rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all shadow-2xl"
                  >
                    <Heart className="w-6 h-6" />
                  </motion.button>
                </div>

                <div className="absolute bottom-8 left-8">
                   <div className="px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-md text-[#020617] font-black text-[10px] uppercase tracking-widest shadow-2xl">
                      {store.category}
                   </div>
                </div>
              </div>
              
              <div className="p-12 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-4xl font-black text-[#020617] dark:text-white mb-4 tracking-tighter leading-none">{store.name}</h3>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-emerald-500 fill-current" />
                        <span className="text-sm font-black text-[#020617] dark:text-white">{store.rating}</span>
                        <span className="text-xs text-gray-400 font-bold tracking-tight">({store.reviews})</span>
                      </div>
                      <div className="w-1.5 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full" />
                      <div className="flex items-center space-x-2 text-gray-500 font-black text-[10px] uppercase tracking-widest">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        <span>{store.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-10 border-t border-gray-50 dark:border-white/5 flex items-center justify-between gap-6">
                   <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Fee Strategy</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-black text-[#020617] dark:text-white tracking-tighter">$0.00</span>
                        <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">FREE_ELITE</span>
                      </div>
                   </div>
                   <motion.button 
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOrderClick}
                    className="flex items-center space-x-4 px-10 py-5 bg-[#020617] dark:bg-emerald-500 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] transition-all hover:bg-emerald-500 dark:hover:bg-emerald-400 button-shine"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Order Now</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;
