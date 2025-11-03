'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';

const Speakers = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        'Home',
        'About',
        'Speakers',
        'Sponsors',
        'Season 1',
        'Season 2',
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

    // replaced: use stable picsum placeholders and add short bio
    const speakers = [
        {
            name: 'Aisha Rahman',
            role: 'Climate Researcher',
            image: 'https://picsum.photos/seed/aisha/600/600',
            bio: 'Explores climate resilience and community-driven solutions.'
        },
        {
            name: 'Ravi Menon',
            role: 'Social Entrepreneur',
            image: 'https://picsum.photos/seed/ravi/600/600',
            bio: 'Building sustainable ventures that empower local youth.'
        },
        {
            name: 'Dr. Meera Nair',
            role: 'Neuroscientist',
            image: 'https://picsum.photos/seed/meera/600/600',
            bio: 'Researching cognition and creative learning techniques.'
        },
        {
            name: 'Lucas Pereira',
            role: 'AI Ethicist',
            image: 'https://picsum.photos/seed/lucas/600/600',
            bio: 'Focuses on responsible AI and human-centered design.'
        },
        {
            name: 'Sana Iqbal',
            role: 'Documentary Filmmaker',
            image: 'https://picsum.photos/seed/sana/600/600',
            bio: 'Tells untold stories from marginalized communities.'
        },
        {
            name: 'Arjun Varma',
            role: 'Product Designer',
            image: 'https://picsum.photos/seed/arjun/600/600',
            bio: 'Designs delightful, accessible products for everyone.'
        },
        {
            name: 'Maya Chen',
            role: 'Public Health Advocate',
            image: 'https://picsum.photos/seed/maya/600/600',
            bio: 'Works on preventive health programs and outreach.'
        }
    ];

    return (
        <div className=" min-h-screen text-white font-sans relative overflow-hidden" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

            <GlassNavigation />

            <motion.section
                className="py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 mt-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div
                    variants={itemVariants}
                    transition={{ delay: 0 }}
                >
                    <h1 className="text-white text-6xl lg:text-7xl sm:text-4xl font-bold mb-10 text-center">
                        Speakers
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-center justify-center place-items-center">
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={speaker.name}
                                className="bg-red-900/10 rounded-xl overflow-hidden w-64"
                                variants={itemVariants}
                                transition={{ delay: index * 0.06 }}
                            >
                                <div className="h-64 w-full overflow-hidden bg-gray-800">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-white">{speaker.name}</h3>
                                    <p className="text-sm text-red-300 mb-2">{speaker.role}</p>
                                    <p className="text-sm text-white/80 line-clamp-3">{speaker.bio}</p>
                                </div>
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