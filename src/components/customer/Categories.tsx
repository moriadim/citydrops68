"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ShoppingCart, Pill, Package, ArrowRight, Zap } from 'lucide-react';

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
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50/50 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-emerald-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
              <Zap className="w-4 h-4" />
              <span>Speed Meets Variety</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#020617] mb-4">
              Everything you need, <br />
              <span className="text-gray-400">within reach.</span>
            </h2>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-gray-50 rounded-2xl font-bold text-[#020617] border border-gray-100 flex items-center space-x-3 transition-all hover:bg-white hover:shadow-xl"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 text-emerald-500" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 transition-all duration-500 card-reveal ${category.shadow} cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-8 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                <category.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-black text-[#020617] mb-4">{category.name}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                {category.description}
              </p>
              
              <div className="flex items-center space-x-2 text-[#020617] font-black text-xs uppercase tracking-widest pt-6 border-t border-gray-50">
                <span>Browse</span>
                <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
