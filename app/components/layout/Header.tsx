'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import { navLinks } from '@/lib/data';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#1B1B1E]/60 backdrop-blur-xl">
                    <div className="flex items-center gap-4 px-5 py-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                            <Icon icon="material-symbols-light:kebab-dining-outline-rounded" width="1.125rem" />
                        </div>
                        <div className="leading-none">
                            <div className="font-inter text-sm font-medium tracking-tight text-white/90">Praxis</div>
                            <div className="font-inter text-xs font-normal text-white/50">REFINED DINING</div>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-7 px-5 py-4 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-inter text-sm font-normal text-white/70 transition hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3 px-5 py-4">
                        <a
                            href="#reserve"
                            className="hidden rounded-xl border border-[#FAA916]/35 bg-[#FAA916]/10 px-4 py-2 font-inter text-sm font-medium text-[#FAA916] transition hover:border-[#FAA916]/60 hover:bg-[#FAA916]/15 md:inline-flex"
                        >
                            Reserve
                        </a>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-white/80 transition hover:text-white md:hidden"
                            aria-label="Open menu"
                        >
                            <Icon icon="solar:hamburger-menu-linear" width="1.25rem" />
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`mt-3 rounded-2xl border border-white/10 bg-[#1B1B1E]/80 p-4 backdrop-blur-xl md:hidden ${mobileMenuOpen ? 'block' : 'hidden'
                        }`}
                >
                    <div className="grid gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-xl px-3 py-2 font-inter text-sm font-normal text-white/70 transition hover:bg-white/[0.04] hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-2">
                            <a
                                href="#reserve"
                                className="inline-flex w-full items-center justify-center rounded-xl border border-[#FAA916]/35 bg-[#FAA916]/10 px-4 py-2.5 font-inter text-sm font-medium text-[#FAA916] transition hover:border-[#FAA916]/60 hover:bg-[#FAA916]/15"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Reserve Table
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
