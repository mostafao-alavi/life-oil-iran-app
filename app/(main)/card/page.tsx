'use client';
import { useAppStore } from '@/lib/store-context';
import { motion } from 'motion/react';
import { QrCode, ShieldCheck, Download, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function CardPage() {
  const { user, org } = useAppStore();
  if (!user) return null;

  return (
    <div className="p-4 flex flex-col items-center min-h-[calc(100vh-80px)]">
      <h1 className="text-xl font-bold text-slate-900 w-full mb-6">کارت عضویت دیجیتال</h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        {/* The Card */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden aspect-[1/1.5] flex flex-col justify-between border border-blue-600">
          {/* Card Decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
          
          {/* Header */}
          <div className="relative z-10 flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[10px] text-white/80">کارت شناسایی</span>
              <span className="text-sm font-bold">{org.name}</span>
            </div>
            <div className="w-10 h-6 bg-yellow-500/30 rounded border border-yellow-400/50 flex items-center justify-center text-[10px] text-yellow-100 font-bold">
              {user.level}
            </div>
          </div>

          {/* User Info & Photo */}
          <div className="relative z-10 flex flex-col items-center mt-6">
            <div className="relative">
              <Image 
                src={user.avatar} 
                alt={user.firstName} 
                width={96} 
                height={96} 
                className="rounded-2xl border-4 border-white/20 shadow-lg object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-3 -right-3 bg-white text-green-500 rounded-full p-1 shadow-md">
                <ShieldCheck size={20} />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-4 tracking-tight">{user.firstName} {user.lastName}</h2>
            <p className="text-white/80 text-sm mt-1">کد ملی: {user.nationalId}</p>
          </div>

          {/* QR Code and Number */}
          <div className="relative z-10 bg-white rounded-2xl p-4 mt-8 shadow-inner flex flex-col items-center gap-3">
            <div className="p-2 border-2 border-slate-200 rounded-xl bg-slate-50">
              <QrCode size={100} className="text-slate-900" />
            </div>
            <div className="w-full flex justify-between items-center text-slate-900">
              <span className="text-xs text-slate-500 font-medium">شماره عضویت:</span>
              <span className="font-mono font-bold tracking-widest text-lg">{user.membershipCode}</span>
            </div>
          </div>
          
          {/* Footer */}
          <div className="relative z-10 mt-6 flex justify-between text-xs text-white/70">
            <span>تاریخ صدور: ۱۴۰۲/۰۵/۱۰</span>
            <span>اعتبار: ۱۴۰۴/۱۲/۲۹</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl shadow-sm font-medium hover:bg-slate-50 transition-colors">
            <Download size={20} />
            ذخیره تصویر
          </button>
          <button className={`flex items-center gap-2 ${org.primaryBg} text-white px-6 py-3 rounded-xl shadow-md font-medium transition-colors opacity-90 hover:opacity-100`}>
            <Share2 size={20} />
            اشتراک‌گذاری
          </button>
        </div>
      </motion.div>
    </div>
  );
}
