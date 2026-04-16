import '@/app/globals.css';
import LanguageSwitcher from '@/components/languageSwitcher';

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <LanguageSwitcher />
      {children}
    </main>
  );
}
