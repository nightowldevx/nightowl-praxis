import Image from 'next/image';
import MenuItem from './MenuItem';
import type { MenuCategory as MenuCategoryType } from '@/types';

interface MenuCategoryProps {
    category: MenuCategoryType;
    imagePosition: 'left' | 'right';
}

export default function MenuCategory({ category, imagePosition }: MenuCategoryProps) {
    return (
        <div className={`grid gap-7 border-t border-white/10 pt-10 md:grid-cols-12 md:items-start ${imagePosition === 'right' ? '' : ''}`}>
            <div className={`md:col-span-5 ${imagePosition === 'right' ? 'md:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                    <Image
                        src={category.image}
                        alt={category.imageAlt}
                        width={1800}
                        height={1200}
                        className="h-64 w-full object-cover opacity-95 transition duration-700 hover:opacity-100 md:h-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1E]/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between">
                            <div className="font-inter text-xs font-medium tracking-[0.24em] text-[#FAA916]">{category.title}</div>
                            <div className="hidden items-center gap-2 text-white/55 sm:flex">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`md:col-span-7 ${imagePosition === 'right' ? 'md:order-1' : ''}`}>
                <div className="grid gap-6">
                    {category.items.map((item, index) => (
                        <div key={index}>
                            <MenuItem item={item} />
                            {index < category.items.length - 1 && <div className="mt-6 h-px w-full bg-white/10"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
