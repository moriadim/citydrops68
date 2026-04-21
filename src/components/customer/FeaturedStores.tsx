"use client";

import React from 'react';
import { Star, Clock, ShoppingBag, ArrowRight } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: "Burger House",
    category: "Restaurants",
    rating: 4.8,
    time: "20-30 min",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=400",
    tags: ["Burgers", "Fast Food"],
  },
  {
    id: 2,
    name: "Fresh Market",
    category: "Supermarkets",
    rating: 4.9,
    time: "15-25 min",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
    tags: ["Organic", "Fresh"],
  },
  {
    id: 3,
    name: "Green Pharmacy",
    category: "Pharmacies",
    rating: 4.7,
    time: "10-20 min",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400",
    tags: ["Essentials", "Health"],
  }
];

interface FeaturedStoresProps {
  onOrderClick: () => void;
}

const FeaturedStores: React.FC<FeaturedStoresProps> = ({ onOrderClick }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Featured Stores</h2>
            <p className="text-gray-500">Hand-picked shops just for you</p>
          </div>
          <button className="text-secondary font-semibold flex items-center space-x-1 hover:underline group">
            <span>View All Stores</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stores.map((store) => (
            <div key={store.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {store.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{store.rating}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">{store.category}</span>
                    <h3 className="text-2xl font-bold text-primary">{store.name}</h3>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 font-medium text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{store.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-8 border-t border-gray-50 pt-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Delivery starts at</span>
                    <span className="text-sm font-bold text-primary">$2.99</span>
                  </div>
                  <button 
                    onClick={onOrderClick}
                    className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm transform transition-all active:scale-95 hover:bg-primary/90"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;
