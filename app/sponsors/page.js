'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/main/Footer';
import { SponsorMarquee } from '@/components/main/SponsorMarquee';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { hoverEffectSponsors } from '@/lib/sponsors';
import Navbar from '@/components/main/Navbar';

const Sponsors = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        'Home',
        'About',
        'Speakers',
        'Sponsors',
        'Season 1',
        'Season 2',
        'Gallery',
        'Contact',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, staggerChildren: 0.05 },
        },
    };

    const mobileItemVariants = {
        closed: { x: 20, opacity: 0 },
        open: { x: 0, opacity: 1 },
    };

    return (
        <div className=" min-h-screen text-white font-sans relative overflow-hidden" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

            <Navbar activePage="Sponsors" />
            <motion.section
                className="px-4 sm:px-8 md:px-12 py-12 flex flex-col items-center overflow-visible"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div
                    variants={itemVariants}
                    transition={{ delay: 0 }}
                    className="w-full flex flex-col items-center text-center"
                >
                    <div className="w-full max-w-screen-md px-3 sm:px-6 mb-8">
                        <p className="text-lg font-semibold leading-7 text-gray-400">
                            The ones who make it possible
                        </p>

                        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                            Our Sponsors
                        </h1>

                        <p className="mt-6 text-base leading-relaxed text-gray-300 break-words w-full">
                            We are incredibly grateful for the support of our partners, whose
                            contributions are vital to our mission of sharing ideas worth
                            spreading.
                        </p>
                    </div>

                    <div className="w-full mb-10">
                        <div className="md:hidden">
                            <SponsorMarquee />
                        </div>

                        <div className="hidden md:block w-full px-4 sm:px-8 md:px-12 lg:px-16">
                            <HoverEffect items={hoverEffectSponsors} />
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            <Footer />
        </div>
    )
}

export default Sponsors