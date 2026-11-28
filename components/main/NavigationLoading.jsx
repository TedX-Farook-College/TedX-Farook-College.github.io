'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingPortal from '@/components/main/LoadingPortal';

export default function NavigationLoading({ children }) {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(true);
	const fallbackTimeout = useRef(null);

	useEffect(() => {
		if (!isLoading) {
			return;
		}

		const previousOverflow = document.documentElement.style.overflow;
		document.documentElement.style.overflow = 'hidden';

		return () => {
			document.documentElement.style.overflow = previousOverflow;
		};
	}, [isLoading]);

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
		<div onClickCapture={handleNavigation}>
			{children}
			{isLoading && <LoadingPortal />}
		</div>
	);
}
