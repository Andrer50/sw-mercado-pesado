import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProductSiteProps {
	className?: string;
	title: string;
	description?: string;
	href?: string;
	imageUrl: string;
}

const CardProductSite: React.FC<CardProductSiteProps> = ({ className, description, title, href, imageUrl }) => {
	const Wrapper = href ? Link : 'div';

	return (
		<div
			className={`group w-full md:w-64 h-84 bg-white/5 border border-white/10 rounded-2xl text-neutral-200 p-4 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-400/40 hover:bg-white/10 ${className}`}>
			{/* Imagen */}
			<div className='relative w-full h-40 rounded-xl overflow-hidden'>
				<Image
					src={imageUrl}
					alt={title}
					fill
					className='object-cover transition-transform duration-300 group-hover:scale-105'
				/>
			</div>

			{/* Texto */}
			<div className='flex flex-col gap-1 flex-grow'>
				<h3 className='text-lg font-bold text-white line-clamp-1'>{title}</h3>
				{description && <p className='text-sm text-neutral-400 line-clamp-2 truncate'>{description}</p>}
			</div>

			{/* Botón */}
			<Wrapper
				href={href || '#'}
				className='w-full mt-auto'>
				<button className='w-full bg-primary-400 font-bold py-2 rounded-xl text-white transition-colors duration-200 hover:bg-primary-500'>
					Ver más
				</button>
			</Wrapper>
		</div>
	);
};

export default CardProductSite;
