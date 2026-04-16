'use client';

import {usePathname, useRouter} from 'next/navigation';
import {languages} from '@/i18n/config';
import {clsx} from 'clsx/lite';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (lng: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');

    segments[1] = lng;

    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className='flex justify-center gap-2'>
      {languages.map((lng) => {
        return (
          <button
            key={lng}
            onClick={() => switchLanguage(lng)}
            className='relative'
          >
            {lng.toUpperCase()}
            {pathname.includes(lng) && (
              <span className='absolute h-1 w-full bg-amber-50 bottom-0 left-0' />
            )}
          </button>
        );
      })}
    </div>
  );
}
