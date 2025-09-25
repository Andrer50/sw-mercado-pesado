import NavSite from '@/components/screens/nav-site/nav-site';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative flex flex-col items-center w-screen h-screen overflow-x-hidden bg-black'>
			<NavSite className='z-50 w-screen py-4' />
			<main className='w-full'>{children}</main>
		</div>
	);
}
