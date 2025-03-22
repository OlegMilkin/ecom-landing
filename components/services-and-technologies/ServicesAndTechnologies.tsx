import Image from 'next/image';
import { serviceItemType } from './services-and-technologies-types';
import { ServiceItem } from './ServiceItem';
import { useId } from 'react';

interface ServicesAndTechnologiesProps {
  servicesList: serviceItemType[],
  technologiesList: string[],
}

export function ServicesAndTechnologies({servicesList, technologiesList}: ServicesAndTechnologiesProps) {
  return (
    <>
      <section className='container flex gap-11 items-center mb-3.5 lg:my-11'>
        <div className='hidden lg:block w-[46%] shrink-0'>
          <Image src="/service.png" alt="" width="550" height="476" />
        </div>
        <div>
          <h3 className='text-3xl lg:text-4xl text-center lg:text-left mt-7 lg:mt-0 mb-3.5 lg:mb-11'>Services & Technologies</h3>
          <p className='text-sm lg:text-lg text-center lg:text-left'>
            Lorem ipsum dolor sit amet consectetur. Auctor aenean erat urna adipiscing egestas aenean viverra.
            Est convallis felis libero porta sit eu. Sagittis ultricies risus tristique mattis pellentesque eu ornare sed id.
            Duis eget malesuada tempus nec risus. Sagittis ac magnis arcu ut eu aliquam maecenas eget aliquet.
            Turpis tincidunt dignissim ultrices odio donec proin auctor velit enim.
            Risus eros cursus blandit nec morbi sollicitudin enim. Nullam lorem sagittis ultricies at.
            Magna mollis neque augue ornare.
          </p>
        </div>
      </section>
      <section className='section-gradient'>
        <div className='container flex flex-col md:flex-row justify-between py-11 md:py-24 gap-5 md:gap-0 bg-none md:bg-[url(/core.png)] bg-no-repeat bg-center'>
          <div className='w-full md:w-max flex flex-row md:flex-col gap-5 md:gap-7 flex-wrap'>
            {servicesList.map(item => {
              const id = useId();

              return <ServiceItem item={item} key={id} />
            })}
          </div>
          <div className='w-full md:w-max grid grid-cols-[repeat(auto-fit,54px)] md:grid-cols-[repeat(3,82px)] gap-5 place-content-around md:place-content-end'>
            {technologiesList.map(item => {
              const id = useId();  

              return <Image key={id} src={`/technologies/${item}`} alt="" width="82" height="82" className='w-[54px] md:w-[82px] ' />
            })}
          </div>
        </div>
      </section>
    </>
  )
}