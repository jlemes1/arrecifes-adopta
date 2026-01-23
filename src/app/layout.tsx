import type { Metadata } from 'next';
import Header from '@/components/Header';
import { PetsProvider } from '@/context/PetsContext';
import Footer from '@/components/Footer';
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
      <body className='flex flex-col min-h-screen'>
        <Header />
        <PetsProvider>
          <main className='flex-1'>{children}</main>
        </PetsProvider>
        <Footer />
      </body>
    </html>
  );
}
