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
import { Menu } from '@/components/Menu';
import { Button } from '@/components/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { languages } from '@/i18n/localesConfig';

const menuItems = [
	{
		link: '#',
		title: 'Achievements'
	},
	{
		link: '#',
		title: 'Expertise'
	},
	{
		link: '#',
		title: 'Pricing'
	},
	{
		link: '#',
		title: 'Partners'
	},
	{
		link: '#',
		title: 'Reviewers'
	},
]

export function Header() {
	const t = useTranslations('HomePage');

	return (
		<header className="flex justify-between items-center min-h-[80px] sticky top-0 bg-black">
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
			<Menu menuItems={menuItems} menuClass='hidden lg:block' />
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
							<Menu menuItems={menuItems} />
						</DrawerHeader>
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	)
}