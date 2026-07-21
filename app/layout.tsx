import type { ReactNode } from 'react';
import { Vazirmatn } from 'next/font/google';
import { AppProvider } from '@/components/providers';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const runtime = 'edge';

const vazir = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazir' });


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: 'پلتفرم جامع بازنشستگان',
  description: 'اپلیکیشن یکپارچه خدمات بازنشستگان',
  manifest: '/manifest.json',
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="font-vazir bg-[#F8FAFC] text-slate-900 suppressHydrationWarning" suppressHydrationWarning>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
