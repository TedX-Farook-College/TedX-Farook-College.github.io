'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '@/app/loading';

export default function NavigationLoading({ children }) {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(true);
	const fallbackTimeout = useRef(null);

	useEffect(() => {
		setIsLoading(false);
		window.clearTimeout(fallbackTimeout.current);
	}, [pathname]);

	useEffect(
		() => () => window.clearTimeout(fallbackTimeout.current),
		[]
	);

	function handleNavigation(event) {
		if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
			return;
		}

		const link = event.target.closest('a');
		if (!link || link.target === '_blank' || link.hasAttribute('download')) {
			return;
		}

		const destination = new URL(link.href, window.location.href);
		if (
			destination.origin !== window.location.origin ||
			(destination.pathname === window.location.pathname &&
				destination.search === window.location.search)
		) {
			return;
		}

		setIsLoading(true);
		window.clearTimeout(fallbackTimeout.current);
		fallbackTimeout.current = window.setTimeout(() => setIsLoading(false), 10000);
	}

	return (
		<div className="fixed inset-0 z-[2000] h-100vh overflow-hidden" onClickCapture={handleNavigation}>
			{children}
			{isLoading && <Loading />}
		</div>
	);
}
