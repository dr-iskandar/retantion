"use client";
import { 
  Users, 
  Home, 
  TrendingUp, 
  Clock 
} from 'lucide-react';

const stats = [
  { label: 'Total Leads', value: '128', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Hot Prospects', value: '12', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Active Listings', value: '45', icon: Home, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Pending Response', value: '8', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
        <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all">
          + Add New Lead
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">+12%</span>
            </div>
            <div className="text-3xl font-extrabold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
           <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
           <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold">JD</div>
                   <div>
                      <div className="text-sm font-bold text-gray-900">John Doe interested in BSD Luxury House</div>
                      <div className="text-xs text-gray-500">2 hours ago • WhatsApp</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
        
        <div className="bg-indigo-600 p-8 rounded-3xl shadow-xl shadow-indigo-200 text-white relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">AI Sales Copilot Tip</h3>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                 You have 5 hot leads that haven't been contacted in 12 hours. 
                 Would you like me to generate personalized follow-up drafts for them?
              </p>
              <button className="px-6 py-3 rounded-2xl bg-white text-indigo-600 font-bold hover:bg-indigo-50 transition-all">
                 Review Hot Leads
              </button>
           </div>
           <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
