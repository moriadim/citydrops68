"use client";

import React from 'react';
import { LayoutDashboard, ShoppingBag, MapPin, Search } from 'lucide-react';

interface NavbarProps {
  currentView: 'customer' | 'admin';
  setView: (view: 'customer' | 'admin') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">CityDrop</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <div className="flex items-center space-x-1 text-primary cursor-pointer hover:text-secondary transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="font-medium text-sm">Downtown, NY</span>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-100/50 rounded-full px-4 py-1.5 border border-gray-200">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search for food or stores..." 
                className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setView(currentView === 'customer' ? 'admin' : 'customer')}
              className="flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 bg-primary text-white hover:bg-primary/90 shadow-md"
            >
              {currentView === 'customer' ? (
                <>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Admin Dashboard</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Customer View</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
