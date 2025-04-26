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

export function createContactPageModel(data: ContactPageDto) {
  return {
    title: data?.getInTouch.title || '',
    description :data?.getInTouch.description || '',
    ctaText: data?.getInTouch.ctaText || '',
    ctaTextSub: data?.getInTouch.ctaTextSub || '',
  }
}