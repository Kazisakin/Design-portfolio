import './globals.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import PageColor from './components/home/PageColor';

export const metadata = {
  title: 'Kazi Sakin — Design Portfolio',
  description: 'Brand identity, UI/UX, motion and social media design by Kazi Mostofa Sakin, a designer and Computer Science student.',
  metadataBase: new URL('https://design.kazimostofasakin.com'),
  openGraph: {
    title: 'Kazi Sakin — Design Portfolio',
    description: 'UI/UX · Social Media · Motion · Brand — by Kazi Mostofa Sakin',
    url: 'https://design.kazimostofasakin.com',
    siteName: 'Kazi Sakin Design',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kazi Sakin — Design Portfolio',
    description: 'UI/UX · Social Media · Motion · Brand — by Kazi Mostofa Sakin',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollProgress />
        <PageColor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
