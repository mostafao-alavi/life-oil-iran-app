'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'motion/react';
import { Calendar, FileText, BellRing, Info, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function NewsPage() {
  const { org } = useAppStore();

  const categories = [
    { name: 'همه', icon: BellRing },
    { name: 'اطلاعیه درمان', icon: FileText },
    { name: 'اخبار کانون', icon: Info },
    { name: 'رویدادها', icon: Calendar },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'آغاز ثبت نام تورهای مسافرتی ویژه پاییز',
      category: 'رویدادها',
      date: 'امروز، ۰۹:۳۰',
      image: 'https://picsum.photos/seed/news_travel/600/400',
      description: 'ثبت نام تورهای مسافرتی پاییزی با شرایط ویژه اقساطی برای اعضای محترم آغاز شد.'
    },
    {
      id: 2,
      title: 'اعلام فهرست جدید بیمارستان‌های طرف قرارداد',
      category: 'اطلاعیه درمان',
      date: 'دیروز، ۱۴:۱۵',
      image: 'https://picsum.photos/seed/news_hospital/600/400',
      description: 'با پیگیری‌های انجام شده، ۱۰ بیمارستان تخصصی جدید به فهرست مراکز طرف قرارداد اضافه گردید.'
    },
    {
      id: 3,
      title: 'واریز حقوق و مزایای آبان ماه',
      category: 'اخبار کانون',
      date: '۳ روز پیش',
      image: null,
      description: 'حقوق و مزایای آبان ماه به همراه مابه‌التفاوت افزایش سالانه به حساب اعضا واریز شد.'
    }
  ];

  return (
    <div className="p-4 pb-24 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold text-slate-900 mb-6">اخبار و اطلاعیه‌ها</h1>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const isActive = idx === 0;
          return (
            <button 
              key={idx}
              className={`flex flex-col items-center justify-center gap-2 p-3 rounded-2xl border transition-colors ${
                isActive 
                ? `${org.primaryBg} text-white border-transparent shadow-md` 
                : 'bg-white text-slate-600 border-slate-200 shadow-sm hover:bg-slate-50'
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] font-bold">{cat.name}</span>
            </button>
          )
        })}
      </div>

      {/* News List */}
      <div className="space-y-4">
        {newsItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
          >
            {item.image ? (
              <div className="relative w-full h-40 bg-slate-100">
                <Image src={item.image} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                  {item.category}
                </div>
              </div>
            ) : (
              <div className="px-4 pt-4 flex justify-between items-center">
                <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600">
                  {item.category}
                </div>
              </div>
            )}
            
            <div className="p-4">
              <h3 className="font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-2 mb-3 leading-relaxed">{item.description}</p>
              
              <div className="flex justify-between items-center pt-3 border-t border-slate-50">
                <span className="text-xs text-slate-400 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {item.date}
                </span>
                <button className={`text-sm font-medium ${org.primaryText}`}>مشاهده</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
