"use client";

import React from 'react';
import { Utensils, ShoppingCart, Pill, Package, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Restaurants",
    description: "Famous local cuisines and top food chains.",
    icon: Utensils,
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "Supermarkets",
    description: "Grocieries, household items, and more.",
    icon: ShoppingCart,
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Pharmacies",
    description: "Essential medicines and healthcare products.",
    icon: Pill,
    color: "bg-emerald-500",
  },
  {
    id: 4,
    name: "Custom Orders",
    description: "Tell us what you need and we'll deliver it.",
    icon: Package,
    color: "bg-purple-500",
  }
];

const Categories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Explore Categories</h2>
            <p className="text-gray-500">Find everything you need in your city</p>
          </div>
          <button className="text-secondary font-semibold flex items-center space-x-1 hover:underline group">
            <span>View All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group card-hover p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-secondary/20 hover:bg-white cursor-pointer relative overflow-hidden">
              <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{category.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{category.description}</p>
              
              <div className="flex items-center text-secondary font-bold text-sm">
                <span>Browse</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
              </div>
              
              {/* Decorative background element */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-5 ${category.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
