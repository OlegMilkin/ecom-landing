export interface PartnerItemDto {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: {
    url: string
  }
}

export interface PartnerItemModelInterface {
  id: number;
  iconAlt: string;
  iconTitle: string;
  icon: string;
}

export function createPartnerItemModel(data: PartnerItemDto) {
  return {
    id: data.id,
    iconAlt: data?.iconAlt || '',
    iconTitle: data?.iconTitle || '',
    icon: data?.icon?.url || '',
  }
}