interface PricingTier {
  name: string;
  price: string;
  invoices: string;
  users: string;
  features: string;
}

interface PricingTiersProps {
  tiers: PricingTier[];
  transactionFees?: string;
  labels: { tier: string; price: string; invoices: string; users: string; features: string; transactionFees: string };
}

export function PricingTiers({ tiers, transactionFees, labels }: PricingTiersProps) {
  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-muted/40">
            <tr className="border-b border-border">
              <th className="py-2 px-3 font-semibold text-foreground">{labels.tier}</th>
              <th className="py-2 px-3 font-semibold text-foreground">{labels.price}</th>
              <th className="py-2 px-3 font-semibold text-foreground">{labels.invoices}</th>
              <th className="py-2 px-3 font-semibold text-foreground">{labels.users}</th>
              <th className="py-2 px-3 font-semibold text-foreground">{labels.features}</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, i) => (
              <tr key={i} className={i % 2 === 0 ? '' : 'bg-muted/20'}>
                <td className="py-2 px-3 font-medium text-foreground">{tier.name}</td>
                <td className="py-2 px-3 text-foreground whitespace-nowrap">{tier.price}</td>
                <td className="py-2 px-3 text-muted-foreground whitespace-nowrap">{tier.invoices}</td>
                <td className="py-2 px-3 text-muted-foreground whitespace-nowrap">{tier.users}</td>
                <td className="py-2 px-3 text-muted-foreground">{tier.features}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {transactionFees && (
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{labels.transactionFees}:</span> {transactionFees}
        </p>
      )}
    </div>
  );
}
