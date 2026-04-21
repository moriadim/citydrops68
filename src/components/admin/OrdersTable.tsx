"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreHorizontal, Filter, Download, MoreVertical, Search, ArrowUpRight } from 'lucide-react';

const initialOrders = [
  { id: 'CD-9281', customer: 'John Wick', category: 'Premium Dining', price: '$42.50', status: 'Pending', time: '2 mins ago', avatar: 'https://i.pravatar.cc/100?u=1' },
  { id: 'CD-9282', customer: 'Sarah Connor', category: 'Fresh Grocery', price: '$124.20', status: 'Preparing', time: '10 mins ago', avatar: 'https://i.pravatar.cc/100?u=2' },
  { id: 'CD-9283', customer: 'Frank Castle', category: 'Pharmacy', price: '$18.00', status: 'Out for Delivery', time: '15 mins ago', avatar: 'https://i.pravatar.cc/100?u=3' },
  { id: 'CD-9284', customer: 'Elena Fisher', category: 'Hyper-Local', price: '$55.00', status: 'Pending', time: '18 mins ago', avatar: 'https://i.pravatar.cc/100?u=4' },
  { id: 'CD-9285', customer: 'Mike Ehrmantraut', category: 'Premium Dining', price: '$31.40', status: 'Preparing', time: '22 mins ago', avatar: 'https://i.pravatar.cc/100?u=5' },
];

const OrdersTable = () => {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id: string) => {
    setOrders(orders.map(order => {
      if (order.id === id) {
        const statuses = {
          'Pending': 'Preparing',
          'Preparing': 'Out for Delivery',
          'Out for Delivery': 'Pending'
        } as const;
        return { ...order, status: statuses[order.status as keyof typeof statuses] || order.status };
      }
      return order;
    }));
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20';
      case 'Preparing': return 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20';
      case 'Out for Delivery': return 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20';
      default: return 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-white/5';
    }
  };

  return (
    <div className="bg-white dark:bg-white/5 rounded-[3.5rem] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-500">
      <div className="p-12 border-b border-gray-50 dark:border-white/5 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
             <h3 className="text-3xl font-black text-[#020617] dark:text-white tracking-tight">Active Shipments</h3>
             <span className="px-3 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-black tracking-widest shadow-lg shadow-emerald-500/20">LIVE</span>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500 font-bold tracking-tight">Synchronized logistics for New York City North-Bound fleet.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl px-6 py-3 text-gray-400 focus-within:border-emerald-500/20 focus-within:bg-white dark:focus-within:bg-white/10 transition-all">
            <Search className="w-5 h-5 mr-3" />
            <input type="text" placeholder="Filter IDs..." className="bg-transparent border-none outline-none text-xs font-black text-[#020617] dark:text-white w-48 placeholder:text-gray-600" />
          </div>
          <button className="flex items-center space-x-3 px-8 py-3 border border-gray-100 dark:border-white/5 rounded-2xl text-xs font-black text-gray-600 dark:text-gray-400 hover:bg-[#020617] hover:text-white transition-all">
            <Filter className="w-5 h-5" />
            <span>Options</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-4 bg-[#020617] dark:bg-emerald-500 text-white rounded-2xl text-[10px] font-black tracking-[0.1em] uppercase transition-all hover:bg-emerald-500 dark:hover:bg-emerald-400 shadow-2xl">
            <Download className="w-5 h-5" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50/50 dark:bg-white/5">
              <th className="px-12 py-8 text-left text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.3em]">Identity</th>
              <th className="px-12 py-8 text-left text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.3em]">Logistics Chain</th>
              <th className="px-12 py-8 text-left text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.3em]">Valuation</th>
              <th className="px-12 py-8 text-left text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.3em]">Fleet Status</th>
              <th className="px-12 py-8 text-right text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-[0.3em]">Console</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-white/5">
            <AnimatePresence>
              {orders.map((order, index) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-all group cursor-default"
                >
                  <td className="px-12 py-10">
                    <span className="text-sm font-black text-[#020617] dark:text-white tracking-widest">{order.id}</span>
                  </td>
                  <td className="px-12 py-10">
                    <div className="flex items-center space-x-5">
                      <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 overflow-hidden border-2 border-transparent group-hover:border-emerald-500 transition-all shadow-sm">
                        <img src={order.avatar} alt={order.customer} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-[#020617] dark:text-white tracking-tight">{order.customer}</span>
                        <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">{order.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-12 py-10">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-[#020617] dark:text-white">{order.price}</span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-600 font-black uppercase">{order.time}</span>
                    </div>
                  </td>
                  <td className="px-12 py-10">
                    <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] border transition-all ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-12 py-10 text-right">
                    <div className="flex items-center justify-end space-x-4">
                      <button 
                        onClick={() => updateStatus(order.id)}
                        className="px-8 py-3 bg-gray-50 dark:bg-white/5 text-[#020617] dark:text-white hover:bg-[#020617] dark:hover:bg-emerald-500 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-gray-100 dark:border-white/5 shadow-sm"
                      >
                        Sync Status
                      </button>
                      <button className="p-3 text-gray-300 dark:text-gray-700 hover:text-[#020617] dark:hover:text-white transition-all">
                        <MoreVertical className="w-6 h-6" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      
      <div className="p-12 border-t border-gray-50 dark:border-white/5 flex justify-center bg-gray-50/30 dark:bg-white/5">
        <button className="text-[#020617] dark:text-white font-black text-xs uppercase tracking-[0.3em] hover:text-emerald-500 transition-colors flex items-center space-x-4 group">
          <span>View Detailed Sector Logs</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
