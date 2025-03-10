import { Link } from '@/i18n/navigation';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
	variant?: 'link' | 'button',
	size?: 'big' | 'medium' | 'small',
	className?: string,
	title: string,
	href?: string,
	buttonType?: 'button' | 'reset' | 'submit',
}

export function Button({ 
		variant = 'link',
		size = 'big',
		title = '',
		href = '',
		buttonType = 'button',
		className,
	}: ButtonProps) {

	let buttonClasses;
	
	switch (size) {
		case ("medium"):
			buttonClasses = twMerge('button-gradient uppercase px-5 py-2 rounded-[50px] flex items-center hover:text-sky-200 max-h-[40px]', className);
			break;
		case ("small"):
			buttonClasses = twMerge('smallclass', className);
			break;
		default:
			buttonClasses = twMerge('button-gradient text-xl uppercase px-10 py-4 rounded-[50px] flex items-center hover:text-sky-200 max-h-[60px]', className);
	}

	const link = <Link href={href} className={buttonClasses}>{title}</Link>;
	const button = <button type={buttonType} className={buttonClasses}>{title}</button>;

	return (
		<>
			{ variant === 'link' ? link : button }
		</>
	)
}