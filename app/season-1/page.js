'use client';
import React from 'react';
import { motion } from 'motion/react';

export default function Season1() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
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
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/60 rounded-full blur-[250px] opacity-30 pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-800/50 rounded-full blur-[300px] opacity-20 pointer-events-none"></div>

			<motion.nav
				className="flex justify-between items-center py-10 px-16 relative z-20"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.img
					src="/images/logo-white.png"
					alt="TedxFarook College Logo"
					className="text-2xl w-60 font-bold tracking-wider"
					variants={itemVariants}
				/>
				<ul className="flex gap-8 text-md text-white/90">
					{[
						'Home',
						'About',
						'Speakers',
						'Sponsors',
						'Season 1',
						'Season 2',
						'Contact',
					].map((item) => (
						<motion.a
							key={item}
							href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`}
							className={`cursor-pointer transition-colors hover:text-white ${
								item === 'Season 1' ? 'text-red-500 font-bold' : ''
							}`}
							variants={itemVariants}
						>
							{item}
						</motion.a>
					))}
				</ul>
			</motion.nav>

			{/* Advisors Section */}
			<motion.section
				className="py-10 px-16 relative z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<div className="flex flex-wrap justify-center gap-8">
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
								className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
							/>
							<p className="text-sm font-semibold">{advisor.name}</p>
							<p className="text-xs text-gray-400">{advisor.role}</p>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Pre-event Section */}
			<motion.section
				className="py-20 px-16 relative z-10 bg-gradient-to-b from-black to-red-900/20"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<motion.p
					className="text-sm text-gray-400 mb-4"
					variants={itemVariants}
				>
					Pre-event
				</motion.p>
				<div className="flex justify-center">
					<motion.img
						src="/images/lumiere-collage.png"
						alt="LUMIERE"
						className="w-full max-w-4xl rounded-xl border-4 border-red-500/50 shadow-lg"
						variants={itemVariants}
					/>
				</div>
			</motion.section>

			{/* Main-event Section */}
			<motion.section
				className="py-20 px-16 relative z-10 text-center bg-red-900/10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<motion.p
					className="text-sm text-gray-400 mb-4"
					variants={itemVariants}
				>
					Main-event
				</motion.p>
				<motion.h2
					className="text-6xl font-bold text-white mb-2"
					variants={itemVariants}
				>
					Avenir
				</motion.h2>
				<motion.p className="text-xl text-white/80" variants={itemVariants}>
					Ignite your future
				</motion.p>
			</motion.section>

			{/* Talks Section */}
			<motion.section
				className="py-20 px-16 relative z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<motion.p
					className="text-sm text-gray-400 mb-8"
					variants={itemVariants}
				>
					• Talks
				</motion.p>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
								className="w-full h-48 object-cover"
							/>
							<div className="p-4 text-center">
								<h3 className="text-lg font-semibold">{speaker.name}</h3>
								<p className="text-sm text-gray-400">{speaker.role}</p>
							</div>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Gallery Section */}
			<motion.section
				className="py-20 px-16 relative z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<div className="flex overflow-x-auto gap-4 pb-4">
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
							className="w-64 h-40 object-cover rounded-lg shadow-md"
							variants={itemVariants}
							transition={{ delay: index * 0.1 }}
						/>
					))}
				</div>
			</motion.section>

			{/* Sponsors Section */}
			<motion.section
				className="py-20 px-16 relative z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<motion.p
					className="text-sm text-gray-400 mb-8"
					variants={itemVariants}
				>
					• Sponsors
				</motion.p>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{sponsors.map((sponsor, index) => (
						<motion.div
							key={sponsor.name}
							className="bg-gray-900/50 p-4 rounded-xl flex justify-center items-center"
							variants={itemVariants}
							transition={{ delay: index * 0.1 }}
						>
							<img
								src={sponsor.logo}
								alt={sponsor.name}
								className="max-h-16 object-contain"
							/>
						</motion.div>
					))}
				</div>
			</motion.section>

			{/* Contact Section */}
			<motion.section
				className="py-20 px-16 relative z-10"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
					<motion.div variants={itemVariants}>
						<h2 className="text-4xl font-bold text-red-500 mb-4">Contact us</h2>
						<p className="text-white/70 mb-8">
							Fill out our form, and we'll try to get back to you within 2
							hours.
						</p>
						<p className="text-white/70 mb-8">Farook College, Calicut</p>
						<img
							src="/images/map-placeholder.jpg"
							alt="Map of Farook College, Calicut"
							className="w-full h-64 object-cover rounded-xl border border-gray-800"
						/>
					</motion.div>
					<motion.div variants={itemVariants}>
						<form className="space-y-4">
							<input
								type="text"
								placeholder="Enter your name"
								className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
							/>
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
							/>
							<textarea
								rows={5}
								placeholder="Enter your message"
								className="w-full p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 resize-none"
							></textarea>
							<button
								type="submit"
								className="w-full px-8 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
							>
								Send
							</button>
						</form>
						<div className="pt-4 border-t border-gray-800 mt-4">
							<p className="text-gray-400 text-sm">Or email us at:</p>
							<a
								href="mailto:contact@tedxfarook@gmail.com"
								className="text-red-400 hover:text-red-300 text-sm font-medium"
							>
								contact@tedxfarook@gmail.com
							</a>
						</div>
						<a
							href="#"
							className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 text-sm font-medium mt-4"
						>
							Join us on WhatsApp
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
							</svg>
						</a>
					</motion.div>
				</div>
			</motion.section>

			{/* Footer */}
			<motion.footer
				className="border-t border-gray-800 py-8 px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<div className="flex gap-4">
					<a href="#" className="hover:text-red-500">
						Facebook
					</a>
					<a href="#" className="hover:text-red-500">
						Twitter
					</a>
					<a href="#" className="hover:text-red-500">
						Instagram
					</a>
					<a href="#" className="hover:text-red-500">
						LinkedIn
					</a>
				</div>
				<div className="flex items-center gap-2">
					<span>Community</span>
					<a href="#" className="text-red-500 hover:text-red-400">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
						</svg>
					</a>
				</div>
				<p>&copy; 2024 TEDx Farook College</p>
			</motion.footer>
		</div>
	);
}
