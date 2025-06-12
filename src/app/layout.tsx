import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Usman - Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Set theme
                  const stored = localStorage.getItem('theme');
                  if (stored) {
                    document.documentElement.setAttribute('data-theme', stored);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 