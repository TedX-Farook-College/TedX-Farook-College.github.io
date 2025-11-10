'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Marquee } from '@/components/magicui/marquee';
import Shuffle from '@/components/Shuffle';
import { Press_Start_2P } from 'next/font/google';
import { TextAnimate } from '@/components/magicui/text-animate';
import CountUp from '@/components/CountUp';
import { FlipText } from '@/components/ui/flip-text';

const Press2P = Press_Start_2P({
	variable: '--font-Press_Start_2P',
	weight: '400',
	subsets: ['latin'],
});

const Home = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
	});

	useEffect(() => {
		const targetDate = new Date('2025-11-28T23:59:59').getTime();

		const calculateTimeLeft = () => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			if (distance < 0) return;

			const newTime = {
				days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
					2,
					'0'
				),
				hours: String(
					Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
				).padStart(2, '0'),
				minutes: String(
					Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
				).padStart(2, '0'),
			};

			// ✅ Only update if something actually changed
			setTimeLeft((prev) => {
				if (
					prev.days !== newTime.days ||
					prev.hours !== newTime.hours ||
					prev.minutes !== newTime.minutes
				) {
					return newTime;
				}
				return prev; // no change → no re-render → no unwanted flip
			});
		};

		calculateTimeLeft();
		const interval = setInterval(calculateTimeLeft, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
			{/* Background Texture */}
			<div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000]  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,0,0,0.3),rgba(255,255,255,0))]"></div>
			<div className="sm:hidden fixed top-0 left-0 right-0 z-20">
				<Marquee
					repeat={10}
					className="[--duration:5s] bg-[#E62B1E] text-white text-lg font-bold flex items-center justify-center"
				>
					COMING SOON
				</Marquee>
			</div>

			{/* Marquee */}
			<div className="hidden sm:block absolute top-0 left-0 -translate-x-96 lg:translate-y-24 2xl:translate-y-64 lg:-translate-x-[38rem] xl:-translate-x-[42rem] 2xl:-translate-x-[80rem] w-[150%] transform origin-top-left z-20">
				<Marquee className="[--duration:5s] bg-[#E62B1E] flex items-center justify-center transform -rotate-45">
					<p className="py-2 sm:py-3 md:py-4  text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold title text-[#E62B1E]">
						COMING SOON
					</p>
				</Marquee>
			</div>

			{/* Mobile: horizontal marquee */}

			{/* TEDx Logo - Mobile */}
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
			<div className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-[#FFFFFF] text-center mt-6 sm:mt-20 z-10">
				<div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
					<div className="text-center">
						<FlipText
							duration={0.5}
							className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-white"
						>
							{timeLeft.days}
						</FlipText>
						<TextAnimate
							animation="blurInUp"
							by="character"
							once
							className="block text-xs sm:text-sm md:text-base text-[#CCCCCC]"
						>
							Days
						</TextAnimate>
					</div>

					<div className="text-center">
						<FlipText
							duration={0.5}
							className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-[#FFFFFF]"
						>
							{timeLeft.hours}
						</FlipText>
						<TextAnimate
							animation="blurInUp"
							by="character"
							once
							className="block text-xs sm:text-sm md:text-base text-[#CCCCCC]"
						>
							Hours
						</TextAnimate>
					</div>
					<div className="text-center">
						<FlipText
							duration={0.5}
							className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-[#FFFFFF]"
						>
							{timeLeft.minutes}
						</FlipText>
						<TextAnimate
							animation="blurInUp"
							by="character"
							once
							className="block text-xs sm:text-sm md:text-base text-[#CCCCCC]"
						>
							Minutes
						</TextAnimate>
					</div>
				</div>
			</div>

			{/* Subtext */}
			<div className=" text-[#E62B1E] text-center mt-4 sm:mt-8 z-10 px-4">
				<Shuffle
					text="Season 3 Awaits"
					className={`${Press2P.variable}`}
					shuffleDirection="right"
					duration={0.8}
					shuffleTimes={1}
					loop={true}
					loopDelay={3}
					ease="power3.out"
					stagger={0.03}
					threshold={0.1}
					triggerOnHover={true}
					respectReducedMotion={true}
				/>
			</div>

			{/* TEDx Logo - Desktop */}
			<div className="hidden sm:block absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
				<Image
					src="/images/tedx-logo.png"
					alt="TEDx Logo"
					width={1998}
					height={701}
					className="w-24 sm:w-32 md:w-40 lg:w-56 xl:w-72 2xl:w-96"
				/>
			</div>

			{/* Brutalist Object
			<div className="hidden sm:flex absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-full justify-end ">
				<Image
					src="/images/poster.webp"
					alt="poster"
					width={1280}
					height={720}
					className="w-3/5 lg:w-1/3 rounded-3xl ring-2 ring-[#E62B1E]"
				/>
			</div> */}
			<div className="block sm:hidden mt-6 w-full px-4 z-10">
				<Image
					src="/images/poster.webp"
					alt="poster"
					width={1280}
					height={720}
					className="w-full rounded-3xl ring ring-[#E62B1E]"
				/>
			</div>
		</div>
	);
};

export default Home;
