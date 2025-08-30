import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: 'PerplexityAI',
    template: '%s | PerplexityAI'
  },
  description: 'Everything is about taste',
  keywords: ['AI', 'Artificial Intelligence', 'Machine Learning', 'Technology', 'Innovation'],
  authors: [{ name: 'PerplexityAI Team' }],
  creator: 'PerplexityAI',
  publisher: 'PerplexityAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://perplexityai.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PerplexityAI',
    description: 'Everything is about taste',
    url: 'https://perplexityai.xyz',
    siteName: 'PerplexityAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PerplexityAI',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PerplexityAI',
    description: 'Everything is about taste',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DJE4RS5J61"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DJE4RS5J61');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-white`}>{children}</body>
    </html>
  )
}


import './globals.css'