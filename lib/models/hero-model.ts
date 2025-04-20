export interface HeroDto {
  __component: string;
  description: string;
  headline: string;
  id: number;
}

export interface HeroModelInterface {
  blockName: string;
  description: string;
  headline: string;
  id: number;
}

export class HeroModel {
  blockName: string;
  description: string;
  headline: string;
  id: number;

  constructor (data: HeroDto) {
    this.blockName = data.__component;
    this.description = data.description || '';
    this.headline = data.headline || '';
    this.id = data.id;
  }
}