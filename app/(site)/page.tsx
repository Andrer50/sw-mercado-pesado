import Image from 'next/image';
import BannerHeroNav from '@/assets/banner-hero-nav.jpg';
import SplitText from '@/components/animations/split-text/split-text';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/animations/blur-text/blur-text';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
import LoopIcons from '@/components/screens/loop-icons/loop-icons';
import CountUp from '@/components/animations/count-up/count-up';
import { FilePen, HandCoins, Search } from 'lucide-react';
import ProductsSectionSite from '@/components/screens/products-section-site/products-section-site';
import QuestionsSection from '@/components/screens/questions-section/questions-section';

export default function PrincipalPage() {
	return (
		<div>
			<section className='relative w-screen h-[50vh] lg:h-[65vh]'>
				<Image
					alt='Fondo de Navegación Mercado Pesado'
					fill
					src={BannerHeroNav.src}
					className='object-cover'
				/>
				{/* Overlay degradado arriba y abajo */}

				<div className='absolute inset-0 pointer-events-none z-10'>
					<div className='absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/90 via-black/50 to-transparent' />
					<div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
				</div>
				<div className='relative z-20 flex flex-col items-start justify-center h-full max-w-7xl px-4 mx-auto text-white '>
					<SplitText
						tag='h1'
						text='Mercado Pesado'
						className='text-[2rem] sm:text-[4rem] lg:text-[7rem] text-primary-400 font-bold font-montserrat leading-tight shadow-sm text-shadow-lg '
						delay={100}
						duration={0.3}
						ease='power3.out'
						splitType='chars'
						from={{ opacity: 0, y: 40 }}
						to={{ opacity: 1, y: 0 }}
						threshold={0.1}
						rootMargin='-100px'
						textAlign='start'
					/>
					<BlurText
						text='Encuentra las mejores ofertas de respuestos en minutos'
						delay={300}
						animateBy='words'
						justify='start'
						direction='top'
						className='text-[0.7rem] sm:text-[1.5rem] font-medium  text-shadow-lg'
					/>
					<ScrollReveal className='mt-3'>
						<Button
							size={'sm'}
							className='text-sm md:text-md'>
							Buscar repuestos
						</Button>
					</ScrollReveal>
					{/* Estadísticas rápidas (CountUp) */}
					<div className='w-full'>
						<div className='mt-6 w-full flex flex-col lg:flex-row items-start sm:items-center gap-4'>
							<div className='grid grid-cols-2 lg:grid-cols-3  gap-4 p-3 bg-white/5 rounded-lg w-full'>
								<ScrollReveal className='flex flex-col w-full items-center'>
									<span className='text-sm md:text-md text-neutral-200'>Proveedores</span>
									<span className='text-xl md:text-3xl font-bold text-white'>
										+
										<CountUp
											to={200}
											duration={2}
											separator='.'
											className=' '
										/>
									</span>
								</ScrollReveal>

								<ScrollReveal className='flex flex-col w-full items-center'>
									<span className='text-sm md:text-md text-neutral-200'>Ofertas recibidas</span>
									<CountUp
										to={12345}
										duration={2.2}
										separator='.'
										className='text-xl md:text-3xl font-bold text-white'
									/>
								</ScrollReveal>
								<ScrollReveal className='flex flex-col w-full col-span-2 lg:col-span-1 items-center'>
									<span className='text-sm md:text-md text-neutral-200'>Compras seguras</span>
									<CountUp
										to={9876}
										duration={2.4}
										separator='.'
										className='text-xl md:text-3xl font-bold text-white'
									/>
								</ScrollReveal>
							</div>
							<ScrollReveal
								direction='left'
								delay={0.6}
								className='mt-3 text-sm md:text-md text-neutral-200 text-center text-wrap w-full'>
								Resultados en tiempo real — comparación rápida entre proveedores.
							</ScrollReveal>
						</div>
					</div>
				</div>
			</section>
			<section>
				<LoopIcons />
			</section>
			<section className='my-10'>
				<BlurText
					text='¿Como funciona?'
					delay={300}
					animateBy='words'
					justify='center'
					direction='top'
					className='text-[1.25rem] font-bold md:text-[1.5rem] lg:text-[3rem] text-primary'
				/>
				<div>
					<section className='mt-8 grid gap-8 md:grid-cols-3'>
						<ScrollReveal
							delay={0.1}
							className='flex flex-col items-center text-center p-6 rounded-xl  shadow-lg'>
							<span className='text-4xl text-primary-400 mb-2'>
								<FilePen className='w-15 h-15'></FilePen>
							</span>
							<h3 className='font-bold text-lg mb-2 text-primary-400'>1. Publica tu cotización</h3>
							<p className='text-neutral-400'>
								Completa el formulario con los repuestos que necesitas. Tu solicitud será enviada a múltiples proveedores
								especializados.
							</p>
						</ScrollReveal>
						<ScrollReveal
							delay={0.3}
							className='flex flex-col items-center text-center p-6 rounded-xl  shadow-lg'>
							<span className='text-4xl text-primary-400 mb-2'>
								<Search className='w-15 h-15'></Search>
							</span>
							<h3 className='font-bold text-lg mb-2 text-primary-400'>2. Compara ofertas</h3>
							<p className='text-neutral-400'>
								Recibe distintas ofertas de proveedores. Compara precios, tiempos de entrega y reputación para tomar la
								mejor decisión.
							</p>
						</ScrollReveal>
						<ScrollReveal
							delay={0.5}
							className='flex flex-col items-center text-center p-6 rounded-xl  shadow-lg'>
							<span className='text-4xl text-primary-400 mb-2'>
								<HandCoins className='w-15 h-15'></HandCoins>
							</span>
							<h3 className='font-bold text-lg mb-2 text-primary-400'>3. Compra fácil y segura</h3>
							<p className='text-neutral-400'>
								Elige la oferta que prefieras y realiza tu compra de forma rápida y segura. ¡Recibe tus repuestos sin
								complicaciones!
							</p>
						</ScrollReveal>
					</section>
				</div>
			</section>
			<section className='px-4 md:px-0'>
				<BlurText
					text='Los mejores repuestos al mejor precio'
					delay={300}
					animateBy='words'
					justify='center'
					direction='top'
					className='text-[1.25rem] font-bold md:text-[1.5rem] lg:text-[3rem] text-primary'
				/>
				<div className='flex justify-center my-10'>
					<ProductsSectionSite />
				</div>
			</section>
			<section className='my-20'>
				<QuestionsSection />
			</section>
		</div>
	);
}
