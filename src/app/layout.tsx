import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from 'next-themes'
import { LocaleProvider } from '@/contexts/LocaleContext'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export const metadata: Metadata = {
  metadataBase: new URL('https://invoicemonk.com'),
  title: {
    default: 'InvoiceMonk - Professional Invoicing & Accounting Software',
    template: '%s | InvoiceMonk'
  },
  description: 'Compliance-first invoicing and accounting software for businesses. Tax-compliant, easy to use. Free tier available.',
  keywords: ['invoicing software', 'accounting software', 'small business', 'tax compliance', 'freelancer tools'],
  authors: [{ name: 'InvoiceMonk' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://invoicemonk.com',
    siteName: 'InvoiceMonk',
    title: 'InvoiceMonk - Professional Invoicing & Accounting Software',
    description: 'Compliance-first invoicing and accounting software for businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvoiceMonk - Professional Invoicing & Accounting Software',
    description: 'Compliance-first invoicing and accounting software for businesses.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LocaleProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
