import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { languages } from '@/i18n/localesConfig';
 
const handleI18nRouting = createMiddleware(routing);
 
export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const locales = languages.map(lang => lang.locale);
 
  // Matches '/', as well as all paths that start with a locale like '/en'
  const shouldHandle =
    pathname === '/' ||
    new RegExp(`^/(${locales.join('|')})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  if (!shouldHandle) return;
 
  return handleI18nRouting(request);
}