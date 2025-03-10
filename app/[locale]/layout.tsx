import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import { Header } from '@/components/Header';

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
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-black font-inter">
        <main className="px-3 xl:px-0 w-full max-w-[1200px] mx-auto text-white">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          Footer
        </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}