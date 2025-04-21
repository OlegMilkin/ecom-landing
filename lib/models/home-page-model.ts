import { HeroModel, HeroModelInterface, HeroDto } from './hero-model';
import { AchivementsModel, AchivementsModelInterface, ArchievementsDto } from './achievements-model';
import { ExpertiseModel, ExpertiseModelInterface, ExpertiseDto } from './expertise-model';
import { ServiceModel, ServiceModelInterface, ServiceDto } from './service-model';
import { TechnologiesModel, TechnologiesModelInterface, TechnologiesDto } from './technologies-model';
import { PricingModel, PricingModelInterface, PricingDto } from './pricing-model';
import { PartnersModel, PartnersModelInterface, PartnersDto } from './partners-model';
import { ReviewsModel, ReviewsModelInterface, ReviewsDto } from './reviews-model';

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

export class HomePageModel {
  blocks: HomePageBlockInterfaces[];

  constructor(data: HomePageDto) {
    this.blocks = [
      new HeroModel(HomePageModel.findBlock(data, 'section.hero') as HeroDto),
      new AchivementsModel(HomePageModel.findBlock(data, 'section.achievements') as ArchievementsDto),
      new ExpertiseModel(HomePageModel.findBlock(data, 'section.expertise') as ExpertiseDto),
      new ServiceModel(HomePageModel.findBlock(data, 'section.services') as ServiceDto),
      new TechnologiesModel(HomePageModel.findBlock(data, 'section.technologies') as TechnologiesDto),
      new PricingModel(HomePageModel.findBlock(data, 'section.pricing') as PricingDto),
      new PartnersModel(HomePageModel.findBlock(data, 'section.partners') as PartnersDto),
      new ReviewsModel(HomePageModel.findBlock(data, 'section.reviews') as ReviewsDto),
    ]
  }

  static findBlock(data: HomePageDto, blockName: string): HomePageBlockDto {
    return data.block.find(block => block?.__component === blockName);
  }
}