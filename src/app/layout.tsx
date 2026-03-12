import type { Metadata } from 'next';
import LayoutWrapper from '@/components/LayoutWrapper';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arrecifes Adopta - Plataforma de adopción de mascotas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='emerald'>
      <body className='flex flex-col min-h-screen'>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

