'use client';
import { Bell } from 'lucide-react';
import { useAppStore } from '@/lib/store-context';
import Image from 'next/image';

export default function TopBar() {
  const { org, user } = useAppStore();

  return (
    <header className="sticky top-0 z-40 h-16 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm md:max-w-md md:mx-auto w-full">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl text-white font-bold ${org.primaryBg}`}>
          {org.logo}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-800 leading-tight">سامانه {org.name.replace('کانون بازنشستگان ', '')}</span>
          <span className="text-[10px] text-slate-500">مدیریت خدمات رفاهی</span>
        </div>
      </div>
      
      <button className="relative p-2 rounded-full hover:bg-slate-50 transition-colors">
        <Bell size={20} className="text-slate-600" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
      </button>
    </header>
  );
}
