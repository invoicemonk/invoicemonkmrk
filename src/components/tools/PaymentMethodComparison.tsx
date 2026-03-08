import { useTranslation } from 'react-i18next';
import { CalculationResult, currencies } from '@/config/paymentFeeModels';
import { Badge } from '@/components/ui/badge';

interface PaymentMethodComparisonProps {
  results: CalculationResult[];
  receiveCurrency: string;
}

function formatCurrency(amount: number, currencyCode: string) {
  const cur = currencies.find(c => c.code === currencyCode);
  const symbol = cur?.symbol ?? currencyCode;
  const formatted = amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${symbol}${formatted}`;
}

export function PaymentMethodComparison({ results, receiveCurrency }: PaymentMethodComparisonProps) {
  const { t } = useTranslation('tools');

  if (results.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 px-4 text-sm font-semibold text-foreground">{t('calculator.table.method')}</th>
            <th className="py-3 px-4 text-sm font-semibold text-foreground">{t('calculator.table.estFees')}</th>
            <th className="py-3 px-4 text-sm font-semibold text-foreground hidden sm:table-cell">{t('calculator.table.fxSpread')}</th>
            <th className="py-3 px-4 text-sm font-semibold text-foreground hidden md:table-cell">{t('calculator.table.speed')}</th>
            <th className="py-3 px-4 text-sm font-semibold text-foreground">{t('calculator.table.netReceived')}</th>
            <th className="py-3 px-4 text-sm font-semibold text-foreground hidden lg:table-cell">{t('calculator.table.bestFor')}</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, idx) => (
            <tr
              key={result.method.id}
              className={`border-b border-border/50 ${idx === 0 ? 'bg-accent/50' : ''}`}
            >
              <td className="py-4 px-4">
                <div className="font-medium text-foreground">{result.method.name}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {result.badges.map((badge) => (
                    <Badge
                      key={badge}
                      variant={badge === 'Cheapest' ? 'default' : 'secondary'}
                      className="text-[10px] px-1.5 py-0"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </td>
              <td className="py-4 px-4 text-sm text-muted-foreground whitespace-nowrap">
                {formatCurrency(result.estimatedFees, result.sendCurrency)}
              </td>
              <td className="py-4 px-4 text-sm text-muted-foreground hidden sm:table-cell">
                {result.method.estimatedFxSpreadPercent > 0
                  ? `~${result.method.estimatedFxSpreadPercent}%`
                  : t('calculator.midMarketRate')}
              </td>
              <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">
                {result.method.processingTime}
              </td>
              <td className="py-4 px-4 font-semibold text-foreground whitespace-nowrap">
                {formatCurrency(result.estimatedNetReceived, receiveCurrency)}
              </td>
              <td className="py-4 px-4 text-sm text-muted-foreground hidden lg:table-cell">
                {result.method.bestFor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}