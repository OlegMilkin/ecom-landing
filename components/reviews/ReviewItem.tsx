import { reviewItemType } from './reviewsTypes';
import {
  CarouselItem,
} from '@/components/ui/carousel';

interface ReviewItemProps {
  item: reviewItemType
}

export function ReviewItem({ item }: ReviewItemProps) {
  return (
    <CarouselItem className="basis-1/1 md:basis-1/2 pl-11">
      <div className="bg-grey text-white rounded-[19px] pt-[71px] md:pt-[100px] px-5 md:px-10 pb-[35px] relative">
        <img src="/quotes.svg" className='absolute top-[30px] left-[20px] md:left-[40px] w-[21px] h-[25px] md:w-[39px] md:h-[30px]'/>
        <p className='text-sm md:text-2xl'>
          {item.review}
        </p>
        <strong className='text-xl mt-[30px] md:mt-[45px] block md:text-[32px]'>
          {item.reviewerName}
        </strong>
      </div>
    </CarouselItem>
  )
}