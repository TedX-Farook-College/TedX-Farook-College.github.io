'use client';

import React from 'react';
import { teamData } from '@/lib/teamData';
import { TeamPerspectiveCarousel } from '@/components/main/TeamPerspectiveCarousel';

export function Team() {
	const departments = Object.keys(teamData);

	return (
		<section className="relative w-full min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden">
			<div className="mx-auto w-full max-w-full px-0 lg:px-8 py-10">
				<div className="mx-auto w-full text-center mb-12 md:mb-16">
					<p className="text-lg font-semibold leading-7 text-gray-400">
						The people behind this
					</p>
					<h1 className="mt-4 text-5xl font-bold tracking-tight text-red-700 sm:text-6xl">
						Our Team
					</h1>
					<p className="mt-6 px-4 text-base leading-relaxed max-w-prose mx-auto text-gray-300 break-words">
						The people who make it all happen. Meet the team behind
						TEDxFarookCollege, the driving force behind our mission to share
						ideas worth spreading.
					</p>
				</div>

				<div className="flex flex-col gap-16">
					{departments.map((deptName) => (
						<section key={deptName} className="w-full group">
							<h2 className="mb-4 ml-4 md:ml-8 lg:ml-12 inline-block border-b-2 border-red-600 pb-1 text-3xl font-semibold text-white">
								{deptName}
							</h2>
							<TeamPerspectiveCarousel
								members={teamData[deptName]}
								loop={teamData[deptName].length > 5} // Only loop if there are enough members
								autoplay={false}
							/>
						</section>
					))}
				</div>
			</div>
		</section>
	);
}
