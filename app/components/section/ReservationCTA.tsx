'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function ReservationCTA() {
    const [modalOpen, setModalOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        notes: '',
    });

    const openModal = () => {
        setModalOpen(true);
        document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.classList.remove('overflow-hidden');
        setShowToast(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id.replace('r', '').toLowerCase()]: e.target.value });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
            setShowToast(true);
            return;
        }
        setShowToast(true);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && modalOpen) closeModal();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [modalOpen]);

    return (
        <section id="reserve" className="relative">
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FAA916]/10 via-transparent to-[#96031A]/10"></div>
                        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#FAA916]/10 blur-3xl"></div>
                        <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#96031A]/10 blur-3xl"></div>
                    </div>

                    <div className="relative grid gap-10 p-10 md:grid-cols-12 md:items-center md:p-14">
                        <div className="md:col-span-7">
                            <div className="inline-flex items-center gap-2">
                                <span className="h-6 w-px bg-[#FAA916]/70"></span>
                                <span className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">RESERVATIONS</span>
                            </div>
                            <h2 className="mt-4 font-fraunces text-3xl font-normal tracking-tight text-white md:text-4xl">
                                Evenings by reservation
                            </h2>
                            <p className="mt-4 max-w-xl font-inter text-sm font-normal leading-relaxed text-white/65 md:text-base">
                                Limited seating, paced service, and a menu that changes with the day's best sourcing. Reserve early for the chef's counter.
                            </p>
                        </div>

                        <div className="md:col-span-5 md:justify-self-end">
                            <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                                <button onClick={openModal} className="group inline-flex items-center justify-center rounded-2xl border border-[#FAA916]/60 bg-transparent px-7 py-3 font-inter text-sm font-medium text-[#FAA916] transition hover:border-[#FAA916]/85 hover:bg-[#FAA916]/10">
                                    <span>Reserve Table</span>
                                    <Icon className="ml-2 transition group-hover:translate-x-0.5" icon="solar:arrow-right-linear" width="1.125rem" />
                                </button>
                                <a href="#menu" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-3 font-inter text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white">
                                    View Menu
                                </a>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                <div>
                                    <div className="font-inter text-xs font-normal tracking-[0.18em] text-white/50">SEATING</div>
                                    <div className="mt-2 font-inter text-sm font-medium text-white/80">18 tables</div>
                                </div>
                                <div>
                                    <div className="font-inter text-xs font-normal tracking-[0.18em] text-white/50">DRESS</div>
                                    <div className="mt-2 font-inter text-sm font-medium text-white/80">Refined</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reservation modal */}
                {modalOpen && (
                    <div className="fixed inset-0 z-[60]">
                        <div onClick={closeModal} className="absolute inset-0 bg-black/70"></div>
                        <div className="relative mx-auto flex min-h-screen max-w-2xl items-end px-6 py-10 sm:items-center">
                            <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1B1B1E] shadow-2xl">
                                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                                    <div>
                                        <div className="font-inter text-xs font-medium tracking-[0.2em] text-[#FAA916]">RESERVE</div>
                                        <div className="mt-1 font-fraunces text-2xl font-normal tracking-tight text-white">Praxis</div>
                                    </div>
                                    <button onClick={closeModal} className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-2.5 text-white/70 transition hover:text-white" aria-label="Close reservation modal">
                                        <Icon icon="solar:close-circle-linear" width="1.375rem" />
                                    </button>
                                </div>

                                <div className="px-6 py-6">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <label className="grid gap-2">
                                            <span className="font-inter text-xs font-medium tracking-[0.18em] text-white/55">NAME</span>
                                            <input id="rName" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-inter text-sm font-normal text-white placeholder:text-white/35 outline-none transition focus:border-[#FAA916]/55 focus:bg-white/[0.04]" />
                                        </label>
                                        <label className="grid gap-2">
                                            <span className="font-inter text-xs font-medium tracking-[0.18em] text-white/55">PHONE</span>
                                            <input id="rPhone" type="tel" placeholder="+1 (555) 012-3456" value={formData.phone} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-inter text-sm font-normal text-white placeholder:text-white/35 outline-none transition focus:border-[#FAA916]/55 focus:bg-white/[0.04]" />
                                        </label>
                                        <label className="grid gap-2">
                                            <span className="font-inter text-xs font-medium tracking-[0.18em] text-white/55">DATE</span>
                                            <input id="rDate" type="date" value={formData.date} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-inter text-sm font-normal text-white outline-none transition focus:border-[#FAA916]/55 focus:bg-white/[0.04]" />
                                        </label>
                                        <label className="grid gap-2">
                                            <span className="font-inter text-xs font-medium tracking-[0.18em] text-white/55">TIME</span>
                                            <input id="rTime" type="time" value={formData.time} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-inter text-sm font-normal text-white outline-none transition focus:border-[#FAA916]/55 focus:bg-white/[0.04]" />
                                        </label>
                                        <label className="grid gap-2 md:col-span-2">
                                            <span className="font-inter text-xs font-medium tracking-[0.18em] text-white/55">GUESTS</span>
                                            <input id="rGuests" type="number" min="1" max="10" value={formData.guests} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-inter text-sm font-normal text-white outline-none transition focus:border-[#FAA916]/55 focus:bg-white/[0.04]" />
                                        </label>
                                        <label className="grid gap-2 md:col-span-2">
                                            <span className="font-inter text-xs font-medium tracking-[0.18em] text-white/55">NOTES</span>
                                            <textarea id="rNotes" rows={3} placeholder="Allergies, occasion, seating preference" value={formData.notes} onChange={handleChange} className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-inter text-sm font-normal text-white placeholder:text-white/35 outline-none transition focus:border-[#FAA916]/55 focus:bg-white/[0.04]"></textarea>
                                        </label>
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="text-xs text-white/50">
                                            <span className="font-inter font-normal tracking-[0.14em]">CONFIRMATION:</span>
                                            <span className="font-inter font-normal"> within 2 hours.</span>
                                        </div>
                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <button onClick={closeModal} className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-3 font-inter text-sm font-medium text-white/75 transition hover:bg-white/[0.05] hover:text-white">
                                                Cancel
                                            </button>
                                            <button onClick={handleSubmit} className="inline-flex items-center justify-center rounded-2xl border border-[#FAA916]/60 bg-[#FAA916]/10 px-6 py-3 font-inter text-sm font-medium text-[#FAA916] transition hover:border-[#FAA916]/85 hover:bg-[#FAA916]/15">
                                                Send Request
                                            </button>
                                        </div>
                                    </div>

                                    {showToast && (
                                        <div className="mt-5 rounded-2xl border border-[#FAA916]/30 bg-[#FAA916]/10 px-4 py-3">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-0.5 text-[#FAA916]">
                                                    <Icon icon="solar:check-circle-linear" width="1.25rem" />
                                                </div>
                                                <div>
                                                    <div className="font-inter text-sm font-medium text-[#FAA916]">Request received</div>
                                                    <div className="mt-1 font-inter text-sm font-normal text-white/70">
                                                        {formData.name && formData.guests && formData.date && formData.time
                                                            ? `${formData.name} • ${formData.guests} guests • ${formData.date} at ${formData.time}. We'll confirm shortly via phone.`
                                                            : 'Please complete name, phone, date, time, and guests.'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-white/10 px-6 py-5">
                                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/45">
                                        <div className="flex items-center gap-2">
                                            <Icon icon="solar:map-point-linear" width="1.125rem" />
                                            <span className="font-inter font-normal tracking-[0.14em]">118 N EMBER ST</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Icon icon="solar:phone-linear" width="1.125rem" />
                                            <span className="font-inter font-normal tracking-[0.14em]">(212) 555-0198</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
