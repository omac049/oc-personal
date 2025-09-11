import Script from 'next/script';
import { generateAllStructuredData, generateStructuredData } from '@/utils/seo';

interface StructuredDataProps {
  type?: 'all' | 'person' | 'website' | 'organization' | 'breadcrumb';
  customData?: object;
}

/**
 * Component for injecting structured data (JSON-LD) into the page
 */
export default function StructuredData({ type = 'all', customData }: StructuredDataProps) {
  if (type === 'all') {
    const allStructuredData = generateAllStructuredData();
    
    return (
      <>
        {allStructuredData.map((data, index) => (
          <Script
            key={index}
            id={`structured-data-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: data,
            }}
          />
        ))}
        {customData && (
          <Script
            id="custom-structured-data"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(customData, null, 0),
            }}
          />
        )}
      </>
    );
  }

  const structuredData = generateStructuredData(type);

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: structuredData,
      }}
    />
  );
}
