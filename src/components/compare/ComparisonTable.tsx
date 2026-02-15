import { CheckCircle, XCircle, Minus } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  invoicemonk: boolean | string;
  competitor: boolean | string;
}

interface ComparisonTableProps {
  competitorName: string;
  features: ComparisonFeature[];
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'string') return <span className="text-sm text-foreground">{value}</span>;
  if (value === true) return <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />;
  return <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
}

export function ComparisonTable({ competitorName, features }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 px-4 text-sm font-semibold text-foreground">Feature</th>
            <th className="py-3 px-4 text-sm font-semibold text-primary text-center">Invoicemonk</th>
            <th className="py-3 px-4 text-sm font-semibold text-foreground text-center">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {features.map((f, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
              <td className="py-3 px-4 text-sm text-foreground">{f.name}</td>
              <td className="py-3 px-4 text-center"><CellValue value={f.invoicemonk} /></td>
              <td className="py-3 px-4 text-center"><CellValue value={f.competitor} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
