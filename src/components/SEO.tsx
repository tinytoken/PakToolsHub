import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "PakToolsHub - Free Online Tools for Pakistan", 
  description = "Free online calculators, student tools, PDF tools, image tools, and Pakistan utility tools with fast and mobile-friendly design.",
  canonical,
  ogImage,
  schema
}) => {
  const metaEnv = (import.meta as any).env;
  const siteUrl = metaEnv?.VITE_APP_URL || 'https://paktoolshub.com';
  const fullTitle = title.includes('PakToolsHub') ? title : `${title} | PakToolsHub`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
