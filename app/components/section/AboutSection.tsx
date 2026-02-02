import { Icon } from '@iconify/react';

export default function AboutSection() {
    return (
        <section id="philosophy" className="relative">
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
                <div className="grid gap-10 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-4">
                        <div className="inline-flex items-center gap-2">
                            <span className="h-6 w-px bg-[#FAA916]/70"></span>
                            <span className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">PHILOSOPHY</span>
                        </div>
                        <h2 className="mt-4 font-fraunces text-3xl font-normal tracking-tight text-white md:text-4xl">
                            Technique with intention.
                        </h2>
                    </div>

                    <div className="md:col-span-8">
                        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                            <p className="font-inter text-base font-normal leading-relaxed text-white/70 md:text-lg">
                                Praxis is a study in patience: ingredients sourced at their peak, handled with restraint, and guided by
                                precise technique. Each course is built on quiet decisions temperature, texture, timing so that the final
                                expression feels inevitable. Nothing is rushed. Nothing is excess.
                            </p>
                            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#FAA916]">
                                        <Icon icon="solar:leaf-linear" width="1.25rem" />
                                    </div>
                                    <div>
                                        <div className="font-inter text-sm font-medium text-white/85">Sourcing</div>
                                        <div className="mt-1 font-inter text-sm font-normal leading-relaxed text-white/60">Local farms, coastal waters, and small producers.</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#FAA916]">
                                        <Icon icon="solar:chef-hat-linear" width="1.25rem" />
                                    </div>
                                    <div>
                                        <div className="font-inter text-sm font-medium text-white/85">Technique</div>
                                        <div className="mt-1 font-inter text-sm font-normal leading-relaxed text-white/60">Clean lines, controlled heat, and calibrated seasoning.</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#FAA916]">
                                        <Icon icon="solar:hourglass-linear" width="1.25rem" />
                                    </div>
                                    <div>
                                        <div className="font-inter text-sm font-medium text-white/85">Patience</div>
                                        <div className="mt-1 font-inter text-sm font-normal leading-relaxed text-white/60">Ferments, reductions, and rests—time as an ingredient.</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#FAA916]">
                                        <Icon icon="solar:palette-linear" width="1.25rem" />
                                    </div>
                                    <div>
                                        <div className="font-inter text-sm font-medium text-white/85">Restraint</div>
                                        <div className="mt-1 font-inter text-sm font-normal leading-relaxed text-white/60">Plating that frames the ingredient, not the ego.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
                                <div className="font-inter text-xs font-normal tracking-[0.18em] text-white/50">SEASONAL MENU • LIMITED SEATING</div>
                                <div className="hidden items-center gap-2 text-xs text-white/45 sm:flex">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
