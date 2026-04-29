import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { currencies, countries, calculateFees, type CalculationResult } from '@/config/paymentFeeModels';
import { PaymentMethodComparison } from './PaymentMethodComparison';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calculator } from 'lucide-react';
import { useContentAnalytics } from '@/hooks/useContentAnalytics';

interface PaymentFeeCalculatorProps {
  filterMethods?: string[];
  defaultSendCurrency?: string;
  defaultReceiveCurrency?: string;
  defaultAmount?: number;
  onCalculate?: (results: CalculationResult[]) => void;
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

export function PaymentFeeCalculator({
  filterMethods,
  defaultSendCurrency = 'USD',
  defaultReceiveCurrency = 'NGN',
  defaultAmount = 1000,
  onCalculate,
}: PaymentFeeCalculatorProps) {
  const { t } = useTranslation('tools');
  const [amount, setAmount] = useState<number>(defaultAmount);
  const [sendCurrency, setSendCurrency] = useState(defaultSendCurrency);
  const [receiveCurrency, setReceiveCurrency] = useState(defaultReceiveCurrency);
  const [senderCountry, setSenderCountry] = useState('US');
  const [receiverCountry, setReceiverCountry] = useState('NG');
  const [hasCalculated, setHasCalculated] = useState(false);
  const { trackEvent } = useContentAnalytics();

  const results = useMemo(() => {
    if (!hasCalculated || amount <= 0) return [];
    let res = calculateFees(amount, sendCurrency, receiveCurrency);
    if (filterMethods && filterMethods.length > 0) {
      res = res.filter((r) => filterMethods.includes(r.method.id));
    }
    return res;
  }, [amount, sendCurrency, receiveCurrency, hasCalculated, filterMethods]);

  const handleCalculate = () => {
    setHasCalculated(true);
    trackEvent('calculator_usage', {
      calculator: 'international_payment_fee',
      amount,
      sendCurrency,
      receiveCurrency,
      senderCountry,
      receiverCountry,
    });
    if (onCalculate) {
      const res = calculateFees(amount, sendCurrency, receiveCurrency);
      onCalculate(filterMethods ? res.filter((r) => filterMethods.includes(r.method.id)) : res);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border border-border">
        <CardContent className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="calc-amount" className="text-sm font-medium text-foreground">
                {t('calculator.amountToSend')}
              </label>
              <Input
                id="calc-amount"
                type="number"
                min={1}
                value={amount}
                onChange={(e) => { setAmount(Number(e.target.value)); setHasCalculated(false); }}
                placeholder="1000"
                aria-label={t('calculator.amountToSend')}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="send-currency" className="text-sm font-medium text-foreground">
                {t('calculator.sendingCurrency')}
              </label>
              <Select value={sendCurrency} onValueChange={(v) => { setSendCurrency(v); setHasCalculated(false); }}>
                <SelectTrigger id="send-currency" aria-label={t('calculator.sendingCurrency')}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((c) => (
                    <SelectItem key={c.code} value={c.code}>{c.symbol} {c.code} – {c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="receive-currency" className="text-sm font-medium text-foreground">
                {t('calculator.receivingCurrency')}
              </label>
              <Select value={receiveCurrency} onValueChange={(v) => { setReceiveCurrency(v); setHasCalculated(false); }}>
                <SelectTrigger id="receive-currency" aria-label={t('calculator.receivingCurrency')}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((c) => (
                    <SelectItem key={c.code} value={c.code}>{c.symbol} {c.code} – {c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="sender-country" className="text-sm font-medium text-foreground">
                {t('calculator.senderCountry')}
              </label>
              <Select value={senderCountry} onValueChange={setSenderCountry}>
                <SelectTrigger id="sender-country" aria-label={t('calculator.senderCountry')}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="receiver-country" className="text-sm font-medium text-foreground">
                {t('calculator.receiverCountry')}
              </label>
              <Select value={receiverCountry} onValueChange={setReceiverCountry}>
                <SelectTrigger id="receiver-country" aria-label={t('calculator.receiverCountry')}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={handleCalculate} className="w-full" size="lg" disabled={amount <= 0}>
                <Calculator className="w-4 h-4 mr-2" />
                {t('calculator.calculateFees')}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {hasCalculated && results.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result) => (
              <Card key={result.method.id} className={`border ${result.badges.includes('Cheapest') ? 'border-primary ring-1 ring-primary/20' : 'border-border'}`}>
                <CardContent className="p-5 space-y-3 min-w-0 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{result.method.name}</span>
                    {result.badges.includes('Cheapest') && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{t('calculator.bestValue')}</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-bold text-foreground truncate" title={formatCurrency(result.estimatedNetReceived, receiveCurrency)}>
                      {formatCurrency(result.estimatedNetReceived, receiveCurrency)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{t('calculator.netReceived')}</p>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>{t('calculator.fees')}</span>
                      <span>{formatCurrency(result.estimatedFees, sendCurrency)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('calculator.fxSpread')}</span>
                      <span>{result.method.estimatedFxSpreadPercent > 0 ? `~${result.method.estimatedFxSpreadPercent}%` : t('calculator.none')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('calculator.speed')}</span>
                      <span>{result.method.processingTime}</span>
                    </div>
                  </div>
                  <a
                    href={`https://app.invoicemonk.com/signup?currency=${sendCurrency}&method=${result.method.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('tool_cta_click', { tool: 'international_payment_fee', cta: 'result_card', method: result.method.id })}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2"
                  >
                    {t('calculator.createInvoice')} <ArrowRight className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border border-border">
            <CardContent className="p-0 sm:p-2">
              <PaymentMethodComparison results={results} receiveCurrency={receiveCurrency} />
            </CardContent>
          </Card>

          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            {t('calculator.disclaimer')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href={`https://app.invoicemonk.com/signup?currency=${sendCurrency}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" onClick={() => trackEvent('tool_cta_click', { tool: 'international_payment_fee', cta: 'create_free_invoice' })}>
                {t('calculator.createFreeInvoice')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" onClick={() => trackEvent('tool_cta_click', { tool: 'international_payment_fee', cta: 'open_free_account' })}>
                {t('calculator.openFreeAccount')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}