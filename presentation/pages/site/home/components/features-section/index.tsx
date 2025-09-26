'use client';

import { Rocket, PiggyBank, Bell } from 'lucide-react';

export default function FeaturesSection() {
	const features = [
		{
			icon: Rocket,
			title: 'Eficiencia',
			description:
				'Conéctate rápidamente con cientos de asociados inscritos y obtén las mejores ofertas en repuestos con un solo click.',
		},
		{
			icon: PiggyBank,
			title: 'Ahorro',
			description:
				'Publica tu solicitud y recibe ofertas en minutos, sin perder tiempo buscando y contactando proveedores uno por uno.',
		},
		{
			icon: Bell,
			title: 'Productividad',
			description:
				'Recibe notificaciones instantáneas cuando un asociado responda, toma decisiones rápidas y mantén tus proyectos en marcha.',
		},
	];

	return (
		<section className='w-full px-6 mt-16 lg:mt-0'>
			<div className='max-w-7xl mx-auto text-center'>
				<div className='grid gap-10  lg:grid-cols-3'>
					{features.map((feature) => (
						<div
							key={feature.title}
							className='group relative rounded-2xl border-2 border-primary shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'>
							<div className='flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary'>
								<feature.icon className='w-8 h-8 text-primary group-hover:text-white transition-colors duration-300' />
							</div>
							<h3 className='text-3xl font-bold mb-3 text-primary'>{feature.title}</h3>
							<p className='text-neutral-200 text-xl text-justify leading-relaxed'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
