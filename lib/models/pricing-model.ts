import { createPricingItemModel, PricingItemDto, PricingItemInterface } from '@/lib/models/pricing-item-model' 

export interface PricingDto {
  id: number;
  __component: string;
  title: string;
  description: string;
  pricingItem: PricingItemDto[];
  isVisible: boolean;
  anchorHref: string;
}

export interface PricingModelInterface {
  id: number;
  blockName: string;
  title: string;
  description: string;
  pricingItems: PricingItemInterface[];
  isVisible: boolean;
  anchorHref: string; 
}

export function createPricingModel(data: PricingDto) {
  return {
    id: data.id,
    blockName: data.__component,
    title: data?.title || '',
    description: data?.description || '',
    pricingItems: data?.pricingItem.map((item: PricingItemDto) => createPricingItemModel(item)) || [],
    isVisible: data?.isVisible,
    anchorHref: data?.anchorHref || '',
  }
}