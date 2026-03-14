import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FreelancerRateCalculator } from '@/components/tools/FreelancerRateCalculator';
import { Link } from '@/components/LocalizedLink';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  { question: 'How do I calculate my freelance hourly rate?', answer: 'Add your desired annual income + business expenses, divide by (1 − tax rate), add a profit margin, then divide by your total annual billable hours. Our calculator does this automatically.' },
  { question: 'What is a good profit margin for freelancers?', answer: 'Most successful freelancers add a 15–25% profit margin on top of their costs. This covers business growth, emergency savings, and equipment upgrades.' },
  { question: 'How many hours per week should I bill?', answer: 'Most freelancers can bill 25–35 hours per week. The rest goes to admin, marketing, learning, and business development. Don\'t assume 40 billable hours.' },
  { question: 'Should I charge hourly or per project?', answer: 'Both work. Use your hourly rate as a baseline, then estimate project hours and add a 10–20% buffer for scope creep. Per-project pricing often feels better for clients.' },
  { question: 'How do I raise my rates?', answer: 'Raise rates for new clients first. For existing clients, give 30 days notice and explain the value you deliver. Aim for a 10–15% increase annually to keep pace with inflation and growing expertise.' },
  { question: 'What business expenses should I include?', answer: 'Include software subscriptions, internet, phone, insurance, office space/co-working, equipment, professional development, accounting fees, and marketing costs.' },
];

export default function FreelancerRateCalculatorPage() {
  return (
    <Layout>
      <SEOHead
        title="Freelancer Rate Calculator 2026 — Find Your Ideal Hourly Rate | Invoicemonk"
        description="Calculate your freelance hourly rate based on income goals, expenses, taxes, and billable hours. Free interactive calculator — no signup required."
        ogImage="https://invoicemonk.com/images/tools/freelancer-rate-calculator.jpg"
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Tools', url: '/free-invoice-generator' },
        { name: 'Freelancer Rate Calculator', url: '/freelancer-rate-calculator' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Freelancer Rate Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop guessing. Enter your income goals, expenses, and availability — get your minimum, recommended, and premium hourly rates instantly.
            </p>
          </div>

          <FreelancerRateCalculator />

          {/* Educational Content */}
          <article className="prose max-w-3xl mx-auto mt-16">
            <h2>How to Calculate Your Freelance Rate</h2>
            <p>
              Setting the right freelance rate is the most important financial decision you'll make as an independent professional. Charge too little and you'll burn out. Charge too much without the positioning to back it up and you'll struggle to find clients.
            </p>
            <p>The formula is straightforward:</p>
            <ol>
              <li><strong>Start with your desired take-home income</strong> — what you want to earn after taxes and expenses</li>
              <li><strong>Add business expenses</strong> — software, tools, insurance, office costs, professional development</li>
              <li><strong>Account for taxes</strong> — as a freelancer, you pay both income tax and self-employment tax (15.3% in the US)</li>
              <li><strong>Add a profit margin</strong> — 15-25% for business growth, savings, and emergencies</li>
              <li><strong>Divide by billable hours</strong> — not 40 hours/week. Realistically, 25-35 hours are billable; the rest is admin and marketing</li>
            </ol>

            <h2>Why Most Freelancers Undercharge</h2>
            <p>
              The biggest mistake new freelancers make is dividing their salary by 2,080 hours (40h × 52 weeks). This ignores taxes, expenses, vacation, sick days, and non-billable time.
              A $60,000 salary ÷ 2,080 = $29/hour. But the real freelance equivalent is closer to $55-75/hour once you account for all costs.
            </p>

            <h2>Hourly vs. Project-Based Pricing</h2>
            <p>
              Use your hourly rate as a <em>baseline</em>, not your pricing model. Most experienced freelancers quote per-project or per-deliverable.
              Estimate the hours, multiply by your rate, then add a 10-20% buffer for revisions and scope changes.
            </p>
            <p>
              Project pricing is better for clients (predictable cost) and better for you (rewards efficiency). As you get faster, your effective hourly rate increases.
            </p>

            <h2>When to Raise Your Rates</h2>
            <ul>
              <li>When you're booked 3+ months ahead</li>
              <li>When you haven't raised rates in 12 months</li>
              <li>When you've added new skills or certifications</li>
              <li>When your results consistently exceed client expectations</li>
            </ul>
          </article>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Ready to invoice at your new rate?</p>
            <Button asChild size="lg">
              <Link to="/free-invoice-generator">
                Create a Free Invoice <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Related Tools */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4">Related Tools & Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/free-invoice-generator" className="text-primary hover:underline">Free Invoice Generator</Link></li>
              <li><Link to="/invoice-templates" className="text-primary hover:underline">Invoice Template Gallery</Link></li>
              <li><Link to="/international-payment-fee-calculator" className="text-primary hover:underline">International Payment Fee Calculator</Link></li>
              <li><Link to="/blog/pricing-your-freelance-services" className="text-primary hover:underline">How to Price Your Freelance Services (Guide)</Link></li>
              <li><Link to="/freelancers" className="text-primary hover:underline">Invoicemonk for Freelancers</Link></li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-6 last:border-0">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
