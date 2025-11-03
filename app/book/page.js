import Image from 'next/image';
import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';
import GradualBlurMemo from '@/components/GradualBlur';
import X3Model from '@/components/model/X3MODEL';
import { Theme } from '@/components/sections/Theme';
import Link from 'next/link';

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
		</main>
	);
}
