import { PricingItemModel, PricingItemDto } from '@/lib/models/pricing-item-model' 

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
  pricingItems: PricingItemModel[];
  isVisible: boolean;
  anchorHref: string; 
}

export class PricingModel {
  id: number;
  blockName: string;
  title: string;
  description: string;
  pricingItems: PricingItemModel[];
  isVisible: boolean;
  anchorHref: string;

  constructor (data: PricingDto) {
    this.id = data.id;
    this.blockName = data.__component;
    this.title = data?.title || '';
    this.description = data?.description || '';
    this.pricingItems = data?.pricingItem.map((item: PricingItemDto) => new PricingItemModel(item)) || [];
    this.isVisible = data?.isVisible;
    this.anchorHref = data?.anchorHref || '';
  }
}