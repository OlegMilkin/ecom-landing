export interface ExpertiseItemDto {
  id: number;
  description: string;
  title: string;
  coverAlt: string;
  coverTitle: string;
  cover: {
    url: string
  }
}

export interface ExpertiseItemInterface {
  id: number;
  description: string;
  title: string;
  coverAlt: string;
  coverTitle: string;
  cover: string;
}

export class ExpertiseItemModel {
  id: number;
  description: string;
  title: string;
  coverAlt: string;
  coverTitle: string;
  cover: string;

  constructor(data: ExpertiseItemDto) {
    this.id = data.id;
    this.description = data?.description || '';
    this.title = data?.title || '';
    this.coverAlt = data?.coverAlt || '';
    this.coverTitle = data?.coverTitle || '';
    this.cover = data?.cover?.url || '';
  }
}