
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
      // Removed standalone aggregateRating, course, and jobPosting as they don't have actual content
      navigationSchema,
      performanceSchema
    ];
    
    return (
      <>
        {/* Standard structured data */}
        {allStructuredData.map((data, index) => (
          <script
            key={index}
            id={`structured-data-${index}`}
            type="application/ld+json"
            suppressHydrationWarning
          >
            {data}
          </script>
        ))}
        
        {/* Enhanced SEO structured data */}
        {enhancedSchemas.map((schema, index) => (
          <script
            key={`enhanced-${index}`}
            id={`enhanced-structured-data-${index}`}
            type="application/ld+json"
            suppressHydrationWarning
          >
            {JSON.stringify(schema, null, 0)}
          </script>
        ))}
        
        {customData && (
          <script
            id="custom-structured-data"
            type="application/ld+json"
            suppressHydrationWarning
          >
            {JSON.stringify(customData, null, 0)}
          </script>
        )}
      </>
    );
  }

  const structuredData = generateStructuredData(type);

  return (
    <script
      id={`structured-data-${type}`}
      type="application/ld+json"
      suppressHydrationWarning
    >
      {structuredData}
    </script>
  );
}
