import { useEffect, useMemo, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Clock, Target, Globe2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useContentAnalytics } from '@/hooks/useContentAnalytics';

// Advisory FX baseline (mid-market, refreshed quarterly).
// Used only for the multi-currency rate display; not for accounting.
const FX_TO_USD: Record<string, number> = {
  USD: 1,
  EUR: 1.08,
  GBP: 1.27,
  INR: 0.012,
  NGN: 0.00067,
  CAD: 0.73,
  AUD: 0.66,
  KES: 0.0077,
  GHS: 0.066,
  ZAR: 0.054,
};

const CURRENCY_META: Record<string, { symbol: string; locale: string; name: string }> = {
  USD: { symbol: '$', locale: 'en-US', name: 'US Dollar' },
  EUR: { symbol: '€', locale: 'de-DE', name: 'Euro' },
  GBP: { symbol: '£', locale: 'en-GB', name: 'British Pound' },
  INR: { symbol: '₹', locale: 'en-IN', name: 'Indian Rupee' },
  NGN: { symbol: '₦', locale: 'en-NG', name: 'Nigerian Naira' },
  CAD: { symbol: 'CA$', locale: 'en-CA', name: 'Canadian Dollar' },
  AUD: { symbol: 'A$', locale: 'en-AU', name: 'Australian Dollar' },
  KES: { symbol: 'KSh', locale: 'en-KE', name: 'Kenyan Shilling' },
  GHS: { symbol: 'GH₵', locale: 'en-GH', name: 'Ghanaian Cedi' },
  ZAR: { symbol: 'R', locale: 'en-ZA', name: 'South African Rand' },
};

const CURRENCY_OPTIONS = Object.keys(CURRENCY_META);

interface RateResult {
  minimumHourly: number;
  recommendedHourly: number;
  premiumHourly: number;
  dailyRate: number;
  weeklyRate: number;
  monthlyRevenue: number;
  annualRevenue: number;
  effectiveHourlyAfterExpenses: number;
}

export function FreelancerRateCalculator() {
  const [annualIncome, setAnnualIncome] = useState(60000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(500);
  const [taxRate, setTaxRate] = useState(25);
  const [vacationWeeks, setVacationWeeks] = useState(4);
  const [billableHours, setBillableHours] = useState(30);
  const [profitMargin, setProfitMargin] = useState(20);
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const { trackEvent } = useContentAnalytics();
  const hasTrackedInitialResult = useRef(false);

  const result = useMemo<RateResult>(() => {
    const workingWeeks = 52 - vacationWeeks;
    const annualBillableHours = workingWeeks * billableHours;
    const annualExpenses = monthlyExpenses * 12;
    const totalNeeded = annualIncome + annualExpenses;
    const preTaxNeeded = totalNeeded / (1 - taxRate / 100);
    const withProfit = preTaxNeeded * (1 + profitMargin / 100);

    const minimumHourly = preTaxNeeded / annualBillableHours;
    const recommendedHourly = withProfit / annualBillableHours;
    const premiumHourly = recommendedHourly * 1.3;

    return {
      minimumHourly,
      recommendedHourly,
      premiumHourly,
      dailyRate: recommendedHourly * 8,
      weeklyRate: recommendedHourly * billableHours,
      monthlyRevenue: (recommendedHourly * billableHours * workingWeeks) / 12,
      annualRevenue: recommendedHourly * annualBillableHours,
      effectiveHourlyAfterExpenses: (annualIncome) / annualBillableHours,
    };
  }, [annualIncome, monthlyExpenses, taxRate, vacationWeeks, billableHours, profitMargin]);

  const fmt = (n: number, currency: string = baseCurrency) => {
    const meta = CURRENCY_META[currency] ?? CURRENCY_META.USD;
    return new Intl.NumberFormat(meta.locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(n);
  };

  // Convert the recommended hourly (entered in baseCurrency) into other currencies via USD pivot.
  const recommendedInUSD = result.recommendedHourly * (FX_TO_USD[baseCurrency] ?? 1);
  const otherCurrencies = ['USD', 'EUR', 'GBP', 'INR'].filter((c) => c !== baseCurrency);
  const multiCurrencyRates = otherCurrencies.map((c) => ({
    code: c,
    name: CURRENCY_META[c].name,
    value: recommendedInUSD / (FX_TO_USD[c] ?? 1),
  }));

  useEffect(() => {
    if (!hasTrackedInitialResult.current) {
      hasTrackedInitialResult.current = true;
      return;
    }

    trackEvent('calculator_usage', {
      calculator: 'freelancer_rate',
      baseCurrency,
      annualIncome,
      monthlyExpenses,
      taxRate,
      vacationWeeks,
      billableHours,
      profitMargin,
      recommendedHourly: Math.round(result.recommendedHourly),
    });
  }, [annualIncome, monthlyExpenses, taxRate, vacationWeeks, billableHours, profitMargin, baseCurrency, result.recommendedHourly, trackEvent]);

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Income Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <Label htmlFor="base-currency" className="text-sm font-medium">
                Base Currency
              </Label>
              <Select value={baseCurrency} onValueChange={setBaseCurrency}>
                <SelectTrigger id="base-currency" className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CURRENCY_OPTIONS.map((c) => (
                    <SelectItem key={c} value={c}>
                      {CURRENCY_META[c].symbol} {c} — {CURRENCY_META[c].name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                Income, expenses, and rates use this currency.
              </p>
            </div>
            <div>
              <Label htmlFor="annual-income" className="text-sm font-medium">
                Desired Annual Take-Home Income
              </Label>
              <div className="relative mt-1.5">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="annual-income"
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="pl-9"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="monthly-expenses" className="text-sm font-medium">
                Monthly Business Expenses
              </Label>
              <div className="relative mt-1.5">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="monthly-expenses"
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="pl-9"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Software, tools, insurance, office, etc.</p>
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <Label className="text-sm font-medium">Tax Rate</Label>
                <span className="text-sm font-semibold text-foreground">{taxRate}%</span>
              </div>
              <Slider
                value={[taxRate]}
                onValueChange={([v]) => setTaxRate(v)}
                min={0}
                max={50}
                step={1}
              />
              <p className="text-xs text-muted-foreground mt-1">Self-employment + income tax combined</p>
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <Label className="text-sm font-medium">Profit Margin</Label>
                <span className="text-sm font-semibold text-foreground">{profitMargin}%</span>
              </div>
              <Slider
                value={[profitMargin]}
                onValueChange={([v]) => setProfitMargin(v)}
                min={0}
                max={50}
                step={5}
              />
              <p className="text-xs text-muted-foreground mt-1">Buffer for growth, savings, emergencies</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Time & Availability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="flex justify-between mb-1.5">
                <Label className="text-sm font-medium">Billable Hours per Week</Label>
                <span className="text-sm font-semibold text-foreground">{billableHours}h</span>
              </div>
              <Slider
                value={[billableHours]}
                onValueChange={([v]) => setBillableHours(v)}
                min={10}
                max={50}
                step={1}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Hours actually billed to clients (not admin, marketing, etc.)
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <Label className="text-sm font-medium">Vacation / Time Off</Label>
                <span className="text-sm font-semibold text-foreground">{vacationWeeks} weeks</span>
              </div>
              <Slider
                value={[vacationWeeks]}
                onValueChange={([v]) => setVacationWeeks(v)}
                min={0}
                max={12}
                step={1}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Include sick days, holidays, and personal time
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Working weeks:</strong> {52 - vacationWeeks} per year
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <strong className="text-foreground">Annual billable hours:</strong> {(52 - vacationWeeks) * billableHours}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Section */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Your Recommended Rates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Minimum Rate</p>
              <p className="text-2xl font-bold text-foreground">{fmt(result.minimumHourly)}</p>
              <p className="text-xs text-muted-foreground mt-1">per hour (break-even)</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <Badge className="mb-2 bg-primary text-primary-foreground">Recommended</Badge>
              <p className="text-3xl font-bold text-foreground">{fmt(result.recommendedHourly)}</p>
              <p className="text-xs text-muted-foreground mt-1">per hour (with profit)</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Premium Rate</p>
              <p className="text-2xl font-bold text-foreground">{fmt(result.premiumHourly)}</p>
              <p className="text-xs text-muted-foreground mt-1">per hour (expert level)</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Daily Rate (8h)', value: fmt(result.dailyRate) },
              { label: 'Weekly Rate', value: fmt(result.weeklyRate) },
              { label: 'Monthly Revenue', value: fmt(result.monthlyRevenue) },
              { label: 'Annual Revenue', value: fmt(result.annualRevenue) },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-lg border border-border text-center">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Multi-currency view (Priority 4: international freelancer audience) */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center gap-2 mb-3">
              <Globe2 className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">
                Recommended hourly rate in other currencies
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {multiCurrencyRates.map((c) => (
                <div key={c.code} className="p-3 rounded-lg bg-muted/40 border border-border">
                  <p className="text-xs text-muted-foreground">{c.code} · {c.name}</p>
                  <p className="text-lg font-semibold text-foreground">{fmt(c.value, c.code)}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Conversions use indicative mid-market rates and are for guidance only — quote your real rate in your client's currency.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
