"use client";

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/customer/Hero';
import Categories from '@/components/customer/Categories';
import FeaturedStores from '@/components/customer/FeaturedStores';
import CheckoutModal from '@/components/customer/CheckoutModal';
import AdminView from '@/components/admin/AdminView';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const [view, setView] = useState<'customer' | 'admin'>('customer');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={`min-h-screen transition-colors duration-500 ${view === 'admin' ? 'bg-[#fcfdfe] dark:bg-[#020617]' : 'bg-white dark:bg-[#020617]'}`}>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-500 origin-[0%] z-[200] shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
        style={{ scaleX }} 
      />

      <Navbar currentView={view} setView={setView} />
      
      {view === 'customer' ? (
        <main className="pt-0">
          <Hero />
          <Categories />
          <FeaturedStores onOrderClick={() => setIsCheckoutOpen(true)} />
          
          <footer className="py-32 bg-[#020617] text-white border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-20" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center rotate-3">
                      <ShoppingBag className="w-6 h-6 text-[#020617]" />
                    </div>
                    <span className="text-3xl font-black tracking-tighter">City<span className="text-emerald-500 italic">Drop</span></span>
                  </div>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed max-w-sm mb-8">
                    The next evolution of urban logistics. Synchronizing city commerce with laser-precision delivery.
                  </p>
                  <div className="flex space-x-4">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-center group">
                          <div className="w-4 h-4 bg-gray-600 group-hover:bg-emerald-500 rounded-sm transition-colors" />
                       </div>
                     ))}
                  </div>
                </div>
                
                {[
                  { title: 'Platform', links: ['Services', 'Analytics', 'Fleet Control', 'Security'] },
                  { title: 'Company', links: ['About', 'Strategy', 'Carriers', 'Contact'] },
                  { title: 'Legal', links: ['Terms', 'Privacy', 'Security', 'Compliance'] }
                ].map((s, i) => (
                  <div key={i}>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">{s.title}</h4>
                    <ul className="space-y-4">
                      {s.links.map(l => (
                        <li key={l}><a href="#" className="text-gray-500 hover:text-white font-bold text-sm transition-colors">{l}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-gray-600 text-xs font-black uppercase tracking-widest leading-loose">
                  © 2026 CityDrop OS. All Rights Reserved. <br /> Developed in New York City.
                </p>
                <div className="flex items-center space-x-12">
                   <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest text-right">
                     Designed for <span className="text-emerald-400 font-black ml-1">Maher M.</span> <br /> 
                     <span className="text-[8px] opacity-30 mt-1 block">BUILD_VERSION_4.2.0_ELITE</span>
                   </p>
                </div>
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
