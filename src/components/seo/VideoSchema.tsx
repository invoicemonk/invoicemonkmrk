import { Helmet } from 'react-helmet-async';

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  /** ISO 8601 duration, e.g. 'PT3M30S' */
  duration?: string;
  embedUrl?: string;
  contentUrl?: string;
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
  contentUrl,
}: VideoSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
  };

  if (duration) schema.duration = duration;
  if (embedUrl) schema.embedUrl = embedUrl;
  if (contentUrl) schema.contentUrl = contentUrl;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
