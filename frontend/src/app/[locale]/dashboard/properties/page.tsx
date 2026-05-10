"use client";
import { Plus, Search, Filter, MoreVertical } from 'lucide-react';

const properties = [
  { id: 1, title: 'Luxury House BSD', type: 'House', location: 'BSD City', price: 'Rp 5.2M', status: 'Available', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Gading Serpong Apartment', type: 'Apartment', location: 'Gading Serpong', price: 'Rp 1.5M', status: 'Available', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Modern Villa Jimbaran', type: 'Villa', location: 'Bali', price: 'Rp 8.9M', status: 'Sold', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400' },
];

export default function PropertiesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Property Catalog</h1>
          <p className="text-gray-500 font-medium">Manage your agency's property listings.</p>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all flex items-center space-x-2">
          <Plus size={20} />
          <span>Add Property</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
           <input 
            type="text" 
            placeholder="Search properties by name or location..." 
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
           />
        </div>
        <button className="px-6 py-3 rounded-2xl border border-gray-100 bg-white font-bold text-gray-600 hover:bg-gray-50 flex items-center space-x-2 transition-all">
          <Filter size={20} />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((prop) => (
          <div key={prop.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all group">
            <div className="relative h-56">
               <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${prop.status === 'Available' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                  {prop.status}
               </div>
            </div>
            <div className="p-6">
               <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{prop.title}</h3>
                  <button className="text-gray-400 hover:text-gray-900">
                    <MoreVertical size={18} />
                  </button>
               </div>
               <div className="text-sm text-gray-500 font-medium mb-4">{prop.location} • {prop.type}</div>
               <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-50">
                  <div className="text-2xl font-extrabold text-indigo-600">{prop.price}</div>
                  <button className="text-sm font-bold text-indigo-600 hover:underline">View Details</button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
