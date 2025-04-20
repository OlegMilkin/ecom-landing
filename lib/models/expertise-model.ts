import { ExpertiseItemModel, ExpertiseItemInterface, ExpertiseItemDto } from '@/lib/models/expertise-item-model'; 

export interface ExpertiseDto {
  id: number;
  __component: string;
  title: string;
  expertise: ExpertiseItemDto[];
}

export interface ExpertiseModelInterface {
  id: number;
  blockName: string;
  title: string;
  expertises: ExpertiseItemModel[] 
}

export class ExpertiseModel {
  id: number;
  blockName: string;
  title: string;
  expertises: ExpertiseItemModel[];

  constructor (data: ExpertiseDto) {
    this.id = data.id;
    this.blockName = data.__component;
    this.title = data.title || '';
    this.expertises = data.expertise.map((item: ExpertiseItemDto) => new ExpertiseItemModel(item)) || [];
  }
}