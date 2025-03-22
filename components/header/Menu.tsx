'use client';

import { Link } from '@/i18n/navigation';

interface MenuProps {
  menuItems: {
		link: string;
		title: string;
	}[],
	menuClass?: string
}

export function Menu({menuItems, menuClass}: MenuProps) {


	return (
		<nav className={menuClass}>
			<ul className="flex gap-11 lg:gap-7 flex-col lg:flex-row">
				{menuItems.map(menuItem => (
					<li key={menuItem.title}>
						<Link
							className="uppercase text-2xl lg:text-base text-gradient text-white" 
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