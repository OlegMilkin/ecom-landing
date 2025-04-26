import { Menu } from '@/components/header/Menu';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import mobileLogo from '@/public/mobile-logo.svg';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import { GlobalDataModelInterface } from '@/lib/models/global-data-model';

export function Footer({
    networks,
    menu,
    footerHeadline,
    footerSubHeadline,
  }: GlobalDataModelInterface) {

  const t = useTranslations('HomePage');

  return (
    <section className='border-t border-grey'>
      <div className="container text-white">
        <div className="flex pb-9 md:pb-11 pt-5 md:pt-11 justify-center md:justify-between">
          <div className='flex flex-col items-center md:items-start'>
            <Link href='/' className=''>
              <Image
                src={mobileLogo}
                alt='Home'
                width={146}
                height={114}
              />
            </Link>
            {networks?.length > 0 && (
              <ul className='flex gap-10 mt-20 mb-12'>
                {networks.map(item => {
                  return <li key={item.id}>
                    <Link href={item.href}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.icon}`}
                        alt={item.alt}
                        width="36"
                        height="36"
                      />
                    </Link>
                </li>
                })}
              </ul>
            )}
            <div className='text-[11px] mb-[13px] flex gap-6'>
              <Link href="/" className='underline hover:no-underline'>Privacy Policy</Link>
              <Link href="/" className='underline hover:no-underline'>Terms of Service</Link>
            </div>
            <p className='text-[11px]'>Copyright @ 2025 Ecom Shape</p>
          </div>
          <div className="hidden md:block">
            <Menu 
              menuItems={menu}
              linkClass='text-xl'
              ulClass='gap-7'
            /> 
          </div>
          <div className="hidden md:block w-[250px] mr-5">
            <h4 className='text-[23px] font-bold mb-11'>
              {footerHeadline}
            </h4>
            <p className='text-[15px] mb-11'>
              {footerSubHeadline}
            </p>
            <Button title={t('contactUs')} />
          </div>
        </div>
      </div>
    </section>
  )
}