'use client';
import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslation} from 'react-i18next';

interface Props {
  pathName: string;
  path: string;
  onClick?: () => void;
}

export default function NawLink({pathName, path, onClick}: Props) {
  const {t} = useTranslation();
  const pathname = usePathname();
  const activeLinkStyle = '';
  const linkStyle = '';

  return (
    <Link
      className={clsx(linkStyle, {
        [activeLinkStyle]: pathname.includes(path),
      })}
      href={path}
      onClick={onClick}
    >
      {t(pathName)}
    </Link>
  );
}
