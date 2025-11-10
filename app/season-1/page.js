'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';

export default function Season1() {

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

	const advisors = [
		{
			name: 'C.P. Abdul Sathar',
			role: 'Faculty Advisor',
			image: '/images/advisors/cp-abdul-sathar.jpg',
		},
		{
			name: 'Suhail Shoukath',
			role: 'Organizer',
			image: '/images/advisors/suhail-shoukath.jpg',
		},
		{ name: 'Lazin', role: 'Organizer', image: '/images/advisors/lazin.jpg' },
		{
			name: 'Fathima Hind',
			role: 'Curator',
			image: '/images/advisors/fathima-hind.jpg',
		},
		{
			name: 'Dr. K. Rizwana Sultana',
			role: 'Faculty Advisor',
			image: '/images/advisors/dr-k-rizwana-sultana.jpg',
		},
		{
			name: 'Dr. P. Yaqub',
			role: 'Faculty Advisor',
			image: '/images/advisors/dr-p-yaqub.jpg',
		},
	];

	const speakers = [
		{
			name: 'Bobit Abraham',
			role: 'TEDx Speaker Farook College',
			image: '/images/s1/speakers/speaker1.webp',
		},
		{
			name: 'Sreen Kandath',
			role: 'TEDx Speaker Farook College',
			image: '/images/s1/speakers/speaker2.webp',
		},
		{
			name: 'Amritha R',
			role: 'TEDx Speaker Farook College',
			image: '/images/s1/speakers/speaker3.webp',
		},
		{
			name: 'Adithya Krishna',
			role: 'TEDx Speaker Farook College',
			image: '/images/s1/speakers/speaker4.webp',
		},
		{
			name: 'Noor Jahan',
			role: 'TEDx Speaker Farook College',
			image: '/images/s1/speakers/noor-jahan.webp',
		},
		{
			name: 'Akhil V',
			role: 'TEDx Speaker Farook College',
			image: '/images/s1/speakers/speaker5.webp',
		},
		{
			name: 'Sunny P Sarath',
			role: 'TEDx Speaker Farook College',
			image: '/images/s1/speakers/speaker6.webp',
		},
		{
			name: 'Rahul Menon',
			role: 'TEDx Speaker Farook College',
			image: '/images/s1/speakers/speaker7.webp',
		},
	];

	const sponsors = [
		{ name: 'Meitra', logo: '/images/s1/sponsors/Meitra.webp' },
		{ name: 'Haris&Co. Academy', logo: '/images/s1/sponsors/Haris&co-academy-logo.webp' },
		{ name: 'TIE LOGO BRAND', logo: '/images/s1/sponsors/logobrand.webp' },
		{ name: 'Bluince', logo: '/images/s1/sponsors/logo_elance.webp' },
		{ name: 'GreenShore', logo: '/images/s1/sponsors/seashore.webp' },
		{ name: 'Arabic Logo', logo: '/images/s1/sponsors/light-house.webp' },
	];


	return (
		<div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
			<div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

		<Navbar activePage="Season 1" />

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
					<h1 className="text-white text-4xl sm:text-3xl lg:text-7xl  font-bold mb-10 text-center">
						Glimpses of Season 1
					</h1>
					Leads
					<img
						src="/images/s1/leads.webp"
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
						src="/images/s1/gallery/Lumiere with glow.webp"
						alt="LUMIERE"
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
							className="bg-red-900/20 rounded-xl overflow-hidden"
							variants={itemVariants}
							transition={{ delay: index * 0.1 }}
						>
							<img
								src={speaker.image}
								alt={speaker.name}
								className="object-cover"
							/>
						</motion.div>
					))}
				</div>
			</motion.section>

			<motion.section
				className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 scrollbar-hide">
					{[
						'./images/s1/gallery/1.webp',
						'/images/s1/gallery/2.webp',
						'/images/s1/gallery/3.webp',
						'/images/s1/gallery/4.webp',
						'/images/s1/gallery/5.webp',
					].map((img, index) => (
						<motion.img
							key={index}
							src={img}
							alt={`Gallery ${index + 1}`}
							className="w-48 sm:w-56 md:w-64 h-32 sm:h-36 md:h-40 object-cover rounded-lg shadow-md flex-shrink-0"
							variants={itemVariants}
							transition={{ delay: index * 0.1 }}
						/>
					))}
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
							className="bg-gray-900/50 p-3 sm:p-4 rounded-xl flex justify-center items-center min-h-[80px] sm:min-h-[100px]"
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
	);
}
