import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function Reviews() {
  return (
    <div className="container">
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
          <CarouselItem className="basis-1/1 md:basis-1/2 pl-11">
            <div className="bg-white text-black">
              1
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 md:basis-1/2 pl-11">
            <div className="bg-white text-black">
              2
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/1 md:basis-1/2 pl-11">
            <div className="bg-white text-black">
              3
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-[url(/prev.svg)] bg-black w-[73px] h-[73px] border-none carousel-nav hidden md:block left-[-12.5%]" />
        <CarouselNext className="bg-[url(/next.svg)] bg-black w-[73px] h-[73px] border-none carousel-nav hidden md:block right-[-12.5%]" />
      </Carousel>

    </div>
    </div>
  )
}