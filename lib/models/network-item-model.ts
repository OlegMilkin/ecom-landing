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

export function createNetworkItemModel(data: NetworkItemDto) {
  return {
    id: data.id,
    href: data?.href || '',
    title: data?.title || '',
    alt: data?.alt || '',
    icon: data?.icon.url || '',
  }
}