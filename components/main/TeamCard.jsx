'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const SocialIcon = ({ iconId, url, ariaLabel }) => (
	<Link
		href={url}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={ariaLabel}
		className="rounded-full bg-white/10 p-2 text-white transition-all duration-300 ease-in-out hover:bg-red-600 hover:scale-110"
		onClick={(e) => e.stopPropagation()}
	>
		<Icon icon={iconId} className="size-4" />
	</Link>
);

export function TeamCard({ member, className }) {
	const handleImageError = (e) => {
		const name = member.name || 'Member';
		e.target.src = `https://placehold.co/400x500/1a1a1a/666/png?text=${
			name.split(' ')[0]
		}`;
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			viewport={{ once: true }}
			className={cn(
				'relative h-full w-full overflow-hidden rounded-2xl border border-white/10 group',
				className
			)}
		>
			<Image
				src={member.img}
				alt={member.name}
				width={400}
				height={500}
				onError={handleImageError}
				className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
			<div className="absolute bottom-0 left-0 right-0 p-4 text-white">
				<div className="flex items-center justify-between gap-2">
					<h3 className="truncate text-lg font-bold">{member.name}</h3>
					{member.socials && member.socials.length > 0 && (
						<div className="flex flex-shrink-0 items-center gap-2">
							{member.socials.slice(0, 3).map((social, index) => (
								<SocialIcon
									key={index}
									iconId={social.icon}
									url={social.url}
									ariaLabel={social.ariaLabel}
								/>
							))}
						</div>
					)}
				</div>
				<p className="text-sm text-white/70">{member.role}</p>
			</div>
		</motion.div>
	);
}
