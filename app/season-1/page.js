'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Season1() {
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
			name: 'Bobit Abraham',
			role: 'TEDx Speaker Farook College',
			image: '/images/speakers/bobit-abraham.jpg',
		},
		{
			name: 'Sreen Kandath',
			role: 'TEDx Speaker Farook College',
			image: '/images/speakers/sreen-kandath.jpg',
		},
		{
			name: 'Amritha R',
			role: 'TEDx Speaker Farook College',
			image: '/images/speakers/amritha-r.jpg',
		},
		{
			name: 'Adithya Krishna',
			role: 'TEDx Speaker Farook College',
			image: '/images/speakers/adithya-krishna.jpg',
		},
		{
			name: 'Noor Jahan',
			role: 'TEDx Speaker Farook College',
			image: '/images/speakers/noor-jahan.jpg',
		},
		{
			name: 'Akhil V',
			role: 'TEDx Speaker Farook College',
			image: '/images/speakers/akhil-v.jpg',
		},
		{
			name: 'Sunny P Sarath',
			role: 'TEDx Speaker Farook College',
			image: '/images/speakers/sunny-p-sarath.jpg',
		},
		{
			name: 'Rahul Menon',
			role: 'TEDx Speaker Farook College',
			image: '/images/speakers/rahul-menon.jpg',
		},
	];

	const sponsors = [
		{ name: 'Meitra', logo: '/images/sponsors/meitra.png' },
		{
			name: 'Harris&Co. Academy',
			logo: '/images/sponsors/harris-co-academy.png',
		},
		{ name: 'TIE LOGO BRAND', logo: '/images/sponsors/tie-logo-brand.png' },
		{ name: 'Bluince', logo: '/images/sponsors/bluince.png' },
		{ name: 'GreenShore', logo: '/images/sponsors/greenshore.png' },
		{ name: 'Mego', logo: '/images/sponsors/mego.png' },
		{ name: 'Arabic Logo', logo: '/images/sponsors/arabic-logo.png' },
	];

	return (
		<div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
			<div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

			<motion.nav
				className="flex justify-between items-center py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 relative z-20"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.a href="/" variants={itemVariants}>
					<img
						src="/images/logo-white.png"
						alt="TedxFarook College Logo"
						className="w-32 sm:w-40 md:w-48 lg:w-60"
					/>
				</motion.a>

				<ul className="hidden lg:flex gap-4 xl:gap-8 text-sm xl:text-md text-white/90">
					{navItems.map((item) => (
						<motion.a
							key={item}
							href={
								item === 'Home'
									? '/'
									: `/${item.toLowerCase().replace(/\s/g, '-')}`
							}
							className={`cursor-pointer transition-colors hover:text-white ${
								item === 'Season 1' ? 'text-red-500 font-bold' : ''
							}`}
							variants={itemVariants}
						>
							{item}
						</motion.a>
					))}
				</ul>

				<motion.button
					variants={itemVariants}
					className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</motion.button>

				<AnimatePresence>
					{isOpen && (
						<>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
								onClick={() => setIsOpen(false)}
							/>
							<motion.div
								variants={mobileMenuVariants}
								initial="closed"
								animate="open"
								exit="closed"
								className="fixed top-0 right-0 bottom-0 w-64 sm:w-80 bg-black border-l border-red-500/30 z-40 lg:hidden overflow-y-auto"
							>
								<div className="flex justify-end p-4">
									<button
										onClick={() => setIsOpen(false)}
										className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
									>
										<X size={28} />
									</button>
								</div>
								<ul className="flex flex-col gap-2 px-6 pb-6">
									{navItems.map((item) => (
										<motion.li key={item} variants={mobileItemVariants}>
											<a
												href={
													item === 'Home'
														? '/'
														: `/${item.toLowerCase().replace(/\s/g, '-')}`
												}
												className={`block py-3 px-4 rounded-lg text-lg transition-colors ${
													item === 'Season 1'
														? 'bg-red-500 text-white font-bold'
														: 'text-white/90 hover:bg-white/10 hover:text-white'
												}`}
												onClick={() => setIsOpen(false)}
											>
												{item}
											</a>
										</motion.li>
									))}
								</ul>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</motion.nav>

			<motion.section
				className="py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
					{advisors.map((advisor, index) => (
						<motion.div
							key={advisor.name}
							className="text-center"
							variants={itemVariants}
							transition={{ delay: index * 0.1 }}
						>
							<img
								src={advisor.image}
								alt={advisor.name}
								className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-2 object-cover"
							/>
							<p className="text-xs sm:text-sm font-semibold">{advisor.name}</p>
							<p className="text-xs text-gray-400">{advisor.role}</p>
						</motion.div>
					))}
				</div>
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
						src="/images/lumiere-collage.png"
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
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
								className="w-full h-40 sm:h-48 object-cover"
							/>
							<div className="p-3 sm:p-4 text-center">
								<h3 className="text-base sm:text-lg font-semibold">
									{speaker.name}
								</h3>
								<p className="text-xs sm:text-sm text-gray-400">
									{speaker.role}
								</p>
							</div>
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
						'/images/gallery/1.png',
						'/images/gallery/2.png',
						'/images/gallery/3.png',
						'/images/gallery/4.png',
						'/images/gallery/5.png',
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
		</div>
	);
}
