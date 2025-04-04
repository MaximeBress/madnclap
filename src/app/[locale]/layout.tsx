import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import { routing } from '@/i18n/routing';

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
      <body>
        <div className="md:!py-6 lg:!py-6 xl:!py-6">
          <NextIntlClientProvider>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
