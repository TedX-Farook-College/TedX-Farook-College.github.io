'use client';

import Lanyard from '@/components/Lanyard';
import { BookingForm } from '@/components/main/BookingForm';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';


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
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Book Your Ticket
                    </h1>
                    <p className="text-white/70 mt-3 text-sm md:text-base max-w-lg">
                        Secure your spot for a day of inspiring talks and unforgettable
                        experiences.
                    </p>
                </motion.div>

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
                        className="border-t-4 border-red-500 relative w-full h-[500px] md:h-[600px] lg:h-[700px] hidden md:flex items-center justify-center overflow-visible" // <-- ADDED overflow-visible
                    >
                        {/* The Lanyard component creates its own canvas, 
                            we need to contain it and adjust its internal camera */}
                        <Lanyard
                            position={[0, 5, 25]} // <-- CHANGED Y position from 0 to 5
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
