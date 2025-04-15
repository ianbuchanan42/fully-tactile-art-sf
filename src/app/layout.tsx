// app/layout.tsx
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { geistSans, geistMono } from '@/config/fonts';
import { siteMetadata } from '@/config/metadata';

// Export the metadata from our configuration
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main id='main-content' className='flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
