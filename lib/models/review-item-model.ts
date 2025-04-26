export interface ReviewItemDto {
  id: number;
  name: string;
  reviewText: string;
}

export interface ReviewItemModelInterface {
  id: number;
  name: string;
  reviewText: string;
}

export function createReviewItemModel(data: ReviewItemDto) {
  return {
    id: data.id,
    name: data?.name || '',
    reviewText: data?.reviewText || '',
  }
}