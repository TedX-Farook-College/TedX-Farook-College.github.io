'use client';

import Lanyard from '@/components/Lanyard';
import { BookingForm } from '@/components/main/BookingForm';
import { motion } from 'motion/react';
import React from 'react';
import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';
import { Icon } from '@iconify/react';

export default function BookPage() {
    return (
        <main className="relative min-h-screen">
            <div className="absolute inset-0 bg-black -z-20"></div>
            <img
                src="/gradient.png"
                className="absolute top-0 right-0 opacity-70 -z-10"
                width={524}
                height={520}
                alt="Gradient background"
            />
            <Navbar activePage="Home" />

            <div className="h-0 w-[40rem] absolute top-[20%] right-0 shadow-[0_0_900px_20px_#ff2b06] -z-10"></div>
            <div className="h-0 w-[40rem] absolute top-[10%] left-0 shadow-[0_0_900px_20px_#ff2b06] -z-10"></div>

            <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-32 pb-16 text-white overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-10 text-center"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                        Book Your Ticket
                    </h1>
                    <p className="text-white/70 mt-3 text-sm sm:text-base max-w-lg">
                        Secure your spot for a day of inspiring talks and unforgettable
                        experiences.
                    </p>
                </motion.div>

                {/* Combined Event Details & What's Included Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full max-w-7xl mx-auto mb-12"
                >
                    {/* Container for both sections, but keeping them in their own grids */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Event Details Section */}
                        <motion.div
                            className="bg-black/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.h3
                                className="text-xl sm:text-3xl font-extrabold text-white mb-4 flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Icon icon="lucide:info" className="text-red-600 size-7" />
                                Event Details
                            </motion.h3>
                            <motion.div
                                className="space-y-6 text-white/90"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                <motion.div
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Icon icon="lucide:calendar" className="text-red-600 size-6" />
                                    <span className="c">November 28, 2025</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <Icon icon="lucide:clock" className="text-red-600 size-6" />
                                    <span className="text-base">03:00 PM - 10:00 PM</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Icon icon="lucide:map-pin" className="text-red-600 size-6" />
                                    <span className="text-base">Farook College</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <Icon icon="lucide:phone" className="text-red-600 size-6" />
                                    <a
                                        href="tel:+919947587819"
                                        className="text-white hover:text-red-500 transition-all duration-200"
                                    >
                                        +91 99475 87819
                                    </a>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* What's Included Section */}
                        <motion.div
                            className="bg-black/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.h3
                                className="text-2xl sm:text-3xl font-extrabold text-white mb-4 flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Icon icon="lucide:package" className="text-red-600 size-7" />
                                What's Included
                            </motion.h3>
                            <motion.div
                                className="space-y-6 text-white/90"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                {[
                                    'TEDx Kit',
                                    'Food & Refreshments',
                                    'Participation Certificate',
                                    'Networking Opportunities'
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 * i }}
                                    >
                                        <Icon
                                            icon="lucide:check-circle"
                                            className="text-red-600 size-6 flex-shrink-0"
                                        />
                                        <span className="text-base">{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Booking Form and Lanyard */}
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Left Side: Form */}
                    <div className="w-full h-full">
                        <BookingForm />
                    </div>

                    {/* Right Side: Lanyard */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="border-t-4 border-red-500 relative w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] hidden md:flex items-center justify-center overflow-visible"
                    >
                        {/* The Lanyard component */}
                        <Lanyard
                            position={[0, 5, 25]}
                            fov={25}
                            transparent={true}
                        />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
