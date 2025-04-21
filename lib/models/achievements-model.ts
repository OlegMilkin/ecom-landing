import { AchivementItemModel, AchivementItemInterface } from '@/lib/models/achievement-item-model'; 

export interface ArchievementsDto {
  id: number;
  __component: string;
  achievement: AchivementItemInterface[];
  description: string;
  title: string;
  isVisible: boolean;
  anchorHref: string;
}

export interface AchivementsModelInterface {
  id: number;
  blockName: string;
  achievements: AchivementItemInterface[];
  description: string;
  title: string;
  isVisible: boolean;
  anchorHref: string;
}

export class AchivementsModel {
  id: number;
  blockName: string;
  achievements: AchivementItemInterface[];
  description: string;
  title: string;
  isVisible: boolean;
  anchorHref: string;

  constructor (data: ArchievementsDto) {
    this.id = data.id;
    this.blockName = data.__component;
    this.achievements = data.achievement.map((item: AchivementItemInterface) => new AchivementItemModel(item)) || [];
    this.description = data.description || '';
    this.title = data.title || '';
    this.isVisible = data?.isVisible;
    this.anchorHref = data?.anchorHref || '';
  }
}