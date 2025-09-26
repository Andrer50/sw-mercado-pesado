'use client';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
import { TrendingUp, Shield, Users, Star, Play } from 'lucide-react';
import Image from 'next/image';
import BannerHeroNav from '@/assets/banner-hero-nav.jpg';
import BlurText from '@/components/animations/blur-text/blur-text';
import CountUp from '@/components/animations/count-up/count-up';
import SplitText from '@/components/animations/split-text/split-text';
import ButtonCta from '@/components/ui/cta-button/cta-button';
import { useEffect, useState } from 'react';

export default function HeroSection() {
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		const updateScreenSize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		// Actualizar el estado al montar el componente
		updateScreenSize();

		// Escuchar cambios en el tamaño de la ventana
		window.addEventListener('resize', updateScreenSize);

		// Limpiar el evento al desmontar el componente
		return () => {
			window.removeEventListener('resize', updateScreenSize);
		};
	}, []);

	return (
		<section className='relative w-screen min-h-screen flex items-center overflow-hidden'>
			{/* Background Image with Parallax Effect */}
			<div className='absolute inset-0 scale-110'>
				<Image
					alt='Fondo de Navegación Mercado Pesado'
					fill
					src={BannerHeroNav.src}
					className='object-cover'
					priority
				/>
			</div>

			{/* Enhanced Gradient Overlays */}
			<div className='absolute inset-0 pointer-events-none z-10'>
				<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black' />
				<div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30' />
			</div>

			{/* Main Content */}
			<div className='relative z-20 container mx-auto px-6 lg:px-8 py-20 lg:py-0'>
				<div className='max-w-7xl '>
					<div className='grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20'>
						{/* Left Content */}
						<div className='lg:col-span-7 text-center lg:text-left'>
							{/* Brand Badge */}
							<ScrollReveal
								delay={0.1}
								className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6'>
								<TrendingUp className='w-4 h-4 text-primary' />
								#1 Plataforma de Repuestos
							</ScrollReveal>

							<div className='flex flex-col'>
								{/* Main Title */}
								<SplitText
									tag='h1'
									text='Mercado Pesado'
									className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 gradient-text text-primary '
									delay={100}
									textAlign={isLargeScreen ? 'start' : 'center'}
									duration={0.4}
									ease='power3.out'
									splitType='chars'
									from={{ opacity: 0, y: 80, rotateX: 90 }}
									to={{ opacity: 1, y: 0, rotateX: 0 }}
									threshold={0.1}
									rootMargin='-100px'
								/>

								{/* Subtitle */}
								<BlurText
									text='Encuentra las mejores ofertas de repuestos en minutos. Compara precios, calidad y tiempos de entrega de forma inteligente.'
									delay={300}
									animateBy='words'
									direction='top'
									justify={isLargeScreen ? 'start' : 'center'}
									className='text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto lg:mx-0'
								/>

								{/* CTA Buttons */}
								<ScrollReveal
									delay={0.5}
									className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12'>
									<ButtonCta text='Buscar repuestos'></ButtonCta>

									<button className='group flex items-center gap-3 text-white/80 hover:text-white font-medium px-6 py-4 rounded-2xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/5 transition-all duration-300'>
										<div className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors'>
											<Play className='w-4 h-4 ml-0.5' />
										</div>
										Ver cómo funciona
									</button>
								</ScrollReveal>

								{/* Trust Indicators */}
								<ScrollReveal
									delay={0.7}
									className='flex flex-wrap items-center justify-center lg:justify-start gap-6 text-lg text-white/80 mb-8'>
									<div className='flex items-center gap-2'>
										<Shield className='w-4 h-4 text-primary-400' />
										<span>Transacciones seguras</span>
									</div>
									<div className='flex items-center gap-2'>
										<Users className='w-4 h-4 text-primary-400' />
										<span>+200 proveedores verificados</span>
									</div>
									<div className='flex items-center gap-2'>
										<Star className='w-4 h-4 text-primary-400' />
										<span>4.9/5 valoración</span>
									</div>
								</ScrollReveal>
							</div>
						</div>

						{/* Right Content - Stats */}
						<div className='lg:col-span-5'>
							<ScrollReveal
								delay={0.6}
								className='bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl'>
								{/* Stats Header */}
								<div className='text-center mb-8'>
									<h3 className='text-2xl font-bold text-white mb-2'>Resultados en tiempo real</h3>
									<p className='text-white/70'>Comparación inteligente entre proveedores</p>
								</div>

								{/* Stats Grid */}
								<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 mb-8'>
									{/* Floating Action Elements */}
									<div className='absolute -top-10 -right-8 z-30 hidden lg:block'>
										<ScrollReveal
											delay={2.0}
											className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-lg'>
											<div className='flex items-center gap-3 text-white text-sm'>
												<div className='w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center'>
													<div className='w-2 h-2 bg-white rounded-full animate-pulse' />
												</div>
												<div>
													<div className='font-medium'>+50 nuevas ofertas</div>
													<div className='text-white/70 text-xs'>En las últimas 24h</div>
												</div>
											</div>
										</ScrollReveal>
									</div>
									<ScrollReveal
										delay={0.8}
										className='text-center p-6 bg-white/5 rounded-2xl border border-white/10'>
										<div className='w-12 h-12 bg-gradient-to-r from-primary to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-3'>
											<Users className='w-6 h-6 text-white' />
										</div>
										<div className='text-3xl font-bold text-white mb-1'>
											+
											<CountUp
												to={200}
												duration={2}
												separator='.'
											/>
										</div>
										<div className='text-sm text-white/70'>Proveedores activos</div>
									</ScrollReveal>

									<ScrollReveal
										delay={1.0}
										className='text-center p-6 bg-white/5 rounded-2xl border border-white/10'>
										<div className='w-12 h-12 bg-gradient-to-r from-primary to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-3'>
											<TrendingUp className='w-6 h-6 text-white' />
										</div>
										<div className='text-3xl font-bold text-white mb-1'>
											<CountUp
												to={12345}
												duration={2.2}
												separator='.'
											/>
										</div>
										<div className='text-sm text-white/70'>Ofertas procesadas</div>
									</ScrollReveal>

									<ScrollReveal
										delay={1.2}
										className='text-center p-6 bg-white/5 rounded-2xl border border-white/10 sm:col-span-2 lg:col-span-1 xl:col-span-2'>
										<div className='w-12 h-12 bg-gradient-to-r from-primary to-primary-800 rounded-xl flex items-center justify-center mx-auto mb-3'>
											<Shield className='w-6 h-6 text-white' />
										</div>
										<div className='text-3xl font-bold text-white mb-1'>
											<CountUp
												to={9876}
												duration={2.4}
												separator='.'
											/>
										</div>
										<div className='text-sm text-white/70'>Compras completadas</div>
									</ScrollReveal>
								</div>

								{/* Live Activity Indicator */}
								<div className='flex items-center justify-center gap-2 text-primary-600 text-sm'>
									<div className='w-2 h-2 bg-primary-600 rounded-full animate-pulse' />
									<span>Sistema activo - actualizaciones en tiempo real</span>
								</div>
							</ScrollReveal>
						</div>
					</div>
				</div>
				{/* Scroll Indicator */}
				{/* <ScrollReveal
					delay={1.5}
					className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce'>
					<div className='flex flex-col items-center gap-2'>
						<span className='text-sm'>Explorar más</span>
						<ArrowDown className='w-5 h-5' />
					</div>
				</ScrollReveal> */}
			</div>

			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-10px);
					}
				}
				.animate-float {
					animation: float 3s ease-in-out infinite;
				}
				.gradient-text {
					background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
				}
			`}</style>
		</section>
	);
}
