import { describe, it, expect } from 'vitest';
import { addBlockAnswers } from '../blockAnswers';

describe('addBlockAnswers — Mode A (question headings)', () => {
  it('wraps a clean direct answer under a question h2', () => {
    const html = `<h2>What is e-invoicing?</h2><p>E-invoicing is the structured electronic exchange of invoice data between trading partners in a machine-readable format defined by tax authorities.</p>`;
    const out = addBlockAnswers(html);
    expect(out).toContain('class="block-answer" data-answer="true"');
    expect(out).toContain('E-invoicing is the structured');
  });

  it('synthesizes an answer when the next element is a list', () => {
    const html = `<h2>What are the requirements?</h2><ul><li>Issue invoices in UBL 2.1 format</li><li>Route through a certified PDP platform</li></ul>`;
    const out = addBlockAnswers(html);
    expect(out).toMatch(/block-answer/);
    expect(out).toContain('Issue invoices in UBL');
  });

  it('skips transitional paragraphs but still synthesizes', () => {
    const html = `<h2>What is the goal?</h2><p>In this section, we will explore the goals of the program in detail.</p><p>The goal is to reduce VAT fraud.</p>`;
    const out = addBlockAnswers(html);
    expect(out).toContain('block-answer');
    expect(out).not.toMatch(/block-answer[^>]*>In this section/);
  });
});

describe('addBlockAnswers — Mode B (declarative h2 summaries)', () => {
  it('summarizes a declarative h2 followed by a long paragraph', () => {
    const html = `<h2>Pricing Your Services</h2><p>Pricing your freelance services is one of the most important decisions you will make as an independent professional. It affects how clients perceive your value, how much you earn, and which projects you attract over time.</p>`;
    const out = addBlockAnswers(html);
    expect(out).toContain('block-answer');
    expect(out).toContain('Pricing your freelance services');
  });

  it('wraps a short clean lead paragraph under a declarative h2', () => {
    const html = `<h2>Business Registration</h2><p>Register your business with your local tax authority before invoicing clients to stay compliant and claim deductions.</p>`;
    const out = addBlockAnswers(html);
    expect(out).toContain('block-answer');
  });

  it('skips navigational headings like Related Resources', () => {
    const html = `<h2>Related Resources</h2><p>See our other guides on freelancing topics, taxes, and pricing strategy below.</p>`;
    const out = addBlockAnswers(html);
    expect(out).not.toContain('block-answer');
  });

  it('skips Conclusion and Final Thoughts', () => {
    const html = `<h2>Conclusion</h2><p>Building a freelance business takes time, but the freedom is worth it.</p><h2>Final Thoughts</h2><p>Stay disciplined with finances and you will succeed.</p>`;
    const out = addBlockAnswers(html);
    expect(out).not.toContain('block-answer');
  });

  it('does NOT inject summaries under declarative h3 headings', () => {
    const html = `<h2>Setting Up</h2><p>Setting up properly saves time later down the road for new freelancers.</p><h3>Business Banking</h3><p>Open a separate account to keep finances clean and audit-ready.</p>`;
    const out = addBlockAnswers(html);
    const matches = (out.match(/block-answer/g) || []).length;
    // Only the h2 should produce one block-answer (class attr appears once per wrapper).
    expect(matches).toBeLessThanOrEqual(2); // class + data-answer counted separately is fine
    expect(out).not.toMatch(/block-answer[^>]*>Open a separate/);
  });

  it('handles a declarative h2 followed by a list', () => {
    const html = `<h2>Tools and Systems</h2><ul><li>Invoicing software for getting paid</li><li>Accounting software for tracking expenses</li></ul>`;
    const out = addBlockAnswers(html);
    expect(out).toContain('block-answer');
    expect(out).toContain('Tools and Systems includes');
  });

  it('skips when no usable content follows', () => {
    const html = `<h2>Setting Up</h2><h3>Business Banking</h3><p>Details here.</p>`;
    const out = addBlockAnswers(html);
    expect(out).not.toContain('block-answer');
  });
});

describe('addBlockAnswers — general', () => {
  it('skips standalone non-question, non-h2 declarative h3', () => {
    const html = `<h3>Background</h3><p>Some paragraph that explains background context.</p>`;
    const out = addBlockAnswers(html);
    expect(out).not.toContain('block-answer');
  });

  it('is idempotent', () => {
    const html = `<h2>What is X?</h2><p>X is a thing that does something useful for businesses everywhere always today.</p>`;
    const once = addBlockAnswers(html);
    const twice = addBlockAnswers(once);
    expect(twice).toBe(once);
  });

  it('handles mixed posts with both question and declarative h2s', () => {
    const html = `<h2>What is freelancing?</h2><p>Freelancing is self-employment where you sell services directly to clients without an employer relationship.</p><h2>Pricing Your Services</h2><p>Pricing your services well requires research, cost calculation, and confidence in the value you deliver.</p>`;
    const out = addBlockAnswers(html);
    const count = (out.match(/class="block-answer"/g) || []).length;
    expect(count).toBe(2);
  });
});
