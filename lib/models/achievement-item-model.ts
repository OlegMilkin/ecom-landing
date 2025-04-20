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

export class AchivementItemModel {
  id: number;
  description: string;
  title: string;


  constructor(data: AchivementItemDto) {
    this.id = data.id;
    this.description = data.description;
    this.title = data.title;
  }
}