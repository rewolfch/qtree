import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  imageUrl?: string;
  author?: string;
  publishedTime?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, type, imageUrl, author, publishedTime, schema }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {type && <meta property="og:type" content={type} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default SEO;
