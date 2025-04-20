import { Achivements } from '@/components/achivements/Achivements';
import { Expertise } from '@/components/expertise/Expertise';
import { ServicesAndTechnologies } from '@/components/services-and-technologies/ServicesAndTechnologies';
import usePageData from './use-page-data';
import { Hero } from '@/components/hero/Hero';
import { Pricing } from '@/components/pricing/Pricing';
import { Partners } from '@/components/partners/Partners';
import { Reviews } from '@/components/reviews/Reviews';
import { getHomePageData } from '@/lib/api/fetch-home-page-data';

export default async function Home() {
  const {
    experticeList,
    achievementsList,
    servicesList,
    technologiesList,
    pricingList,
    partnersList,
    reviewList,
  } = usePageData();

  const homePageData = await getHomePageData();
  console.log('homePageData', homePageData);

  return (
    <>
      {/* Hero section start */}
      <Hero />
      {/* Hero section end */}

      {/* Archievements section start */}
      <Achivements achievements={achievementsList} />
      {/* Archievements section end */}

      {/* Expertise section start */}
      <Expertise expertice={experticeList} />
      {/* Expertise section end */}

      {/* Services & Technologies start */}
      <ServicesAndTechnologies 
        servicesList={servicesList}
        technologiesList={technologiesList}
      />
      {/* Services & Technologies end */}

      {/* Pricing start */}
      <Pricing pricingList={pricingList} isVisible={true} />
      {/* Pricing end */}

      {/* Our Partners start */}
      <Partners partnersList={partnersList} />
      {/* Our Partners end */}

      {/* Customer Reviews start */}
      <Reviews reviewList={reviewList} />
      {/* Customer Reviews end */}
    </>
  );
}
