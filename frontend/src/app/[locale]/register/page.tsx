"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function RegisterPage() {
  const t = useTranslations('Index');
  const router = useRouter();
  const [formData, setFormData] = useState({
    agencyName: '',
    slug: '',
    fullName: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8010/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenant_in: { name: formData.agencyName, slug: formData.slug },
          user_in: { 
            email: formData.email, 
            password: formData.password, 
            full_name: formData.fullName,
            tenant_id: 0 // Backend will override this in the joint endpoint
          }
        })
      });
      if (response.ok) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="card-premium w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Agency Workspace</h2>
        <p className="text-gray-500 mb-8 font-medium">Start managing your property leads better today.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Agency Name</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
              placeholder="e.g. Ray White BSD"
              value={formData.agencyName}
              onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Workspace Slug (URL)</label>
            <div className="flex items-center bg-gray-50 rounded-xl border border-gray-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
               <span className="pl-4 text-gray-400 font-medium">retantion.com/</span>
               <input 
                type="text" 
                required
                className="flex-1 px-1 py-3 bg-transparent outline-none"
                placeholder="ray-white-bsd"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/ /g, '-') })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Owner Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                  placeholder="owner@agency.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
             </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          
          <button type="submit" className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all mt-4 transform hover:-translate-y-1">
            Create Agency Account
          </button>
        </form>
      </div>
    </div>
  );
}
