import { ReactNode } from 'react';
export type Easing = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | number[] | [number, number, number, number];

export type Direction = 'up' | 'down' | 'left' | 'right';
export type ExtendedDirection =
	| Direction
	| 'fade-up'
	| 'fade-down'
	| 'fade-left'
	| 'fade-right'
	| 'fade-up-right'
	| 'fade-up-left'
	| 'fade-down-right'
	| 'fade-down-left'
	| 'zoom-in'
	| 'zoom-out'
	| 'flip-left'
	| 'flip-right'
	| 'flip-up'
	| 'flip-down'
	| 'fade'
	| 'scale';

export type AnimationType = 'fadeIn' | 'scrollReveal' | 'slideIn' | 'bounceIn' | 'rotateIn' | 'hoverScale';

export interface BaseAnimationProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	duration?: number;
}

export interface FadeInProps extends BaseAnimationProps {
	direction?: Direction;
}

export interface ScrollRevealProps extends BaseAnimationProps {
	direction?: ExtendedDirection;
	distance?: number;
	once?: boolean;
	threshold?: number;
	ease?: string;
}

export interface HoverScaleProps {
	children: ReactNode;
	scale?: number;
	tapScale?: number;
	className?: string;
}

export interface StaggerContainerProps {
	children: ReactNode;
	staggerDelay?: number;
	className?: string;
}

export interface StaggerItemProps {
	children: ReactNode;
	direction?: Direction;
	distance?: number;
	className?: string;
}

export interface SlideInProps extends BaseAnimationProps {
	direction?: Direction;
}

export interface RotateInProps extends BaseAnimationProps {
	rotation?: number;
}

export interface TypewriterProps {
	text: string;
	delay?: number;
	className?: string;
}

export interface AnimatedNextUIProps {
	component: React.ComponentType<unknown>;
	animation?: AnimationType;
	animationProps?: Record<string, unknown>;
	children: ReactNode;
	[key: string]: unknown;
}
