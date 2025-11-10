'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';

const Speakers = () => {

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

    const speakers = [
        {
            name: '',
            role: '',
            image: '/images/dummy-image.webp',
        },
        {
            name: '',
            role: '',
            image: '/images/dummy-image.webp',
        },
        {
            name: '',
            role: '',
            image: '/images/dummy-image.webp',
        },
        {
            name: '',
            role: '',
            image: '/images/dummy-image.webp',
        },
        {
            name: '',
            role: '',
            image: '/images/dummy-image.webp',
        },
        {
            name: '',
            role: '',
            image: '/images/dummy-image.webp',
        },
        {
            name: '',
            role: '',
            image: '/images/dummy-image.webp',
        },
        {
            name: '',
            role: '',
            image: '/images/dummy-image.webp',
        },
    ];

    return (
        <div className=" min-h-screen text-white font-sans relative overflow-hidden" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

          <Navbar activePage="Speakers" />

            <motion.section
                className="py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div
                    variants={itemVariants}
                    transition={{ delay: 0 }}
                >
                    <h1 className="text-white text-4xl sm:text-3xl lg:text-7xl font-bold mb-10 text-center">
                        Speakers
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-center justify-center place-items-center">
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.name}
                                className="bg-red-900/20 rounded-xl overflow-hidden"
                                variants={itemVariants}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="object-cover w-100 h-100"
                                />
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </motion.section>
            <Footer />
        </div>
    )
}

export default Speakers