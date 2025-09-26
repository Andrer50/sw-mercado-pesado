import React from 'react';
import { Button } from '../button';

interface ButtonCtaProps {
	text: string;
	href?: string;
	onPress?: () => void;
	className?: string;
	classNameButton?: string;
}

const ButtonCta: React.FC<ButtonCtaProps> = ({ className, text, onPress, classNameButton }) => {
	return (
		<div className={`relative inline-flex items-center justify-center gap-4 group ${className}`}>
			<div className='absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-primary  to-secondary rounded-xl blur-lg filter lg:group-hover:opacity-100 group-hover:duration-200' />
			<Button
				onClick={onPress}
				role='button'
				className={`group relative inline-flex w-full items-center justify-center text-base rounded-xl  px-8 py-3 font-semibold text-white transition-all duration-200 bg-primary lg:hover:bg-primary lg:hover:shadow-lg lg:hover:-translate-y-0.5 lg:hover:shadow-gray-600/30 ${classNameButton}`}
				title='payment'>
				{text}
				<svg
					aria-hidden='true'
					viewBox='0 0 10 10'
					height={10}
					width={10}
					fill='none'
					className='mt-0.5 ml-2 -mr-1 stroke-white stroke-2'>
					<path
						d='M0 5h7'
						className='transition opacity-0 group-hover:opacity-100'
					/>
					<path
						d='M1 1l4 4-4 4'
						className='transition group-hover:translate-x-[3px]'
					/>
				</svg>
			</Button>
		</div>
	);
};

export default ButtonCta;
