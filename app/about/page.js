import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';
import GradualBlurMemo from '@/components/GradualBlur';
import { About } from '@/components/sections/About';
import Image from 'next/image';

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
			<About />

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
