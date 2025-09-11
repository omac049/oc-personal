import Script from 'next/script';
import { generateAllStructuredData, generateStructuredData } from '@/utils/seo';
import { enhancedSEOData, navigationSchema, performanceSchema } from '@/data/enhanced-seo';

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
    
    // Enhanced structured data for better search engine rendering
    const enhancedSchemas = [
      enhancedSEOData.breadcrumb,
      enhancedSEOData.faq,
      enhancedSEOData.howTo,
      enhancedSEOData.article,
      enhancedSEOData.service,
      enhancedSEOData.aggregateRating,
      enhancedSEOData.course,
      enhancedSEOData.jobPosting,
      navigationSchema,
      performanceSchema
    ];
    
    return (
      <>
        {/* Standard structured data */}
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
        
        {/* Enhanced SEO structured data */}
        {enhancedSchemas.map((schema, index) => (
          <Script
            key={`enhanced-${index}`}
            id={`enhanced-structured-data-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema, null, 0),
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
