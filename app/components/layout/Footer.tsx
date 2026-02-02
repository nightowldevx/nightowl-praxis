import { Icon } from '@iconify/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative">
            <div className="mx-auto max-w-7xl px-6 pb-14">
                <div className="h-px w-full bg-[#FAA916]/40"></div>

                <div className="grid gap-10 pt-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                                <Icon icon="material-symbols-light:kebab-dining-outline-rounded" width="1.125rem" />
                            </div>
                            <div>
                                <div className="font-inter text-sm font-medium tracking-tight text-white/90">Praxis</div>
                                <div className="mt-1 font-inter text-xs font-normal tracking-[0.18em] text-white/45">REFINED DINING CONCEPT</div>
                            </div>
                        </div>

                        <p className="mt-5 max-w-md font-inter text-sm font-normal leading-relaxed text-white/60">
                            A calm room. A precise kitchen. A seasonal menu shaped by time, heat, and intent.
                        </p>
                    </div>

                    <div className="grid gap-8 md:col-span-7 sm:grid-cols-2">
                        <div>
                            <div className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">ADDRESS</div>
                            <div className="mt-3 space-y-1 font-inter text-sm font-normal text-white/65">
                                <div>677 N Naga St.</div>
                                <div>Leyte Downtown, SL</div>
                            </div>
                        </div>

                        <div>
                            <div className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">HOURS</div>
                            <div className="mt-3 space-y-1 font-inter text-sm font-normal text-white/65">
                                <div>Tue–Thu: 5:30am–10:00pm</div>
                                <div>Fri–Sun: 5:00am–11:00pm</div>
                            </div>
                        </div>

                        <div>
                            <div className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">CONTACT</div>
                            <div className="mt-3 space-y-2 font-inter text-sm font-normal text-white/65">
                                <a className="inline-flex items-center gap-2 transition hover:text-white" href="mailto:reservations@praxis.example">
                                    <Icon icon="solar:letter-linear" width="1.125rem" />
                                    reservations@praxis.example
                                </a>
                                <a className="inline-flex items-center gap-2 transition hover:text-white" href="tel:+12125550198">
                                    <Icon icon="solar:phone-linear" width="1.125rem" />
                                    (677) 911-2002
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">SOCIAL</div>
                            <div className="mt-3 flex flex-wrap gap-3">
                                <a href="https://example.com" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-2 font-inter text-sm font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-white">
                                    <Icon icon="solar:camera-linear" width="1.125rem" />
                                    Instagram
                                </a>
                                <a href="https://example.com" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-2 font-inter text-sm font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-white">
                                    <Icon icon="solar:chat-round-linear" width="1.125rem" />
                                    Threads
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="font-inter text-xs font-normal tracking-[0.16em] text-white/45">© {currentYear} PRAXIS</div>
                    <div className="font-inter text-xs font-normal tracking-[0.16em] text-white/35">Crafted with restraint.</div>
                </div>
            </div>
        </footer>
    );
}
