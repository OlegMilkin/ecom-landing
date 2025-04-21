export interface PartnerItemDto {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: {
    url: string
  }
}

export interface PartnerItemModelInterface {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: string;
}

export class PartnerItemModel {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: string;

  constructor(data: PartnerItemDto) {
    this.id = data.id;
    this.iconAlt = data?.iconAlt || '';
    this.iconTitle = data?.iconTitle || '';
    this.icon = data?.icon?.url || '';
  }
}