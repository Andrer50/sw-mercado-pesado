'use client';
import { Easing, motion, Transition, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExtendedDirection, ScrollRevealProps } from '../interfaces';

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
	children,
	delay = 0,
	duration = 0.6,
	direction = 'up',
	distance = 50,
	once = true,
	className = '',
	threshold = 0.1,
	ease = 'easeOut',
	...props
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		once,
		amount: threshold,
	});

	const directions: Record<
		ExtendedDirection,
		{
			x?: number;
			y?: number;
			scale?: number;
			rotateX?: number;
			rotateY?: number;
		}
	> = {
		up: { y: distance },
		down: { y: -distance },
		left: { x: distance },
		right: { x: -distance },

		// Fade con direcciones
		'fade-up': { y: distance },
		'fade-down': { y: -distance },
		'fade-left': { x: distance },
		'fade-right': { x: -distance },

		// Fade con direcciones diagonales
		'fade-up-right': { y: distance, x: -distance },
		'fade-up-left': { y: distance, x: distance },
		'fade-down-right': { y: -distance, x: -distance },
		'fade-down-left': { y: -distance, x: distance },

		// Otros efectos
		'zoom-in': { scale: 0.8 },
		'zoom-out': { scale: 1.2 },
		'flip-left': { rotateY: -90 },
		'flip-right': { rotateY: 90 },
		'flip-up': { rotateX: -90 },
		'flip-down': { rotateX: 90 },
		fade: {},
		scale: { scale: 0.8 },
	};

	const transition: Transition = {
		duration,
		delay,
		ease: ease as Easing,
	};

	return (
		<motion.div
			ref={ref}
			initial={{
				opacity: 0,
				...directions[direction],
			}}
			animate={
				isInView
					? {
							opacity: 1,
							x: 0,
							y: 0,
							scale: 1,
							rotateX: 0,
							rotateY: 0,
					  }
					: {}
			}
			transition={transition}
			className={`will-change-opacity will-change-transform ${className}`}
			{...props}>
			{children}
		</motion.div>
	);
};
