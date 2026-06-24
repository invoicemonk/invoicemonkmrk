import { Link } from '@/components/LocalizedLink';
import { mandates, mandatesByRegion, regionLabel, type RegionKey } from '@/data/mandates';

interface MandateMatrixProps {
  /** When true, show a compact row-per-comparison version (for /compare pages). */
  compact?: boolean;
  /** When true, suppress the upward link (used inside the pillar itself). */
  hidePillarLink?: boolean;
}

const REGION_ORDER: RegionKey[] = ['middle-east', 'asia-pacific', 'europe', 'africa', 'americas'];

export function MandateMatrix({ compact = false, hidePillarLink = false }: MandateMatrixProps) {
  if (compact) {
    return (
      <div className="text-sm text-foreground">
        <p className="font-semibold text-primary">
          {mandates.length} mandates live across {REGION_ORDER.length} regions:
        </p>
        <p className="mt-2 text-muted-foreground">
          {mandates.map((m) => m.mandate.split(' — ')[0]).join(', ')}.
        </p>
        {!hidePillarLink && (
          <p className="mt-3">
            <Link to="/e-invoicing" className="text-primary font-medium hover:underline">
              See full mandate matrix on the e-invoicing platform page
            </Link>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm border-collapse">
        <thead className="bg-muted">
          <tr>
            <th className="py-3 px-4 font-semibold text-foreground">Jurisdiction</th>
            <th className="py-3 px-4 font-semibold text-foreground">Authority</th>
            <th className="py-3 px-4 font-semibold text-foreground">Mandate</th>
            <th className="py-3 px-4 font-semibold text-foreground">Artefact</th>
            <th className="py-3 px-4 font-semibold text-foreground">Transport</th>
            <th className="py-3 px-4 font-semibold text-foreground">Applies to</th>
            <th className="py-3 px-4 font-semibold text-foreground">Live since</th>
          </tr>
        </thead>
        <tbody>
          {REGION_ORDER.flatMap((region) => {
            const items = mandatesByRegion[region] || [];
            if (items.length === 0) return [];
            return [
              <tr key={`region-${region}`} className="bg-primary/5">
                <td colSpan={7} className="py-2 px-4 font-semibold text-primary text-xs uppercase tracking-wide">
                  {regionLabel[region]}
                </td>
              </tr>,
              ...items.map((m, i) => (
                <tr key={m.slug} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="py-3 px-4 font-medium text-foreground">
                    <Link to={`/e-invoicing/${m.slug}`} className="text-primary hover:underline">
                      {m.jurisdiction}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-foreground">{m.authority}</td>
                  <td className="py-3 px-4 text-foreground">{m.mandate}</td>
                  <td className="py-3 px-4 text-muted-foreground">{m.artefact}</td>
                  <td className="py-3 px-4 text-muted-foreground">{m.transport}</td>
                  <td className="py-3 px-4 text-muted-foreground">{m.appliesTo}</td>
                  <td className="py-3 px-4 text-foreground whitespace-nowrap">{m.liveSince}</td>
                </tr>
              )),
            ];
          })}
        </tbody>
      </table>
    </div>
  );
}
