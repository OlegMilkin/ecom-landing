export interface ServiceItemDto {
  id: number;
  text: string;
  icon: {
    url: string
  }
}

export interface ServiceItemModelInterface {
  id: number;
  text: string;
  icon: string;
}

export class ServiceItemModel {
  id: number;
  text: string;
  icon: string;

  constructor(data: ServiceItemDto) {
    this.id = data.id;
    this.text = data?.text || '';
    this.icon = data?.icon?.url || '';
  }
}