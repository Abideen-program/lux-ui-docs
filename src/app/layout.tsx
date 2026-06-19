import type { Metadata } from 'next';
import 'luxcss/dist/lux.css';
import './globals.css';
import LuxLoader from '@/components/LuxLoader';
import ShellClient from '@/components/ShellClient';
import { ToastProvider } from 'lux-ui';

export const metadata: Metadata = {
  title: 'lux-ui — Beautiful React components powered by luxcss',
  description: '60+ React components with glass, neon, aurora, and motion built in.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LuxLoader />
        <ToastProvider>
          <ShellClient>{children}</ShellClient>
        </ToastProvider>
      </body>
    </html>
  );
}
