import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GigConnect - Kenya Freelance Marketplace',
  description: 'Connect with top freelancers and clients in Kenya. Pay securely with M-Pesa.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
