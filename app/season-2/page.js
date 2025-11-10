
'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/main/Footer';
import Link from 'next/link';
import Navbar from '@/components/main/Navbar';

const Season2 = () => {

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

    const images = [
        "/images/s2/gallery/1.jpg",
        "/images/s2/gallery/2.jpg",
        "/images/s2/gallery/3.jpg",
        "/images/s2/gallery/4.jpg",
        "/images/s2/gallery/5.jpg",
        "/images/s2/gallery/6.jpg",
        "/images/s2/gallery/7.jpg",
        "/images/s2/gallery/8.jpg",
    ];

    const speakers = [
        {
            name: 'Ashik Aseem',
            role: 'TEDx Speaker Farook College',
            image: '/images/s2/speakers/1.webp',
        },
        {
            name: 'RJ Lishna',
            role: 'TEDx Speaker Farook College',
            image: '/images/s2/speakers/3.svg',
        },
        {
            name: 'Anees Poovathi',
            role: 'TEDx Speaker Farook College',
            image: '/images/s2/speakers/4.webp',
        },
        {
            name: 'Abida Rasheed',
            role: 'TEDx Speaker Farook College',
            image: '/images/s2/speakers/5.svg',
        },
        {
            name: 'Sabari',
            role: 'TEDx Speaker Farook College',
            image: '/images/s2/speakers/6.svg',
        },

    ];

    const sponsors = [
        { name: 'K-Hills', logo: '/images/s2/sponsors/k-hills.webp' },
        { name: 'Global study Link', logo: '/images/s2/sponsors/gsl.webp' },
        { name: 'Izra Advertising', logo: '/images/s2/sponsors/izra.webp' },
        { name: 'Elance', logo: '/images/s2/sponsors/logo_elance.webp' },
        { name: 'SeaShore', logo: '/images/s2/sponsors/seashore.webp' },
        { name: 'Radio Mango', logo: '/images/s2/sponsors/radio_mango.webp' },
        { name: 'The Light House', logo: '/images/s2/sponsors/light-house.webp' },
    ];

    return (
        <div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

           <Navbar activePage="Season 2" />

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
                    <h1 className="text-white text-4xl sm:text-3xl lg:text-7xl  font-bold mb-2 text-center">
                        Glimpses of Season 2
                    </h1>

                    Leads
                    <img
                        src="/images/s2/leads.svg"
                        alt="A single wide image leads"
                        className="w-full mx-auto mb-2 object-cover"
                    />
                </motion.div>
            </motion.section>

            <motion.section
                className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 bg-gradient-to-b from-black to-red-900/20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.p
                    className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4"
                    variants={itemVariants}
                >
                    Pre-event
                </motion.p>
                <div className="flex justify-center">
                    <motion.img
                        src="/images/s2/gallery/dhow.svg"
                        alt="DHOW"
                        className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-xl border-2 sm:border-4 border-red-500/50 shadow-lg"
                        variants={itemVariants}
                    />
                </div>
            </motion.section>

            <motion.section
                className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 text-center bg-red-900/10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.p
                    className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4"
                    variants={itemVariants}
                >
                    Main-event
                </motion.p>
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2"
                    variants={itemVariants}
                >
                    Avenir
                </motion.h2>
                <motion.p
                    className="text-lg sm:text-xl text-white/80"
                    variants={itemVariants}
                >
                    Ignite your future
                </motion.p>
            </motion.section>

            <motion.section
                className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.p
                    className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8"
                    variants={itemVariants}
                >
                    • Talks
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-center justify-center place-items-center">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            className="bg-red-900/20 rounded-xl overflow-hidden "
                            variants={itemVariants}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="object-cover w-60 md:w-64 lg:w-100"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>


            <motion.section
                className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                    {/* === Row 1: Normal images === */}
                    {images.slice(0, 4).map((img, index) => (
                        <motion.div
                            key={`normal-${index}`}
                            variants={itemVariants}
                            className="relative rounded-lg overflow-hidden"
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-36 sm:h-40 md:h-48 lg:h-56 object-cover"
                            />
                        </motion.div>
                    ))}

                    {/* === Row 2: Blurred images with overlay === */}
                    <div className="relative col-span-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                            {images.slice(4, 8).map((img, index) => (
                                <motion.div
                                    key={`blurred-${index}`}
                                    variants={itemVariants}
                                    className="relative rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery blurred ${index + 1}`}
                                        className="w-full h-36 sm:h-40 md:h-48 lg:h-56 object-cover blur-[1.5px] brightness-90"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Overlay covering the blurred row */}
                        <motion.div
                            
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="absolute inset-0 flex items-center justify-center 
                       bg-black/40 hover:bg-black/50 transition-all 
                       cursor-pointer rounded-lg"
                        >
                            <Link
                                href="/gallery"
                                className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide"
                            >View More →
                            </Link>



                        </motion.div>
                    </div>
                </div>
            </motion.section>


            <motion.section
                className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.p
                    className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8"
                    variants={itemVariants}
                >
                    • Sponsors
                </motion.p>

                {/* <AutoSlider /> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            className="bg-neutral-900 p-3 sm:p-4 rounded-xl flex justify-center items-center min-h-[80px] sm:min-h-[100px]"
                            variants={itemVariants}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-h-12 sm:max-h-14 md:max-h-16 object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            <Footer />
        </div>
    )
}

export default Season2