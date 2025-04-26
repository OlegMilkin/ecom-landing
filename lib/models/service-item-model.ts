export interface ServiceItemDto {
  id: number;
  text: string;
  icon: {
    url: string
  }
}

export interface ServiceItemModelInterface {
  id: number;
  text: string;
  icon: string;
}

export function createServiceItemModel(data: ServiceItemDto) {
  return {
    id: data.id,
    text: data?.text || '',
    icon: data?.icon?.url || '',
  }
}