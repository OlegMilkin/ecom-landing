export interface ContactPageDto {
  getInTouch: {
    id: number,
    title: string,
    description: string;
    ctaText: string;
    ctaTextSub: string;
  }
}

export interface ContactPageModelInterface {
  title: string;
  description: string;
  ctaText: string;
  ctaTextSub: string;
}

export class ContactPageModel {
  title: string;
  description: string;
  ctaText: string;
  ctaTextSub: string;

  constructor (data: ContactPageDto) {
    this.title = data?.getInTouch.title || '';
    this.description = data?.getInTouch.description || '';
    this.ctaText = data?.getInTouch.ctaText || '';
    this.ctaTextSub = data?.getInTouch.ctaTextSub || '';
  }
}