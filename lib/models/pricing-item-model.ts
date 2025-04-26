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

export function createPricingItemModel(data: PricingItemDto) {
  return {
    id: data.id,
    description: data?.description || '',
    title: data?.title || '',
    price: data?.price || '',
    pricingItemServices: data.pricingItemService.map((item: {id: number, service: string}) => (
      {id: item.id, service: item.service})
    ) || [],
  }
}