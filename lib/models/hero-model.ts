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

export function createHeroModel(data: HeroDto): HeroModelInterface {
  return {
    id: data.id,
    blockName: data?.__component,
    description: data?.description || '',
    headline: data?.headline || '',
    isVisible: data?.isVisible,
    anchorHref: data?.anchorHref || '',
  };
}