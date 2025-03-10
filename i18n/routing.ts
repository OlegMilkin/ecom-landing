import { defineRouting } from 'next-intl/routing';
import { languages } from '@/i18n/localesConfig';

const locales = languages.map(lang => lang.locale);

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: locales[0]
});