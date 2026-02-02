import Image from 'next/image';
import { Icon } from '@iconify/react';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden pt-28">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/herobg/herobg.png"
                    alt="Cinematic upscale restaurant interior with candlelight and shallow depth of field"
                    fill
                    className="object-cover opacity-100"
                    priority
                />
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1E]/50 via-[#1B1B1E]/50 to-[#1B1B1E]/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1E]/50 via-[#1B1B1E]/50 to-[#1B1B1E]/50"></div>
            </div>

            <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-20 text-center md:pb-20">
                <RevealOnScroll delay={300} duration={1200} className="w-full">
                    <div className="flex w-full flex-col items-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FAA916]"></span>
                            <span className="font-inter text-xs font-medium tracking-[0.18em] text-white/75">FINE DINING EXPERIENCE</span>
                        </div>

                        <h1 className="mt-7 font-fraunces text-5xl font-normal tracking-tight text-white md:text-6xl lg:text-7xl">
                            Taste the <span className="text-[#FAA916]">Ethereal</span>
                        </h1>

                        <p className="mt-5 max-w-2xl font-inter text-base font-normal leading-relaxed text-white/70 md:text-lg">
                            An understated room built around patience: technique you can taste, sourcing you can trust, and a pace that leaves space for conversation.
                            Praxis is a study in quiet confidence—measured heat, careful acid, and the humility to stop before excess.
                        </p>

                        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                            <a href="#menu" className="group inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-inter text-sm font-medium text-white/85 transition hover:border-white/15 hover:bg-white/[0.06]">
                                <span>View Menu</span>
                                <Icon className="ml-2 text-white/70 transition group-hover:text-white/90" icon="solar:arrow-right-linear" width="1.125rem" />
                            </a>
                            <a href="#reserve" className="group inline-flex items-center justify-center rounded-2xl border border-[#FAA916]/45 bg-[#FAA916]/10 px-6 py-3 font-inter text-sm font-medium text-[#FAA916] transition hover:border-[#FAA916]/70 hover:bg-[#FAA916]/15">
                                <span>Reserve Table</span>
                                <Icon className="ml-2 text-[#FAA916]/90 transition group-hover:text-[#FAA916]" icon="solar:calendar-linear" width="1.125rem" />
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-white/55">
                            <div className="flex items-center gap-2">
                                <Icon icon="solar:map-point-linear" width="1.125rem" />
                                <span className="font-inter font-normal tracking-[0.12em]">DOWNTOWN</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="solar:clock-circle-linear" width="1.125rem" />
                                <span className="font-inter font-normal tracking-[0.12em]">TUE–SUN</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#96031A]"></span>
                                <span className="font-inter font-normal tracking-[0.12em]">SEASONAL TASTING</span>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
