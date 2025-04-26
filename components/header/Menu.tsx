'use client';

import { Link } from '@/i18n/navigation';
import { twMerge } from 'tailwind-merge';
import { Link as ReactScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';
import { MenuItemModelInterface } from '@/lib/models/menu-item-model';

interface MenuProps {
  menuItems: MenuItemModelInterface[],
	navClass?: string,
	ulClass?: string,
	liClass?: string,
	linkClass?: string,
	closeMenu?: () => void;
}

export function Menu({
	menuItems,
	navClass,
	ulClass,
	liClass,
	linkClass,
	closeMenu,
}: MenuProps) {

	const isContactPage = usePathname().includes('contact');

	return (
		<nav className={navClass}>
			<ul className={twMerge('flex flex-col', ulClass)}>
				{menuItems.map(menuItem => (
					<li key={menuItem.id} className={liClass}>
						{ !isContactPage && (
							<ReactScrollLink
								to={menuItem.href}
								className={twMerge('text-gradient cursor-pointer', linkClass) }
								smooth={true}
								activeClass="menu-active"
								hashSpy={true}
								spy={true}
								offset={-60}
								onClick={closeMenu}
							>
								{menuItem.title}
							</ReactScrollLink>
						) }
						{ isContactPage && (
							<Link
								href={`/#${menuItem.href}`}
								className={twMerge('text-gradient cursor-pointer', linkClass) }
								onClick={closeMenu}
							>
								{menuItem.title}
							</Link>
						) }
					</li>
				))}
			</ul>
		</nav>
	)
}