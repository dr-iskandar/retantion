"use client";
import { Plus, Search, Filter, Mail, Phone, MoreHorizontal } from 'lucide-react';

const leads = [
  { id: 1, name: 'Budi Santoso', email: 'budi@example.com', phone: '08123456789', status: 'Qualified', priority: 'High', source: 'Web Chat' },
  { id: 2, name: 'Siti Aminah', email: 'siti@example.com', phone: '08198765432', status: 'New', priority: 'Medium', source: 'WhatsApp' },
  { id: 3, name: 'Andi Wijaya', email: 'andi@example.com', phone: '08122334455', status: 'Viewing', priority: 'Hot', source: 'Web Chat' },
];

export default function LeadsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Leads Management</h1>
          <p className="text-gray-500 font-medium">Track and engage with your potential buyers.</p>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all flex items-center space-x-2">
          <Plus size={20} />
          <span>New Lead</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
             <input 
              type="text" 
              placeholder="Search leads by name, email, or phone..." 
              className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
             />
          </div>
          <button className="px-4 py-2.5 rounded-xl border border-gray-100 bg-white font-bold text-gray-600 hover:bg-gray-50 flex items-center space-x-2 transition-all">
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Source</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50/30 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                          {lead.name.charAt(0)}
                       </div>
                       <div className="font-bold text-gray-900">{lead.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="space-y-1">
                       <div className="flex items-center text-sm text-gray-500 space-x-2">
                          <Mail size={14} />
                          <span>{lead.email}</span>
                       </div>
                       <div className="flex items-center text-sm text-gray-500 space-x-2">
                          <Phone size={14} />
                          <span>{lead.phone}</span>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600">
                       {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      lead.priority === 'Hot' ? 'bg-red-50 text-red-600' : 
                      lead.priority === 'High' ? 'bg-orange-50 text-orange-600' : 
                      'bg-gray-50 text-gray-600'
                    }`}>
                       {lead.priority}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                    {lead.source}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-gray-400 hover:text-gray-900 transition-colors">
                       <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
