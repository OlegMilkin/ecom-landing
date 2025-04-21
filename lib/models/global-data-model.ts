import { MenuItemModel, MenuItemModelInterface, MenuItemDto } from '@/lib/models/menu-item-model';
import { NetworkItemModel, NetworkItemDto } from '@/lib/models/network-item-model';

interface GlobalDataDto {
  footerHeadline: string;
  footerSubHeadline: string;
  headerDesktopLogo: {
    href: string;
    alt: string;
    logo: {
      url: string
    }
  };
  headerMobileLogo: {
    href: string;
    alt: string;
    logo: {
      url: string
    }
  };
  menu: MenuItemDto[];
  networks: NetworkItemDto[]
}

export class GlobalDataModel {
  footerHeadline: string;
  footerSubHeadline: string;
  headerDesktopLogo: {
    href: string;
    alt: string;
    logo: string
  };
  headerMobileLogo: {
    href: string;
    alt: string;
    logo: string
  };
  menu: MenuItemModelInterface[];
  networks: NetworkItemModel[]


  constructor(data: GlobalDataDto) {
    this.footerHeadline = data?.footerHeadline || '';
    this.footerSubHeadline = data?.footerSubHeadline || '';
    this.headerDesktopLogo = {
      href: data.headerDesktopLogo.href,
      alt: data.headerDesktopLogo.alt,
      logo: data.headerDesktopLogo.logo.url
    };
    this.headerMobileLogo = {
      href: data.headerMobileLogo.href,
      alt: data.headerMobileLogo.alt,
      logo: data.headerMobileLogo.logo.url
    };
    this.menu = data.menu.map((item: MenuItemDto) => new MenuItemModel(item));
    this.networks = data.networks.map((item: NetworkItemDto) => new NetworkItemModel(item));
  }
}