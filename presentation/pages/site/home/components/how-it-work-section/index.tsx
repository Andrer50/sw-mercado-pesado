'use client';
import BlurText from '@/components/animations/blur-text/blur-text';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
import { FilePen, Search, HandCoins, ArrowRight, CheckCircle } from 'lucide-react';
import SplitText from '@/components/animations/split-text/split-text';
import ButtonCta from '@/components/ui/cta-button/cta-button';
export default function HowItWorksSection() {
	const steps = [
		{
			icon: FilePen,
			number: '01',
			title: 'Publica tu cotización',
			description:
				'Completa nuestro formulario intuitivo con los repuestos que necesitas. Tu solicitud será enviada automáticamente a múltiples proveedores especializados.',
			color: 'from-blue-500 to-blue-600',
			bgColor: 'bg-blue-50',
			delay: 0.1,
		},
		{
			icon: Search,
			number: '02',
			title: 'Compara ofertas',
			description:
				'Recibe múltiples cotizaciones de proveedores verificados. Compara precios, tiempos de entrega y reputación en una sola vista.',
			color: 'from-purple-500 to-purple-600',
			bgColor: 'bg-purple-50',
			delay: 0.3,
		},
		{
			icon: HandCoins,
			number: '03',
			title: 'Compra fácil y segura',
			description:
				'Elige la mejor oferta y realiza tu compra con total confianza. Sistema de pagos seguros y seguimiento en tiempo real.',
			color: 'from-green-500 to-green-600',
			bgColor: 'bg-green-50',
			delay: 0.5,
		},
	];

	return (
		<section className='relative py-20 lg:py-32 bg-transparent overflow-hidden'>
			{/* Floating geometric shapes */}
			<div className='absolute top-20 left-10 w-20 h-20 bg-primary-400/30 rounded-full blur-xl animate-float' />
			<div className='absolute top-40 right-20 w-32 h-32 bg-primary-600/20 rounded-full blur-xl animate-float-delay' />
			<div className='absolute bottom-20 left-1/4 w-16 h-16 bg-primary-800/40 rounded-full blur-xl animate-float' />
			<div className='container mx-auto px-6 lg:px-8 relative'>
				{/* Header Section */}
				<div className='text-center mb-16 lg:mb-24'>
					<div className='flex items-center justify-center gap-3 text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
						<BlurText
							text='¿Cómo'
							delay={300}
							animateBy='words'
							justify='center'
							direction='top'
							className='text-white/80'
						/>
						<ScrollReveal
							delay={0.6}
							direction='fade-up'>
							<span className='px-6 py-3 text-white bg-primary-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300'>
								funciona?
							</span>
						</ScrollReveal>
					</div>

					<div className='max-w-3xl mx-auto'>
						<SplitText
							tag='p'
							text='En 3 simples pasos puedes conseguir los repuestos que necesitas de forma rápida, segura y al mejor precio del mercado'
							className='text-lg text-center text-white/80 font-light leading-relaxed'
							delay={100}
							duration={0.3}
							ease='power3.out'
							splitType='words'
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 0 }}
							threshold={0.1}
							rootMargin='-100px'
						/>
					</div>

					{/* Trust indicators */}
					<ScrollReveal
						delay={0.8}
						className='flex justify-center items-center gap-8 mt-8 text-sm text-slate-500'>
						<div className='flex items-center gap-2'>
							<CheckCircle className='w-4 h-4 text-primary-500' />
							<span>100% Verificado</span>
						</div>
						<div className='flex items-center gap-2'>
							<CheckCircle className='w-4 h-4 text-primary-500' />
							<span>Pagos Seguros</span>
						</div>
						<div className='flex items-center gap-2'>
							<CheckCircle className='w-4 h-4 text-primary-500' />
							<span>Soporte 24/7</span>
						</div>
					</ScrollReveal>
				</div>

				{/* Steps Section */}
				<div className='relative max-w-7xl mx-auto'>
					{/* Connection line - hidden on mobile */}
					<ScrollReveal
						delay={0.9}
						direction='zoom-in'
						className='hidden md:block absolute  top-1/2 left-0 right-0 transform -translate-y-1/2 z-0'>
						<div className=' h-0.5 bg-primary ' />
					</ScrollReveal>
					<div className='grid gap-8 md:grid-cols-3 relative z-10'>
						{steps.map((step, index) => (
							<ScrollReveal
								key={index}
								delay={step.delay}
								className='relative group'>
								{/* Connection arrow - hidden on mobile */}
								{index < steps.length - 1 && (
									<div className='hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20'>
										<ScrollReveal
											delay={0.9}
											direction='zoom-in'
											className='w-8 h-8 bg-primary-200 rounded-full border-2 border-primary-900 flex items-center justify-center group-hover:border-primary transition-colors duration-300'>
											<ArrowRight className='w-4 h-4 text-black group-hover:text-primary transition-colors duration-300' />
										</ScrollReveal>
									</div>
								)}

								{/* Step Card */}
								<div className='relative bg-black rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-primary-600 group-hover:border-primary-700'>
									{/* Step number badge */}
									<div className='absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg'>
										{step.number}
									</div>

									{/* Content */}
									<h3 className='font-bold text-2xl mb-4 text-primary-300 group-hover:text-primary-400 transition-colors'>
										{step.title}
									</h3>
									<p className='text-white/80 leading-relaxed text-base group-hover:text-white transition-colors text-justify'>
										{step.description}
									</p>

									{/* Hover effect decoration */}
									<div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl' />
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<ScrollReveal
					delay={0.7}
					className='text-center mt-16'>
					<ButtonCta
						text='Comenzar ahora'
						classNameButton='py-6 px-12 text-xl'></ButtonCta>
				</ScrollReveal>
			</div>

			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					25% {
						transform: translateY(-20px) rotate(5deg);
					}
					50% {
						transform: translateY(-10px) rotate(-5deg);
					}
					75% {
						transform: translateY(-15px) rotate(3deg);
					}
				}
				@keyframes float-delay {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					25% {
						transform: translateY(-15px) rotate(-3deg);
					}
					50% {
						transform: translateY(-25px) rotate(5deg);
					}
					75% {
						transform: translateY(-5px) rotate(-7deg);
					}
				}
				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
				.animate-float-delay {
					animation: float-delay 8s ease-in-out infinite 2s;
				}
			`}</style>
		</section>
	);
}
