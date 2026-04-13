# Invoicemonk

Invoicemonk is the compliance-first invoicing and business finance platform for freelancers, consultants, agencies, and small businesses.

This repository contains the Invoicemonk frontend website and web app for https://invoicemonk.com.

## Live site

- Website: https://invoicemonk.com
- App signup: https://app.invoicemonk.com/signup

## What this project is about

Invoicemonk helps businesses invoice correctly across multiple countries and jurisdictions. The platform is built around tax-compliant invoice generation, immutable audit trails, and international invoicing support including VAT, GST, e-invoicing, and multi-currency workflows.

Key features:

- Multi-country, jurisdiction-aware invoicing
- Tax field automation and compliance-ready invoices
- Immutable invoice records and audit trails
- Multi-currency invoicing with accurate FX handling
- Free tools for invoice generation, fee comparison, and rate calculation

## Local development

### Prerequisites

- Node.js (recommended 18+)
- npm

### Install dependencies

```sh
npm install
```

### Run development server

```sh
npm run dev
```

Open the URL shown in the terminal to preview the site locally.

### Build for production

```sh
npm run build
```

### Preview the production build

```sh
npm run preview
```

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the app for production
- `npm run build:dev` — build with development mode
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run test` — run Vitest once
- `npm run test:watch` — run Vitest in watch mode

## Technologies

This project uses:

- Vite
- React
- TypeScript
- Tailwind CSS
- Radix UI
- Supabase
- React Router
- Vitest
- ESLint

## Notes

This repo appears to serve the Invoicemonk frontend and public marketing site. If you need to update brand content, navigation, or compliance features, the website entry points are located under `src/components` and `src/pages`.
