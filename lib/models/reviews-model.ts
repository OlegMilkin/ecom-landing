import { ReviewItemModel, ReviewItemDto } from  '@/lib/models/review-item-model';

export interface ReviewsDto {
  id: number;
  __component: string;
  title: string;
  reviewItem: ReviewItemDto[];
  isVisible: boolean;
  anchorHref: string;
}

export interface ReviewsModelInterface {
  id: number;
  blockName: string;
  title: string;
  reviewItems: ReviewItemModel[];
  isVisible: boolean;
  anchorHref: string; 
}

export class ReviewsModel {
  id: number;
  blockName: string;
  title: string;
  reviewItems: ReviewItemModel[];
  isVisible: boolean;
  anchorHref: string;

  constructor (data: ReviewsDto) {
    this.id = data.id;
    this.blockName = data.__component;
    this.title = data.title || '';
    this.reviewItems = data.reviewItem.map((item: ReviewItemDto) => new ReviewItemModel(item)) || [];
    this.isVisible = data?.isVisible;
    this.anchorHref = data?.anchorHref || '';
  }
}