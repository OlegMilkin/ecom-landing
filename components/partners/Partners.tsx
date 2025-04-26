import Image from 'next/image';
import { PartnersModelInterface } from '@/lib/models/partners-model';
import { PartnerItemModelInterface } from '@/lib/models/partner-item-model';

export function Partners({
  partnerIcons,
  anchorHref,
  isVisible,
  title,
 }: PartnersModelInterface) {
  if (partnerIcons.length <= 0 || !isVisible) return null;

  return (
    <section className='section-gradient mt-3.5 md:mt-16' id={anchorHref}>
      <div className="container">
        <div className='max-w-[960px] mx-auto py-11 md:py-24'>
          <h2 className='text-4xl lg:text-6xl text-center mb-4 lg:mb-11'>
            {title}
          </h2>
          <ul className='grid grid-cols-[repeat(auto-fit,57px)] md:grid-cols-[repeat(auto-fit,100px)] gap-6 md:gap-16 justify-between'>
            { partnerIcons.map((item: PartnerItemModelInterface) => <Image
                key={item.id}
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.icon}`}
                alt={item.iconAlt}
                title={item.iconTitle}
                width="100"
                height="100"
                className="w-[57px] md:w-[100px]"
              />
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}