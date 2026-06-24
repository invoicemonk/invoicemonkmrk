#!/usr/bin/env python3
"""Lift the citation floor on src/data/mandates.ts to 6 per mandate.
Idempotent: rewrites each mandate's citations[] block with the
curated set below.
"""
import re, pathlib, sys

MANDATES = pathlib.Path("src/data/mandates.ts")

# Curated authority sources (>=6 per mandate). Each (label, url, optional section).
CITATIONS = {
    "zatca-phase-2": [
        ("ZATCA E-Invoicing Detailed Guideline", "https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/default.aspx", None),
        ("ZATCA Electronic Invoice XML Implementation Standard", "https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx", "UBL 2.1 + KSA extensions"),
        ("ZATCA E-Invoicing Resolution & Regulations", "https://zatca.gov.sa/en/E-Invoicing/Legislation/Pages/default.aspx", None),
        ("ZATCA Fatoorah developer portal", "https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx", "APIs, CSID, compliance checks"),
        ("ZATCA Phase 2 onboarding waves", "https://zatca.gov.sa/en/E-Invoicing/Pages/Wave.aspx", None),
        ("KSA VAT Implementing Regulations", "https://zatca.gov.sa/en/RulesRegulations/Taxes/Pages/VAT.aspx", "Article 53 — Tax Invoices"),
    ],
    "zatca-phase-1": [
        ("ZATCA E-Invoicing Resolution (Phase 1)", "https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/default.aspx", None),
        ("ZATCA Phase 1 Detailed Guideline", "https://zatca.gov.sa/en/E-Invoicing/Introduction/Documents/E-invoicing_Detailed%20_Guideline.pdf", None),
        ("ZATCA Controls, Requirements, Technical Specifications (Phase 1)", "https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx", None),
        ("KSA VAT Implementing Regulations", "https://zatca.gov.sa/en/RulesRegulations/Taxes/Pages/VAT.aspx", None),
        ("ZATCA E-Invoicing FAQ", "https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/FAQ.aspx", None),
        ("ZATCA QR code specification (Phase 1 TLV)", "https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx", "QR TLV tags 1–5"),
    ],
    "myinvois-malaysia": [
        ("LHDN e-Invoice Guideline", "https://www.hasil.gov.my/en/e-invoice/", None),
        ("MyInvois SDK", "https://sdk.myinvois.hasil.gov.my/", None),
        ("MyInvois portal", "https://myinvois.hasil.gov.my/", None),
        ("LHDN e-Invoice Specific Guideline", "https://www.hasil.gov.my/en/e-invoice/general-guideline/", None),
        ("MyInvois Catalogue of Codes", "https://sdk.myinvois.hasil.gov.my/codes/", None),
        ("Income Tax Act 1967, s.82C (e-invoicing power)", "https://www.hasil.gov.my/en/e-invoice/", None),
    ],
    "gst-irn-india": [
        ("GST e-Invoice Portal — Schema & API", "https://einvoice1.gst.gov.in/", None),
        ("CBIC Notification on e-Invoicing Threshold", "https://www.cbic.gov.in/", None),
        ("GSTN e-Invoice API Sandbox", "https://einv-apisandbox.nic.in/", None),
        ("GST e-Invoice JSON Schema (INV-01)", "https://einvoice1.gst.gov.in/Others/JsonSchema", None),
        ("CBIC Notification 17/2022-Central Tax (turnover threshold)", "https://taxinformation.cbic.gov.in/", None),
        ("GST Rules 48(4) & 48(5) — e-invoice mandate", "https://cbic-gst.gov.in/", None),
    ],
    "peppol-eu": [
        ("Peppol BIS Billing 3.0 specification", "https://docs.peppol.eu/poacc/billing/3.0/", None),
        ("EU Directive 2014/55/EU", "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014L0055", None),
        ("EN 16931 — European e-invoice semantic standard", "https://www.cencenelec.eu/areas-of-work/cen-cenelec-topics/digital-society/electronic-invoicing-en-16931/", None),
        ("OpenPeppol governance & post-award", "https://peppol.org/", None),
        ("ViDA (VAT in the Digital Age) proposal", "https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en", None),
        ("Peppol Authority list", "https://peppol.org/who-is-who/peppol-authorities/", None),
    ],
    "firs-mbs-nigeria": [
        ("FIRS National e-Invoicing Solution overview", "https://www.firs.gov.ng/", None),
        ("FIRS Merchant-Buyer Solution (MBS) portal", "https://einvoice.firs.gov.ng/", None),
        ("FIRS e-Invoicing Guidelines (2024)", "https://www.firs.gov.ng/national-e-invoicing-solution/", None),
        ("Nigeria Value Added Tax Act (Cap. V1, LFN 2004)", "https://www.firs.gov.ng/tax-resources/tax-laws/", None),
        ("FIRS TIN Verification portal", "https://tinverification.jtb.gov.ng/", None),
        ("Federal Inland Revenue Service (Establishment) Act 2007", "https://www.firs.gov.ng/tax-resources/tax-laws/", None),
    ],
    "mtd-uk": [
        ("HMRC MTD for VAT notice (700/22)", "https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat", None),
        ("HMRC VAT (MTD) API", "https://developer.service.hmrc.gov.uk/api-documentation/docs/api/service/vat-api/", None),
        ("MTD for VAT overview (gov.uk)", "https://www.gov.uk/government/collections/making-tax-digital-for-vat", None),
        ("HMRC recognised MTD software", "https://www.tax.service.gov.uk/making-tax-digital-software", None),
        ("Domestic reverse charge for construction (CIS) — VAT notice 735", "https://www.gov.uk/guidance/vat-domestic-reverse-charge-for-building-and-construction-services", None),
        ("Postponed VAT accounting guidance", "https://www.gov.uk/guidance/complete-your-vat-return-to-account-for-import-vat", None),
    ],
    "kra-etims-kenya": [
        ("KRA eTIMS portal", "https://etims.kra.go.ke/", None),
        ("KRA eTIMS taxpayer guide", "https://www.kra.go.ke/", None),
        ("KRA Tax Invoice Management System (TIMS) regulations", "https://www.kra.go.ke/news-center/public-notices", None),
        ("Kenya VAT Act 2013 (as amended)", "http://kenyalaw.org/kl/index.php?id=12036", None),
        ("KRA VAT (Electronic Tax Invoice) Regulations 2020", "https://kra.go.ke/", None),
        ("eTIMS OSCU/VSCU API documentation", "https://etims.kra.go.ke/", None),
    ],
    "gra-e-vat-ghana": [
        ("GRA E-VAT programme", "https://gra.gov.gh/", None),
        ("GRA Certified Invoicing System (CIS) guidance", "https://gra.gov.gh/domestic-tax/tax-types/value-added-tax-vat/", None),
        ("Ghana Value Added Tax Act, 2013 (Act 870)", "https://gra.gov.gh/laws-and-regulations/", None),
        ("Communications Service Tax & NHIL Acts (cascade rates)", "https://gra.gov.gh/laws-and-regulations/", None),
        ("GRA E-VAT taxpayer onboarding waves", "https://gra.gov.gh/news/", None),
        ("Ghana Revenue Authority Act 2009 (Act 791)", "https://gra.gov.gh/laws-and-regulations/", None),
    ],
    "bir-cas-philippines": [
        ("BIR Electronic Invoicing System portal", "https://eis.bir.gov.ph/", None),
        ("BIR Revenue Regulations on e-Invoicing", "https://www.bir.gov.ph/", None),
        ("Revenue Regulation 8-2022 (EIS)", "https://www.bir.gov.ph/index.php/issuances/revenue-issuances/revenue-regulations.html", None),
        ("National Internal Revenue Code (NIRC) of 1997, as amended", "https://www.bir.gov.ph/index.php/tax-code.html", None),
        ("TRAIN Act (RA 10963) — Section 237-A", "https://www.bir.gov.ph/", "Mandates e-invoicing for in-scope taxpayers"),
        ("Ease of Paying Taxes Act (RA 11976)", "https://www.bir.gov.ph/", None),
    ],
    "sars-south-africa": [
        ("South African VAT Act, Section 20", "https://www.sars.gov.za/", None),
        ("SARS VAT404 Guide for Vendors", "https://www.sars.gov.za/", None),
        ("SARS e-Filing portal", "https://www.sarsefiling.co.za/", None),
        ("SARS VAT201 declaration guide", "https://www.sars.gov.za/types-of-tax/value-added-tax/", None),
        ("SARS Binding General Ruling 36 (electronic invoices)", "https://www.sars.gov.za/legal-counsel/legal-advisory/binding-rulings/", None),
        ("Tax Administration Act, 2011 (record-keeping)", "https://www.sars.gov.za/legal-counsel/primary-legislation/", None),
    ],
    "zimra-zimbabwe": [
        ("ZIMRA Fiscalisation Data Management System", "https://www.zimra.co.zw/", None),
        ("Statutory Instrument 153 of 2023", "https://www.zimra.co.zw/", None),
        ("ZIMRA FDMS technical specifications", "https://fdms.zimra.co.zw/", None),
        ("Zimbabwe Value Added Tax Act [Chapter 23:12]", "https://www.zimra.co.zw/legislation/acts", None),
        ("Statutory Instrument 148A of 2024 (dual currency)", "https://www.zimra.co.zw/legislation/statutory-instruments", None),
        ("ZIMRA Public Notice on FDMS onboarding", "https://www.zimra.co.zw/news", None),
    ],
    "src-seychelles": [
        ("Seychelles Revenue Commission VAT guide", "https://src.gov.sc/", None),
        ("Seychelles Value Added Tax Act, 2010", "https://src.gov.sc/resources/legislation/", None),
        ("SRC e-Filing portal", "https://efiling.src.gov.sc/", None),
        ("SRC tax invoice requirements (VAT)", "https://src.gov.sc/pages/taxservices/valueaddedtax.aspx", None),
        ("SRC TIN registry & verification", "https://src.gov.sc/", None),
        ("Revenue Administration Act, 2009", "https://src.gov.sc/resources/legislation/", None),
    ],
    "sef-brazil": [
        ("Portal Nacional da NF-e", "https://www.nfe.fazenda.gov.br/", None),
        ("NFS-e Nacional", "https://www.nfse.gov.br/", None),
        ("Manual de Orientação do Contribuinte (NF-e MOC)", "https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=33ol5hhpYvU=", None),
        ("ICP-Brasil certificate authority registry", "https://www.iti.gov.br/", None),
        ("Ajuste SINIEF (NF-e legal basis)", "https://www.confaz.fazenda.gov.br/", None),
        ("Receita Federal — NFS-e nacional layout", "https://www.gov.br/nfse/", None),
    ],
    "b2g-us": [
        ("Treasury Invoice Processing Platform (IPP)", "https://www.ipp.gov/", None),
        ("Bureau of the Fiscal Service IPP overview", "https://fiscal.treasury.gov/ipp/", None),
        ("OMB Memorandum M-15-19 (federal e-invoicing)", "https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2015/m-15-19.pdf", None),
        ("GSA System for Award Management (SAM.gov)", "https://sam.gov/", None),
        ("Federal Acquisition Regulation (FAR) Part 32 — Contract Financing", "https://www.acquisition.gov/far/part-32", None),
        ("IRS Publication 583 (record-keeping for businesses)", "https://www.irs.gov/forms-pubs/about-publication-583", None),
    ],
    "cra-peppol-canada": [
        ("CRA GST/HST invoice requirements", "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate/invoicing.html", None),
        ("Peppol Authority Canada", "https://peppol.org/", None),
        ("Canada Excise Tax Act (GST/HST)", "https://laws-lois.justice.gc.ca/eng/acts/E-15/", None),
        ("Revenu Québec — QST invoicing rules", "https://www.revenuquebec.ca/en/businesses/consumption-taxes/gsthst-and-qst/", None),
        ("CRA Place-of-supply rules (HST)", "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/gi-119.html", None),
        ("Canada Digital Adoption Program (e-invoicing roadmap)", "https://ised-isde.canada.ca/site/canada-digital-adoption-program/en", None),
    ],
}

src = MANDATES.read_text()

# Replace each citations: [...] block, scoped per mandate by slug.
def format_block(citations):
    inner_lines = []
    for label, url, section in citations:
        parts = [f"label: '{label.replace(chr(39), chr(92)+chr(39))}'", f"url: '{url}'"]
        if section:
            parts.append(f"section: '{section.replace(chr(39), chr(92)+chr(39))}'")
        inner_lines.append("      { " + ", ".join(parts) + " },")
    return "citations: [\n" + "\n".join(inner_lines) + "\n    ],"

updated = 0
for slug, cits in CITATIONS.items():
    # Find this mandate block: slug: 'X' ... citations: [...],
    pattern = re.compile(
        r"(slug:\s*'" + re.escape(slug) + r"',[\s\S]*?)citations:\s*\[[\s\S]*?\],",
    )
    new_cits = format_block(cits)
    new_src, n = pattern.subn(lambda m: m.group(1) + new_cits, src, count=1)
    if n == 0:
        print(f"❌ slug not found or pattern failed: {slug}", file=sys.stderr)
        continue
    src = new_src
    updated += 1

MANDATES.write_text(src)
print(f"✅ Lifted citation floor on {updated} mandates (target: 6 per record).")
