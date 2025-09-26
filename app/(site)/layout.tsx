import FooterSite from '@/presentation/pages/shared/footer-site/footer-site';
import NavSite from '@/presentation/pages/shared/nav-site/nav-site';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative flex flex-col items-center w-screen min-h-screen overflow-x-hidden bg-black'>
			<NavSite className='z-50 w-screen py-4' />
			<main className='w-full flex-1'>{children}</main>
			<FooterSite />
		</div>
	);
}
