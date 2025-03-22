import { PricingItemType } from './pricing-type';
import { PricingCard } from './PricingCard';
import { useId } from 'react';

interface PricingProps {
  pricingList: PricingItemType[]
}

export function Pricing({ pricingList }: PricingProps) {
  return (
    <section className='flex flex-col items-center' id="pricing">
      <div className='container'>
        <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
          Pricing
        </h2>
        <p className='max-w-[980px] mx-auto text-center lg:text-xl text-sm mb-10 lg:mb-16'>
          Transparent and flexible pricing designed to fit your project needs and budget.
          Whether you’re a startup, a growing business, or a large enterprise, we have the right solution for you
        </p>
        <div className='max-w-[960px] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-12'>
          {pricingList.length > 0 && (
            pricingList.map(item => {
              const id = useId();
  
              return <PricingCard key={id} item={item} />
            })
          )}
        </div>
      </div>
    </section>
  )
}