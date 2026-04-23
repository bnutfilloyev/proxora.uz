import { Syne, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import FloatingContact from '@/components/FloatingContact'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://proxora.uz'),
  title: 'Proxora Global — Raqamli Yechimlар',
  description: "Web saytlar, mobil ilovalar, Telegram botlar, AI/ML va CRM yechimlari. O'zbekiston bizneslarini raqamlashtiramiz.",
  openGraph: {
    title: 'Proxora Global — Raqamli Yechimlар',
    description: "Web, mobil, AI va Telegram bot yechimlari. O'zbekiston bizneslarini raqamlashtiramiz.",
    url: 'https://proxora.uz',
    siteName: 'Proxora Global',
    images: [{ url: '/logo-og.png', width: 1080, height: 1080 }],
    locale: 'uz_UZ',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo-icon.png" type="image/png" />
      </head>
      <body>
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}
