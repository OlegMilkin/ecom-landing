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

export class ReviewItemModel {
  id: number;
  name: string;
  reviewText: string;

  constructor(data: ReviewItemDto) {
    this.id = data.id;
    this.name = data?.name || '';
    this.reviewText = data?.reviewText || '';
  }
}