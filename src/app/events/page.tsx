// src/app/layout.tsx
import '';
import React from 'react';

export const metadata = {
  title: 'Ticketing App',
  description: 'Gestión de tickets para eventos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
