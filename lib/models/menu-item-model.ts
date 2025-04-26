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

export function greateMenuItemModel(data: MenuItemDto) {
  return {
    id: data.id,
    href: data?.href || '',
    title: data?.title || '',
  }
}