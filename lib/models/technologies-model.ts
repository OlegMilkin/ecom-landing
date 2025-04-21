import { TechnologieItemModel, TechnologieItemDto } from '@/lib/models/technologie-item-model';
import { ServiceItemModel, ServiceItemDto } from '@/lib/models/service-item-model';  

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
  servicesList: ServiceItemModel[];
  technologiesList: TechnologieItemModel[];
  isVisible: boolean;
  anchorHref: string; 
}

export class TechnologiesModel {
  id: number;
  blockName: string;
  servicesList: ServiceItemModel[];
  technologiesList: TechnologieItemModel[];
  isVisible: boolean;
  anchorHref: string;

  constructor (data: TechnologiesDto) {
    this.id = data.id;
    this.blockName = data.__component;
    this.servicesList = data.serviceItem.map((item: ServiceItemDto) => new ServiceItemModel(item)) || [];
    this.technologiesList = data.technologieItem.map((item: TechnologieItemDto) => new TechnologieItemModel(item)) || [];
    this.isVisible = data?.isVisible;
    this.anchorHref = data?.anchorHref || '';
  }
}