export interface AchivementItemDto {
  id: number;
  description: string;
  title: string;
}

export interface AchivementItemInterface {
  id: number;
  description: string;
  title: string;
}

export function createAchivementItemModel(data: AchivementItemDto) {
  return {
    id: data.id,
    description: data.description,
    title: data.title,
  }
}