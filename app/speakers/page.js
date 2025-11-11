'use client'
import React from 'react';
import { motion } from 'motion/react';
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
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const speakers = [
        { image: '/images/s3/speakers/Aleena-Aakashamittayi.webp' },
        { image: '/images/s3/speakers/Dr.-Habeeb-C.webp' },
        { image: '/images/s3/speakers/Naseef-Kalayath.webp' },
        { image: '/images/s3/speakers/pma-gafoor5.webp' },
        { image: '/images/s3/speakers/pt-muhammed.webp' },
        { image: '/images/s3/speakers/RJ-Twinkle-Sheethal.webp' },
        { image: '/images/s3/speakers/pbnt.webp' },
    ];

    return (
        <div
            className="min-h-screen text-white font-sans relative overflow-hidden"
            style={{
                backgroundImage:
                    'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("/images/bg.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

            <Navbar activePage="Speakers" />

            <motion.section
                className="py-8 sm:py-10 md:py-14 px-4 sm:px-8 md:px-12 lg:px-20 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-10 sm:mb-14 text-center tracking-tight">
                        Speakers
                    </h1>

                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-8 justify-items-center"
                    >
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={index}
                                className="rounded-xl overflow-hidden bg-gradient-to-b from-red-900/30 to-black/40 p-[1.5px] sm:p-[2px] transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(255,0,0,0.25)]"
                                variants={itemVariants}
                                transition={{ delay: index * 0.08 }}
                            >
                                <img
                                    src={speaker.image}
                                    alt={`Speaker ${index + 1}`}
                                    className="object-cover w-[160px] h-[160px] sm:w-[200px] sm:h-[220px] md:w-[260px] md:h-[280px] lg:w-[300px] lg:h-[340px] rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>

            <Footer />
        </div>
    );
};

export default Speakers;