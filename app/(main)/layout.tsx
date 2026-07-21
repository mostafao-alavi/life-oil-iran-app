'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import BottomNav from '@/components/BottomNav';
import TopBar from '@/components/TopBar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAppStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-16 md:pb-0">
      <TopBar />
      <main className="flex-1 w-full max-w-md mx-auto relative">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
