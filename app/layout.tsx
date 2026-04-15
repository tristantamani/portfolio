import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Martian_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const martianMono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-martian-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tristan Andrei Tamani | Computer Science Student',
  description: 'Developing intuitive websites and interfaces with precision, persistence, and purpose.',
  keywords: ['portfolio', 'web developer', 'computer science', 'react', 'nextjs', 'Tristan Tamani'],
  authors: [{ name: 'Tristan Andrei Tamani' }],
  creator: 'Tristan Andrei Tamani',
  openGraph: {
    title: 'Tristan Andrei Tamani',
    description: 'Computer Science Student Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tristan Andrei Tamani',
    description: 'Computer Science Student Portfolio',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EEEEEE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${martianMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
