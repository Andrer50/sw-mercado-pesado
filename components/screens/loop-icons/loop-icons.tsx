'use client';
import LogoMack from '@/assets/logo/logo-mack.webp';
import LogoSandVick from '@/assets/logo/logo-sandvick.webp';
import LogoCaterpillar from '@/assets/logo/logo-caterpillar.webp';
import LogoAllison from '@/assets/logo/logo-alisson.webp';
import LogoBobcat from '@/assets/logo/logo-bobcat.webp';
import LogoDetroit from '@/assets/logo/logo-detroit.webp';
import LogoBomag from '@/assets/logo/logo-bomag.webp';
import LogoFayat from '@/assets/logo/logo-fayat.webp';
import LogoKomatsu from '@/assets/logo/logo-komatsu.webp';
import LogoManitowoc from '@/assets/logo/logo-manitowoc.webp';
import LogoWaukesha from '@/assets/logo/logo-waukesha.webp';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Alternative with image sources
const imageLogos = [
	{ src: LogoMack.src, alt: 'Company 1', href: 'https://company1.com', width: 120, height: 48 },
	{ src: LogoSandVick.src, alt: 'Company 2', href: 'https://company2.com', width: 120, height: 48 },
	{ src: LogoCaterpillar.src, alt: 'Company 3', href: 'https://company3.com', width: 120, height: 48 },
	{ src: LogoAllison.src, alt: 'Company 4', href: 'https://company4.com', width: 120, height: 48 },
	{ src: LogoBobcat.src, alt: 'Company 5', href: 'https://company5.com', width: 120, height: 48 },
	{ src: LogoDetroit.src, alt: 'Company 6', href: 'https://company6.com', width: 120, height: 48 },
	{ src: LogoBomag.src, alt: 'Company 7', href: 'https://company7.com', width: 120, height: 48 },
	{ src: LogoFayat.src, alt: 'Company 8', href: 'https://company8.com', width: 120, height: 48 },
	{ src: LogoKomatsu.src, alt: 'Company 9', href: 'https://company9.com', width: 120, height: 48 },
	{ src: LogoManitowoc.src, alt: 'Company 10', href: 'https://company10.com', width: 120, height: 48 },
	{ src: LogoWaukesha.src, alt: 'Company 11', href: 'https://company11.com', width: 120, height: 48 },
];

export default function LoopIcons() {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		let animationFrame: number;
		let lastTimestamp = 0;
		const SCROLL_SPEED = 0.3; // px por frame, más suave
		let currentScroll = 0;

		const smoothScroll = (timestamp: number) => {
			if (!lastTimestamp) lastTimestamp = timestamp;
			const elapsed = timestamp - lastTimestamp;
			lastTimestamp = timestamp;

			// Interpolación suave
			currentScroll += SCROLL_SPEED * (elapsed / 16.67);
			if (currentScroll + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
				currentScroll = 0;
			}
			scrollContainer.scrollLeft = currentScroll;
			animationFrame = requestAnimationFrame(smoothScroll);
		};

		animationFrame = requestAnimationFrame(smoothScroll);

		return () => {
			cancelAnimationFrame(animationFrame);
		};
	}, []);
	return (
		<div
			className='w-full h-[14vh] overflow-hidden relative'
			style={{ overflowX: 'hidden' }}>
			<div
				ref={scrollRef}
				className='flex gap-10 overflow-x-auto scrollbar-hide p-4'>
				{[...imageLogos, ...imageLogos].map((logo, index) => (
					<Image
						key={index}
						src={logo.src}
						width={logo.width}
						height={logo.height}
						alt={logo.alt}
						className='object-contain'
					/>
				))}
			</div>

			{/* Gradiente izquierda */}
			<div className='pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black to-transparent z-10' />
			{/* Gradiente derecha */}
			<div className='pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black to-transparent z-10' />

			<div className='flex justify-center gap-2'>
				{Array.from({ length: Math.ceil(imageLogos.length / 3) }).map((_, index) => (
					<div
						key={index}
						className='w-2 h-2 rounded-full bg-foreground-300 opacity-50'></div>
				))}
			</div>

			<style jsx>{`
				.scrollbar-hide {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</div>
	);
}
