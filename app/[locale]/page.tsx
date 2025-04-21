import { Achivements } from '@/components/achivements/Achivements';
import { Expertise } from '@/components/expertise/Expertise';
import { Service } from '@/components/service/Service';
import { Hero } from '@/components/hero/Hero';
import { Pricing } from '@/components/pricing/Pricing';
import { Partners } from '@/components/partners/Partners';
import { Reviews } from '@/components/reviews/Reviews';
import { getHomePageData } from '@/lib/api/fetch-home-page-data';
import { HomePageBlockInterfaces } from '@/lib/models/home-page-model';
import { Technologies } from '@/components/technologies/Technologies';


export default async function Home() {
  const homePageData = await getHomePageData();  
  if (!homePageData) return null;

  const renderBlocks = (data: HomePageBlockInterfaces[]) => {
    return data.map((block: HomePageBlockInterfaces) => {
      switch (block.blockName) {
        case 'section.hero': 
          return <Hero key={block.id} {...block} />;
        case 'section.achievements': 
          return <Achivements key={block.id} {...block} />;
        case 'section.expertise': 
          return <Expertise key={block.id} {...block} />;
        case 'section.services': 
          return <Service key={block.id} {...block} />;
        case 'section.technologies': 
          return <Technologies key={block.id} {...block} />;
        case 'section.pricing': 
          return <Pricing key={block.id} {...block} />;  
        case 'section.partners': 
          return <Partners key={block.id} {...block} />;  
        case 'section.reviews': 
          return <Reviews key={block.id} {...block} />;  
        default:
          return null;
      }
    })
  }

  return (
    <>
      {renderBlocks(homePageData.blocks)}
    </>
  );
}
