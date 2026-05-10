'use client';

import React from 'react';
import { motion } from 'motion/react';
import Footer from '../components/main/Footer';
import Link from 'next/link';
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
		<div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
			{/* Background Glow */}
			<div className="absolute top-0 right-0 w-[300px] sm:w-[450px] md:w-[550px] h-[300px] sm:h-[450px] md:h-[550px] bg-red-600/50 rounded-full blur-[180px] opacity-30 pointer-events-none"></div>

			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[550px] md:w-[650px] h-[400px] sm:h-[550px] md:h-[650px] bg-red-900/40 rounded-full blur-[220px] opacity-20 pointer-events-none"></div>

			<Navbar activePage="Home" />

			{/* Hero Section */}
			<section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff000010,transparent_70%)]"></div>

				{/* Huge Background Text */}
				<motion.h1
					className="absolute inset-0 flex items-center justify-center text-[12rem] sm:text-[18rem] md:text-[28rem] font-extrabold select-none opacity-30 text-red-800/20 drop-shadow-[0_0_60px_rgba(255,0,0,0.4)]"
					style={{
						WebkitTextStroke: '3px rgba(255,0,0,0.5)',
					}}
					animate={{
						scale: [1, 1.03, 1],
						y: [0, -10, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				>
					S4
				</motion.h1>

				{/* Tag */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative z-10 mb-5"
				>
					<span className="border border-red-500/40 bg-red-500/10 text-red-400 px-5 py-2 rounded-full text-sm tracking-[0.2em] uppercase">
						TEDxFarookCollege
					</span>
				</motion.div>

				{/* Main Title */}
				<motion.h2
					className="text-5xl sm:text-6xl md:text-8xl font-extrabold relative z-10 leading-none"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<span className="text-white">Season</span>{' '}
					<span className="text-red-500">4</span>
				</motion.h2>

				{/* Coming Soon */}
				<motion.h3
					className="text-xl sm:text-2xl md:text-4xl text-white/80 mt-4 font-light tracking-[0.25em] uppercase relative z-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Coming Soon
				</motion.h3>

				{/* Description */}
				<motion.p
					className="text-white/60 mt-6 max-w-2xl relative z-10 text-sm sm:text-base leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					A new stage. New stories. New perspectives. TEDxFarookCollege
					returns with Season 4 — an experience designed to inspire,
					challenge, and ignite ideas worth spreading.
				</motion.p>

				{/* Buttons */}

				<div className="flex justify-center items-center mt-10 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						<Link href="/season-3">
							<button className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 min-w-[240px]">
								Explore Past Season 
							</button>
						</Link>
					</motion.div>
				</div>

				{/* Bottom Scroll Text */}
				<motion.div
					className="absolute bottom-10 text-white/30 text-xs tracking-[0.3em] uppercase"
					animate={{ opacity: [0.3, 1, 0.3] }}
					transition={{
						duration: 2,
						repeat: Infinity,
					}}
				>
					Stay Tuned
				</motion.div>
			</section>

			{/* Divider */}
			<hr className="border-t border-red-500/30 mx-4 sm:mx-8 md:mx-16" />

			{/* Info Section */}
			<motion.section
				className="flex flex-col items-center justify-center py-20 relative z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.4 }}
				variants={containerVariants}
			>
				<motion.div
					className="flex gap-3 sm:gap-5 text-3xl sm:text-5xl font-bold"
					variants={containerVariants}
				>
					{['IDEAS', 'WORTH', 'SPREADING'].map((word) => (
						<motion.div
							key={word}
							className="bg-[#140000] border border-white/10 px-4 sm:px-6 py-3 rounded-md shadow-lg"
							variants={itemVariants}
						>
							{word}
						</motion.div>
					))}
				</motion.div>

				<motion.p
					className="mt-8 text-white/70 text-center max-w-2xl text-sm sm:text-base px-4 leading-relaxed"
					variants={itemVariants}
				>
					Season 4 is currently in the making. From visionary speakers to
					immersive experiences, we are crafting something unforgettable for
					the TEDxFarookCollege community.
				</motion.p>
			</motion.section>

			<Footer />
		</div>
	);
}