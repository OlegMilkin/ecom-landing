import Image from 'next/image';
import { ServiceItemModelInterface } from '@/lib/models/service-item-model';

export function ServiceItem({text, icon}: ServiceItemModelInterface) {
  return (<>
    <div className='flex bg-white p-4 md:p-7 rounded-2xl gap-5 md:gap-7 items-center border-sky-300 border-2 w-full md:w-full'>
      <Image 
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${icon}`}
        alt=""
        width="40"
        height="40"
        className='w-[31] md:w-[40px]'
      />
      <span className='text-black text-base md:text-2xl font-medium truncate'>
        {text}
      </span>
    </div>
  </>)
}