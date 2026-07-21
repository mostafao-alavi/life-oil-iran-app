'use client';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store-context';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchPage() {
  const { org } = useAppStore();
  
  const popularSearches = ['بیمارستان', 'هتل مشهد', 'فروشگاه رفاه', 'دندانپزشکی', 'وام'];

  return (
    <div className="p-4 bg-white min-h-screen">
      <h1 className="text-xl font-bold text-slate-900 mb-4">جستجو</h1>
      
      <div className="relative mb-6">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
        <input 
          type="text" 
          placeholder="جستجوی خدمات، اخبار یا مراکز..."
          className="w-full pl-4 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-100 outline-none shadow-sm transition-all"
          autoFocus
        />
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-bold text-slate-800 mb-3">جستجوهای پرطرفدار</h2>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((item, idx) => (
            <button 
              key={idx}
              className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm hover:bg-slate-100 transition-colors border border-slate-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold text-slate-800 mb-3">پیشنهادات برای شما</h2>
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <Link key={i} href={`/services/${i}`} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
              <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden relative">
                <Image src={`https://picsum.photos/seed/search${i}/100`} alt="Thumb" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm mb-1">مرکز جامع سلامت سینا</h4>
                <p className="text-xs text-slate-500">تهران، ونک • خدمات پزشکی</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
