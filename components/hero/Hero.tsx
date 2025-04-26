import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import { HeroModelInterface } from '@/lib/models/hero-model';

export function Hero({
  description,
  headline,
  isVisible,
  anchorHref
}: HeroModelInterface) {

  if (!isVisible) return null;

  const t = useTranslations('Global');

  return (
     <section className='container min-h-0 lg:min-h-[663px] bg-[url(/hero-banner.png)] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center lg:gap-10 gap-4 lg:py-0 py-4' id={anchorHref}>
      <h1 className='text-6xl lg:text-9xl font-medium text-center'>
        {headline}
      </h1>
      <p className='max-w-[745px] text-center lg:text-lg text-sm'>
        {description}
      </p>
      <Button 
        title={t('contactUs')}
        href="/contact"
        size="big"
      />
    </section>
  )
}