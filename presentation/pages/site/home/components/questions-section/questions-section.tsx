'use client';

import BlurText from '@/components/animations/blur-text/blur-text';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	MonitorIcon,
	BuildingIcon,
	FileTextIcon,
	LayoutGridIcon,
	WalletIcon,
	DownloadIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
export default function QuestionsSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const features = [
		{
			icon: MonitorIcon,
			title: '¿Cómo puedo encontrar el repuesto que necesito?',
			description: (
				<>
					Solo ingresa el <span className='font-semibold'>nombre, código o categoría</span> del repuesto en nuestro buscador.
					<br />
					<br />
					También puedes comparar entre varios proveedores en segundos para elegir la mejor opción.
				</>
			),
		},
		{
			icon: BuildingIcon,
			title: '¿Los repuestos publicados son nuevos o usados?',
			description: (
				<>
					Depende del proveedor: algunos ofrecen <span className='font-semibold'>repuestos nuevos con garantía</span>,
					mientras que otros publican <span className='font-semibold'>repuestos reacondicionados o usados</span> en buen
					estado.
					<br />
					<br />
					Siempre podrás verificar la condición en la ficha de cada producto.
				</>
			),
		},
		{
			icon: FileTextIcon,
			title: '¿Qué garantía tienen los repuestos?',
			description: (
				<>
					Cada proveedor define sus condiciones de <span className='font-semibold'>garantía y devolución</span>.
					<br />
					<br />
					Encontrarás esta información detallada en la publicación antes de concretar tu compra.
				</>
			),
		},
		{
			icon: LayoutGridIcon,
			title: '¿Cómo realizo una compra segura?',
			description: (
				<>
					Todas las transacciones se realizan a través de nuestra plataforma con{' '}
					<span className='font-semibold'>sistema de pago seguro</span>.
					<br />
					<br />
					El dinero se libera al proveedor solo cuando confirmas que recibiste tu repuesto en buen estado.
				</>
			),
		},
		{
			icon: WalletIcon,
			title: '¿Puedo negociar el precio con el proveedor?',
			description: (
				<>
					Sí, puedes <span className='font-semibold'>enviar ofertas o solicitudes personalizadas</span> a los proveedores.
					<br />
					<br />
					De esta manera logras un mejor precio o condiciones según la cantidad y urgencia de tu pedido.
				</>
			),
		},
		{
			icon: DownloadIcon,
			title: '¿Dónde encuentro mis facturas o comprobantes?',
			description: (
				<>
					Una vez completada tu compra, los comprobantes quedan disponibles en tu perfil en{' '}
					<span className='font-semibold'>Historial de Compras</span>.
					<br />
					<br />
					Puedes descargarlos en cualquier momento para tu contabilidad.
				</>
			),
		},
	];

	// Auto-desplazamiento cada 4 segundos (solo si no está pausado)
	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % features.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [features.length, isPaused]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % features.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const handleMouseEnter = () => {
		setIsPaused(true);
	};

	const handleMouseLeave = () => {
		setIsPaused(false);
	};

	return (
		<div className='my-5'>
			<div className=' px-3'>
				{/* Carousel Container */}
				<ScrollReveal
					delay={0.3}
					direction='fade-up'>
					<div
						className='relative max-w-5xl mx-auto'
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						{/* Carousel Content */}
						<div className='overflow-hidden rounded-2xl shadow-lg'>
							<div
								className='flex transition-transform duration-500 ease-in-out'
								style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
								{features.map((feature, index) => {
									const IconComponent = feature.icon;

									return (
										<div
											key={index}
											className='w-full flex-shrink-0'>
											<Card className='mx-2 bg-transparent backdrop-blur-md border border-white/10 h-full  rounded-2xl'>
												<CardContent className='p-6 lg:px-16 flex justify-center items-center '>
													<div className='flex flex-col justify-center h-full text-center lg:text-left '>
														<div className='flex items-center justify-center lg:justify-start gap-4 mb-4'>
															<div className='p-3 rounded-full bg-primary/15'>
																<IconComponent className='w-8 h-8 text-primary' />
															</div>
															<h3 className='text-xl lg:text-2xl text-primary font-semibold text-start'>
																{feature.title}
															</h3>
														</div>
														<p className='text-base text-neutral-200 leading-relaxed text-justify'>
															{feature.description}
														</p>
													</div>
												</CardContent>
											</Card>
										</div>
									);
								})}
							</div>
						</div>

						{/* Navigation Buttons (Desktop) */}
						<Button
							size='icon'
							className='hidden lg:flex absolute -left-9 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary text-white rounded-full p-3 shadow-md transition'
							onClick={prevSlide}>
							<ChevronLeftIcon className='w-6 h-6' />
						</Button>

						<Button
							size='icon'
							className='hidden lg:flex absolute -right-9 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary text-white rounded-full p-3 shadow-md transition'
							onClick={nextSlide}>
							<ChevronRightIcon className='w-6 h-6' />
						</Button>

						{/* Dots Indicator */}
						<div className='flex justify-center mt-6 gap-3'>
							{features.map((_, index) => (
								<button
									key={index}
									aria-label={`Ir a la diapositiva ${index + 1}`}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentSlide ? 'bg-primary scale-125' : 'bg-neutral-500 hover:bg-neutral-400'
									}`}
									onClick={() => goToSlide(index)}
								/>
							))}
						</div>
					</div>

					{/* Navigation Buttons (Mobile) */}
					<div className='flex lg:hidden justify-center items-center gap-6 mt-6'>
						<Button
							size='icon'
							className='bg-primary-600 text-white rounded-full p-3 shadow-md hover:bg-primary-700 transition'
							onClick={prevSlide}>
							<ChevronLeftIcon className='w-6 h-6' />
						</Button>

						<Button
							size='icon'
							className='bg-primary-600 text-white rounded-full p-3 shadow-md hover:bg-primary-700 transition'
							onClick={nextSlide}>
							<ChevronRightIcon className='w-6 h-6' />
						</Button>
					</div>
				</ScrollReveal>
			</div>
		</div>
	);
}
