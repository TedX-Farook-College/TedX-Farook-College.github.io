import Image from 'next/image';
import { Card, CardTitle } from '@/components/ui/card-hover-effect';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function SponsorCard({ logo, name, link, className }) {
	const cardContent = (
		<Card
			className={cn(
				'border border-white/10 shadow-sm shadow-white/10 w-64 h-full transition-transform duration-300 transform-gpu group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)] group-hover:ring-4 group-hover:ring-indigo-500/20',
				className
			)}
		>
			<div className="flex flex-col items-center justify-center p-4 min-h-[12rem]">
				<div className="relative h-26 w-full mb-4">
					<img src={logo} alt={`${name} logo`} width={200} height={200} className="object-cover object-center" />
				</div>
				<CardTitle className="text-center text-zinc-100">{name}</CardTitle>
			</div>
		</Card>
	);

	if (link) {
		return (
			<Link
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="relative group block h-full w-full"
			>
				{cardContent}
			</Link>
		);
	}

	return (
		<div className="relative group block h-full w-full">{cardContent}</div>
	);
}
