import { HeroModel, HeroModelInterface, HeroDto } from './hero-model';
import { AchivementsModel, AchivementsModelInterface, ArchievementsDto } from './achievements-model';
import { ExpertiseModel, ExpertiseModelInterface, ExpertiseDto } from './expertise-model';

interface HomePageDto {
  block: (HeroDto | ArchievementsDto | ExpertiseDto)[];
}

export class HomePageModel {
  blocks: (HeroModelInterface | AchivementsModelInterface | ExpertiseModelInterface)[];

  constructor(data: HomePageDto) {
    this.blocks = [
      new HeroModel(HomePageModel.findBlock(data, 'section.hero') as HeroDto),
      new AchivementsModel(HomePageModel.findBlock(data, 'section.achievements') as ArchievementsDto),
      new ExpertiseModel(HomePageModel.findBlock(data, 'section.expertise') as ExpertiseDto),
    ]
  }

  static findBlock(data: HomePageDto, blockName: string): HeroDto | ArchievementsDto | ExpertiseDto | undefined {
    return data.block.find(block => block.__component === blockName);
  }
}