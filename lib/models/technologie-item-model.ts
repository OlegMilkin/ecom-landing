export interface TechnologieItemDto {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: {
    url: string
  }
}

export interface TechnologieItemModelInterface {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: string;
}

export class TechnologieItemModel {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: string;

  constructor(data: TechnologieItemDto) {
    this.id = data.id;
    this.iconAlt = data?.iconAlt || '';
    this.iconTitle = data?.iconTitle || '';
    this.icon = data?.icon?.url || '';
  }
}