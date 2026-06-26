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

const SITE_URL = 'https://proxora.uz'
const SITE_NAME = 'Proxora Global'
const TITLE = 'Proxora Global — Raqamli Yechimlar'
const DESCRIPTION =
  "Web saytlar, mobil ilovalar, Telegram botlar, AI/ML va CRM yechimlari. O'zbekiston bizneslarini raqamlashtiramiz."

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — Proxora Global',
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'web sayt yaratish',
    'mobil ilova',
    'Telegram bot',
    'AI ML yechimlar',
    'CRM tizim',
    'raqamli agentlik',
    'Toshkent',
    "O'zbekiston",
  ],
  alternates: {
    canonical: '/',
    languages: { 'uz-UZ': '/' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: TITLE,
    description:
      "Web, mobil, AI va Telegram bot yechimlari. O'zbekiston bizneslarini raqamlashtiramiz.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: '/logo-og.png', width: 1080, height: 1080, alt: TITLE }],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      "Web, mobil, AI va Telegram bot yechimlari. O'zbekiston bizneslarini raqamlashtiramiz.",
    images: ['/logo-og.png'],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport = {
  themeColor: '#0C2818',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

const faqs = [
  {
    q: 'Loyiha narxi qanday belgilanadi?',
    a: "Loyiha narxi uning murakkabligi, kerak bo'ladigan funksiyalar va dizayn talablariga qarab belgilanadi. Dastlabki bepul konsultatsiyamizdan so'ng sizga aniq narx va muddatni o'z ichiga olgan tijorat taklifini taqdim etamiz.",
  },
  {
    q: 'Web sayt yoki bot yaratish qancha vaqt oladi?',
    a: "Oddiy korporativ saytlar o'rtacha 1-2 hafta, murakkab web platformalar yoki e-commerce loyihalar 1-2 oy vaqt oladi. Telegram botlar esa funksionalligiga qarab 3 kundan 2 haftagacha tayyor bo'ladi.",
  },
  {
    q: "Loyihani topshirgandan so'ng qo'llab-quvvatlash bormi?",
    a: "Albatta. Biz har bir loyiha uchun kafolat muddati beramiz va undan keyin ham texnik xizmat ko'rsatish (support) bo'yicha hamkorlikni davom ettirishimiz mumkin.",
  },
  {
    q: 'Qanday texnologiyalardan foydalanasiz?',
    a: 'Biz zamonaviy va xavfsiz texnologiyalarni tanlaymiz: React, Next.js, Node.js, Python (AI/ML uchun), PostgreSQL va bulutli xizmatlar (AWS, Vercel). Telegram botlar uchun Python (Aiogram) dan foydalanamiz.',
  },
  {
    q: "O'zimizning dizaynimiz bo'lsa, shuni dasturlab bera olasizmi?",
    a: 'Ha, agar sizda tayyor Figma dizayn bo\'lsa, biz uni yuqori sifatda, pixel-perfect darajasida kodga o\'girib, ishlaydigan mahsulot qilib beramiz.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo-og.png`,
      description: DESCRIPTION,
      email: 'proxoraglobal@gmail.com',
      telephone: '+998883001001',
      areaServed: 'UZ',
      sameAs: ['https://t.me/bnutfilloyev'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toshkent',
        addressCountry: 'UZ',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+998883001001',
        email: 'proxoraglobal@gmail.com',
        contactType: 'customer service',
        areaServed: 'UZ',
        availableLanguage: ['uz', 'ru'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'uz-UZ',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}
