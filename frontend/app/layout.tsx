import type { Metadata } from 'next';
import { Geist, Geist_Mono, Urbanist } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Salsaroots - Salsa- en Bachata School in Tiel, Nederland',
  description:
    'Volg salsa- en bachata in Tiel. Groepslessen, privélessen en sociale dansavonden. Leer salsa caleña, salsa ON1 , ON2, en bachata van professionele docenten.',
  keywords: [
    'Salsa lessen Tiel',
    'Bachata school Nederland',
    'Salsa caleña Nederland',
    'Salsa in lijn Tiel',
    'Privé salsa lessen',
    'Groepslessen salsa Tiel',
    'Dansschool Tiel',
    'Bachata lessen Tiel',
    'Salsa party Tiel',
    'Salsa en bachata Nederland',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className} style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main className=" mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
