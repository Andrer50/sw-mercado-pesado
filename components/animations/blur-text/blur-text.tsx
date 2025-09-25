'use client';
import { motion, Transition, Easing } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
	text?: string;
	delay?: number;
	className?: string;
	animateBy?: 'words' | 'letters';
	direction?: 'top' | 'bottom';
	threshold?: number;
	rootMargin?: string;
	animationFrom?: Record<string, string | number>;
	animationTo?: Array<Record<string, string | number>>;
	easing?: Easing | Easing[];
	onAnimationComplete?: () => void;
	stepDuration?: number;
	justify?: 'start' | 'center' | 'end';
};

const buildKeyframes = (
	from: Record<string, string | number>,
	steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
	const keys = new Set<string>([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))]);

	const keyframes: Record<string, Array<string | number>> = {};
	keys.forEach((k) => {
		keyframes[k] = [from[k], ...steps.map((s) => s[k])];
	});
	return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
	text = '',
	delay = 200,
	className = '',
	animateBy = text.length > 80 ? 'words' : 'letters',
	direction = 'top',
	threshold = 0.1,
	rootMargin = '0px',
	animationFrom,
	animationTo,
	easing = (t: number) => t,
	onAnimationComplete,
	stepDuration = 0.35,
	justify = 'start',
}) => {
	const elements = useMemo(() => (animateBy === 'words' ? text.split(' ') : text.split('')), [text, animateBy]);
	const [inView, setInView] = useState(false);
	const ref = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.unobserve(ref.current as Element);
				}
			},
			{ threshold, rootMargin }
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	const defaultFrom = useMemo(
		() => (direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 }),
		[direction]
	);

	const defaultTo = useMemo(
		() => [
			{
				filter: 'blur(5px)',
				opacity: 0.5,
				y: direction === 'top' ? 5 : -5,
			},
			{ filter: 'blur(0px)', opacity: 1, y: 0 },
		],
		[direction]
	);

	const fromSnapshot = animationFrom ?? defaultFrom;
	const toSnapshots = animationTo ?? defaultTo;

	const stepCount = toSnapshots.length + 1;
	const totalDuration = stepDuration * (stepCount - 1);
	const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

	// Precalcular los keyframes y transiciones para cada elemento
	const animateKeyframes = useMemo(() => buildKeyframes(fromSnapshot, toSnapshots), [fromSnapshot, toSnapshots]);
	const spanTransitions: Transition[] = useMemo(
		() =>
			elements.map((_, index) => ({
				duration: totalDuration,
				times,
				delay: (index * delay) / 1000,
				ease: easing,
			})),
		[elements, totalDuration, times, delay, easing]
	);

	return (
		<p
			ref={ref}
			className={`blur-text ${className} flex flex-wrap ${
				justify === 'center' ? 'justify-center' : justify === 'end' ? 'justify-end' : 'justify-start'
			}`}>
			{elements.map((segment, index) => (
				<motion.span
					key={index}
					initial={fromSnapshot}
					animate={inView ? animateKeyframes : fromSnapshot}
					transition={spanTransitions[index]}
					onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
					style={{
						display: 'inline-block',
						willChange: 'transform, filter, opacity',
					}}>
					{segment === ' ' ? '\u00A0' : segment}
					{animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
				</motion.span>
			))}
		</p>
	);
};

import { memo } from 'react';
export default memo(BlurText);
