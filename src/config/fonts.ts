import { Geist, Geist_Mono } from 'next/font/google';

// Configure the Geist Sans font
export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Configure the Geist Mono font
export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
