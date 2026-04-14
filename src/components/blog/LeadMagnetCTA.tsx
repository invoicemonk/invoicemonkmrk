import { Download } from 'lucide-react';

interface LeadMagnet {
  label: string;
  description: string;
  href: string;
}

const magnetsByPillar: Record<string, LeadMagnet> = {
  'getting-paid': {
    label: 'Freelancer Payment Checklist',
    description: 'A printable checklist to ensure every invoice gets paid on time — covering terms, reminders, and follow-up steps.',
    href: '/downloads/freelancer-payment-checklist.pdf',
  },
  'tax-compliance': {
    label: 'International Invoicing Checklist',
    description: 'Required fields, tax rules, and compliance notes for invoicing clients in 20+ countries.',
    href: '/downloads/international-invoicing-checklist.pdf',
  },
  'invoicing-mastery': {
    label: 'Invoice Template Pack',
    description: '6 ready-to-use invoice templates for freelancers, agencies, contractors, and consultants.',
    href: '/downloads/invoice-template-pack.pdf',
  },
  freelancing: {
    label: 'Freelancer Payment Checklist',
    description: 'A printable checklist to ensure every invoice gets paid on time.',
    href: '/downloads/freelancer-payment-checklist.pdf',
  },
};

interface LeadMagnetCTAProps {
  pillarId?: string;
}

export function LeadMagnetCTA({ pillarId }: LeadMagnetCTAProps) {
  const magnet = pillarId ? magnetsByPillar[pillarId] : undefined;
  if (!magnet) return null;

  return (
    <aside className="my-8 p-5 rounded-xl border border-accent/30 bg-accent/5">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
          <Download className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">Free Download</p>
          <p className="font-medium text-foreground">{magnet.label}</p>
          <p className="text-sm text-muted-foreground mt-1 mb-3">{magnet.description}</p>
          <a
            href={magnet.href}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
    </aside>
  );
}
