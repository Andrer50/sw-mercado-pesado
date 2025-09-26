'use client';
import {
	Facebook,
	Instagram,
	Twitter,
	Linkedin,
	Youtube,
	Mail,
	Phone,
	MapPin,
	Clock,
	ArrowRight,
	Shield,
	Truck,
	Users,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import Logo from '@/assets/logo/logo-mercado-pesado-white.png';
import Image from 'next/image';

export default function FooterSite() {
	const currentYear = new Date().getFullYear();
	const socialLinks = [
		{ icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
		{ icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
		{ icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
		{ icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
	];

	const contactInfo = [
		{ icon: Phone, text: '+51 999 888 777', href: 'tel:+51999888777', label: 'Llamar ahora' },
		{ icon: Mail, text: 'contacto@mercadopesado.com', href: 'mailto:contacto@mercadopesado.com', label: 'Enviar email' },
		{ icon: MapPin, text: 'Lima, Perú - Av. Principal 123', href: '#', label: 'Ver ubicación' },
		{ icon: Clock, text: 'Lun - Vie: 8:00 AM - 6:00 PM', href: '#', label: 'Horarios de atención' },
	];

	const quickLinks = [
		{ text: 'Buscar repuestos', href: '#' },
		{ text: 'Cómo funciona', href: '#' },
		{ text: 'Preguntas frecuentes', href: '#' },
		{ text: 'Términos y condiciones', href: '#' },
		{ text: 'Política de privacidad', href: '#' },
		{ text: 'Contacto', href: '#' },
	];

	const features = [
		{ icon: Shield, text: 'Transacciones seguras' },
		{ icon: Truck, text: 'Envío a todo el país' },
		{ icon: Users, text: '+200 proveedores verificados' },
	];

	return (
		<footer className='relative bg-gradient-to-br from-black/25 via-black/50 to-black text-white overflow-hidden w-screen  border-t border-primary'>
			{/* Floating geometric shapes */}
			<div className='absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-float' />
			<div className='absolute bottom-20 right-20 w-40 h-40 bg-purple-500/3 rounded-full blur-3xl animate-float-delay' />
			<div className='absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/4 rounded-full blur-2xl animate-float' />

			<div className='container mx-auto px-6 lg:px-8 relative z-10'>
				{/* Main Footer Content */}
				<div className='py-16 lg:py-20'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16'>
						{/* Brand Section */}
						<ScrollReveal className='lg:col-span-4 space-y-6'>
							{/* Logo and Tagline */}
							<div className='space-y-4'>
								<div className='flex items-center gap-4'>
									<Image
										src={Logo}
										width={120}
										height={60}
										alt='Logo Mercado Pesado'
										className='object-contain'
									/>

									<p className='text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300'>
										&quot;Cotiza cuando quieras y donde quieras&quot;
									</p>
								</div>
								<p className='text-white/80 leading-relaxed max-w-md text-justify'>
									La plataforma líder en repuestos de maquinaria pesada que conecta compradores con los mejores
									proveedores del país. Encuentra exactamente lo que necesitas al mejor precio.
								</p>
							</div>

							{/* Features */}
							<div className='space-y-3'>
								{features.map((feature, index) => (
									<div
										key={index}
										className='flex items-center gap-3 text-slate-300'>
										<div className='w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center'>
											<feature.icon className='w-4 h-4 text-primary' />
										</div>
										<span className='text-sm font-medium'>{feature.text}</span>
									</div>
								))}
							</div>
						</ScrollReveal>

						{/* Quick Links */}
						<ScrollReveal
							delay={0.2}
							className='lg:col-span-3'>
							<h4 className='text-lg font-bold mb-6 text-white'>Enlaces rápidos</h4>
							<ul className='space-y-3'>
								{quickLinks.map((link, index) => (
									<li key={index}>
										<a
											href={link.href}
											className='group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-1'>
											<ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
											<span>{link.text}</span>
										</a>
									</li>
								))}
							</ul>
						</ScrollReveal>

						{/* Contact Information */}
						<ScrollReveal
							delay={0.4}
							className='lg:col-span-3'>
							<h4 className='text-lg font-bold mb-6 text-white'>Contacto</h4>
							<div className='space-y-4'>
								{contactInfo.map((contact, index) => (
									<a
										key={index}
										href={contact.href}
										className='group flex items-start gap-4 p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:shadow-lg'>
										<div className='w-10 h-10 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform'>
											<contact.icon className='w-5 h-5 text-primary' />
										</div>
										<div className='flex-1 min-w-0'>
											<p className='text-sm font-medium text-white group-hover:text-primary transition-colors'>
												{contact.label}
											</p>
											<p className='text-sm text-slate-400 break-all'>{contact.text}</p>
										</div>
									</a>
								))}
							</div>
						</ScrollReveal>

						{/* Social Media */}
						<ScrollReveal
							delay={0.6}
							className='lg:col-span-2'>
							<h4 className='text-lg font-bold mb-6 text-white'>Síguenos</h4>
							<div className='space-y-4'>
								{/* Social Icons Grid */}
								<div className='flex flex-wrap gap-3'>
									{socialLinks.map((social, index) => (
										<a
											key={index}
											href={social.href}
											className={`group w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 lg:hover:text-primary`}
											aria-label={social.label}>
											<social.icon className='w-5 h-5 group-hover:scale-110 transition-transform' />
										</a>
									))}
								</div>

								{/* Social Stats */}
								<div className='bg-white/5 border border-white/10 rounded-xl p-4 space-y-3'>
									<h5 className='font-medium text-sm text-white'>Nuestra comunidad</h5>
									<div className='space-y-2 text-xs text-slate-400'>
										<div className='flex justify-between'>
											<span>Seguidores</span>
											<span className='font-medium text-white'>+12.5K</span>
										</div>
										<div className='flex justify-between'>
											<span>Engagement</span>
											<span className='font-medium text-green-400'>+8.2%</span>
										</div>
									</div>
								</div>

								{/* App Download */}
								<div className='space-y-3'>
									<h5 className='font-medium text-sm text-white'>Descarga nuestra app</h5>
									<div className='flex flex-col gap-2'>
										<button className='bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-3 py-2 text-xs hover:bg-white/10 transition-all duration-300 flex items-center gap-2'>
											<FaGooglePlay></FaGooglePlay>
											<span>Play Store</span>
										</button>
										<button className='bg-white/5 border border-white/10 hover:border-white/20 rounded-lg px-3 py-2 text-xs hover:bg-white/10 transition-all duration-300 flex items-center gap-2'>
											<FaAppStore></FaAppStore>
											<span>App Store</span>
										</button>
									</div>
								</div>
							</div>
						</ScrollReveal>
					</div>
				</div>

				{/* Bottom Section */}
				<ScrollReveal
					delay={0.2}
					className='border-t border-white/10 py-8'>
					<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
						<div className='flex items-center gap-2 text-slate-400 text-sm'>
							<span>© {currentYear} Mercado Pesado. Todos los derechos reservados.</span>
						</div>

						<div className='flex items-center gap-6 text-sm text-slate-400'>
							<a
								href='#'
								className='hover:text-white transition-colors'>
								Términos
							</a>
							<a
								href='#'
								className='hover:text-white transition-colors'>
								Privacidad
							</a>
							<a
								href='#'
								className='hover:text-white transition-colors'>
								Cookies
							</a>
						</div>
					</div>
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
		</footer>
	);
}
