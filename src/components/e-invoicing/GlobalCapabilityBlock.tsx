import { MANDATE_COUNT } from '@/data/mandates';

/**
 * Sitewide capability block for CSID + IRN + UUID + QR + digital signatures.
 *
 * Treated as a platform-wide capability: every mandate page also surfaces the
 * jurisdiction-specific instantiation (the local artefact name) so the global
 * claim is provably true.
 *
 * Used on: homepage, /e-invoicing pillar, /compliance, every mandate page.
 */
export function GlobalCapabilityBlock() {
  return (
    <section
      aria-labelledby="global-capability-heading"
      className="rounded-lg border border-border bg-muted/30 p-6 my-8"
    >
      <h2
        id="global-capability-heading"
        className="text-xl font-semibold text-foreground"
      >
        Cryptographic artefacts, in every jurisdiction we cover
      </h2>
      <p className="mt-3 text-foreground">
        Invoicemonk issues cryptographically signed structured invoices in every one
        of the {MANDATE_COUNT} jurisdictions we cover, using the local artefact the
        tax authority requires:
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-foreground">
        <li><span className="font-semibold text-primary">CSID</span> — ZATCA (Saudi Arabia)</li>
        <li><span className="font-semibold text-primary">IRN</span> — GST India (NIC IRP), FIRS Nigeria, GRA Ghana</li>
        <li><span className="font-semibold text-primary">UUID</span> — MyInvois Malaysia</li>
        <li><span className="font-semibold text-primary">QR + Control Unit Number</span> — KRA eTIMS (Kenya)</li>
        <li><span className="font-semibold text-primary">Chave de Acesso</span> — NF-e / NFS-e (Brazil)</li>
        <li><span className="font-semibold text-primary">Fiscal signature</span> — ZIMRA FDMS (Zimbabwe)</li>
        <li><span className="font-semibold text-primary">XAdES digital signatures</span> — Peppol (EU), MTD (UK)</li>
        <li><span className="font-semibold text-primary">ICP-Brasil A1</span> — Brazilian NF-e / NFS-e signing</li>
      </ul>
      <p className="mt-4 text-sm text-muted-foreground">
        Each mandate page documents the local artefact, signing algorithm, certificate
        authority, and the spec section that requires it.
      </p>
    </section>
  );
}
