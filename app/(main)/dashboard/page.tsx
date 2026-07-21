'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'motion/react';
import { ArrowLeft, HeartPulse, Plane, ShoppingBag, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const { user, org } = useAppStore();
  if (!user) return null;

  const quickServices = [
    { name: 'سلامت و درمان', icon: HeartPulse, color: 'text-red-600', bg: 'bg-red-100' },
    { name: 'گردشگری', icon: Plane, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'فروشگاه', icon: ShoppingBag, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'پزشک', icon: Stethoscope, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Greeting */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-slate-800 leading-tight">سامانه کانون بازنشستگان</h1>
          <p className="text-xs text-slate-500">مدیریت خدمات رفاهی و اجتماعی</p>
        </div>
        <div className="text-left flex items-center gap-3">
          <div className="text-left hidden sm:block">
            <p className="text-sm font-semibold">{user.firstName} {user.lastName}</p>
            <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded mt-1">عضویت {user.level} • {org.name.replace('کانون بازنشستگان ', '')}</p>
          </div>
          <Image 
            src={user.avatar} 
            alt="Profile" 
            width={48} 
            height={48} 
            className="rounded-full border-2 border-slate-200 bg-slate-100 p-0.5 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Digital Card Summary */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden border border-blue-600"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
        <div className="flex justify-between items-start mb-6 relative z-10">
          <span className="text-xs font-medium opacity-80">کارت هوشمند عضویت</span>
          <div className="w-10 h-6 bg-yellow-500/30 rounded border border-yellow-400/50 flex items-center justify-center text-[8px] text-yellow-100">{user.level}</div>
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-lg p-1">
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                 <div className="grid grid-cols-3 gap-1">
                  <div className="w-2 h-2 bg-slate-800"></div><div className="w-2 h-2 bg-slate-800"></div><div className="w-2 h-2 bg-slate-800"></div>
                  <div className="w-2 h-2 bg-slate-800"></div><div className="w-2 h-2 bg-slate-200"></div><div className="w-2 h-2 bg-slate-800"></div>
                  <div className="w-2 h-2 bg-slate-800"></div><div className="w-2 h-2 bg-slate-800"></div><div className="w-2 h-2 bg-slate-800"></div>
                 </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold leading-none">{user.firstName} {user.lastName}</p>
              <p className="text-xs opacity-70">کد ملی: {user.nationalId}</p>
              <p className="text-xs opacity-70 italic font-mono">کد عضویت: {user.membershipCode}</p>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10 flex justify-between items-end">
            <div className="text-[10px] uppercase tracking-widest opacity-60">اعتبار تا: ۱۴۰۴/۱۲/۲۹</div>
            <Link href="/card" className="flex items-center text-xs font-bold text-blue-200 hover:text-white transition-colors">
              مشاهده کامل کارت <ArrowLeft size={14} className="mr-1" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Wallet Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between"
      >
        <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>کیف پول و امتیاز
        </h3>
        <div className="flex justify-between items-center px-2 mb-4">
          <div className="text-center">
            <p className="text-[10px] text-slate-400 mb-1">موجودی نقدی</p>
            <p className="text-xl font-black text-slate-800">{user.walletBalance.toLocaleString()} <span className="text-[10px] font-normal opacity-50">تومان</span></p>
          </div>
          <div className="w-px h-10 bg-slate-100"></div>
          <div className="text-center">
            <p className="text-[10px] text-slate-400 mb-1">امتیاز کانون</p>
            <p className="text-xl font-black text-blue-600">{user.points} <span className="text-[10px] font-normal opacity-50">امتیاز</span></p>
          </div>
        </div>
        <Link href="/wallet" className="w-full text-center block py-2.5 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold border border-slate-200">مشاهده جزئیات تراکنش‌ها</Link>
      </motion.div>

      {/* Quick Services */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-slate-800 text-sm">خدمات رفاهی فعال</h3>
          <Link href="/services" className={`text-xs ${org.primaryText} font-medium`}>همه خدمات</Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {quickServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link key={idx} href="/services" className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 text-center flex flex-col items-center gap-2 group hover:bg-slate-50 transition-colors">
                <div className={`w-12 h-12 ${service.bg} ${service.color} rounded-xl flex items-center justify-center text-xl`}>
                  <Icon size={24} />
                </div>
                <span className="text-[10px] font-bold text-slate-700">{service.name}</span>
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* Latest News / Announcements */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="pb-4">
        <h3 className="font-bold text-slate-800 text-sm mb-3">آخرین اطلاعیه‌ها</h3>
        <div className="space-y-3">
          <Link href="/news" className="p-3 bg-red-50 border-r-4 border-red-500 rounded-lg flex flex-col group hover:bg-red-100/50 transition-colors">
            <p className="text-xs font-bold text-red-800 mb-1">تکمیلی درمان</p>
            <p className="text-[10px] text-red-700 leading-relaxed">تمدید مهلت ثبت‌نام بیمه تکمیلی تا پایان هفته...</p>
          </Link>
          <Link href="/news" className="p-3 bg-blue-50 border-r-4 border-blue-500 rounded-lg flex flex-col group hover:bg-blue-100/50 transition-colors">
            <p className="text-xs font-bold text-blue-800 mb-1">سفر مشهد مقدس</p>
            <p className="text-[10px] text-blue-700 leading-relaxed">آغاز ثبت‌نام تورهای سیاحتی ویژه بازنشستگان نفت...</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
