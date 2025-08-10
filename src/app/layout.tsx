import React from 'react';
import MainLayout from '@/components/MainLayout';
import './globals.css';

export const metadata = {
  title: 'Beyond UI Blog',
  description: 'A modern blog about UI/UX design and SaaS solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}