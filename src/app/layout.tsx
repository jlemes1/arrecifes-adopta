import type { Metadata } from 'next';
import Header from '@/components/header/Header';
import { PetsProvider } from '@/context/PetsContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arrecifes Adopta',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='emerald'>
      <body>
        <PetsProvider>
          <Header />
          <main>{children}</main>
        </PetsProvider>
      </body>
    </html>
  );
}
