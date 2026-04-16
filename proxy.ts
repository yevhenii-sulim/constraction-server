import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {languages, defaultLng} from './i18n/config';

export function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const hasLang = languages.some((lng) => pathname.startsWith(`/${lng}`));

  if (!hasLang) {
    return NextResponse.redirect(new URL(`/${defaultLng}${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|admin).*)'],
};
