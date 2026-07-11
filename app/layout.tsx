import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio Z Digital Experience Center',
  description: 'Immersive virtual venue with Three.js, React, spatial audio',
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
