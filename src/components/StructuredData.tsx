
import { generateAllStructuredData } from '@/utils/seo';
import { enhancedSEOData, navigationSchema, performanceSchema } from '@/data/enhanced-seo';

export default function StructuredData() {
  const allStructuredData = generateAllStructuredData();

  const enhancedSchemas = [
    enhancedSEOData.breadcrumb,
    enhancedSEOData.faq,
    enhancedSEOData.howTo,
    enhancedSEOData.article,
    enhancedSEOData.service,
    navigationSchema,
    performanceSchema
  ];

  return (
    <>
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
    </>
  );
}
