import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import type { LegalPageContent } from '@/data/legal/types';

interface Props {
  content: LegalPageContent;
  langPrefix: string;
}

export function LegalPage({ content, langPrefix }: Props) {
  const processHtml = (html: string) =>
    html.replace(/__LANG__/g, `/${langPrefix}`);

  return (
    <Layout>
      <SEOHead title={content.seoTitle} description={content.seoDescription} />
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
            {content.title}
          </h1>
          <p className="text-body-lg text-muted-foreground mb-8">
            <strong>{content.lastUpdated}</strong>
          </p>

          <nav className="bg-muted/50 rounded-xl p-6 mb-12">
            <h2 className="text-heading-sm font-semibold text-foreground mb-4">
              {content.tocTitle}
            </h2>
            <ol
              className={`list-decimal list-inside space-y-2 text-body text-muted-foreground${
                content.tocColumns ? ' columns-1 md:columns-2' : ''
              }`}
            >
              {content.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-primary transition-colors">
                    {s.tocLabel}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            {content.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                  {s.title}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: processHtml(s.html) }} />
              </section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
