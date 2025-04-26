import Image from 'next/image';
import { ServiceModelInterface } from '@/lib/models/service-model';

export function Service({
  anchorHref,
  cover,
  coverAlt,
  coverTitle,
  description,
  isVisible,
  title
 }: ServiceModelInterface) {
  if(!isVisible) return null;

  return (
    <>
      <section className='container flex gap-11 items-center mb-3.5 lg:my-11' id={anchorHref}>
        <div className='hidden lg:block w-[46%] shrink-0'>
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${cover}`}
            alt={coverAlt}
            title={coverTitle} 
            width="550"
            height="476"
          />
        </div>
        <div>
          <h3 className='text-3xl lg:text-4xl text-center lg:text-left mt-7 lg:mt-0 mb-3.5 lg:mb-11'>
            {title}
          </h3>
          <p className='text-sm lg:text-lg text-center lg:text-left'>
            {description}
          </p>
        </div>
      </section>
    </>
  )
}