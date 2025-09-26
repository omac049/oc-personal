/**
 * Algolia Search Diagnostic Script
 * 
 * Run this script in your browser console on omar-corral.com/seo-resources
 * to diagnose search issues and test Algolia connectivity.
 * 
 * Usage:
 * 1. Open omar-corral.com/seo-resources in browser
 * 2. Open Developer Tools (F12)
 * 3. Go to Console tab
 * 4. Paste this entire script and press Enter
 * 5. Review the diagnostic output
 */

console.log('🔍 Starting Algolia Search Diagnostics...\n');

// Configuration (matches your docusaurus.config.ts)
const config = {
  appId: 'ZLQ21UNSR7',
  apiKey: 'c3a190e475e64ffda0f8bbd9a40e69c1',
  indexName: 'omar_corral_com_zlq21unsr7_pages'
};

console.log('📋 Configuration Check:');
console.log(`App ID: ${config.appId}`);
console.log(`API Key: ${config.apiKey.substring(0, 8)}...`);
console.log(`Index Name: ${config.indexName}`);
console.log('');

// Test 1: Basic connectivity
async function testConnectivity() {
  console.log('🌐 Test 1: Testing Algolia connectivity...');
  
  try {
    const response = await fetch(`https://${config.appId}-dsn.algolia.net/1/indexes/${config.indexName}/search`, {
      method: 'POST',
      headers: {
        'X-Algolia-Application-Id': config.appId,
        'X-Algolia-API-Key': config.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: '',
        hitsPerPage: 0
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Algolia connectivity: SUCCESS');
      console.log(`📊 Total records in index: ${data.nbHits}`);
      console.log(`⏱️  Processing time: ${data.processingTimeMS}ms`);
    } else {
      console.log('❌ Algolia connectivity: FAILED');
      console.log('Error:', data);
    }
  } catch (error) {
    console.log('❌ Algolia connectivity: ERROR');
    console.log('Error:', error.message);
  }
  console.log('');
}

// Test 2: Search for "seo"
async function testSeoSearch() {
  console.log('🔍 Test 2: Testing search for "seo"...');
  
  try {
    const response = await fetch(`https://${config.appId}-dsn.algolia.net/1/indexes/${config.indexName}/search`, {
      method: 'POST',
      headers: {
        'X-Algolia-Application-Id': config.appId,
        'X-Algolia-API-Key': config.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: 'seo',
        hitsPerPage: 5
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log(`📈 Search results for "seo": ${data.nbHits} total hits`);
      if (data.hits.length > 0) {
        console.log('✅ Search working! Sample results:');
        data.hits.forEach((hit, index) => {
          console.log(`${index + 1}. ${hit.hierarchy?.lvl1 || hit.title || 'No title'}`);
          console.log(`   URL: ${hit.url || 'No URL'}`);
        });
      } else {
        console.log('❌ No results found for "seo" - INDEX IS EMPTY OR STALE');
      }
    } else {
      console.log('❌ Search request failed');
      console.log('Error:', data);
    }
  } catch (error) {
    console.log('❌ Search request error');
    console.log('Error:', error.message);
  }
  console.log('');
}

// Test 3: Test specific content searches
async function testSpecificContent() {
  console.log('🎯 Test 3: Testing searches for specific content...');
  
  const searchTerms = [
    'content optimization',
    'technical seo',
    'keyword research',
    'core web vitals',
    'on page seo'
  ];
  
  for (const term of searchTerms) {
    try {
      const response = await fetch(`https://${config.appId}-dsn.algolia.net/1/indexes/${config.indexName}/search`, {
        method: 'POST',
        headers: {
          'X-Algolia-Application-Id': config.appId,
          'X-Algolia-API-Key': config.apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: term,
          hitsPerPage: 1
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log(`"${term}": ${data.nbHits} results ${data.nbHits > 0 ? '✅' : '❌'}`);
      }
    } catch (error) {
      console.log(`"${term}": Error - ${error.message} ❌`);
    }
  }
  console.log('');
}

// Test 4: Check index statistics
async function checkIndexStats() {
  console.log('📊 Test 4: Checking index statistics...');
  
  try {
    const response = await fetch(`https://${config.appId}-dsn.algolia.net/1/indexes/${config.indexName}`, {
      method: 'GET',
      headers: {
        'X-Algolia-Application-Id': config.appId,
        'X-Algolia-API-Key': config.apiKey
      }
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Index statistics retrieved:');
      console.log(`📝 Total entries: ${data.entries || 'Unknown'}`);
      console.log(`💾 Data size: ${data.dataSize || 'Unknown'} bytes`);
      console.log(`🔄 Last update: ${data.updatedAt || 'Unknown'}`);
      console.log(`📅 Created: ${data.createdAt || 'Unknown'}`);
    } else {
      console.log('❌ Failed to get index statistics');
      console.log('Error:', data);
    }
  } catch (error) {
    console.log('❌ Index statistics error');
    console.log('Error:', error.message);
  }
  console.log('');
}

// Test 5: Check current page URLs
function checkCurrentUrls() {
  console.log('🌍 Test 5: Checking current page context...');
  
  console.log(`Current URL: ${window.location.href}`);
  console.log(`Base URL should be: https://omar-corral.com/seo-resources/`);
  console.log(`Sitemap URL: https://omar-corral.com/seo-resources/sitemap.xml`);
  
  // Check if we can access the sitemap
  fetch('https://omar-corral.com/seo-resources/sitemap.xml')
    .then(response => {
      console.log(`🗺️  Sitemap accessible: ${response.ok ? '✅' : '❌'}`);
    })
    .catch(error => {
      console.log('🗺️  Sitemap check failed:', error.message);
    });
  
  console.log('');
}

// Run all diagnostic tests
async function runDiagnostics() {
  console.log('🚀 Running complete diagnostic suite...\n');
  
  checkCurrentUrls();
  await testConnectivity();
  await testSeoSearch();
  await testSpecificContent();
  await checkIndexStats();
  
  console.log('🎯 DIAGNOSTIC SUMMARY:');
  console.log('');
  console.log('If you see "❌ No results found for seo" above, then:');
  console.log('1. The Algolia index is stale and needs re-crawling');
  console.log('2. Email docsearch@algolia.com requesting a re-crawl');
  console.log('3. Include your site URL: https://omar-corral.com/seo-resources/');
  console.log('4. Mention you added significant new content');
  console.log('');
  console.log('For detailed instructions, see:');
  console.log('📚 SEARCH_TROUBLESHOOTING_GUIDE.md');
  console.log('');
  console.log('🔍 Diagnostic complete!');
}

// Auto-run diagnostics
runDiagnostics();
