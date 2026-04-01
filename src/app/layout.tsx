import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GSAPProvider from '@/shared/components/GSAPProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cool Burger and Fries - Hamburguesas Artesanales',
  description: 'Descubre las mejores hamburguesas artesanales de México. Ingredientes frescos, recetas originales y ambiente cool.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Cool Burger and Fries - Hamburguesas Artesanales',
    description: 'Descubre las mejores hamburguesas artesanales de México. Ingredientes frescos, recetas originales y ambiente cool.',
    url: 'https://coolburgerandfries.com',
    siteName: 'Cool Burger and Fries',
    images: [
      {
        url: 'https://coolburgerandfries.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cool Burger and Fries logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cool Burger and Fries - Hamburguesas Artesanales',
    description: 'Descubre las mejores hamburguesas artesanales de México. Ingredientes frescos, recetas originales y ambiente cool.',
    images: ['https://coolburgerandfries.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}