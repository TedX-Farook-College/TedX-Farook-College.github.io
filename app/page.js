import Image from 'next/image';
import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';
import GradualBlurMemo from '@/components/GradualBlur';
import X3Model from '@/components/model/X3MODEL';

export default function Home() {
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
					<X3Model />
				</div>
				<div className="relative text-center max-w-2xl pointer-events-none">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 pointer-events-auto mix-blend-difference text-white">
						Book Your Tickets Now!
					</h1>
					<p className="text-lg md:text-xl  mb-8 max-w-2xl mx-auto pointer-events-auto mix-blend-difference text-white">
						Don&apos;t miss out on a full day of ideas worth sharing and
						refreshing entertainment. Reserve your slot before seats run out!
					</p>

					<div className="flex justify-center pointer-events-auto">
						<button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-colors">
							Book Now
						</button>
					</div>
				</div>
			</section>

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
