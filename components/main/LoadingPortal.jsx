'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import LoadingScreen from '@/components/main/LoadingScreen';

export default function LoadingPortal() {
	const [container, setContainer] = useState(null);

	useEffect(() => {
		setContainer(document.body);
	}, []);

	if (!container) {
		return null;
	}

	return createPortal(<LoadingScreen className="fixed" />, container);
}
