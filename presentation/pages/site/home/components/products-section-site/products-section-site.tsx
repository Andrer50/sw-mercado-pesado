import CardProductSite from '@/components/ui/cards/card-product-site/card-product-site';
import Foto from '@/assets/retroexcavadora.jpg';
import { ScrollReveal } from '@/components/animations/scroll-reveal/scroll-reveal';
export default function ProductsSectionSite() {
	const products = [
		{
			title: 'Repuesto para tractor',
			description: 'Nuevo - 1 año de garantía',
			imageUrl: '/images/offers/tractor-part.jpg',
		},
		{
			title: 'Filtro de aceite Caterpillar',
			description: 'Original - Garantía de fábrica',
			imageUrl: '/images/offers/oil-filter-cat.jpg',
		},
		{
			title: 'Batería 12V para maquinaria pesada',
			description: 'Sellada, libre de mantenimiento',
			imageUrl: '/images/offers/battery-12v.jpg',
		},
		{
			title: 'Llantas para retroexcavadora',
			description: 'Semi-nuevas - 70% de vida útil',
			imageUrl: '/images/offers/backhoe-tires.jpg',
		},
		{
			title: 'Kit de frenos Komatsu',
			description: 'Nuevo - Incluye pastillas y discos',
			imageUrl: '/images/offers/brake-kit-komatsu.jpg',
		},
		{
			title: 'Motor hidráulico John Deere',
			description: 'Reacondicionado - 6 meses de garantía',
			imageUrl: '/images/offers/hydraulic-motor-jd.jpg',
		},
		{
			title: 'Radiador para cargador frontal',
			description: 'Nuevo - Aluminio reforzado',
			imageUrl: '/images/offers/front-loader-radiator.jpg',
		},
		{
			title: 'Bomba de combustible Volvo',
			description: 'Original - Entrega inmediata',
			imageUrl: '/images/offers/fuel-pump-volvo.jpg',
		},
	];
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl gap-5 w-full px-5'>
			{products.map((product, index) => (
				<ScrollReveal key={index}>
					<CardProductSite
						key={product.title}
						title={product.title}
						description={product.description}
						imageUrl={Foto.src}
					/>
				</ScrollReveal>
			))}
		</div>
	);
}
