import { useTranslations } from 'next-intl';
import Image from 'next/image';
import contactUsIcon from '@/public/contact-us.svg';
import { Link } from '@/i18n/navigation';
import { Menu } from '@/components/header/Menu';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { languages } from '@/i18n/localesConfig';
import { GlobalDataModelInterface } from '@/lib/models/global-data-model';
import { MobileSidebar } from '@/components/header/mobileSidebar';

export function Header({
	menu,
	headerDesktopLogo,
	headerMobileLogo,
}:GlobalDataModelInterface) {
	const t = useTranslations('Global');

	return (
		<header className="min-h-[80px] sticky top-0 bg-black z-10">
			<div className="container flex justify-between items-center">
				<Link href='/' className='flex-shrink-0 mt-1.5'>
					<Image 
						src={`${process.env.NEXT_PUBLIC_BASE_URL}${headerDesktopLogo.logo}`}
						alt={headerDesktopLogo.alt}
						width={212}
						height={68}
						className='hidden lg:block'
					/>
					<Image
						src={`${process.env.NEXT_PUBLIC_BASE_URL}${headerMobileLogo.logo}`}
						alt={headerMobileLogo.alt}
						width={81}
						height={63}
						className='block lg:hidden'
					/>
				</Link>
				<Menu 
					menuItems={menu}
					navClass='hidden lg:block'
					ulClass='gap-11 lg:gap-7 lg:flex-row'
					linkClass='uppercase text-base'
				/>
				<div className="flex items-center gap-6">
					<LanguageSwitcher languages={languages} />
					<Link href="/contact" className='block lg:hidden'>
						<Image
							src={contactUsIcon}
							alt=""
							width="31"
							height="29"
						/>
					</Link>
					<Button 
						title={t('contactUs')}
						href="/contact"
						size="medium"
						className='hidden lg:block'
					/>
					<MobileSidebar menu={menu} />
				</div>
			</div>
		</header>
	)
}