import { Check, Minus } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { limitsComparison, featuresComparison, FeatureComparisonRow } from '@/config/pricingPlans';
import { useLocale } from '@/hooks/useLocale';

function CellValue({ value }: { value: string }) {
  if (value === '✓') return <Check className="w-4 h-4 text-primary mx-auto" />;
  if (value === '—') return <Minus className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-body-sm font-medium">{value}</span>;
}

function ComparisonGroup({ title, rows, showStarter }: { title: string; rows: FeatureComparisonRow[]; showStarter: boolean }) {
  const columns = showStarter
    ? ['Free', 'Starter', 'Professional', 'Business']
    : ['Free', 'Professional', 'Business'];

  return (
    <div className="overflow-x-auto">
      <h3 className="text-body font-semibold text-heading mb-3">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="w-[200px] text-muted-foreground">Feature</TableHead>
            {columns.map((col) => (
              <TableHead key={col} className="text-center text-muted-foreground">{col}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.feature} className="border-border">
              <TableCell className="font-medium text-foreground">{row.feature}</TableCell>
              <TableCell className="text-center"><CellValue value={row.free} /></TableCell>
              {showStarter && <TableCell className="text-center"><CellValue value={row.starter} /></TableCell>}
              <TableCell className="text-center"><CellValue value={row.professional} /></TableCell>
              <TableCell className="text-center"><CellValue value={row.business} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function FeatureComparisonTable() {
  const { locale } = useLocale();
  const showStarter = locale.pricingContent.starterAvailable;

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h2 text-heading mb-4">
            Compare <span className="font-serif italic text-primary">plans</span> in detail
          </h2>
          <p className="text-body-lg text-muted-foreground">
            See exactly what's included in each tier.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto space-y-10">
          <AnimatedSection delay={0.1}>
            <ComparisonGroup title="Limits" rows={limitsComparison} showStarter={showStarter} />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ComparisonGroup title="Features" rows={featuresComparison} showStarter={showStarter} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
