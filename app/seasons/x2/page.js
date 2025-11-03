'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AutoSlider from '@/components/AutoSlider';
import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';

const Season2 = () => {
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
			name: 'Ashik Aseem',
			role: 'TEDx Speaker Farook College',
			image: '/images/s2/speakers/1.webp',
		},
		{
			name: 'PB Nooh',
			role: 'TEDx Speaker Farook College',
			image: '/images/s2/speakers/2.webp',
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
		<div
			className=" min-h-screen text-white font-sans relative overflow-hidden"
			style={{
				backgroundImage:
					'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("/images/bg-pattern.jpg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
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
				<motion.div variants={itemVariants} transition={{ delay: 0 }}>
					<h1 className="text-white text-4xl sm:text-3xl lg:text-7xl  font-bold mb-2 text-center">
						Glimpses of Season 2
					</h1>
					{/* replace single image with a wrapper that adds blurred edges */}
					<motion.div
						className="w-full mx-auto mb-2 relative rounded-xl overflow-hidden"
						variants={itemVariants}
					>
						<div
							aria-hidden="true"
							className="absolute inset-0 z-0 pointer-events-none"
							style={{
								backgroundImage: `url("/images/s2/leads.svg")`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								transform: 'scale(1.06)',
								filter: 'blur(28px) saturate(0.9)',
								WebkitMaskImage:
									'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
								maskImage:
									'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
							}}
						/>
						<motion.img
							src="/images/s2/leads.svg"
							alt="A single wide image leads"
							className="w-full mx-auto mb-2 object-cover relative z-10"
							variants={itemVariants}
						/>
					</motion.div>
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
						'/images/s1/gallery/1.webp',
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
	);
};

export default Season2;
