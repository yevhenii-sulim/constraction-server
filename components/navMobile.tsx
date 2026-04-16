import React from 'react';
import Link from 'next/link';
import css from './navMobile.module.css';
import {usePathname} from 'next/navigation';
import {useTranslation} from 'react-i18next';
import NawLink from '@/components/nawLink';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavMobile({isOpen, setIsOpen}: Props) {
  const toggleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  const nav = isOpen ? css.nav : `${css.nav} ${css.visibilityHidden}`;
  const activeLinkStyle = '';
  const linkStyle = '';
  return (
    <nav className={nav}>
      <NawLink pathName={'data'} path={'/ukr'} onClick={toggleOpenModal} />
    </nav>
  );
}
