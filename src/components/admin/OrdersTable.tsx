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
      case 'Pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Preparing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Out for Delivery': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
      <div className="p-10 border-b border-gray-50 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-1">
             <h3 className="text-2xl font-black text-[#020617] tracking-tight">Active Deliveries</h3>
             <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-black tracking-tighter">LIVE</span>
          </div>
          <p className="text-sm text-gray-400 font-medium tracking-tight">Real-time tracking of all outgoing city shipments.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-2 text-gray-400 focus-within:border-emerald-500/20 focus-within:bg-white transition-all">
            <Search className="w-4 h-4 mr-2" />
            <input type="text" placeholder="Search orders..." className="bg-transparent border-none outline-none text-xs font-bold text-[#020617] w-48" />
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 border border-gray-100 rounded-2xl text-xs font-black text-gray-600 hover:bg-[#020617] hover:text-white transition-all">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-[#020617] text-white rounded-2xl text-xs font-black transition-all hover:bg-emerald-500 shadow-xl shadow-gray-200">
            <Download className="w-4 h-4" />
            <span>Reports</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50/30">
              <th className="px-10 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Shipment ID</th>
              <th className="px-10 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Merchant & Customer</th>
              <th className="px-10 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Net Value</th>
              <th className="px-10 py-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Live Status</th>
              <th className="px-10 py-6 text-right text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <AnimatePresence>
              {orders.map((order, index) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50/50 transition-colors group cursor-default"
                >
                  <td className="px-10 py-8">
                    <span className="text-sm font-black text-[#020617] tracking-tighter">{order.id}</span>
                  </td>
                  <td className="px-10 py-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shadow-sm transition-transform group-hover:scale-110">
                        <img src={order.avatar} alt={order.customer} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-[#020617] tracking-tight">{order.customer}</span>
                        <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">{order.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-[#020617]">{order.price}</span>
                      <span className="text-[10px] text-gray-400 font-bold tracking-tight">{order.time}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <div className="flex items-center justify-end space-x-3">
                      <button 
                        onClick={() => updateStatus(order.id)}
                        className="px-6 py-2 bg-gray-50 text-[#020617] hover:bg-[#020617] hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-gray-100"
                      >
                        Sync
                      </button>
                      <button className="p-3 text-gray-300 hover:text-[#020617] hover:bg-gray-100 rounded-xl transition-all">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      
      <div className="p-10 border-t border-gray-50 flex justify-center">
        <button className="text-[#020617] font-black text-xs uppercase tracking-[0.2em] hover:text-emerald-500 transition-colors flex items-center space-x-3 group">
          <span>Explore All Operations</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
