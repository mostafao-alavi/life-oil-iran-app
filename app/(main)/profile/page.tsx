'use client';
import { useAppStore } from '@/lib/store-context';
import { motion } from 'motion/react';
import { User as UserIcon, Settings, LogOut, ChevronLeft, Shield, Bell, HelpCircle, FileText } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { user, org, logout } = useAppStore();
  const router = useRouter();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  const menuItems = [
    { icon: UserIcon, label: 'ویرایش اطلاعات کاربری', href: '#' },
    { icon: Shield, label: 'تغییر رمز عبور', href: '#' },
    { icon: Bell, label: 'تنظیمات اعلانات', href: '#' },
    { icon: FileText, label: 'قوانین و مقررات', href: '#' },
    { icon: HelpCircle, label: 'پشتیبانی و راهنما', href: '#' },
  ];

  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold text-slate-900 mb-6">پروفایل کاربری</h1>

      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 text-center relative overflow-hidden"
      >
        <div className={`absolute top-0 left-0 w-full h-24 ${org.primaryBg} opacity-10`}></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-4">
            <Image 
              src={user.avatar} 
              alt="Profile" 
              width={100} 
              height={100} 
              className="rounded-full border-4 border-white shadow-md"
              referrerPolicy="no-referrer"
            />
            <button className={`absolute bottom-0 right-0 p-2 rounded-full ${org.primaryBg} text-white shadow-lg`}>
              <Settings size={18} />
            </button>
          </div>
          <h2 className="text-xl font-bold text-slate-900">{user.firstName} {user.lastName}</h2>
          <p className="text-slate-500 text-sm mt-1">{user.city} - کانون {org.name}</p>
        </div>
      </motion.div>

      {/* Info Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-3 mt-4"
      >
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
          <p className="text-xs text-slate-500 mb-1">کد ملی</p>
          <p className="font-bold text-slate-900">{user.nationalId}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
          <p className="text-xs text-slate-500 mb-1">شماره موبایل</p>
          <p className="font-bold text-slate-900" dir="ltr">{user.phone}</p>
        </div>
      </motion.div>

      {/* Menu List */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="mt-6 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button 
              key={index}
              className="w-full flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${org.lightBg} ${org.primaryText} flex items-center justify-center`}>
                  <Icon size={20} />
                </div>
                <span className="font-medium text-slate-800 text-sm">{item.label}</span>
              </div>
              <ChevronLeft size={20} className="text-slate-400" />
            </button>
          );
        })}
      </motion.div>

      {/* Logout */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-red-500 font-bold bg-red-50 hover:bg-red-100 transition-colors"
        >
          <LogOut size={20} />
          خروج از حساب کاربری
        </button>
      </motion.div>
    </div>
  );
}
