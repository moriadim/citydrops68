"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import OrdersTable from './OrdersTable';

const AdminView = () => {
  const [activeTab, setActiveTab] = useState('Orders');

  return (
    <div className="flex min-h-screen pt-16 bg-[#fcfdfe]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow p-8 md:p-16 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
          >
            <div>
              <div className="flex items-center space-x-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>System Operational</span>
              </div>
              <h1 className="text-5xl font-black text-[#020617] tracking-tight mb-2">
                {activeTab}
              </h1>
              <p className="text-gray-400 font-medium">Detailed overview of your city operations.</p>
            </div>
            
            <div className="flex items-center space-x-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
               <div className="flex flex-col items-center px-4 py-2 border-r border-gray-50">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Growth</span>
                  <span className="text-emerald-500 font-black">+12.5%</span>
               </div>
               <div className="flex flex-col items-center px-4 py-2">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Orders</span>
                  <span className="text-[#020617] font-black">2,481</span>
               </div>
            </div>
          </motion.header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'Orders' ? (
                <OrdersTable />
              ) : (
                <div className="bg-white rounded-[3rem] p-24 border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-8 border border-gray-50">
                    <span className="text-5xl font-black tracking-tighter italic">C.D</span>
                  </div>
                  <h2 className="text-3xl font-black text-[#020617] mb-4">{activeTab} Interface</h2>
                  <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
                    This module is currently in beta. Our team is finalizing the architecture for this view.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminView;
