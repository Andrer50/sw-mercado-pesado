import Image from 'next/image';
import BannerHeroNav from '@/assets/banner-hero-nav.jpg';
import SplitText from '@/components/animations/split-text/split-text';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/animations/blur-text/blur-text';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
import CountUp from '@/components/animations/count-up/count-up';
import ProductsSectionSite from '@/presentation/pages/site/home/components/products-section-site/products-section-site';
import QuestionsSection from '@/presentation/pages/site/home/components/questions-section/questions-section';
import CTABanner from '@/presentation/pages/site/home/components/cta-banner';
import LoopIcons from '@/presentation/pages/site/home/components/loop-icons/loop-icons';
import FeaturesSection from '@/presentation/pages/site/home/components/features-section';
import CTAMovilApp from '@/presentation/pages/site/home/components/cta-movil-app';
import HowItWorksSection from '@/presentation/pages/site/home/components/how-it-work-section';
import HeroSection from '@/presentation/pages/site/home/components/hero-section';

export default function PrincipalPage() {
	return (
		<div>
			<HeroSection />

			<section className='mb:10 lg:mb-20'>
				<LoopIcons />
			</section>
			<section className='my-10 lg:my-20'>
				<HowItWorksSection />
			</section>
			<section className='relative px-4 md:px-0'>
				<div className='absolute top-30 left-80 w-20 h-20 bg-primary-400/30 rounded-full blur-xl animate-float' />
				<div className='absolute top-10 right-60 w-32 h-32 bg-primary-600/20 rounded-full blur-xl animate-float-delay' />
				<div className='absolute bottom-80 left-1/2 w-16 h-16 bg-primary-800/40 rounded-full blur-xl animate-float' />
				<div className='flex flex-col md:flex-row justify-center items-center gap-4  font-bold  text-3xl md:text-4xl lg:text-5xl'>
					<div className='flex items-center gap-3'>
						<BlurText
							text='Los mejores repuestos'
							delay={300}
							animateBy='words'
							justify='center'
							direction='bottom'
							className=' text-primary'
						/>
					</div>
					<div className='flex items-center gap-3'>
						<BlurText
							text='al mejor'
							delay={300}
							animateBy='words'
							justify='center'
							direction='bottom'
							className=' text-primary'
						/>
						<ScrollReveal
							delay={0.8}
							direction='fade-up'>
							<span className='px-6 py-4  text-white bg-primary rounded-2xl'>precio</span>
						</ScrollReveal>
					</div>
				</div>
				<div className='relative flex justify-center mt-6 px-5'>
					<SplitText
						tag='h3'
						text='Compra repuestos de calidad con la mejor relación precio-valor del mercado'
						className='text-lg text-center text-white font-light text-shadow-lg '
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

				<div className='flex justify-center my-10 z-10'>
					<ProductsSectionSite />
				</div>
			</section>
			<section className='relative my-20'>
				<div className='absolute top-52 left-52 w-20 h-20 bg-primary-400/30 rounded-full blur-xl animate-float' />
				<div className='absolute top-30 right-64 w-32 h-32 bg-primary-600/20 rounded-full blur-xl animate-float-delay' />
				<div className='absolute bottom-50 left-1/2 w-16 h-16 bg-primary-800/40 rounded-full blur-xl animate-float' />
				<div className='flex flex-col sm:flex-row justify-center items-center gap-6 text-4xl md:text-5xl lg:text-6xl font-bold lg:my-20'>
					<ScrollReveal
						delay={0.1}
						direction='right'>
						<span className='px-4 py-2 text-background  bg-primary rounded-sm'>¿Porqué</span>
					</ScrollReveal>
					<BlurText
						text='elegirnos?'
						delay={300}
						animateBy='words'
						direction='top'
						justify='center'
						className=' text-white'
					/>
				</div>

				<div className='flex flex-col items-center mb-20 gap-4'>
					<FeaturesSection />
				</div>
			</section>
			<section className='flex justify-center w-full'>
				<div className='w-full px-4 md:px-0 max-w-7xl'>
					<CTABanner />
				</div>
			</section>
			<section className='relative my-20'>
				<div className='absolute top-10 left-80 w-32 h-32 bg-primary-400/30 rounded-full blur-xl animate-float' />
				<div className='absolute top-60 right-60 w-20 h-20 bg-primary-600/20 rounded-full blur-xl animate-float-delay' />
				<div className='absolute bottom-20 left-1/4 w-16 h-16 bg-primary-800/40 rounded-full blur-xl animate-float' />
				{/* Header */}
				<div className='flex flex-col items-center mb-20 gap-4'>
					<div className='flex flex-col sm:flex-row items-center gap-6 text-4xl md:text-5xl lg:text-6xl font-bold'>
						<ScrollReveal
							delay={0.1}
							direction='right'>
							<span className='px-4 py-2 text-background  bg-primary rounded-sm'>Preguntas</span>
						</ScrollReveal>
						<BlurText
							text='frecuentes'
							delay={300}
							animateBy='words'
							direction='top'
							justify='center'
							className=' text-white'
						/>
					</div>
				</div>
				<QuestionsSection />
			</section>
			<section className='flex justify-center w-full mb-20'>
				<div className='w-full px-4 md:px-0 max-w-8xl'>
					<CTAMovilApp />
				</div>
			</section>
		</div>
	);
}
