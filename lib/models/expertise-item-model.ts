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

export function createExpertiseItemModel(data: ExpertiseItemDto) {
  return {
    id: data.id,
    description: data?.description || '',
    title: data?.title || '',
    coverAlt: data?.coverAlt || '',
    coverTitle: data?.coverTitle || '',
    cover: data?.cover?.url || '',
  }
}