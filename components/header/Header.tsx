import { useTranslations } from 'next-intl';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import burgerIcon from '@/public/burger.svg';
import closeIcon from '@/public/close.svg';
import mobileLogo from '@/public/mobile-logo.svg';
import contactUsIcon from '@/public/contact-us.svg';
import { Link } from '@/i18n/navigation';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Menu } from '@/components/header/Menu';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { languages } from '@/i18n/localesConfig';
import usePageData from '@/app/[locale]/use-page-data';

export function Header() {
	const t = useTranslations('HomePage');
	const { menuItems } = usePageData();

	return (
		<header className="min-h-[80px] sticky top-0 bg-black z-10">
			<div className="container flex justify-between items-center">
				<Link href='/' className='flex-shrink-0'>
					<Image 
						src={logo}
						alt='Home'
						width={212}
						height={68}
						className='hidden lg:block'
					/>
					<Image
						src={mobileLogo}
						alt='Home'
						width={81}
						height={63}
						className='block lg:hidden'
					/>
				</Link>
				<Menu 
					menuItems={menuItems}
					navClass='hidden lg:block'
					ulClass='gap-11 lg:gap-7 lg:flex-row'
					linkClass='uppercase text-base '
				/>
				<div className="flex items-center gap-6">
					<LanguageSwitcher languages={languages} />
					<Link href="#" className='block lg:hidden'>
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
					<Drawer direction="right">
						<DrawerTrigger className="block lg:hidden">
							<Image
								src={burgerIcon}
								alt='Home'
								width={35}
								height={35}
								className='cursor-pointer'
							/>
						</DrawerTrigger>
						<DrawerContent className="bg-black border-l border-sky-100 justify-center">
							<DrawerClose className='absolute text-white top-[19px] right-[15px]'>
								<Image
									src={closeIcon}
									alt='Home'
									width={35}
									height={35}
									className='cursor-pointer'
								/>
							</DrawerClose>
							<DrawerHeader className='pl-10'>
								<DrawerTitle className='hidden'></DrawerTitle>
								<Menu 
									menuItems={menuItems}
									ulClass='gap-11 lg:gap-7 lg:flex-row'
									linkClass='uppercase text-2xl'
								/>
							</DrawerHeader>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</header>
	)
}