'use client';

import React from 'react';
import { motion } from 'motion/react';
import Footer from '../components/main/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/main/Navbar';

export default function Home() {
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
		<div className="bg-black min-h-screen text-white font-sans relative overflow-hidden ">
			<div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

			<Navbar activePage="Home" />

			{/* Hero */}
			<section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative -mt-12 sm:mt-0 md:mt-0">
				<div className=" absolute inset-0 bg-[radial-gradient(circle_at_center,#ff000015,transparent_70%)]"></div>

				<motion.h1
					className="absolute inset-0 flex items-center justify-center text-[22rem] md:text-[32rem] font-extrabold select-none opacity-40 text-red-800/30 drop-shadow-[0_0_50px_rgba(255,0,0,0.4)]"
					style={{ WebkitTextStroke: '4px rgba(255,0,0,0.6)' }}
					animate={{ scale: [1, 1.03, 1], y: [0, -15, 0] }}
					transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
				>
					X3
				</motion.h1>

				<motion.h2
					className="text-4xl md:text-6xl font-extrabold relative z-10"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
				>
					Book Your <span className="text-red-500">Tickets</span> Now!
				</motion.h2>

				<motion.p
					className="text-white/70 mt-4 max-w-xl relative z-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					Don't miss out on a full day of ideas worth sharing and refreshing
					entertainment. Reserve your slot before seats run out!
				</motion.p>

				<div className="flex flex-col sm:flex-row justify-center items-center pointer-events-auto space-y-5 sm:space-y-0 sm:space-x-3 mt-8">
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, ease: 'easeOut' }}
	>
		<Link
			href="https://app.makemypass.com/event/tedx-fc-s3"
			target="_blank"
			rel="noopener noreferrer"
		>
			<button
				className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transition z-10 relative inline-block w-full sm:w-auto"
				style={{ minWidth: '200px' }}
			>
				Book Now
			</button>
		</Link>
	</motion.div>

	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
	>
		<Link href="/speakers">
			<button
				className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full font-semibold shadow hover:bg-red-500 hover:text-white hover:scale-105 transition z-10 relative inline-flex items-center justify-center gap-2 w-full sm:w-auto"
				style={{ minWidth: '200px' }}
			>
				<span>Meet the Speakers</span>
				<span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
			</button>
		</Link>
	</motion.div>
</div>

			</section>

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
								className="bg-[#1c0000] border-t border-white/10 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-md shadow-lg"
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

			<hr className="border-t border-red-500 mx-4 sm:mx-6 md:mx-10" />

			<motion.section
				className="flex justify-center items-center py-12 sm:py-16 md:py-20 px-4"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.7 }}
			>
				<div className="bg-black/20 border border-gray-800 p-2 rounded-2xl shadow-2xl shadow-red-900/10 max-w-sm sm:max-w-md md:max-w-lg">
					<Image
						src="/images/s3/poster.webp"
						alt="TEDx Poster"
						width={1280}
						height={720}
						className="w-full object-cover rounded-lg"
						unoptimized
					/>
				</div>
			</motion.section>
			<Footer />
		</div>
	);
}
