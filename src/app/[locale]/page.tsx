import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export default function Home() {
  const t = useTranslations('Homepage');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
