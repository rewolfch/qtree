import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  schema?: any;
  imageUrl?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, schema, imageUrl, type = 'website', author, publishedTime }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default SEO;
