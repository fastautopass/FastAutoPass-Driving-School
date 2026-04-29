
export const getLocalBusinessSchema = () => ({
  "name": "FastAutoPass",
  "image": "https://fastautopass.co.uk/logo.png",
  "@id": "https://fastautopass.co.uk",
  "url": "https://fastautopass.co.uk",
  "telephone": "07842587200",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bradford & Leeds Areas",
    "addressLocality": "Bradford",
    "addressRegion": "West Yorkshire",
    "postalCode": "BD1",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.7939,
    "longitude": -1.7528
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/fastautopass",
    "https://www.instagram.com/fastautopass"
  ]
});

export const getOrganizationSchema = () => ({
  "name": "FastAutoPass",
  "url": "https://fastautopass.co.uk",
  "logo": "https://fastautopass.co.uk/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+447842587200",
    "contactType": "customer service",
    "email": "support@fastautopass.co.uk",
    "areaServed": "GB",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/fastautopass",
    "https://www.instagram.com/fastautopass"
  ]
});

export const getWebSiteSchema = () => ({
  "name": "FastAutoPass Driving School",
  "url": "https://fastautopass.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://fastautopass.co.uk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getServiceSchema = (serviceName: string, description: string, url: string) => ({
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "FastAutoPass"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Bradford"
    },
    {
      "@type": "City",
      "name": "Leeds"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Driving Lessons",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName
        }
      }
    ]
  }
});

export const getBreadcrumbSchema = (crumbs: { name: string, item: string }[]) => ({
  "itemListElement": crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.item
  }))
});

export const getArticleSchema = (headline: string, description: string, url: string, datePublished: string) => ({
  "headline": headline,
  "description": description,
  "author": {
    "@type": "Organization",
    "name": "FastAutoPass"
  },
  "publisher": {
    "@type": "Organization",
    "name": "FastAutoPass",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fastautopass.co.uk/logo.png"
    }
  },
  "datePublished": datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});
