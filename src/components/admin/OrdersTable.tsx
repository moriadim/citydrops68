"use client";

import React, { useState } from 'react';
import { MoreHorizontal, Filter, Download, MoreVertical, Eye } from 'lucide-react';

const initialOrders = [
  { id: '#ORD-9281', customer: 'John Doe', category: 'Restaurants', price: '$42.50', status: 'Pending', time: '2 mins ago' },
  { id: '#ORD-9282', customer: 'Sarah Miller', category: 'Supermarkets', price: '$124.20', status: 'Preparing', time: '10 mins ago' },
  { id: '#ORD-9283', customer: 'Frank Wright', category: 'Pharmacies', price: '$18.00', status: 'Out for Delivery', time: '15 mins ago' },
  { id: '#ORD-9284', customer: 'Elena Gilbert', category: 'Custom Orders', price: '$55.00', status: 'Pending', time: '18 mins ago' },
  { id: '#ORD-9285', customer: 'Mike Ross', category: 'Restaurants', price: '$31.40', status: 'Preparing', time: '22 mins ago' },
];

const OrdersTable = () => {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id: string) => {
    setOrders(orders.map(order => {
      if (order.id === id) {
        const statuses: any = {
          'Pending': 'Preparing',
          'Preparing': 'Out for Delivery',
          'Out for Delivery': 'Pending'
        };
        return { ...order, status: statuses[order.status] || order.status };
      }
      return order;
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Preparing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Out for Delivery': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-primary">Recent Orders</h3>
          <p className="text-sm text-gray-400">Total 542 orders this month</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Customer</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Amount</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-8 py-6 text-sm font-bold text-primary">{order.id}</td>
                <td className="px-8 py-6">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">{order.customer}</span>
                    <span className="text-[10px] text-gray-400 font-medium">{order.time}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    {order.category}
                  </span>
                </td>
                <td className="px-8 py-6 text-sm font-bold text-primary">{order.price}</td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => updateStatus(order.id)}
                      className="px-4 py-2 bg-primary/5 text-primary hover:bg-primary hover:text-white rounded-xl text-xs font-bold transition-all"
                    >
                      Update Status
                    </button>
                    <button className="p-2 text-gray-300 hover:text-primary transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-8 border-t border-gray-50 flex justify-center">
        <button className="text-secondary font-bold text-sm hover:underline flex items-center space-x-2">
          <span>View All Transaction History</span>
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
