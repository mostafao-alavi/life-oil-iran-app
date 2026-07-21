'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight, CreditCard, Gift, Ticket, History } from 'lucide-react';
import Link from 'next/link';

export default function WalletPage() {
  const { user, org } = useAppStore();
  if (!user) return null;

  return (
    <div className="p-4 flex flex-col min-h-screen pb-24">
      <h1 className="text-xl font-bold text-slate-900 mb-6">کیف پول و امتیازات</h1>

      {/* Main Balance Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden border border-blue-600"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="text-white/80 text-sm mb-2">موجودی قابل استفاده</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black">{user.walletBalance.toLocaleString()}</span>
            <span className="text-sm font-medium opacity-80">تومان</span>
          </div>
        </div>

        <div className="relative z-10 flex justify-between mt-8 pt-4 border-t border-white/20">
          <div className="text-center flex-1">
            <p className="text-xs text-white/70 mb-1">امتیاز باشگاه</p>
            <p className="font-bold">{user.points} <span className="text-xs font-normal">ستاره</span></p>
          </div>
          <div className="w-px bg-white/20"></div>
          <div className="text-center flex-1">
            <p className="text-xs text-white/70 mb-1">کد تخفیف</p>
            <p className="font-bold">۳ <span className="text-xs font-normal">عدد فعال</span></p>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4 mt-6"
      >
        <button className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
          <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
            <ArrowDownRight size={24} />
          </div>
          <span className="text-sm font-bold text-slate-800">افزایش موجودی</span>
        </button>
        <button className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
            <CreditCard size={24} />
          </div>
          <span className="text-sm font-bold text-slate-800">برداشت وجه</span>
        </button>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex-1"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-900">تراکنش‌های اخیر</h2>
          <button className={`text-sm ${org.primaryText} font-medium flex items-center`}>
            مشاهده همه
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          {[
            { id: 1, title: 'تخفیف بیمارستان پارس', type: 'in', amount: '۱۲۰,۰۰۰', date: 'امروز ۱۲:۳۰', icon: Gift, color: 'text-green-500' },
            { id: 2, title: 'خرید از فروشگاه رفاه', type: 'out', amount: '۴۵۰,۰۰۰', date: 'دیروز ۱۸:۴۵', icon: ArrowUpRight, color: 'text-red-500' },
            { id: 3, title: 'شارژ کیف پول', type: 'in', amount: '۱,۰۰۰,۰۰۰', date: '۲ روز پیش', icon: ArrowDownRight, color: 'text-green-500' },
          ].map((tx, idx) => {
            const Icon = tx.icon;
            return (
              <div key={tx.id} className="flex items-center justify-between p-4 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center ${tx.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-slate-900">{tx.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{tx.date}</p>
                  </div>
                </div>
                <div className={`font-bold text-sm ${tx.type === 'in' ? 'text-green-600' : 'text-slate-900'}`} dir="ltr">
                  {tx.type === 'in' ? '+' : '-'} {tx.amount}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  );
}
