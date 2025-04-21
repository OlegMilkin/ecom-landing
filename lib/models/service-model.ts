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

export class ServiceModel {
  id: number;
  blockName: string;
  description: string;
  title: string;
  isVisible: boolean;
  anchorHref: string;
  coverAlt: string;
  coverTitle: string;
  cover: string;

  constructor (data: ServiceDto) {
    this.id = data.id;
    this.blockName = data?.__component;
    this.description = data?.description || '';
    this.title = data?.title || '';
    this.isVisible = data?.isVisible || true;
    this.anchorHref = data?.anchorHref || '';
    this.coverAlt = data?.coverAlt || '';
    this.coverTitle = data?.coverTitle || '';
    this.cover = data?.cover?.url || '';
  }
}