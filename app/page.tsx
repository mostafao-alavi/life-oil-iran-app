'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store-context';

export default function RootPage() {
  const { user } = useAppStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    } else {
      router.replace('/login');
    }
  }, [user, router]);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="animate-pulse">در حال بارگذاری...</div>
    </div>
  );
}
