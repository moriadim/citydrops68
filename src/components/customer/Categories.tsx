"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ShoppingCart, Pill, Package, ArrowRight, Zap, Globe } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Gourmet Food",
    description: "Curated selection of city's top chef kitchens.",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/20",
  },
  {
    id: 2,
    name: "Daily Essentials",
    description: "Fresh groceries and household needs delivered fast.",
    icon: ShoppingCart,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
  },
  {
    id: 3,
    name: "Wellness & Health",
    description: "Trusted pharmacies and health essentials 24/7.",
    icon: Pill,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    id: 4,
    name: "Hyper-Local",
    description: "Anything from any store, delivered on demand.",
    icon: Package,
    color: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20",
  }
];

const Categories = () => {
  return (
    <section className="py-40 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500 text-left">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
              <Globe className="w-4 h-4" />
              <span>Omni-City Presence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#020617] dark:text-white mb-6 tracking-tighter leading-tight">
              Synchronized <br />
              <span className="text-gray-300 dark:text-gray-700">Services.</span>
            </h2>
            <p className="text-lg text-gray-400 dark:text-gray-500 font-medium max-w-lg">
              We've interconnected the city's vital sectors into one high-velocity delivery network.
            </p>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gray-50 dark:bg-white/5 rounded-[2rem] font-black text-[#020617] dark:text-white border border-gray-100 dark:border-white/5 flex items-center space-x-4 transition-all hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl shadow-sm text-xs uppercase tracking-widest"
          >
            <span>Live Catalog</span>
            <ArrowRight className="w-5 h-5 text-emerald-500" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -15 }}
              className={`group relative p-12 rounded-[3rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 transition-all duration-500 ${category.shadow} cursor-pointer hover:shadow-2xl overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-10 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <category.icon className="w-10 h-10" />
              </div>
              
              <h3 className="text-3xl font-black text-[#020617] dark:text-white mb-6 tracking-tight">{category.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-bold text-sm leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
                {category.description}
              </p>
              
              <div className="flex items-center space-x-3 text-[#020617] dark:text-white font-black text-[10px] uppercase tracking-[0.2em] pt-8 border-t border-gray-50 dark:border-white/5">
                <span>Access</span>
                <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-3 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
