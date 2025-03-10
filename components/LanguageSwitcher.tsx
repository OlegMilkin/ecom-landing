'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

interface LanguageSwitcherProps {
	languages: {
		locale: string;
		title: string;
	}[]
}

export function LanguageSwitcher({ languages }: LanguageSwitcherProps) {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const currentLang = languages.filter(item => item.locale === locale);

	const switchLanguage = (newLocale: string) => {
		if (newLocale !== locale) {
			const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
			router.push(newPathname);
		}
	};

	const filteredLanguages = languages.filter(item => item.locale !== currentLang[0].locale);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex items-center cursor-pointer hover:text-sky-200 data-[state=open]:text-sky-200 border-b-2 data-[state=open]:border-b-transparent'>
				{currentLang[0]?.title}
				<svg xmlns='http://www.w3.org/2000/svg' className='fill-current' height='20px' width='20px' viewBox='0 -960 960 960'>
					<path d="M444-768v438L243-531l-51 51 288 288 288-288-51-51-201 201v-438h-72Z"/>
				</svg>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				sideOffset={-2}
				align='start'
				className='text-white min-w-auto rounded-none p-0 border-2 border-sky-200'
			>
				{filteredLanguages.map(item => (
					<DropdownMenuItem 
						key={item.title}
						onClick={() => switchLanguage(item.locale)}
						className='text-sky-200 hover:text-white cursor-pointer focus:text-white'
					>
						{item.title}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}