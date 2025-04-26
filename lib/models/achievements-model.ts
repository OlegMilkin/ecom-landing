import { createAchivementItemModel, AchivementItemInterface } from '@/lib/models/achievement-item-model'; 

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

export function createAchievementsModel(data: ArchievementsDto) {
  return {
    id: data.id,
    blockName: data.__component,
    achievements: data.achievement.map((item: AchivementItemInterface) => createAchivementItemModel(item)) || [],
    description: data.description || '',
    title: data.title || '',
    isVisible: data?.isVisible || true,
    anchorHref: data?.anchorHref || '',
  }
}