import { createHeroModel, HeroModelInterface, HeroDto } from './hero-model';
import { createAchievementsModel, AchivementsModelInterface, ArchievementsDto } from './achievements-model';
import { createExpertiseModel, ExpertiseModelInterface, ExpertiseDto } from './expertise-model';
import { createServiceModel, ServiceModelInterface, ServiceDto } from './service-model';
import { createTechnologiesModel, TechnologiesModelInterface, TechnologiesDto } from './technologies-model';
import { createPricingModel, PricingModelInterface, PricingDto } from './pricing-model';
import { createPartnersModel, PartnersModelInterface, PartnersDto } from './partners-model';
import { createReviewsModel, ReviewsModelInterface, ReviewsDto } from './reviews-model';

export type HomePageBlockDto =
  HeroDto | 
  ArchievementsDto | 
  ExpertiseDto | 
  ServiceDto | 
  TechnologiesDto | 
  PricingDto | 
  PartnersDto | 
  ReviewsDto |
  undefined;

interface HomePageDto {
  block: HomePageBlockDto[];
}

export type HomePageBlockInterfaces =
  HeroModelInterface |
  AchivementsModelInterface |
  ExpertiseModelInterface |
  ServiceModelInterface |
  TechnologiesModelInterface |
  PricingModelInterface |
  PartnersModelInterface |
  ReviewsModelInterface

const findBlock = (data: HomePageDto, blockName: string): HomePageBlockDto => {
  return data.block.find(block => block?.__component === blockName);
}

export function createHomePageModel (data: HomePageDto) {
  const blocks = [
    createHeroModel(findBlock(data, 'section.hero') as HeroDto),
    createAchievementsModel(findBlock(data, 'section.achievements') as ArchievementsDto),
    createExpertiseModel(findBlock(data, 'section.expertise') as ExpertiseDto),
    createServiceModel(findBlock(data, 'section.services') as ServiceDto),
    createTechnologiesModel(findBlock(data, 'section.technologies') as TechnologiesDto),
    createPricingModel(findBlock(data, 'section.pricing') as PricingDto),
    createPartnersModel(findBlock(data, 'section.partners') as PartnersDto),
    createReviewsModel(findBlock(data, 'section.reviews') as ReviewsDto),
  ];

  return blocks;
}