import { createReviewItemModel, ReviewItemDto, ReviewItemModelInterface } from  '@/lib/models/review-item-model';

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
  reviewItems: ReviewItemModelInterface[];
  isVisible: boolean;
  anchorHref: string; 
}

export function createReviewsModel(data: ReviewsDto) {
  return {
    id: data.id,
    blockName :data.__component,
    title: data.title || '',
    reviewItems :data.reviewItem.map((item: ReviewItemDto) => createReviewItemModel(item)) || [],
    isVisible: data?.isVisible,
    anchorHref: data?.anchorHref || '',
  }
}