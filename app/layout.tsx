import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Naman Choradia — Markets, Research & Continuous Learning',
  description:
    'Documenting my journey through CA Final, financial markets, technology and continuous learning.',
  metadataBase: new URL('https://namanrch.in'),
  openGraph: {
    title: 'Naman Choradia',
    description:
      'Documenting my journey through CA Final, financial markets, technology and continuous learning.',
    url: 'https://namanrch.in',
    siteName: 'namanrch.in',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
