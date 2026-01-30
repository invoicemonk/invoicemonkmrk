
# Plan: Localize Expenses & Receipts Pages

## Overview
Update the Expenses and Receipts pages to display currency values in the user's selected locale, using the existing `useLocale()` hook and `formatCurrency()` utility.

---

## Changes Required

### 1. Expenses.tsx

**Import the locale hook:**
```
import { useLocale } from '@/hooks/useLocale';
```

**Use the hook inside the component:**
```
const { formatCurrency } = useLocale();
```

**Replace hardcoded values in the mockup:**

| Current Value | Amount | Updated |
|---------------|--------|---------|
| `$3,240` | 3240 | `formatCurrency(3240)` |
| `$2,180` | 2180 | `formatCurrency(2180)` |
| `$450` | 450 | `formatCurrency(450)` |
| `$890` | 890 | `formatCurrency(890)` |
| `$1,200` | 1200 | `formatCurrency(1200)` |
| `$700` | 700 | `formatCurrency(700)` |

**Update the expense categories array to use numbers:**
```
const categories = [
  { category: 'Office Supplies', amount: 450, percent: 14 },
  { category: 'Software', amount: 890, percent: 27 },
  { category: 'Travel', amount: 1200, percent: 37 },
  { category: 'Meals', amount: 700, percent: 22 },
];
```

---

### 2. Receipts.tsx

**Import the locale hook:**
```
import { useLocale } from '@/hooks/useLocale';
```

**Use the hook inside the component:**
```
const { formatCurrency } = useLocale();
```

**Replace hardcoded values in the receipts array:**

| Current Value | Amount | Updated |
|---------------|--------|---------|
| `$142.50` | 142.50 | `formatCurrency(142.50)` |
| `$19.99` | 19.99 | `formatCurrency(19.99)` |
| `$340.00` | 340 | `formatCurrency(340)` |
| `$18.45` | 18.45 | `formatCurrency(18.45)` |

**Update the receipts array to use numbers:**
```
const receipts = [
  { vendor: 'Office Depot', amount: 142.50, category: 'Supplies', date: 'Today' },
  { vendor: 'Zoom Pro', amount: 19.99, category: 'Software', date: 'Yesterday' },
  { vendor: 'United Airlines', amount: 340, category: 'Travel', date: 'Mon' },
  { vendor: 'Starbucks', amount: 18.45, category: 'Meals', date: 'Mon' },
];
```

---

## Expected Results

After implementation, users will see localized currency formats:

| Country | Total Expenses | Sample Receipt |
|---------|----------------|----------------|
| Nigeria (NG) | ₦3,240 | ₦142.50 |
| United States (US) | $3,240 | $142.50 |
| Canada (CA) | C$3,240 | C$142.50 |
| United Kingdom (GB) | £3,240 | £142.50 |
| Australia (AU) | A$3,240 | A$142.50 |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Expenses.tsx` | Add `useLocale` hook, update 6 currency values |
| `src/pages/Receipts.tsx` | Add `useLocale` hook, update 4 currency values |

---

## Technical Notes

- The `formatCurrency()` function from `useLocale()` automatically formats amounts using the user's selected country's currency symbol and position
- No changes needed to the locale system - it's already fully implemented
- Selection persists via localStorage under the key `invoicemonk-country`
