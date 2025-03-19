import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('HomePage');

  return (
     <section className='min-h-0 lg:min-h-[663px] bg-[url(/hero-banner.png)] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center lg:gap-10 gap-4 lg:py-0 py-4'>
      <h1 className='text-6xl lg:text-9xl font-medium text-center'>
        ECOM is simple
      </h1>
      <p className='max-w-[745px] text-center lg:text-lg text-sm'>
        Lorem ipsum dolor sit amet consectetur. Quis donec sit massa odio lacus consectetur congue sem. 
        Risus diam odio magna dui. Ut sed ut tellus id mattis.
        Tempus bibendum quisque scelerisque euismod varius.
      </p>
      <Button 
        title={t('contactUs')}
        href="/contact"
        size="big"
      />
    </section>
  )
}