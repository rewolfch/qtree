import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  imageUrl?: string;
  url?: string;
  schema?: any;
  lang?: string;
  author?: string;
  publishedTime?: string;
}

export default function SEO({ title, description, name, type, image, imageUrl, url, schema, lang = 'de', author, publishedTime }: SEOProps) {
  const siteTitle = title ? `${title} | Quality Tree Framework` : 'Quality Tree Framework';
  const siteDesc = description || 'Quality Tree Framework';
  const siteImage = image || imageUrl || 'https://www.quality-tree.com/og-image.jpg';
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://www.quality-tree.com');

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{siteTitle}</title>
      <meta name='description' content={siteDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={siteImage} />
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:creator" content={name || author || '@SergeBaumberger'} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
