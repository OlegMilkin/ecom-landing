import { PricingCard } from './PricingCard';
import { PricingModelInterface } from '@/lib/models/pricing-model';

export function Pricing({ 
  pricingItems,
  isVisible,
  title,
  description,
  anchorHref,
 }: PricingModelInterface) {

  if(!isVisible) return null;

  return (
    <section className='flex flex-col items-center' id={anchorHref}>
      <div className='container'>
        <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
          {title}
        </h2>
        <p className='max-w-[980px] mx-auto text-center lg:text-xl text-sm mb-10 lg:mb-16'>
          {description}
        </p>
        <div className='max-w-[960px] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-12'>
          {pricingItems.length > 0 && (
            pricingItems.map(item => <PricingCard key={item.id} {...item} />)
          )}
        </div>
      </div>
    </section>
  )
}