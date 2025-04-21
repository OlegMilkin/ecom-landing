export interface HeroDto {
  id: number;
  __component: string;
  description: string;
  headline: string;
  isVisible: boolean;
  anchorHref: string;
}

export interface HeroModelInterface {
  id: number;
  blockName: string;
  description: string;
  headline: string;
  isVisible: boolean;
  anchorHref: string;
}

export class HeroModel {
  id: number;
  blockName: string;
  description: string;
  headline: string;
  isVisible: boolean;
  anchorHref: string;

  constructor (data: HeroDto) {
    this.id = data.id;
    this.blockName = data?.__component;
    this.description = data?.description || '';
    this.headline = data?.headline || '';
    this.isVisible = data?.isVisible;
    this.anchorHref = data?.anchorHref || '';
  }
}