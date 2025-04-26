export interface ServiceDto {
  id: number;
  __component: string;
  description: string;
  title: string;
  isVisible: boolean;
  anchorHref: string;
  coverAlt: string;
  coverTitle: string;
  cover: {
    url: string
  }
}

export interface ServiceModelInterface {
  id: number;
  blockName: string;
  description: string;
  title: string;
  isVisible: boolean;
  anchorHref: string;
  coverAlt: string;
  coverTitle: string;
  cover: string;
}

export function createServiceModel(data: ServiceDto) {
  return {
    id: data.id,
    blockName :data?.__component,
    description: data?.description || '',
    title: data?.title || '',
    isVisible: data?.isVisible || true,
    anchorHref: data?.anchorHref || '',
    coverAlt: data?.coverAlt || '',
    coverTitle: data?.coverTitle || '',
    cover: data?.cover?.url || '',
  }
}