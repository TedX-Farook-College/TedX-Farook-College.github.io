'use client';

import Image from 'next/image';
import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';
import GradualBlurMemo from '@/components/GradualBlur';
// Removed X3Model import
import { Theme } from '@/components/sections/Theme';
import Link from 'next/link';
// Removed useState and useEffect
import { motion } from 'motion/react'; // Added motion import

export default function Home() {
    // Removed useState and useEffect for isDesktop

    // Added variants from page1 for the new sections
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

    return (
        <main className="relative min-h-screen">
            {/* Background elements from page2 */}
            <div className="absolute inset-0 bg-black -z-20"></div>
            <Image
                className="absolute top-0 right-0 opacity-70 -z-10"
                src="/gradient.png"
                width={524}
                height={520}
                alt="Gradient-img"
            />
            <div className="h-0 w-[40rem] absolute top-[20%] right-[0] shadow-[0_0_900px_20px_#ff2b06] rotate-[30deg] -z-10"></div>

            <GlassNavigation />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 text-white overflow-hidden">
                <div className="w-42 h-32 bg-black z-10 absolute bottom-0 right-0"></div>

                {/* --- Elements from Page 1 Hero --- */}
                {/* Radial gradient from page1 */}
                <div className=" absolute inset-0 bg-[radial-gradient(circle_at_center,#ff000015,transparent_70%)]"></div>
                {/* Static X3 from page1 (animation props removed) */}
                <h1
                    className="absolute inset-0 flex items-center justify-center text-[22rem] md:text-[32rem] font-extrabold select-none opacity-40 text-red-800/30 drop-shadow-[0_0_50px_rgba(255,0,0,0.4)]"
                    style={{ WebkitTextStroke: '4px rgba(255,0,0,0.6)' }}
                >
                    X3
                </h1>
                {/* --- End Elements from Page 1 Hero --- */}

                {/* This div was removed, as it contained the X3Model/Image logic */}
                {/* <div className="absolute inset-0 z-0"> ... </div> */}

                {/** Content from page2 hero (text, button) */}
                <div className="relative text-center max-w-2xl pointer-events-none">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 pointer-events-auto text-white">
                        Book Your <span className="text-red-600">Tickets</span> Now!
                    </h1>
                    <p className="text-lg md:text-xl  mb-8 max-w-2xl mx-auto pointer-events-auto   text-white">
                        Don&apos;t miss out on a full day of ideas worth sharing and
                        refreshing entertainment. Reserve your slot before seats run out!
                    </p>

                    <div className="flex justify-center pointer-events-auto">
                        <Link
                            href={'/book'}
                            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/90 backdrop-blur-lg px-6 py-2 text-base font-semibold text-black transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                        >
                            <span className="text-lg">Book Now</span>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                <div className="relative h-full w-10 bg-black/20"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Date Section (from page1) --- */}
            <hr className="border-t border-red-500 mx-4 sm:mx-6 md:mx-10" />
            <motion.section
                className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 relative z-10 min-h-[40vh] sm:min-h-[50vh]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariants}
            >
                <div className="relative w-full max-w-xs sm:max-w-md flex justify-center items-center px-4">
                    <div className="absolute w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
                    <motion.div
                        className="flex space-x-2 sm:space-x-3 md:space-x-4 text-3xl sm:text-4xl md:text-5xl font-bold z-10"
                        variants={containerVariants}
                    >
                        {['28', '11', '25'].map((num) => (
                            <motion.div
                                key={num}
                                className="bg-[#1c0000] text-white border-t border-white/10 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-md shadow-lg"
                                variants={itemVariants}
                            >
                                {num}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <motion.p
                    className="mt-6 sm:mt-8 text-white/80 text-center max-w-xl text-xs sm:text-sm px-4"
                    variants={itemVariants}
                >
                    <span className="font-semibold text-white">
                        TEDxFarookCollege Season 3
                    </span>{' '}
                    will convene at the Farook College campus on{' '}
                    <span className="font-semibold text-white">28th November 2025</span>
                </motion.p>
            </motion.section>
            {/* --- End Date Section --- */}

            {/* --- Poster Section (from page1) --- */}
            <hr className="border-t border-red-500 mx-4 sm:mx-6 md:mx-10" />
            <motion.section
                className="flex justify-center items-center py-12 sm:py-16 md:py-20 px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
            >
                <div className="bg-black/20 border border-gray-800 p-2 rounded-2xl shadow-2xl shadow-red-900/10 max-w-sm sm:max-w-md md:max-w-lg">
                    <img
                        src="/images/s3/poster.png"
                        alt="TEDx Poster"
                        className="w-full object-cover rounded-lg"
                    />
                </div>
            </motion.section>
            {/* --- End Poster Section --- */}

            {/** <Theme /> */}

            <Footer />
            <GradualBlurMemo
                target="parent"
                position="bottom"
                height="3rem"
                strength={0.5}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
                zIndex={10}
            />
        </main>
    );
}