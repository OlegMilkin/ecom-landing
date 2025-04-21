import { ReviewItem } from './ReviewItem';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ReviewsModelInterface } from '@/lib/models/reviews-model';

export function Reviews({
    title,
    reviewItems,
    isVisible,
    anchorHref,
  }: ReviewsModelInterface) {
  if (reviewItems.length === 0 || !isVisible) return null;

  return (
    <div className="container" id={anchorHref}>
      <div className="max-w-[100%] md:max-w-[80%] mx-auto mb-[15px] md:mb-11">
        <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
          {title}
        </h2>
        <Carousel
          className='max-w-[calc(100%-100px)] mx-auto md:max-w-[100%]'
          opts={{
            loop: true,
            align: 'start',
          }}
        >
          <CarouselContent className="-ml-11">
            {reviewItems.map(item => <ReviewItem {...item} key={item.id} />)}         
          </CarouselContent>
          <CarouselPrevious className="bg-none md:bg-[url(/prev.svg)] bg-black w-[35px] md:w-[73px] h-[35px] md:h-[73px] border-none carousel-nav left-[-50px] md:left-[-12.5%]" />
          <CarouselNext className="bg-none md:bg-[url(/next.svg)] bg-black w-[35px] md:w-[73px] h-[35px] md:h-[73px] border-none carousel-nav right-[-50px] md:right-[-12.5%]" />
        </Carousel>
      </div>
    </div>
  )
}