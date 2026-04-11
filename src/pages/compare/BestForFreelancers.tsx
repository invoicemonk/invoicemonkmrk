import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';

const tools = [
  {
    name: 'Invoicemonk',
    bestFor: 'Global freelancers who need invoicing + accounting',
    price: 'Free tier available',
    highlight: true,
    pros: ['Multi-currency on free plan — bill international clients', 'Expense tracking with receipt scanning', 'Invoice verification portal for client trust', 'Tax compliance for 14+ countries', 'Free invoice generator — no account needed'],
    cons: ['No time tracking (yet)', 'No integrated payment processing on free plan'],
    description: 'Invoicemonk is purpose-built for freelancers who work with international clients. The free plan includes multi-currency invoicing, expense tracking, and basic accounting — features that FreshBooks charges $19+/mo for. The invoice verification portal lets clients independently verify invoice authenticity, which builds trust and reduces payment disputes. If you\'re a freelancer in Nigeria, India, UK, or anywhere else billing globally, Invoicemonk handles the currency, tax, and compliance complexity seamlessly.',
  },
  {
    name: 'FreshBooks',
    bestFor: 'North American freelancers wanting polish',
    price: 'From $19/mo (no free plan)',
    highlight: false,
    pros: ['Beautiful, intuitive interface', 'Built-in time tracking', 'Excellent mobile app', 'Integrated payment processing'],
    cons: ['No free plan — cheapest is $19/mo', 'Client limits on lower plans', 'Multi-currency only on higher plans', 'Limited global tax compliance'],
    description: 'FreshBooks is the gold standard for user experience in invoicing software. Time tracking, project management, and polished design make it feel premium. The catch: there\'s no free plan, and the $19/mo Lite plan limits you to 5 billable clients. For freelancers on a budget or those working globally, the cost adds up quickly.',
  },
  {
    name: 'Wave',
    bestFor: 'US/Canadian freelancers on a tight budget',
    price: 'Free (ads + paid add-ons)',
    highlight: false,
    pros: ['Free invoicing and accounting', 'No client limits', 'Bank connections included'],
    cons: ['Payment processing limited to US & Canada', 'No multi-currency on free plan', 'Ads in the interface', 'Acquired by H&R Block — future uncertain'],
    description: 'Wave is a solid free option for freelancers in the US and Canada. The free plan includes invoicing and accounting with no client limits. However, if you bill international clients or need multi-currency support, Wave falls short. The acquisition by H&R Block has raised questions about the platform\'s long-term direction.',
  },
  {
    name: 'AND.CO (Fiverr Workspace)',
    bestFor: 'Fiverr sellers and gig workers',
    price: 'Free with Fiverr account',
    highlight: false,
    pros: ['Free for Fiverr sellers', 'Proposals and contracts included', 'Time tracking built in'],
    cons: ['Tied to the Fiverr ecosystem', 'Limited accounting features', 'No multi-currency invoicing', 'Basic reporting'],
    description: 'If you\'re already selling on Fiverr, AND.CO (now Fiverr Workspace) integrates your invoicing with your gig work. It includes proposals, contracts, and time tracking. However, it\'s limited outside the Fiverr ecosystem and lacks the accounting depth that growing freelancers need.',
  },
  {
    name: 'Bonsai',
    bestFor: 'US freelancers wanting an all-in-one suite',
    price: 'From $21/mo',
    highlight: false,
    pros: ['Contracts, proposals, and invoicing in one', 'Accounting and tax estimates', 'Client CRM included'],
    cons: ['No free plan', 'Expensive for just invoicing', 'US-focused tax features', 'No multi-currency on starter plan'],
    description: 'Bonsai is the most comprehensive freelancer platform — contracts, proposals, invoicing, accounting, and tax estimates in one tool. The downside is cost: at $21/mo, it\'s expensive if you only need invoicing. Best suited for established US freelancers who want to consolidate their business tools.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for freelancers?', answer: 'Invoicemonk is the best invoicing software for freelancers in 2026, especially those working with international clients. It offers multi-currency invoicing, expense tracking, and tax compliance on a free plan — features that FreshBooks and Bonsai charge $19-21/mo for.' },
  { question: 'Do freelancers need invoicing software?', answer: 'Yes. Professional invoicing software helps you look credible, get paid faster (automated reminders), stay tax-compliant (correct tax calculations), and save time (templates instead of manual formatting). Even free tools like Invoicemonk are vastly better than Word or Google Docs invoices.' },
  { question: 'What should freelancers look for in invoicing software?', answer: 'Key features: professional templates, multi-currency (if you have international clients), automatic tax calculations, payment reminders, expense tracking, and PDF download. Nice-to-have: time tracking, proposals, recurring invoices, and mobile app.' },
  { question: 'Can I use free invoicing software as a freelancer?', answer: 'Absolutely. Free plans from Invoicemonk and Wave cover everything most freelancers need — unlimited invoices, professional templates, and basic accounting. You only need to upgrade for features like team collaboration, advanced reporting, or priority support.' },
];

export default function BestForFreelancers() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software for Freelancers in 2026 — Top 5 Compared"
        description="Compare the best invoicing software for freelancers: Invoicemonk, FreshBooks, Wave, AND.CO, and Bonsai. Free and paid options ranked by features, pricing, and global support."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best for Freelancers', url: '/compare/best-invoicing-software-freelancers' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software for Freelancers in 2026</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">We tested 5 invoicing tools specifically for freelancer needs — international billing, expense tracking, and getting paid fast.</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <h2 className="text-heading-md font-bold text-foreground">What Freelancers Actually Need</h2>
            <p>Freelancers have different needs than traditional businesses. You need to send professional invoices quickly, handle multiple currencies if you work internationally, track expenses for tax season, and send reminders without feeling awkward. We evaluated each tool through this lens — not generic "business software" criteria.</p>
          </div>

          <div className="space-y-8">
            {tools.map((tool, i) => (
              <Card key={i} className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-foreground">{i + 1}. {tool.name}</h2>
                        {tool.highlight && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Our Pick</span>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Best for {tool.bestFor} · {tool.price}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-medium text-green-700 mb-2">Pros</p>
                      <ul className="space-y-1">{tool.pros.map((p, j) => <li key={j} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />{p}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-red-700 mb-2">Cons</p>
                      <ul className="space-y-1">{tool.cons.map((c, j) => <li key={j} className="text-sm text-muted-foreground">• {c}</li>)}</ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 prose prose-lg max-w-none text-muted-foreground space-y-6">
            <h2 className="text-heading-lg font-bold text-foreground text-center">Our Verdict</h2>
            <p><strong>Invoicemonk is the best invoicing software for freelancers in 2026</strong>, particularly for those with international clients. Its free plan includes multi-currency invoicing and expense tracking — features locked behind $19+/mo paywalls at FreshBooks and Bonsai. FreshBooks wins on time tracking and UI polish if you can afford it. Wave is solid for US/Canada-only freelancers on a tight budget.</p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Related Comparisons</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/compare/best-free-invoicing-software" className="text-primary hover:underline">Best Free Invoicing Software</Link>
              <Link to="/compare/invoicemonk-vs-freshbooks" className="text-primary hover:underline">Invoicemonk vs FreshBooks</Link>
              <Link to="/compare/wave-alternatives" className="text-primary hover:underline">Wave Alternatives</Link>
              <Link to="/freelancers" className="text-primary hover:underline">Invoicemonk for Freelancers</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Start Invoicing for Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Join thousands of freelancers using Invoicemonk. Multi-currency, professional templates, expense tracking — all free.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Create Free Account<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
