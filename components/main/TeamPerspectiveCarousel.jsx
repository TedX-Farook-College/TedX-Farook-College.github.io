'use client';

import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React from 'react';
import {
	Autoplay,
	EffectCoverflow,
	Navigation,
	Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { cn } from '@/lib/utils';
import { TeamCard } from './TeamCard';

export function TeamPerspectiveCarousel({
	members,
	className,
	showPagination = true,
	showNavigation = true,
	loop = true,
	autoplay: autoplayEnabled = false,
	spaceBetween = 0,
}) {
	const css = `
    .TeamCarousel .swiper-pagination-bullet {
      background-color: #fff;
      opacity: 0.5;
    }
    .TeamCarousel .swiper-pagination-bullet-active {
      background-color: #ff2b06;
      opacity: 1;
    }
  `;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: 0.2,
			}}
			className={cn('relative w-full', className)}
		>
			<style>{css}</style>
			<Swiper
				effect="coverflow"
				grabCursor={true}
				centeredSlides={true}
				loop={loop}
				autoplay={
					autoplayEnabled
						? {
								delay: 3500,
								disableOnInteraction: false,
						  }
						: false
				}
				spaceBetween={spaceBetween}
				slidesPerView={1} // Mobile
				breakpoints={{
					640: {
						slidesPerView: 2,
					},
					1024: {
						// lg
						slidesPerView: 3,
					},
					1536: {
						// 2xl
						slidesPerView: 4,
					},
				}}
				coverflowEffect={{
					rotate: 0,
					slideShadows: false,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={
					showPagination
						? {
								clickable: true,
						  }
						: false
				}
				navigation={
					showNavigation
						? {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
						  }
						: false
				}
				className="TeamCarousel w-full py-12"
				modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
			>
				{members.map((member) => (
					<SwiperSlide
						key={member.id}
						className="!h-[400px] w-full md:!h-[450px]"
					>
						<TeamCard member={member} className="h-full" />
					</SwiperSlide>
				))}
				{showNavigation && (
					<div className="opacity-0 transition-opacity group-hover:opacity-100">
						<div className="swiper-button-next after:hidden !right-0 md:!right-4">
							<ChevronRightIcon className="h-8 w-8 rounded-full bg-black/30 p-1 text-white backdrop-blur-sm" />
						</div>
						<div className="swiper-button-prev after:hidden !left-0 md:!left-4">
							<ChevronLeftIcon className="h-8 w-8 rounded-full bg-black/30 p-1 text-white backdrop-blur-sm" />
						</div>
					</div>
				)}
			</Swiper>
		</motion.div>
	);
}
