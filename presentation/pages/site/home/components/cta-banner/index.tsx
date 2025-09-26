'use client';
import Image from 'next/image';
import ImageCTA from '@/assets/extendedora-asfalto.jpg';
import ButtonCta from '@/components/ui/cta-button/cta-button';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
export default function CTABanner() {
	return (
		<ScrollReveal
			delay={0.5}
			className='flex items-center justify-between w-full h-[20rem] relative rounded-2xl'>
			{/* Background Pattern/Image Placeholder */}
			<Image
				src={ImageCTA}
				alt='Fondo'
				fill
				className='absolute inset-0 object-cover  rounded-2xl'
			/>
			<div className='absolute inset-0 bg-black/25 w-full'></div>
			{/* Content */}
			<div className='flex flex-col items-start w-full pl-10 z-10'>
				<h2 className='text-4xl md:text-6xl font-bold text-white text-shadow-lg mb-2'>Únete al cambio</h2>
				<span className='text-neutral-100 text-lg drop-shadow-super-dark mb-5'>Efectividad al cotizar tus repuestos.</span>
				<ButtonCta text='Registrarse'></ButtonCta>
			</div>
		</ScrollReveal>
	);
}
