'use client';
import {usePathname} from 'next/navigation';
import {useTranslation} from 'react-i18next';
import NawLink from '@/components/nawLink';

export default function NavDesktop() {
  const {t} = useTranslation();
  const pathname = usePathname();

  const activeLinkStyle = '';
  const linkStyle = '';

  return (
    <nav className=''>
      <NawLink pathName={'data'} path={'/ukr'} />
    </nav>
  );
}
