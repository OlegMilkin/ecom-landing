import { Achivements } from '@/components/achivements/Achivements';
import { Expertise } from '@/components/expertise/Expertise';
import { ServicesAndTechnologies } from '@/components/services-and-technologies/ServicesAndTechnologies';
import usePageData from './use-page-data';
import { Hero } from '@/components/hero/Hero';

export default function Home() {
  const { experticeList, achievementsList } = usePageData();

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
      <ServicesAndTechnologies />
      {/* Services & Technologies end */}
    </>
  );
}
