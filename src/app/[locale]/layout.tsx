import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import '@/app/css/plugins.css';
import '@/app/css/globals.css';
import '@/app/css/yellow.css';
import '@/app/css/urbanist.css';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { routing } from '@/i18n/routing';
import Script from 'next/script';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="onepage">
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Script src="js/plugins.js" />
        <Script src="js/theme.js" />
      </body>
    </html>
  );
}
