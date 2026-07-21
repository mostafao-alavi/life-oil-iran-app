'use client';
import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, MapPin, Phone, Clock, Percent, Navigation, Map, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const { org } = useAppStore();
  const [activeTab, setActiveTab] = useState('همه');

  const categories = ['همه', 'سلامت', 'گردشگری', 'فروشگاه', 'رستوران', 'ورزشی'];

  // Mock services data
  const services = [
    {
      id: 1,
      title: 'بیمارستان تخصصی پارس',
      category: 'سلامت',
      image: 'https://picsum.photos/seed/hosp/400/250',
      address: 'تهران، بلوار کشاورز',
      discount: '۲۰٪ تا ۴۰٪',
      rating: 4.8
    },
    {
      id: 2,
      title: 'هتل ۵ ستاره پردیس کیش',
      category: 'گردشگری',
      image: 'https://picsum.photos/seed/hotel/400/250',
      address: 'جزیره کیش، میدان پردیس',
      discount: 'ویژه اعضا',
      rating: 4.5
    },
    {
      id: 3,
      title: 'فروشگاه زنجیره‌ای رفاه',
      category: 'فروشگاه',
      image: 'https://picsum.photos/seed/shop/400/250',
      address: 'سراسر کشور',
      discount: '۱۰٪ خرید مستقیم',
      rating: 4.2
    },
    {
      id: 4,
      title: 'مجموعه ورزشی انقلاب',
      category: 'ورزشی',
      image: 'https://picsum.photos/seed/gym/400/250',
      address: 'تهران، خیابان سئول',
      discount: '۳۰٪ تخفیف بلیط',
      rating: 4.9
    }
  ];

  const filteredServices = activeTab === 'همه' ? services : services.filter(s => s.category === activeTab);

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] bg-slate-50">
      {/* Header & Search */}
      <div className="bg-white p-4 sticky top-[65px] z-30 border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-900 mb-4">خدمات رفاهی و درمانی</h1>
        
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="جستجوی خدمت، مرکز یا شهر..."
              className="w-full pl-4 pr-10 py-3 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>
          <button className={`p-3 rounded-xl bg-slate-100 ${org.primaryText} flex items-center justify-center`}>
            <Map size={20} />
          </button>
        </div>

        {/* Categories Tab */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === cat 
                ? `${org.primaryBg} text-white shadow-sm` 
                : 'bg-slate-100 text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="p-4 space-y-4">
        {filteredServices.map((service, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            key={service.id}
          >
            <Link href={`/services/${service.id}`} className="block bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="relative h-40 w-full">
                <Image src={service.image} alt={service.title} fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                  {service.category}
                </div>
                <div className="absolute bottom-3 left-3 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-sm">
                  <Percent size={14} className="mr-1" />
                  {service.discount}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <MapPin size={16} className="mr-1.5 text-slate-400" />
                  <span className="truncate">{service.address}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} className="fill-current" />
                    <span className="text-sm font-bold">{service.rating}</span>
                  </div>
                  <button className={`text-sm font-medium ${org.primaryText}`}>مشاهده جزئیات</button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
