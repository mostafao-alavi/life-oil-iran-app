'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, Clock, Navigation, CheckCircle2, Percent, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ServiceDetails() {
  const { org } = useAppStore();
  const params = useParams();
  
  // Mock fetching service details
  const service = {
    id: params?.id || '1',
    title: 'بیمارستان تخصصی پارس',
    category: 'سلامت',
    image: 'https://picsum.photos/seed/hosp/800/500',
    address: 'تهران، بلوار کشاورز، پلاک ۱۲۳',
    phone: '۰۲۱-۸۸۹۹۷۷۶۶',
    hours: 'شبانه روزی',
    discount: '۲۰٪ تا ۴۰٪ تخفیف',
    discountCode: 'PRS-9021',
    description: 'بیمارستان تخصصی و فوق تخصصی پارس با کادری مجرب و تجهیزات پیشرفته آماده ارائه خدمات به اعضای محترم کانون بازنشستگان می‌باشد. خدمات شامل ویزیت پزشکان متخصص، بستری، جراحی، آزمایشگاه و تصویربرداری است.',
    features: ['پذیرش با کارت دیجیتال', 'پارکینگ اختصاصی', 'طرف قرارداد با بیمه تکمیلی']
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-72">
        <Image src={service.image} alt={service.title} fill className="object-cover" referrerPolicy="no-referrer" />
        <Link 
          href="/services" 
          className="absolute top-4 right-4 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 shadow-sm"
        >
          <ArrowRight size={24} />
        </Link>
        <button className="absolute top-4 left-4 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 shadow-sm">
          <Share2 size={20} />
        </button>
      </div>

      <div className="px-5 py-6 -mt-6 relative bg-white rounded-t-3xl shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
        {/* Title & Category */}
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-2xl font-black text-slate-900">{service.title}</h1>
        </div>
        <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 mb-6">
          دسته: {service.category}
        </div>

        {/* Action Row */}
        <div className="flex gap-3 mb-8">
          <button className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl ${org.primaryBg} text-white font-bold shadow-md`}>
            <Navigation size={20} />
            مسیریابی
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-bold shadow-md">
            <Phone size={20} />
            تماس
          </button>
        </div>

        {/* Info List */}
        <div className="space-y-4 mb-8">
          <div className="flex gap-3">
            <MapPin className="text-slate-400 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-sm font-bold text-slate-900 mb-1">آدرس</p>
              <p className="text-sm text-slate-600 leading-relaxed">{service.address}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="text-slate-400 mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="text-sm font-bold text-slate-900 mb-1">ساعت کاری</p>
              <p className="text-sm text-slate-600 leading-relaxed">{service.hours}</p>
            </div>
          </div>
        </div>

        {/* Discount Card */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-xl text-orange-600 flex items-center justify-center">
              <Percent size={24} />
            </div>
            <div>
              <p className="font-bold text-orange-900">تخفیف ویژه اعضا</p>
              <p className="text-sm text-orange-700">{service.discount}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="font-bold text-slate-900 mb-3 text-lg">توضیحات</h3>
          <p className="text-slate-600 text-sm leading-loose text-justify">{service.description}</p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold text-slate-900 mb-3 text-lg">ویژگی‌ها</h3>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
