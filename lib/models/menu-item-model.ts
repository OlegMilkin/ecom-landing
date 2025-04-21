export interface MenuItemDto {
  id: number;
  href: string;
  title: string;
}

export interface MenuItemModelInterface {
  id: number;
  href: string;
  title: string;
}

export class MenuItemModel {
  id: number;
  href: string;
  title: string;

  constructor(data: MenuItemDto) {
    this.id = data.id;
    this.href = data?.href || '';
    this.title = data?.title || '';
  }
}