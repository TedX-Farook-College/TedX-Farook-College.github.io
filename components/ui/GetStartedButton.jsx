import { cn } from '@/lib/utils';

export function GetStartedButton({
	text = 'Get started',
	className,
	type,
	...props
}) {
	return (
		<div className="min-h-12 w-full">
			<button
				type={type}
				className={cn(
					'group flex h-12 w-full items-center justify-center gap-3 rounded-lg p-2 font-bold transition-colors duration-100 ease-in-out', // Changed from w-48
					'bg-zinc-950 border-2 border-white/10 hover:bg-red-600',
					className
				)}
				{...props}
			>
				<span
					className={cn(
						'transition-colors duration-100 ease-in-out',
						'text-white group-hover:text-white'
					)}
				>
					{text}
				</span>
				<div
					className={cn(
						'relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100',
						'bg-red-600 group-hover:bg-white'
					)}
				>
					<div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							className={cn(
								'size-7 transform p-1 opacity-0 group-hover:opacity-100',
								'text-red-600'
							)}
							fill="currentColor"
						>
							<path d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z" />
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							className={cn(
								'size-7 transform p-1 opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0',
								'text-white'
							)}
							fill="currentColor"
						>
							<path d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z" />
						</svg>
					</div>
				</div>
			</button>
		</div>
	);
}
