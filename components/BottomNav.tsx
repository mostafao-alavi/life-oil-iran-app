'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Gift, CreditCard, User } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function BottomNav() {
  const pathname = usePathname();
  const { org } = useAppStore();

  const navItems = [
    { name: 'خانه', path: '/dashboard', icon: Home },
    { name: 'جستجو', path: '/search', icon: Search },
    { name: 'خدمات', path: '/services', icon: Gift },
    { name: 'کارت من', path: '/card', icon: CreditCard },
    { name: 'پروفایل', path: '/profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 md:max-w-md md:mx-auto pb-safe">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path || (pathname?.startsWith(item.path + '/') ?? false);
          
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`flex flex-col items-center justify-center space-y-1 w-12 ${isActive ? `${org.primaryText} font-bold` : 'text-slate-400'}`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px]">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
