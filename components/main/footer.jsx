import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-black/50 backdrop-blur-sm border-t border-white/10">
			<div className="max-w-7xl mx-auto px-6 py-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					{/* Logo */}
					<div className="flex items-center space-x-1">
						<span className="text-2xl font-bold text-white">TED</span>
						<span className="text-2xl font-bold text-red-600">x</span>
						<span className="text-2xl font-bold text-white">FC</span>
					</div>

					{/* Social Links */}
					<div className="flex items-center gap-4">
						{[
							{ icon: 'formkit:instagram', href: '#', label: 'Instagram' },
							{ icon: 'formkit:facebook', href: '#', label: 'Facebook' },
							{ icon: 'prime:twitter', href: '#', label: 'Twitter' },
							{ icon: 'formkit:linkedin', href: '#', label: 'LinkedIn' },
						].map((social) => (
							<Link
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white/70 hover:text-white transition-colors"
								aria-label={social.label}
							>
								<Icon icon={social.icon} width="24" height="24" />
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
