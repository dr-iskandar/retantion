"use client";
import { Plus, MoreHorizontal } from 'lucide-react';

const columns = [
  { title: 'New Leads', count: 5, color: 'bg-blue-500' },
  { title: 'Qualified', count: 3, color: 'bg-indigo-500' },
  { title: 'Viewing', count: 2, color: 'bg-orange-500' },
  { title: 'Negotiation', count: 1, color: 'bg-purple-500' },
  { title: 'Closed Won', count: 10, color: 'bg-green-500' },
];

export default function PipelinePage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Sales Pipeline</h1>
          <p className="text-gray-500 font-medium">Manage your deals through different stages.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-5 py-2.5 rounded-xl border border-gray-200 bg-white font-bold hover:bg-gray-50 transition-all">
            Filter
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all flex items-center space-x-2">
            <Plus size={20} />
            <span>New Stage</span>
          </button>
        </div>
      </div>

      <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
        {columns.map((column) => (
          <div key={column.title} className="flex-shrink-0 w-80 flex flex-col h-[calc(100vh-250px)]">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center space-x-2">
                 <div className={`w-2 h-2 rounded-full ${column.color}`}></div>
                 <h3 className="font-bold text-gray-700 uppercase tracking-wider text-xs">{column.title}</h3>
                 <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{column.count}</span>
              </div>
              <button className="text-gray-400 hover:text-gray-900">
                 <MoreHorizontal size={16} />
              </button>
            </div>
            
            <div className="flex-1 space-y-4 overflow-y-auto scrollbar-hide">
               {[1, 2].map((i) => (
                 <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing">
                    <div className="text-xs font-bold text-indigo-600 mb-2">HOT</div>
                    <div className="font-bold text-gray-900 mb-1">Luxury House BSD</div>
                    <div className="text-sm text-gray-500 mb-4">Rp 5.200.000.000</div>
                    <div className="flex items-center justify-between">
                       <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 border-2 border-white text-[10px] flex items-center justify-center font-bold">AS</div>
                       </div>
                       <div className="text-[10px] font-bold text-gray-400 uppercase">2 days left</div>
                    </div>
                 </div>
               ))}
               <button className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-100 text-gray-400 hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50/30 transition-all font-bold flex items-center justify-center space-x-2">
                  <Plus size={16} />
                  <span>Add Lead</span>
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
