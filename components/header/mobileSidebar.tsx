'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import burgerIcon from '@/public/burger.svg';
import closeIcon from '@/public/close.svg';
import Image from 'next/image';
import { Menu } from '@/components/header/Menu';
import { MenuItemModelInterface } from '@/lib/models/menu-item-model';
import { useState } from 'react';

interface MobileSidebarProps {
  menu: MenuItemModelInterface[];
}

export function MobileSidebar({ menu }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="block lg:hidden">
        <Image
          src={burgerIcon}
          alt='Home'
          width={35}
          height={35}
          className='cursor-pointer'
        />
      </DrawerTrigger>
      <DrawerContent className="bg-black border-l border-sky-100 justify-center">
        <DrawerClose className='absolute text-white top-[19px] right-[15px]'>
          <Image
            src={closeIcon}
            alt='Home'
            width={35}
            height={35}
            className='cursor-pointer'
          />
        </DrawerClose>
        <DrawerHeader className='pl-10'>
          <DrawerTitle className='hidden'></DrawerTitle>
          <Menu 
            menuItems={menu}
            ulClass='gap-11 lg:gap-7 lg:flex-row'
            linkClass='uppercase text-2xl'
            closeMenu={closeMenu}
          />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}