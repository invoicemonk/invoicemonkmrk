import { Check, Minus } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type PlanValue = string | boolean;

interface ComparisonRow {
  feature: string;
  starter: PlanValue;
  pro: PlanValue;
  sme: PlanValue;
  biz: PlanValue;
}

const limits: ComparisonRow[] = [
  { feature: 'Invoices/month', starter: '5', pro: 'Unlimited', sme: 'Unlimited', biz: 'Unlimited' },
  { feature: 'Receipts/month', starter: '5', pro: 'Unlimited', sme: 'Unlimited', biz: 'Unlimited' },
  { feature: 'Currency accounts', starter: '1', pro: 'Unlimited', sme: 'Unlimited', biz: 'Unlimited' },
  { feature: 'Team members', starter: '1', pro: 'Up to 5', sme: 'Unlimited', biz: 'Unlimited' },
  { feature: 'Payment methods per currency', starter: '1', pro: 'Unlimited', sme: 'Unlimited', biz: 'Unlimited' },
];

const features: ComparisonRow[] = [
  { feature: 'Accounting module', starter: true, pro: true, sme: true, biz: true },
  { feature: 'Expense tracking', starter: true, pro: true, sme: true, biz: true },
  { feature: 'Credit notes', starter: true, pro: true, sme: true, biz: true },
  { feature: 'In-app support', starter: true, pro: true, sme: true, biz: true },
  { feature: 'Invoice verification', starter: true, pro: true, sme: true, biz: true },
  { feature: 'Full audit trail', starter: false, pro: true, sme: true, biz: true },
  { feature: 'Custom branding', starter: false, pro: true, sme: true, biz: true },
  { feature: 'Data exports', starter: false, pro: true, sme: true, biz: true },
  { feature: 'Premium templates', starter: false, pro: true, sme: true, biz: true },
  { feature: 'Watermark-free PDFs', starter: false, pro: true, sme: true, biz: true },
  { feature: 'Online payment', starter: false, pro: true, sme: true, biz: true },
  { feature: 'Advanced reports', starter: false, pro: false, sme: true, biz: true },
  { feature: 'API access', starter: false, pro: false, sme: false, biz: true },
  { feature: 'E-invoicing & gov submission', starter: false, pro: false, sme: false, biz: true },
  { feature: 'Dedicated account manager', starter: false, pro: false, sme: false, biz: true },
  { feature: 'Custom integrations', starter: false, pro: false, sme: false, biz: true },
  { feature: 'SLA guarantee', starter: false, pro: false, sme: false, biz: true },
  { feature: 'Priority support', starter: false, pro: false, sme: false, biz: true },
];

const planHeaders = ['Starter', 'Pro', 'SME', 'Biz'];

function CellValue({ value }: { value: PlanValue }) {
  if (typeof value === 'string') {
    return <span className="text-body-sm font-medium text-foreground">{value}</span>;
  }
  if (value) {
    return (
      <div className="w-5 h-5 rounded-full bg-wave-green/10 flex items-center justify-center mx-auto">
        <Check className="w-3 h-3 text-wave-green" />
      </div>
    );
  }
  return (
    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center mx-auto">
      <Minus className="w-3 h-3 text-muted-foreground" />
    </div>
  );
}

export function FeatureComparisonTable() {
  const getValues = (row: ComparisonRow): PlanValue[] =>
    [row.starter, row.pro, row.sme, row.biz];

  const renderSection = (title: string, rows: ComparisonRow[]) => (
    <>
      <TableRow>
        <TableCell
          colSpan={5}
          className="bg-accent/50 font-semibold text-body-sm text-heading py-3"
        >
          {title}
        </TableCell>
      </TableRow>
      {rows.map((row) => (
        <TableRow key={row.feature}>
          <TableCell className="text-body-sm text-foreground font-medium">
            {row.feature}
          </TableCell>
          {getValues(row).map((val, i) => (
            <TableCell key={i} className="text-center">
              <CellValue value={val} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h2 text-heading mb-4">
            Compare <span className="font-serif italic text-primary">plans</span> in detail
          </h2>
          <p className="text-body-lg text-muted-foreground">
            See exactly what's included in each plan.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Feature</TableHead>
                {planHeaders.map((plan) => (
                  <TableHead key={plan} className="text-center font-semibold">
                    {plan}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {renderSection('Limits', limits)}
              {renderSection('Features', features)}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
