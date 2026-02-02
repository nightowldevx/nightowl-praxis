import Image from 'next/image';
import { featuredDishes } from '@/lib/data';

export default function FeaturedDishes() {
    const largeDish = featuredDishes.find(d => d.size === 'large');
    const smallDishes = featuredDishes.filter(d => d.size === 'small');

    return (
        <section id="featured" className="relative">
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2">
                            <span className="h-6 w-px bg-[#FAA916]/70"></span>
                            <span className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">FEATURED</span>
                        </div>
                        <h2 className="mt-4 font-fraunces text-3xl font-normal tracking-tight text-white md:text-4xl">
                            Texture. Silence. Light.
                        </h2>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-7">
                    {largeDish && (
                        <div className="lg:col-span-7">
                            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                                <Image
                                    src={largeDish.image}
                                    alt={largeDish.imageAlt}
                                    width={2200}
                                    height={1600}
                                    className="h-80 w-full object-cover opacity-95 transition duration-700 group-hover:opacity-100 md:h-[26rem]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1E]/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                    <div className="font-inter text-xs font-medium tracking-[0.22em] text-[#FAA916]">{largeDish.label}</div>
                                    <div className="mt-2 font-inter text-sm font-normal text-white/70">{largeDish.description}</div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid gap-6 lg:col-span-5">
                        {smallDishes.map((dish) => (
                            <div key={dish.id} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                                <Image
                                    src={dish.image}
                                    alt={dish.imageAlt}
                                    width={2200}
                                    height={1600}
                                    className="h-64 w-full object-cover opacity-95 transition duration-700 group-hover:opacity-100 md:h-72"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1E]/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="font-inter text-xs font-medium tracking-[0.22em] text-[#FAA916]">{dish.label}</div>
                                    <div className="mt-2 font-inter text-sm font-normal text-white/70">{dish.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex items-center gap-3 text-white/45">
                    <span className="h-px flex-1 bg-white/10"></span>
                    <span className="font-inter text-xs font-normal tracking-[0.22em]">EDITORIAL MOMENTS</span>
                    <span className="h-px flex-1 bg-white/10"></span>
                </div>
            </div>
        </section>
    );
}
