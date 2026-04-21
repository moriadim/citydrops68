"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ShoppingBag, ArrowRight, Heart } from 'lucide-react';

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
    <section className="py-32 bg-gray-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-500 font-bold text-xs uppercase tracking-[0.3em] block mb-4">Top Rated</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#020617]">Nearby Favorites</h2>
          </motion.div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-[#020617] font-black text-sm uppercase tracking-widest flex items-center space-x-2 border-b-2 border-emerald-500 pb-1"
          >
            <span>Browse Map</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stores.map((store, index) => (
            <motion.div 
              key={store.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-6 right-6">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                   <div className="px-4 py-2 rounded-xl bg-white text-[#020617] font-black text-[10px] uppercase shadow-xl">
                      {store.category}
                   </div>
                </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-[#020617] mb-2 tracking-tight">{store.name}</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-emerald-500 fill-current" />
                        <span className="text-sm font-black text-[#020617]">{store.rating}</span>
                        <span className="text-xs text-gray-400 font-bold">({store.reviews})</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full" />
                      <div className="flex items-center space-x-1.5 text-gray-500 font-bold text-xs uppercase">
                        <Clock className="w-4 h-4" />
                        <span>{store.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-10 border-t border-gray-50 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Delivery</span>
                      <span className="text-sm font-black text-[#020617] mt-0.5">$0.00 <span className="text-emerald-500 text-[10px] font-bold">FREE</span></span>
                   </div>
                   <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOrderClick}
                    className="flex items-center space-x-3 px-8 py-4 bg-[#020617] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl transition-all hover:bg-emerald-500 button-shine"
                  >
                    <ShoppingBag className="w-4 h-4" />
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
