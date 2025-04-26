import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Providers from './providers';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { getGlobalData } from '@/lib/api/fetch-global-data';
import './globals.css';

export const metadata: Metadata = {
  title: "Ecom Shape",
  description: "Ecom is simple",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const globalData = await getGlobalData(locale);

  if (!globalData) {
    throw new Error('Failed to fetch global data');
  }

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-black font-inter">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header {...globalData} />
            {children}
            <Footer {...globalData} />
          </NextIntlClientProvider>
        </Providers>  
      </body>
    </html>
  );
}