import { useId } from 'react';
import Image from 'next/image';

interface PartnersProps {
  partnersList: string[],
}

export function Partners({ partnersList }: PartnersProps) {
if (partnersList.length <= 0) return null;

  return (
    <section className='section-gradient mt-3.5 md:mt-16' id="partners">
      <div className="container">
        <div className='max-w-[960px] mx-auto py-11 md:py-24'>
          <h2 className='text-4xl lg:text-6xl text-center mb-4 lg:mb-11'>
            Our Partners
          </h2>
          <ul className='grid grid-cols-[repeat(auto-fit,57px)] md:grid-cols-[repeat(auto-fit,100px)] gap-6 md:gap-16 justify-between'>
            { partnersList.map(item => {
              const id = useId();

              return <Image key={id} src={`/partners/${item}`} alt="" width="100" height="100" className="w-[57px] md:w-[100px]" />
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}