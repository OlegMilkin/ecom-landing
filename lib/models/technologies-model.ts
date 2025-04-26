import { createTechnologieItemModel, TechnologieItemDto, TechnologieItemModelInterface } from '@/lib/models/technologie-item-model';
import { createServiceItemModel, ServiceItemDto, ServiceItemModelInterface } from '@/lib/models/service-item-model';  

export interface TechnologiesDto {
  id: number;
  __component: string;
  serviceItem: ServiceItemDto[];
  technologieItem: TechnologieItemDto[];
  isVisible: boolean;
  anchorHref: string;
}

export interface TechnologiesModelInterface {
  id: number;
  blockName: string;
  servicesList: ServiceItemModelInterface[];
  technologiesList: TechnologieItemModelInterface[];
  isVisible: boolean;
  anchorHref: string; 
}

export function createTechnologiesModel(data: TechnologiesDto) {
  return {
    id: data.id,
    blockName: data.__component,
    servicesList: data.serviceItem.map((item: ServiceItemDto) => createServiceItemModel(item)) || [],
    technologiesList: data.technologieItem.map((item: TechnologieItemDto) => createTechnologieItemModel(item)) || [],
    isVisible: data?.isVisible,
    anchorHref: data?.anchorHref || '',
  }
}