export interface TechnologieItemDto {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: {
    url: string
  }
}

export interface TechnologieItemModelInterface {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: string;
}

export function createTechnologieItemModel(data: TechnologieItemDto) {
  return {
    id: data.id,
    iconAlt: data?.iconAlt || '',
    iconTitle: data?.iconTitle || '',
    icon: data?.icon?.url || '',
  }
}