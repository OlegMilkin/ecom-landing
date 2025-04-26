import { MenuItemDto, MenuItemModelInterface, greateMenuItemModel } from '@/lib/models/menu-item-model';
import { NetworkItemDto, NetworkItemModelInterface, createNetworkItemModel } from '@/lib/models/network-item-model';

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

export interface GlobalDataModelInterface {
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
  networks: NetworkItemModelInterface[]
}

export function createGlobalDataModel(data: GlobalDataDto): GlobalDataModelInterface {
  return {
    footerHeadline: data?.footerHeadline || '',
    footerSubHeadline: data?.footerSubHeadline || '',
    headerDesktopLogo: {
      href: data?.headerDesktopLogo?.href || '',
      alt: data?.headerDesktopLogo?.alt || '',
      logo: data?.headerDesktopLogo?.logo?.url || ''
    },
    headerMobileLogo: {
      href: data?.headerMobileLogo?.href || '',
      alt: data?.headerMobileLogo?.alt || '',
      logo: data?.headerMobileLogo?.logo?.url || ''
    },
    menu: (data?.menu || []).map((item: MenuItemDto) => greateMenuItemModel(item)),
    networks: (data?.networks || []).map((item: NetworkItemDto) => createNetworkItemModel(item)),
  };
}