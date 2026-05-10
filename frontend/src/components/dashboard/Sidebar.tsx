"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Home, 
  Kanban, 
  MessageSquare, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations('Dashboard');

  const menuItems = [
    { icon: LayoutDashboard, label: t('title'), href: '/dashboard' },
    { icon: MessageSquare, label: 'Inbox', href: '/dashboard/inbox' },
    { icon: Users, label: t('leads'), href: '/dashboard/leads' },
    { icon: Home, label: t('properties'), href: '/dashboard/properties' },
    { icon: Kanban, label: t('pipeline'), href: '/dashboard/pipeline' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="text-2xl font-bold gradient-text">Retantion</div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname.includes(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600 font-semibold shadow-sm' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button className="flex items-center space-x-3 px-4 py-3 w-full rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
