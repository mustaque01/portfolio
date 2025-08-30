import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md Mustak – Full Stack Developer',
  description:
    'Portfolio of Md Mustak, Full Stack Developer building modern web applications with React, TypeScript, Next.js, UI/UX best practices.',
  keywords: [
    'Md Mustak',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Web Developer',
  ],
  authors: [{ name: 'Md Mustak' }],
  creator: 'Md Mustak',
  publisher: 'Md Mustak',
  metadataBase: new URL('https://your-domain.example.com'), // replace when deployed
  openGraph: {
    title: 'Md Mustak – Full Stack Developer',
    description:
      'Building performant, accessible, and modern web applications with React & Next.js.',
    url: 'https://your-domain.example.com',
    siteName: 'Md Mustak Portfolio',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Md Mustak Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Mustak – Full Stack Developer',
    description:
      'Modern web apps with React, TypeScript, Next.js, performance & UI focus.',
    images: ['/placeholder.jpg'],
    creator: '@your_handle',
  },
  icons: {
    icon: '/placeholder-logo.svg',
    shortcut: '/placeholder-logo.svg',
    apple: '/placeholder-logo.png',
  },
  generator: 'Next.js',
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
