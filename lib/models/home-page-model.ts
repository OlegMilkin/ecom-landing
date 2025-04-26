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

export function createHomePageModel (data: HomePageDto) {

  const blocks = data.block.map((block: HomePageBlockDto) => {
      switch (block.__component) {
        case 'section.hero': 
          return createHeroModel(block);
        case 'section.achievements': 
          return createAchievementsModel(block);
        case 'section.expertise': 
          return createExpertiseModel(block);
        case 'section.services': 
          return createServiceModel(block);
        case 'section.technologies': 
          return createTechnologiesModel(block);
        case 'section.pricing': 
          return createPricingModel(block);  
        case 'section.partners': 
          return createPartnersModel(block);  
        case 'section.reviews': 
          return createReviewsModel(block);  
        default:
          return [];
      }
    })

  return blocks;
}