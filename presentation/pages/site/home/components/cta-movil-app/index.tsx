'use client';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { HiDownload, HiSparkles } from 'react-icons/hi';
import MovilAppShot from '@/assets/mercado-pesado-movil-shot2.png';
import Image from 'next/image';
import { Cable, Star } from 'lucide-react';

export default function CTAMovilApp() {
	return (
		<section className='relative overflow-hidden bg-transparent'>
			<div className='relative container mx-auto px-6 lg:px-8 py-30 pb-44 lg:py-32 '>
				<div className='flex justify-center items-center flex-col lg:flex-row gap-12 lg:gap-20'>
					{/* Content Section */}
					<ScrollReveal className='flex-1 max-w-2xl text-center lg:text-left'>
						{/* Badge */}
						<div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6'>
							<HiSparkles className='w-4 h-4' />
							Nueva App Móvil
						</div>

						{/* Heading */}
						<h2 className='text-white font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6'>
							Cotiza tus{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-800 to-primary'>
								repuestos
							</span>{' '}
							cuando quieras y donde quieras
						</h2>

						{/* Subtitle */}
						<p className='text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0'>
							Accede a miles de repuestos, compara precios en tiempo real y gestiona tus pedidos desde cualquier lugar.
						</p>

						{/* App Store Buttons */}
						<div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8'>
							<button className='group relative bg-primary-900 hover:bg-primary-700 text-white flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[200px]'>
								<div className='bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors'>
									<FaGooglePlay size={24} />
								</div>
								<div className='text-left'>
									<div className='text-xs text-slate-300 uppercase tracking-wide'>Disponible en</div>
									<div className='text-sm font-semibold'>Google Play</div>
								</div>
							</button>

							<button className='group relative bg-primary-900 hover:bg-primary-700 text-white flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[200px]'>
								<div className='bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors'>
									<FaAppStore size={24} />
								</div>
								<div className='text-left'>
									<div className='text-xs text-slate-300 uppercase tracking-wide'>Disponible en</div>
									<div className='text-sm font-semibold'>App Store</div>
								</div>
							</button>
						</div>

						{/* Stats or Features */}
						<div className='flex items-center justify-center lg:justify-start gap-8 text-sm text-white/70'>
							<div className='flex flex-col sm:flex-row items-center gap-2'>
								<div className='flex items-center gap-1'>
									<HiDownload className='w-4 h-4 text-primary' />
									<span>+10k</span>
								</div>
								<span>descargas</span>
							</div>
							<div className='flex  flex-col sm:flex-row items-center gap-2'>
								<div className='flex items-center gap-1'>
									<Star className='w-4 h-4 text-primary'></Star>
									<span>4.8</span>
								</div>

								<span>valoración</span>
							</div>
							<div className='flex  flex-col sm:flex-row items-center gap-2'>
								<div className='flex items-center gap-1'>
									<Cable className='w-4 h-4 text-primary'></Cable>
									<span>Actualizaciones</span>
								</div>
								<span>constantes</span>
							</div>
						</div>
					</ScrollReveal>

					{/* Image Section */}
					<ScrollReveal className='flex-1 max-w-md lg:max-w-lg relative '>
						{/* Decorative background */}
						<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-[3rem] blur-3xl transform rotate-6 scale-110' />

						{/* Phone mockup container */}
						<div className='relative'>
							<div className='relative w-80 h-[500px] mx-auto'>
								<Image
									fill
									src={MovilAppShot.src}
									alt='Captura de pantalla de la app móvil Mercado Pesado'
									className='rounded-[2.5rem] object-cover '
									priority
								/>

								{/* Floating elements */}
								<div className='absolute -top-0 -right-0 bg-black/25 rounded-2xl p-4 shadow-lg border border-primary-800 animate-bounce-slow'>
									<div className='w-12 h-12 bg-black/25 rounded-xl flex items-center justify-center'>
										<span className='text-2xl'>💰</span>
									</div>
								</div>

								<div
									className='absolute -bottom-0 -left-0 bg-black/25 rounded-2xl p-4 shadow-lg border border-primary-800 animate-bounce-slow'
									style={{ animationDelay: '1s' }}>
									<div className='w-12 h-12 bg-black/25 rounded-xl flex items-center justify-center'>
										<span className='text-2xl'>⚙️</span>
									</div>
								</div>
							</div>
						</div>
					</ScrollReveal>
				</div>
			</div>

			<style jsx>{`
				@keyframes bounce-slow {
					0%,
					20%,
					50%,
					80%,
					100% {
						transform: translateY(0);
					}
					40% {
						transform: translateY(-10px);
					}
					60% {
						transform: translateY(-5px);
					}
				}
				.animate-bounce-slow {
					animation: bounce-slow 3s ease-in-out infinite;
				}
			`}</style>
		</section>
	);
}
