import { useId } from 'react';
import { ReviewItem } from './ReviewItem';
import { reviewItemType } from './reviewsTypes';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ReviewsProps {
  reviewList: reviewItemType[]
}

export function Reviews({ reviewList }: ReviewsProps) {
  if (reviewList.length === 0) return null;

  return (
    <div className="container" id="reviews">
      <div className="max-w-[100%] md:max-w-[80%] mx-auto">
      <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
        Customer Reviews
      </h2>
      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent className="-ml-11">
          {reviewList.map(item => {
            const id = useId();

            return <ReviewItem item={item} key={id} />
          })}         
        </CarouselContent>
        <CarouselPrevious className="bg-[url(/prev.svg)] bg-black w-[73px] h-[73px] border-none carousel-nav hidden md:block left-[-12.5%]" />
        <CarouselNext className="bg-[url(/next.svg)] bg-black w-[73px] h-[73px] border-none carousel-nav hidden md:block right-[-12.5%]" />
      </Carousel>
    </div>
    </div>
  )
}