import type { Metadata } from 'next';
import { Cormorant_Garamond, Raleway } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700']
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'ORVÉ Luxury Jewellery | Elegance You Wear',
  description:
    'Ultra-luxury animated e-commerce experience for ORVÉ Luxury Jewellery. Browse collections and order directly via WhatsApp.',
  metadataBase: new URL('https://orve.co.in')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
