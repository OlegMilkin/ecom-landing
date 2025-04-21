import { Achivements } from '@/components/achivements/Achivements';
import { Expertise } from '@/components/expertise/Expertise';
import { ServicesAndTechnologies } from '@/components/services-and-technologies/ServicesAndTechnologies';
import usePageData from './use-page-data';
import { Hero } from '@/components/hero/Hero';
import { Pricing } from '@/components/pricing/Pricing';
import { Partners } from '@/components/partners/Partners';
import { Reviews } from '@/components/reviews/Reviews';
import { getHomePageData } from '@/lib/api/fetch-home-page-data';
import { HomePageBlockInterfaces } from '@/lib/models/home-page-model';


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

  console.log('homePageData', homePageData)
  
  if (!homePageData) return null;

  const renderBlocks = (data: HomePageBlockInterfaces[]) => {
    return data.map((block: HomePageBlockInterfaces) => {
      switch (block.blockName) {
        case 'section.hero': 
          return <Hero key={block.id} {...block} />;
        case 'section.achievements': 
          return <Achivements key={block.id} {...block} />;
        default:
          return null;
      }
    })
  }

  return (
    <>
      {renderBlocks(homePageData.blocks)}

      {/* Expertise section start */}
      {/* <Expertise expertice={experticeList} /> */}
      {/* Expertise section end */}

      {/* Services & Technologies start */}
      {/* <ServicesAndTechnologies 
        servicesList={servicesList}
        technologiesList={technologiesList}
      /> */}
      {/* Services & Technologies end */}

      {/* Pricing start */}
      {/* <Pricing pricingList={pricingList} isVisible={true} /> */}
      {/* Pricing end */}

      {/* Our Partners start */}
      {/* <Partners partnersList={partnersList} /> */}
      {/* Our Partners end */}

      {/* Customer Reviews start */}
      {/* <Reviews reviewList={reviewList} /> */}
      {/* Customer Reviews end */}
    </>
  );
}
