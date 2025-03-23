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
			buttonClasses = twMerge('button-gradient uppercase px-5 py-2 rounded-[50px] flex-inline items-center hover:text-sky-200 max-h-[40px]', className);
			break;
		case ("small"):
			buttonClasses = twMerge('button-gradient py-1 px-4 text-2xl text-white rounded-[24px] flex-inline items-center justify-center hover:text-sky-200 max-h-[44px]', className);
			break;
		default:
			buttonClasses = twMerge('button-gradient text-sm lg:text-lg uppercase px-5 lg:px-10 py-2 lg:py-4 rounded-[50px] flex-inline items-center hover:text-sky-200 max-h-[60px]', className);
	}

	const link = <Link href={href} className={buttonClasses}>{title}</Link>;
	const button = <button type={buttonType} className={buttonClasses}>{title}</button>;

	return (
		<>
			{ variant === 'link' ? link : button }
		</>
	)
}