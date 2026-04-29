
import React from 'react';

interface SchemaProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Article' | 'BreadcrumbList' | 'CollectionPage' | 'Organization' | 'WebSite';
  data: any;
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default Schema;
