'use client';
import { useState } from 'react';
import { Menu, X, Phone, Briefcase, User, FilePenLine } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo/logo-mercado-pesado-white.png';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NavSiteDemo(props: { className?: string }) {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	/* 	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	 */
	/* const services: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
		{
			title: 'Tarifario',
			href: '/servicios/tarifario',
			description: 'Consulta nuestros precios actualizados para todos los tipos de vehículos.',
			icon: <Calculator className='w-4 h-4 text-blue-600' />,
		},
		{
			title: 'Línea de Vehículos',
			href: '/servicios/linea-de-vehiculos',
			description: 'Conoce todos los tipos de vehículos que atendemos en nuestros centros.',
			icon: <Car className='w-4 h-4 text-green-600' />,
		},
		{
			title: 'Certificados',
			href: '/servicios/certificados',
			description: 'Información sobre los certificados que emitimos y su validez.',
			icon: <Award className='w-4 h-4 text-purple-600' />,
		},
		{
			title: 'Legislación',
			href: '/servicios/legislacion',
			description: 'Marco legal y normativas vigentes para revisiones técnicas.',
			icon: <Scale className='w-4 h-4 text-orange-600' />,
		},
	]; */

	/* const locales: { title: string; href: string; description: string; address: string }[] = [
		{
			title: 'Tingo María',
			href: '/locales/tingo-maria',
			description: 'Centro de inspección técnica vehicular en Tingo María.',
			address: 'Av. Alameda Perú 123, Tingo María',
		},
		{
			title: 'Satipo',
			href: '/locales/satipo',
			description: 'Centro de inspección técnica vehicular en Satipo.',
			address: 'Jr. Lima 456, Satipo',
		},
	]; */

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		/* setActiveDropdown(null); */
	};

	return (
		<nav className={`${props.className ?? ''}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}

					<Link
						href='/'
						className='relative flex items-center w-20 h-20 sm:w-64 sm:h-24'>
						<Image
							fill
							src={Logo}
							alt='Logo Mercado Pesado'
							className='object-contain'></Image>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden lg:block'>
						<NavigationMenu>
							<NavigationMenuList className='flex space-x-1'>
								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className={cn(
											navigationMenuTriggerStyle(),
											'text-white hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors'
										)}>
										<Link href='/'>Inicio</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className={cn(
											navigationMenuTriggerStyle(),
											'text-white hover:text-primary-600 hover:bg-primary-50 font-medium'
										)}>
										<a href='/quienes-somos'>Quiénes Somos</a>
									</NavigationMenuLink>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className={cn(
											navigationMenuTriggerStyle(),
											'text-white hover:text-primary-600 hover:bg-primary-50 font-medium'
										)}>
										<a
											href='/trabaja-con-nosotros'
											className='flex items-center gap-2'>
											<User className='w-4 h-4' />
											Ingresar
										</a>
									</NavigationMenuLink>
								</NavigationMenuItem>

								<NavigationMenuItem>
									<NavigationMenuLink
										asChild
										className={cn('bg-primary text-white px-4 py-2 rounded-lg font-medium transition-colors')}>
										<Button
											onClick={() => router.push('/contacto')}
											className='flex items-center gap-2'>
											<FilePenLine className='w-4 h-4' />
											Cotizar Ahora
										</Button>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					{/* Mobile menu button */}
					<div className='lg:hidden'>
						<button
							onClick={toggleMenu}
							className='text-white hover:text-primary-600 focus:outline-none focus:text-primary-600 p-2'
							aria-label='Toggle menu'>
							{isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className='lg:hidden bg-white border-t border-neutral-200 shadow-lg'>
					<div className='max-w-7xl mx-auto px-4 py-4 space-y-2'>
						<Link
							href='/'
							className='block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors'>
							Inicio
						</Link>

						<a
							href='/quienes-somos'
							className='block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors'>
							Quiénes Somos
						</a>

						<a
							href='/trabaja-con-nosotros'
							className='block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors'>
							<div className='flex items-center gap-2'>
								<Briefcase className='w-4 h-4' />
								Ingresar
							</div>
						</a>

						<a
							href='/contacto'
							className='block mx-4 mt-4 px-4 py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg font-medium text-center transition-colors'>
							<div className='flex items-center justify-center gap-2'>
								<Phone className='w-4 h-4' />
								Más Información
							</div>
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}

/* // Componente para servicios en desktop
function ServiceItem({
	title,
	href,
	description,
	icon,
}: {
	title: string;
	href: string;
	description: string;
	icon: React.ReactNode;
}) {
	return (
		<NavigationMenuLink asChild>
			<a
				href={href}
				className='group block p-3 rounded-lg hover:bg-neutral-50 transition-colors'>
				<div className='flex items-center gap-2 mb-2'>
					{icon}
					<div className='font-medium text-neutral-900 group-hover:text-primary-600 transition-colors'>{title}</div>
				</div>
				<p className='text-sm text-neutral-600 leading-relaxed'>{description}</p>
			</a>
		</NavigationMenuLink>
	);
}

// Componente para locales en desktop
function LocalItem({ title, href, description, address }: { title: string; href: string; description: string; address: string }) {
	return (
		<NavigationMenuLink asChild>
			<a
				href={href}
				className='group block p-3 rounded-lg hover:bg-neutral-50 transition-colors border border-neutral-100'>
				<div className='flex items-center gap-2 mb-1'>
					<MapPin className='w-4 h-4 text-green-600' />
					<div className='font-medium text-neutral-900 group-hover:text-primary-600 transition-colors'>{title}</div>
				</div>
				<p className='text-sm text-neutral-600 mb-1'>{description}</p>
				<p className='text-xs text-neutral-500'>{address}</p>
			</a>
		</NavigationMenuLink>
	);
} */
