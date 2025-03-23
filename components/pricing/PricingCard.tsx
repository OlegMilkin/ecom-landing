import { Button } from '../ui/Button';
import { PricingItemType } from './pricing-type';
import { useId } from 'react';

interface PricingCardProps {
  item: PricingItemType
}

export function PricingCard({ item }: PricingCardProps) {
  return (
    <div className='pricing-card bg-white text-black w-full max-w-[292px] rounded-3xl px-7 py-5 font-poppins font-medium md:self-stretch hover:text-white group'>
      <div className='mb-5'>
        <strong className='text-4xl'>{item.price}</strong> <span className='text-base'>/month</span>
      </div>
      <span className='text-[28px] mb-1.5'>
        {item.title}
      </span>
      <p className='text-[15px] mb-3.5'>
        {item.description}
      </p>
      <ul className='list-image-[url(/check.svg)] list-inside group-hover:list-image-[url(/check-black.svg)]'>
        {item.advantages.map(advantagesItem => {
          const id = useId();

          return <li key={id} className='text-[15px] mt-1'>
            <span className='align-top'>{advantagesItem}</span>
          </li>
        })}
      </ul>
      <Button
        title="Choose plan"
        size="small"
        href="/contact"
        className="w-full flex group-hover:text-sky-200 mt-7"
      />
    </div>
  )
}