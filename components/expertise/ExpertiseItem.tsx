import { ExperticeItemType } from './expertise-types';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface ExpertiseItemProps {
  item: ExperticeItemType,
  index: number
}

export function ExpertiseItem({item, index}: ExpertiseItemProps) {

  let itemClass;

  if (index === 0) {
    itemClass = 'md:col-span-6';
  } else if (index === 1 || index === 2) {
    itemClass = 'md:col-span-3';   
  } else {
    itemClass = 'md:col-span-2';   
  }

  return (
    <div className={twMerge("col-span-1 @container border-1 border-l-18 border-sky-200 rounded-2xl overflow-hidden", itemClass)}>
      <div className='relative aspect-[2/calc(1-0.21)] object-center'>
        <Image src={item.cover} fill={true} alt='' className='object-cover' />
      </div>
      <div className='p-5 lg:p-7'>
        <span className='text-xl @min-[400px]:text-3xl mb-7 xl:mb-11 block'>
          {item.title}
        </span>
        <p className='text-sm xl:text-lg line-clamp-3' title={item.description}>
          {item.description}
        </p>
      </div>
    </div>
  )
}