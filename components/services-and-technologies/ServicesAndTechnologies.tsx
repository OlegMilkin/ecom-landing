import Image from 'next/image';

export function ServicesAndTechnologies() {
  return (
    <section className='flex gap-11 items-center mb-3.5 lg:my-11'>
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
  )
}