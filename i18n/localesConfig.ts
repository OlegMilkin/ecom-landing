import { getLocales } from '@/lib/api/fetch-locales';

//const loc = await getLocales();

// export const languages = loc.map(item => ({
// 	title: item.name,
// 	locale: item.code,
// }));


interface Language {
	title: string;
  locale: string;
}

export const languages: Language[]  = [
	{
		title: 'EN',
		locale: 'en'
	},
	{
		title: 'UA',
		locale: 'uk'
	},
	{
		title: 'DE',
		locale: 'de'
	}
]