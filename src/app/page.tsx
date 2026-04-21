"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/customer/Hero';
import Categories from '@/components/customer/Categories';
import FeaturedStores from '@/components/customer/FeaturedStores';
import CheckoutModal from '@/components/customer/CheckoutModal';
import AdminView from '@/components/admin/AdminView';

export default function Home() {
  const [view, setView] = useState<'customer' | 'admin'>('customer');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className={`min-h-screen ${view === 'admin' ? 'bg-gray-50' : 'bg-white'}`}>
      <Navbar currentView={view} setView={setView} />
      
      {view === 'customer' ? (
        <main className="pt-16">
          <Hero />
          <Categories />
          <FeaturedStores onOrderClick={() => setIsCheckoutOpen(true)} />
          
          <footer className="py-20 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">C</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">CityDrop</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Bringing your city's best stores right to your doorstep. Fast, reliable, and convenient.
              </p>
              <div className="flex justify-center space-x-6 mb-12">
                <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">About</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Help</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">Terms</a>
              </div>
              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <p>© 2026 CityDrop Delivery Platform. Built for the future.</p>
                <p className="font-medium text-gray-400">Designed for <span className="text-secondary font-bold">Maher M.</span></p>
              </div>

            </div>
          </footer>

          <CheckoutModal 
            isOpen={isCheckoutOpen} 
            onClose={() => setIsCheckoutOpen(false)} 
          />
        </main>
      ) : (
        <AdminView />
      )}
    </div>
  );
}
