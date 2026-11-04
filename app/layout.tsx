import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Insaf El Korachi | Data & AI Engineering',
  description:
    "Étudiante en Master 2 Intelligence Artificielle et Science des Données, à la recherche d'un stage PFE en Data Engineering ou AI Engineering.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
