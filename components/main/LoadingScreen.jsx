export default function LoadingScreen({ className }) {
	return (
		<div
			className={`${className} inset-0 z-[2000] h-screen overflow-hidden flex items-center justify-center bg-black px-6 text-white`}
			role="status"
			aria-label="Loading TEDx Farook College"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-red-600/20 blur-[120px]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -left-24 -bottom-24 size-80 rounded-full bg-red-600/20 blur-[120px]"
			/>
			<div className="relative flex flex-col items-center">
				<div
					aria-hidden="true"
					className="relative mt-8 flex size-15 items-center justify-center"
				>
					<div className="absolute inset-0 animate-spin rounded-full border-5 border-white/15 border-t-red-500 motion-reduce:animate-none" />
					<p className="text-4xl md:pb-2.5 pb-1 font-bold text-red-500">x</p>
				</div>
				<p className="mt-4 text-xs tracking-[0.24em] text-white/50 uppercase">
					Loading
				</p>
			</div>
		</div>
	);
}
