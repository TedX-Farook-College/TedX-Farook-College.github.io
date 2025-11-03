import { TextAnimate } from '@/components/ui/text-animate';
import Image from 'next/image';

export function Theme() {
	return (
		<section className="relative w-full min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden">
			<div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-10">
				<div className="mx-auto w-full text-center mb-16 md:mb-20">
					<div className="h-0 w-[40rem] absolute top-[30%] left-[0] shadow-[0_0_900px_30px_#ff2b06] rotate-[30deg] -z-10"></div>
					<div className="h-0 w-[40rem] absolute top-[30%] right-[0] shadow-[0_0_900px_30px_#ff2b06] rotate-[30deg] -z-10"></div>

					<div className="absolute overflow-hidden blur-[1px] rotate-90 top-0 left-0">
						<Image
							src="/images/footer-crack-2.png"
							alt="crack"
							className="w-full object-cover pointer-events-none"
							width={500}
							height={500}
						/>
					</div>
					<h1 className="mt-4 text-6xl font-bold tracking-tight text-white sm:text-8xl">
						<TextAnimate
							as="span"
							by="character"
							animation="slideLeft"
							duration={0.4}
							className={'uppercase'}
						>
							The Theme
						</TextAnimate>
					</h1>
					<div className="absolute overflow-hidden blur-[1px] rotate-[70deg] transform -scale-x-90 top-0 right-0">
						<Image
							src="/images/footer-crack-3.png"
							alt="crack"
							className="w-full object-cover pointer-events-none"
							width={500}
							height={500}
						/>
					</div>
				</div>
				<p className="text-white text-center">Releases Soon</p>
			</div>
		</section>
	);
}
