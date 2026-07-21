'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { motion } from 'motion/react';
import { Building2, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const { login } = useAppStore();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && code) {
      login(phone, code);
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center border border-slate-200"
      >
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck size={40} />
        </div>
        <h1 className="text-2xl font-black text-slate-900 mb-2">سامانه یکپارچه بازنشستگان</h1>
        <p className="text-slate-500 mb-8 text-sm">برای ورود یا ثبت‌نام، اطلاعات خود را وارد کنید.</p>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="text-right">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">شماره موبایل</label>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all text-left"
              placeholder="09123456789"
              dir="ltr"
              required
            />
          </div>
          <div className="text-right">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">کد عضویت کانون</label>
            <input 
              type="text" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all text-left"
              placeholder="مثال: 12345"
              dir="ltr"
              required
            />
            <div className="flex items-center gap-2 mt-3 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl">
              <Building2 size={16} className="text-slate-400" />
              <p>شروع کد با ۱ (صنعت نفت)، ۲ (آموزش و پرورش)</p>
            </div>
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 px-4 rounded-2xl hover:bg-blue-700 transition-colors mt-6 shadow-lg shadow-blue-200"
          >
            تایید و ادامه
          </button>
        </form>
      </motion.div>
    </div>
  );
}
