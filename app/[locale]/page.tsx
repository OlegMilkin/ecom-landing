import { useTranslations } from 'next-intl';
import { Button } from '@/components/Button';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      {/* Hero section start */}
      <section className='min-h-0 lg:min-h-[663px] bg-[url(/hero-banner.png)] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center lg:gap-10 gap-4 lg:py-0 py-4'>
        <h1 className='text-6xl lg:text-9xl font-medium text-center'>
          ECOM is simple
        </h1>
        <p className='max-w-[745px] text-center lg:text-lg text-sm'>
          Lorem ipsum dolor sit amet consectetur. Quis donec sit massa odio lacus consectetur congue sem. 
          Risus diam odio magna dui. Ut sed ut tellus id mattis.
          Tempus bibendum quisque scelerisque euismod varius.
        </p>
        <Button 
          title={t('contactUs')}
          href="/contact"
          size="big"
        />
      </section>
      {/* Hero section end */}
      {/* Archievements section start */}
      <section className='flex flex-col items-center'>
        <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
          Achievements
        </h2>
        <p className='max-w-[980px] text-center lg:text-xl text-sm mb-4 lg:mb-16'>
          Discover the numbers behind our success.
          These figures showcase the trust our clients place in us and our relentless pursuit of excellence.
          Every statistic reflects our unwavering commitment to quality,
          innovation, and delivering results that exceed expectations.
          From longstanding partnerships to groundbreaking achievements,
          our journey is built on a foundation of trust and expertise.
          Let our track record speak for itself as we continue to grow and create lasting value for our clients.
        </p>
        <div className='overflow-hidden w-full'>
          <div className="grid grid-cols-2 lg:grid-cols-4 text-white text-center mb-[-1px] mr-[-1px]">
            <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
              <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
                ~$100 billion
              </strong>
              <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
              <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
                0.8%
              </strong>
              <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet</p> block
            </div>
            <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
              <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
                ~30
              </strong>
              <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
              <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
                25+
              </strong>
              <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
              <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
                2024
              </strong>
              <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
              <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
                1,200+
              </strong>
              <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
              <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
                24/7
              </strong>
              <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
              <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
                5 billion+
              </strong>
              <p className='text-sm lg:text-lg'>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>
      {/* Archievements section end */}

      {/* Expertise section start */}
      <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
        Expertise
      </h2>
      
      {/* Expertise section end */}
    </>
  );
}
