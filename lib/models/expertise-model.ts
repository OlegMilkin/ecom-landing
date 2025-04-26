import { createExpertiseItemModel, ExpertiseItemDto, ExpertiseItemInterface } from '@/lib/models/expertise-item-model'; 

export interface ExpertiseDto {
  id: number;
  __component: string;
  title: string;
  expertise: ExpertiseItemDto[];
  isVisible: boolean;
  anchorHref: string;
}

export interface ExpertiseModelInterface {
  id: number;
  blockName: string;
  title: string;
  expertises: ExpertiseItemInterface[];
  isVisible: boolean;
  anchorHref: string; 
}

export function createExpertiseModel(data: ExpertiseDto) {
  return {
    id: data.id,
    blockName: data.__component,
    title: data.title || '',
    expertises: data.expertise.map((item: ExpertiseItemDto) => createExpertiseItemModel(item)) || [],
    isVisible: data?.isVisible,
    anchorHref: data?.anchorHref || '',
  }
}