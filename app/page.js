'use client';

import Image from 'next/image';
import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';
import GradualBlurMemo from '@/components/GradualBlur';
import X3Model from '@/components/model/X3MODEL';
import { Theme } from '@/components/sections/Theme';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		checkScreenSize();

		window.addEventListener('resize', checkScreenSize);

		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	return (
		<main className="relative min-h-screen">
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
			<section className="relative min-h-screen flex items-center justify-center px-4 pt-20 text-white overflow-hidden">
				<div className="w-42 h-32 bg-black z-10 absolute bottom-0 right-0"></div>

				<div className="absolute inset-0 z-0">
					{isDesktop ? (
						<X3Model />
					) : (
						<div className="w-full h-full flex items-center justify-center p-4">
							<Image
								src="/images/bg2.png"
								width={985}
								height={985}
								alt="Background"
								className="object-contain max-w-full max-h-full opacity-25"
							/>
						</div>
					)}
				</div>

				{/**  mix-blend-difference*/}
				<div className="relative text-center max-w-2xl pointer-events-none">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 pointer-events-auto text-white">
						Book Your <span className="text-red-600">Tickets</span> Now!
					</h1>
					<p className="text-lg md:text-xl  mb-8 max-w-2xl mx-auto pointer-events-auto  text-white">
						Don&apos;t miss out on a full day of ideas worth sharing and
						refreshing entertainment. Reserve your slot before seats run out!
					</p>

					<div className="flex justify-center pointer-events-auto">
						<Link
							href={'/book'}
							className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-red-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-red-200/20"
						>
							<span className="text-lg">Book Now</span>
							<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
								<div className="relative h-full w-10 bg-white/20"></div>
							</div>
						</Link>
					</div>
				</div>
			</section>

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
