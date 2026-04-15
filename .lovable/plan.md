# Price Increase: Professional $5→$29, Business $19→$129

## Scope

Two things need updating in every locale file:

1. `**pricing` object** — the numeric values for `professional`, `business`, and `starter` (where applicable)
2. **FAQ answer text** — the hardcoded price strings in the "How much does Invoicemonk cost" FAQ

## New Prices by Locale

Using the USD anchor ($29 Pro, $129 Business) and recalculating each locale proportionally based on current exchange-rate ratios:


| Locale | Currency | Professional | Business  | Starter (if applicable) |
| ------ | -------- | ------------ | --------- | ----------------------- |
| en-US  | USD      | $29          | $129      | —                       |
| en-GB  | GBP      | £23          | £99       | —                       |
| en-AU  | AUD      | $45          | $199      | —                       |
| en-CA  | CAD      | $39          | $139      | —                       |
| en-IN  | INR      | ₹2,399       | ₹9,999    | —                       |
| en-NG  | NGN      | ₦25,000      | ₦125,000  | ₦10,000                 |
| en-GH  | GHS      | GH₵600       | GH₵1,400  | GH₵300                  |
| en-KE  | KES      | KSh5,000     | KSh14,000 | KSh2,500                |
| en-ZA  | ZAR      | R499         | R1,999    | —                       |
| en-ZW  | USD      | $29          | $129      | —                       |
| en-PH  | PHP      | ₱1,499       | ₱6,999    | —                       |
| en-SC  | SCR      | ₨399         | ₨1,799    | —                       |
| en-NZ  | NZD      | NZ$49        | NZ$199    | —                       |
| en-SA  | SAR      | SAR 109      | SAR 479   | —                       |
| en-MY  | MYR      | RM 129       | RM 569    | —                       |
| fr-FR  | EUR      | €29          | €119      | —                       |
| de-DE  | EUR      | €29          | €119      | —                       |
| es-ES  | EUR      | €29          | €119      | —                       |
| pt-BR  | BRL      | R$149        | R$649     | —                       |


## Files to Modify (19 locale files)

For each of these files, two edits:

1. Update the `pricing: { professional: X, business: Y }` values (and `starter` for NG/GH/KE)
2. Update the FAQ answer string that mentions the old prices


| File                   | Changes                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `src/locales/en-US.ts` | pro: 29, biz: 129, FAQ: "$29/month ... $129/month"         |
| `src/locales/en-GB.ts` | pro: 23, biz: 99, FAQ: "£23/month ... £99/month"           |
| `src/locales/en-AU.ts` | pro: 45, biz: 199, FAQ: "A$45/month ... A$199/month"       |
| `src/locales/en-CA.ts` | pro: 39, biz: 139, FAQ: "C$39/month ... C$139/month"       |
| `src/locales/en-IN.ts` | pro: 2399, biz: 9999, FAQ: "₹2,399/month ... ₹9,999/month" |
| `src/locales/en-NG.ts` | starter: 12000, pro: 25000, biz: 55000, FAQ updated        |
| `src/locales/en-GH.ts` | starter: 300, pro: 600, biz: 1400, FAQ updated             |
| `src/locales/en-KE.ts` | starter: 2500, pro: 5000, biz: 14000, FAQ updated          |
| `src/locales/en-ZA.ts` | pro: 499, biz: 1999, FAQ updated                           |
| `src/locales/en-ZW.ts` | pro: 29, biz: 129, FAQ updated                             |
| `src/locales/en-PH.ts` | pro: 1499, biz: 6999, FAQ updated                          |
| `src/locales/en-SC.ts` | pro: 399, biz: 1799, FAQ updated                           |
| `src/locales/en-NZ.ts` | pro: 49, biz: 199, FAQ updated                             |
| `src/locales/en-SA.ts` | pro: 109, biz: 479, FAQ updated                            |
| `src/locales/en-MY.ts` | pro: 129, biz: 569, FAQ updated                            |
| `src/locales/fr-FR.ts` | pro: 29, biz: 119, FAQ: "29 €/mois ... 119 €/mois"         |
| `src/locales/de-DE.ts` | pro: 29, biz: 119, FAQ: "29 €/Monat ... 119 €/Monat"       |
| `src/locales/es-ES.ts` | pro: 29, biz: 119, FAQ: "29€/mes ... 119€/mes"             |
| `src/locales/pt-BR.ts` | pro: 149, biz: 649, FAQ: "R$ 149/mês ... R$ 649/mês"       |


No changes needed to `pricingPlans.ts`, `calculatePrice()`, or any component logic — those already read from the locale configs dynamically.