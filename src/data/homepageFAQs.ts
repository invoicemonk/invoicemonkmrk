export interface FAQItem {
  question: string;
  answer: string;
}

/** Generic FAQs shared across all countries */
export const homepageFAQs: FAQItem[] = [
  {
    question: 'What is Invoicemonk?',
    answer:
      'Invoicemonk is an all-in-one business finance platform that helps small businesses and freelancers manage invoicing, expenses, payments, and accounting. Our tools are designed to be simple, professional, and compliant with tax regulations worldwide.',
  },
  {
    question: 'Is Invoicemonk really free?',
    answer:
      'Yes! Invoicemonk offers a free forever plan that includes 5 invoices and 5 receipts per month, client management, and basic expense tracking. We also offer premium plans with advanced features like unlimited invoicing, payment processing, detailed reporting, and priority support.',
  },
  {
    question: 'How does invoicing work?',
    answer:
      'Creating invoices with Invoicemonk is simple. Choose from our professional templates, add your business details and logo, enter the line items, and send directly to your clients via email. You can track when invoices are viewed and paid, and set up automatic payment reminders.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'Security is our top priority. We use bank-level encryption (256-bit SSL) to protect all your data. Our servers are hosted in secure, certified data centers, and we perform regular security audits. Your financial information is never shared with third parties.',
  },
  {
    question: 'Does Invoicemonk support multiple currencies?',
    answer:
      'Yes, Invoicemonk supports invoicing and payments in multiple currencies. This makes it perfect for businesses working with international clients. Exchange rates are updated automatically, and you can set your preferred currencies for different clients.',
  },
  {
    question: 'Can I customize my invoices with my branding?',
    answer:
      'Yes! You can fully customize your invoices with your logo and business information. Choose from multiple professional templates to create polished invoices that represent your brand.',
  },
];
