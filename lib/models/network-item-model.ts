export interface NetworkItemDto {
  id: number;
  href: string;
  title: string;
  alt: string;
  icon: {
    url: string,
  }
}

export interface NetworkItemModelInterface {
  id: number;
  href: string;
  title: string;
  alt: string;
  icon: string;
}

export class NetworkItemModel {
  id: number;
  href: string;
  title: string;
  alt: string;
  icon: string;

  constructor(data: NetworkItemDto) {
    this.id = data.id;
    this.href = data?.href || '';
    this.title = data?.title || '';
    this.alt = data?.alt || '';
    this.icon = data?.icon.url || '';
  }
}