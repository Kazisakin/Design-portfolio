import './globals.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

export const metadata = {
  title: 'Kazi Sakin — Design Portfolio',
  description:
    'UI/UX, Social Media, Motion Graphics & Brand design by Kazi Mostofa Sakin.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="noise bg-[#080808] text-[#f0f0f0] antialiased">
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
