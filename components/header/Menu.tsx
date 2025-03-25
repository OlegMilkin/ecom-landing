'use client';

import { Link } from '@/i18n/navigation';
import { twMerge } from 'tailwind-merge';

interface MenuProps {
  menuItems: {
		link: string;
		title: string;
	}[],
	navClass?: string,
	ulClass?: string,
	liClass?: string,
	linkClass?: string
}

export function Menu({
	menuItems,
	navClass,
	ulClass,
	liClass,
	linkClass
}: MenuProps) {

	return (
		<nav className={navClass}>
			<ul className={twMerge('flex flex-col', ulClass)}>
				{menuItems.map(menuItem => (
					<li key={menuItem.title} className={liClass}>
						<Link
							className={twMerge('text-gradient', linkClass) }
							href={menuItem.link}
						>
							{menuItem.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}