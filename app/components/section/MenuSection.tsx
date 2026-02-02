import MenuCategory from '../menu/MenuCategory';
import { menuCategories } from '@/lib/data';
import { Icon } from '@iconify/react';

export default function MenuSection() {
    return (
        <section id="menu" className="relative">
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2">
                            <span className="h-6 w-px bg-[#FAA916]/70"></span>
                            <span className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">MENU</span>
                        </div>
                        <h2 className="mt-4 font-fraunces text-3xl font-normal tracking-tight text-white md:text-4xl">
                            The core experience.
                        </h2>
                        <p className="mt-3 max-w-2xl font-inter text-sm font-normal leading-relaxed text-white/60 md:text-base">
                            Categories shift with the market. Descriptions are intentionally brief—flavor speaks in the dining room.
                        </p>
                    </div>
                    <a href="#reserve" className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3 font-inter text-sm font-medium text-white/75 transition hover:bg-white/[0.05] hover:text-white md:inline-flex">
                        <span>Reserve a table</span>
                        <Icon icon="solar:arrow-right-linear" width="1.125rem" />
                    </a>
                </div>

                <div className="mt-12 grid gap-10 lg:gap-12">
                    {menuCategories.map((category, index) => (
                        <MenuCategory
                            key={category.id}
                            category={category}
                            imagePosition={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="font-inter text-sm font-normal text-white/55">
                            Ask about dietary accommodations. Menu evolves nightly.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
