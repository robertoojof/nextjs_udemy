import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import MainContainer from '@/components/Container';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Blog - Feito com next.js',
    template: '%s | Blog',
  },
  description: 'Feito com base em um curso Udemy',
};

// Implementar tema escuro depois

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className='light'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainContainer>
          <Header title='My Simple Blog' />
          {children}
          <Footer />
        </MainContainer>
      </body>
    </html>
  );
}
