
import React from 'react';

interface SchemaProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Article' | 'BreadcrumbList' | 'CollectionPage' | 'Organization' | 'WebSite';
  data: any;
}

// Safely serialize JSON-LD: escape </script> to prevent SSR HTML breakage
function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/<\/script>/gi, '<\\/script>');
}

const Schema: React.FC<SchemaProps> = ({ type, data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
};

export default Schema;