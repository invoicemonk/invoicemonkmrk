import type { Metadata } from 'next'
import { Layout } from '@/components/layout/Layout'
import { HeroSection } from '@/components/home/HeroSection'
import { WaveProductTabs } from '@/components/home/WaveProductTabs'
import { WaveFeatureBenefits } from '@/components/home/WaveFeatureBenefits'
import { WaveTestimonials } from '@/components/home/WaveTestimonials'
import { WavePersonaSection } from '@/components/home/WavePersonaSection'
import { HomeBlogSection } from '@/components/home/HomeBlogSection'
import { FAQSection } from '@/components/home/FAQSection'
import { WaveCTASection } from '@/components/home/WaveCTASection'


export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Professional Invoicing & Accounting Software for Small Businesses',
  description: 'Compliance-first invoicing and accounting software trusted by freelancers and small businesses. Create invoices, track expenses, manage payments. Free tier available.',
  alternates: {
    canonical: 'https://invoicemonk.com',
  },
  openGraph: {
    title: 'InvoiceMonk - Professional Invoicing & Accounting Software',
    description: 'Compliance-first invoicing and accounting software trusted by freelancers and small businesses.',
    url: 'https://invoicemonk.com',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WaveProductTabs />
      <WaveFeatureBenefits />
      <WaveTestimonials />
      <WavePersonaSection />
      <HomeBlogSection />
      <FAQSection />
      <WaveCTASection />
    </Layout>
  )
}
