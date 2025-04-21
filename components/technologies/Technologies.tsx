import Image from 'next/image';
import { ServiceItem } from './ServiceItem';
import { TechnologiesModelInterface } from '@/lib/models/technologies-model';


export function Technologies({
    anchorHref,
    isVisible,
    servicesList,
    technologiesList,
  }: TechnologiesModelInterface) {
  if(!isVisible) return null;  

  return (
    <>
      <section className='section-gradient' id={anchorHref}>
        <div className='container flex flex-col md:flex-row justify-between py-11 md:py-24 gap-5 md:gap-0 bg-none md:bg-[url(/core.png)] bg-no-repeat bg-center items-center'>
          <div className='w-full md:w-max flex flex-row md:flex-col gap-5 md:gap-7 flex-wrap'>
            {servicesList.map(item => <ServiceItem {...item} key={item.id} />)}
          </div>
          <div className='w-full md:w-max grid grid-cols-[repeat(auto-fit,54px)] md:grid-cols-[repeat(3,82px)] gap-5 place-content-around md:place-content-end'>
            {technologiesList.map(item => <Image
              key={item.id}
              src={`${process.env.BASE_URL}${item.icon}`}
              alt={item.iconAlt}
              title={item.iconTitle}
              width="82"
              height="82"
              className="w-[54px] md:w-[82px]"
            />)}
          </div>
        </div>
      </section>
    </>
  )
}