import { PartnerItemModel, PartnerItemDto } from  '@/lib/models/partner-item-model' 

export interface PartnersDto {
  id: number;
  __component: string;
  title: string;
  partnerIcon: PartnerItemDto[];
  isVisible: boolean;
  anchorHref: string;
}

export interface PartnersModelInterface {
  id: number;
  blockName: string;
  title: string;
  partnerIcons: PartnerItemModel[];
  isVisible: boolean;
  anchorHref: string; 
}

export class PartnersModel {
  id: number;
  blockName: string;
  title: string;
  partnerIcons: PartnerItemModel[];
  isVisible: boolean;
  anchorHref: string;

  constructor (data: PartnersDto) {
    this.id = data.id;
    this.blockName = data.__component;
    this.title = data.title || '';
    this.partnerIcons = data.partnerIcon.map((item: PartnerItemDto) => new PartnerItemModel(item)) || [];
    this.isVisible = data?.isVisible;
    this.anchorHref = data?.anchorHref || '';
  }
}