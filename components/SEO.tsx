
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  imageUrl?: string;
  author?: string;
  publishedTime?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  type = 'website', 
  imageUrl = 'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-658-51040-4?as=webp',
  author = 'Serge Baumberger',
  publishedTime
}) => {
  const location = useLocation();
  const siteTitle = "Quality Tree Framework";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  
  // Force the main domain
  const domain = "https://www.quality-tree.com";
  
  // Construct the URL. Since the app uses HashRouter, we construct the URL 
  // to include the hash so deep links work correctly when clicked from Search.
  // Logic: 
  // Root -> https://www.quality-tree.com
  // Subpage -> https://www.quality-tree.com/#/blog/my-post
  const currentPath = location.pathname === '/' ? '' : `/#${location.pathname}`;
  const currentUrl = `${domain}${currentPath}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteTitle} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {publishedTime && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:url" content={currentUrl} />
    </Helmet>
  );
};

export default SEO;
