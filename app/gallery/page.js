import GlassNavigation from '@/components/main/navbar';
import Footer from '@/components/main/footer';
import GradualBlurMemo from '@/components/GradualBlur';
import DomeGallery from '@/components/DomeGallery';

export default function Home() {
	return (
		<main className="relative min-h-screen">
			<div className="absolute inset-0 bg-black -z-20"></div>

			<div className="h-0 w-[40rem] absolute top-[0%] right-[0] shadow-[0_0_900px_20px_#ff2b06] rotate-[30deg] -z-10"></div>
			<div className="h-0 w-[40rem] absolute top-[0%] left-[10] shadow-[0_0_900px_20px_#ff2b06] rotate-[30deg] -z-10"></div>

			<GlassNavigation />

			<section className="relative w-full min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden">
				<div className="mx-auto w-full py-10">
					<div className="mx-auto w-full text-center mb-8 md:mb-0">
						<p className="text-lg font-semibold leading-7 text-gray-400">
							All the memories along the way.
						</p>
						<h1 className="mt-4 text-5xl font-bold tracking-tight text-red-700 sm:text-6xl md:pb-10">
							Gallery
						</h1>
					</div>
					<div style={{ width: '100vw', height: '100vh' }}>
						<DomeGallery
							grayscale={false}
							overlayShow={['top', 'bottom', 'left', 'right']}
							maxVerticalRotationDeg={2}
							minRadius={700}
							fit={1}
							segments={24}
						/>
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
