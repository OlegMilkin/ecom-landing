import usePageData from '@/app/[locale]/use-page-data';
import { Menu } from '@/components/header/Menu';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import mobileLogo from '@/public/mobile-logo.svg';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

export function Footer() {
  const { menuItems } = usePageData();
  const t = useTranslations('HomePage');

  return (
    <section className='border-t border-grey'>
      <div className="container text-white">
        <div className="grid grid-col-1 md:grid-cols-3 pb-9 md:pb-11 pt-5 md:pt-11 justify-items-center md:justify-items-start">
          <div>
            <Link href='/' className=''>
              <Image
                src={mobileLogo}
                alt='Home'
                width={146}
                height={114}
              />
            </Link>

          </div>
          <div className="hidden md:block">
            <Menu 
              menuItems={menuItems}
              linkClass='text-xl'
              ulClass='gap-7'
            /> 
          </div>
          <div className="hidden md:block w-[250px] ml-auto mr-5">
            <h4 className='text-[23px] font-bold mb-11'>
              Have questions? Let's get in touch!
            </h4>
            <p className='text-[15px] mb-11'>
              Our team is ready to answer your questions and provide the solutions you need.
              Click the button to visit our contact page and get started today.
            </p>
            <Button title={t('contactUs')} />
          </div>
        </div>
      </div>
    </section>
  )
}