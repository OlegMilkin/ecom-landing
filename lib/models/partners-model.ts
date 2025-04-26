import { PartnerItemDto, createPartnerItemModel, PartnerItemModelInterface } from  '@/lib/models/partner-item-model'; 

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
  partnerIcons: PartnerItemModelInterface[];
  isVisible: boolean;
  anchorHref: string; 
}

export function createPartnersModel(data: PartnersDto) {
  return {
    id: data.id,
    blockName: data.__component,
    title: data.title || '',
    partnerIcons: data.partnerIcon.map((item: PartnerItemDto) => createPartnerItemModel(item)) || [],
    isVisible: data?.isVisible,
    anchorHref: data?.anchorHref || '',
  }
}