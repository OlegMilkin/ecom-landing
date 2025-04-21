export interface PricingItemDto {
  id: number;
  description: string;
  title: string;
  price: string;
  pricingItemService: {id: number, service: string}[]
}

export interface PricingItemInterface {
  id: number;
  description: string;
  title: string;
  price: string;
  pricingItemServices: {id: number, service: string}[]
}

export class PricingItemModel {
  id: number;
  description: string;
  title: string;
  price: string;
  pricingItemServices: {id: number, service: string}[]

  constructor(data: PricingItemDto) {
    this.id = data.id;
    this.description = data?.description || '';
    this.title = data?.title || '';
    this.price = data?.price || '';
    this.pricingItemServices = data.pricingItemService.map((item: {id: number, service: string}) => (
      {id: item.id, service: item.service})
    ) || [];
  }
}