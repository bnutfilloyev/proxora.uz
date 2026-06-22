export default function manifest() {
  return {
    name: 'Proxora Global',
    short_name: 'Proxora',
    description:
      "Web saytlar, mobil ilovalar, Telegram botlar, AI/ML va CRM yechimlari. O'zbekiston bizneslarini raqamlashtiramiz.",
    start_url: '/',
    display: 'standalone',
    lang: 'uz',
    background_color: '#0C2818',
    theme_color: '#0C2818',
    icons: [
      {
        src: '/logo-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
