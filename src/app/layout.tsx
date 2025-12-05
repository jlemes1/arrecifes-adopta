import type { Metadata } from 'next';
import Header from '@/components/header/Header';
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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
