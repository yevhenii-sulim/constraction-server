import {createI18nServer} from '@/i18n/server';

export default async function Page({params}: {params: Promise<{lng: string}>}) {
  const {lng} = await params;

  const t = await createI18nServer(lng);

  return <h1>{t('date')}</h1>;
}
