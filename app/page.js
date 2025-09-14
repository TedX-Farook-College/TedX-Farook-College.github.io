'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Marquee } from '@/components/magicui/marquee';

const Home = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date('2025-12-31T23:59:59').getTime();

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			if (distance < 0) {
				clearInterval(interval);
				return;
			}

			setTimeLeft({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative min-h-screen bg-[#111111] flex flex-col items-center justify-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 bg-[url('/images/brutalist-pattern.jpg')] bg-center bg-no-repeat bg-cover opacity-30" />

			{/* Marquee */}
			{/* Desktop: diagonal marquee */}
			<div className="hidden sm:block absolute top-0 left-0 -translate-x-96 xl:translate-y-96 lg:-translate-x-[38rem] xl:-translate-x-[42rem] 2xl:-translate-x-[90rem] w-[150%] transform origin-top-left z-20">
				<Marquee className="[--duration:5s] bg-[#E62B1E] flex items-center justify-center transform -rotate-45">
					<p className="py-2 sm:py-3 md:py-4 text-white text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
						Coming Soon
					</p>
				</Marquee>
			</div>
			{/* Mobile: horizontal marquee */}
			<div className="block sm:hidden w-full z-20 top-0">
				<Marquee className="[--duration:5s] bg-[#E62B1E] text-white text-lg font-bold flex items-center justify-center">
					Coming Soon
				</Marquee>
			</div>

			{/* TEDx Logo - Mobile Above Countdown */}
			<div className="block sm:hidden mt-6 z-10">
				<Image
					src="/images/tedx-logo.png"
					alt="TEDx Logo"
					width={160}
					height={160}
					className="w-28 mx-auto"
				/>
			</div>

			{/* Countdown */}
			<div className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-white text-center mt-6 sm:mt-20 z-10">
				<div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
					<div>
						<span>{timeLeft.days}</span>
						<span className="block text-xs sm:text-sm md:text-base">Days</span>
					</div>
					<div>
						<span>{timeLeft.hours}</span>
						<span className="block text-xs sm:text-sm md:text-base">Hours</span>
					</div>
					<div>
						<span>{timeLeft.minutes}</span>
						<span className="block text-xs sm:text-sm md:text-base">
							Minutes
						</span>
					</div>
					<div>
						<span>{timeLeft.seconds}</span>
						<span className="block text-xs sm:text-sm md:text-base">
							Seconds
						</span>
					</div>
				</div>
			</div>

			{/* Subtext */}
			<p className="text-base sm:text-lg md:text-xl text-[#CCCCCC] text-center mt-4 sm:mt-8 z-10 px-4">
				Season 3 awaits
			</p>

			{/* TEDx Logo - Desktop Bottom Left */}
			<div className="hidden sm:block absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
				<Image
					src="/images/tedx-logo.png"
					alt="TEDx Logo"
					width={160}
					height={160}
					className="w-24 sm:w-32 md:w-40 lg:w-56 xl:w-72 2xl:w-96"
				/>
			</div>

			{/* Brutalist Object Image */}
			{/* Desktop: bottom right small */}
			<div className="hidden sm:flex absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 w-full justify-end">
				<Image
					src="/images/brutalist-object.png"
					alt="Brutalist Object"
					width={1700}
					height={900}
					className="w-1/3 rounded-3xl"
				/>
			</div>
			{/* Mobile: full width bottom */}
			<div className="block sm:hidden mt-6 w-full px-4 z-10">
				<Image
					src="/images/brutalist-object.png"
					alt="Brutalist Object"
					width={1700}
					height={900}
					className="w-full rounded-3xl"
				/>
			</div>
		</div>
	);
};

export default Home;
