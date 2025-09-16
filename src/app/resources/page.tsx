import { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faFileAlt, 
  faTools, 
  faGraduationCap,
  faDownload,
  faExternalLinkAlt,
  faBookOpen,
  faRocket,
  faCode
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Free SEO Resources for Beginners | Omar Corral - SEO Expert',
  description: 'Comprehensive collection of free SEO resources, guides, tools, and beginner tutorials. Learn search engine optimization from basics to advanced AI-enhanced strategies.',
  keywords: [
    'free SEO resources',
    'SEO for beginners',
    'SEO tutorials',
    'search engine optimization guide',
    'SEO tools',
    'SEO checklist',
    'beginner SEO',
    'SEO learning',
    'Phoenix SEO expert',
    'AI SEO resources'
  ].join(', '),
  openGraph: {
    title: 'Free SEO Resources for Beginners | Omar Corral',
    description: 'Comprehensive collection of free SEO resources, guides, and tutorials for beginners.',
    type: 'website',
    url: 'https://omar-corral.com/resources',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SEO Resources for Beginners | Omar Corral',
    description: 'Comprehensive collection of free SEO resources, guides, and tutorials for beginners.',
  },
  alternates: {
    canonical: 'https://omar-corral.com/resources',
  },
};

const seoResources = {
  beginner: [
    {
      title: "SEO Fundamentals: Complete Beginner&apos;s Guide",
      description: "Start your SEO journey with this comprehensive guide covering keywords, on-page optimization, and basic technical SEO.",
      icon: faGraduationCap,
      type: "Guide",
      difficulty: "Beginner",
      readTime: "15 min",
      topics: ["Keywords", "On-Page SEO", "Meta Tags", "Content Optimization"]
    },
    {
      title: "Keyword Research for Beginners",
      description: "Learn how to find the right keywords for your website using free tools and proven strategies.",
      icon: faSearch,
      type: "Tutorial",
      difficulty: "Beginner",
      readTime: "10 min",
      topics: ["Keyword Research", "Search Intent", "Long-tail Keywords", "Competition Analysis"]
    },
    {
      title: "On-Page SEO Checklist",
      description: "Step-by-step checklist to optimize every page on your website for search engines.",
      icon: faFileAlt,
      type: "Checklist",
      difficulty: "Beginner",
      readTime: "5 min",
      topics: ["Title Tags", "Meta Descriptions", "Headers", "Internal Linking"]
    },
    {
      title: "Technical SEO Basics",
      description: "Understanding website speed, mobile-friendliness, and crawlability for better rankings.",
      icon: faCode,
      type: "Guide",
      difficulty: "Intermediate",
      readTime: "20 min",
      topics: ["Site Speed", "Mobile SEO", "XML Sitemaps", "Robots.txt"]
    }
  ],
  tools: [
    {
      name: "Google Search Console",
      description: "Free tool from Google to monitor your website's search performance and fix issues.",
      url: "https://search.google.com/search-console",
      category: "Analytics",
      price: "Free",
      features: ["Performance Tracking", "Index Coverage", "Mobile Usability", "Core Web Vitals"]
    },
    {
      name: "Google Analytics 4",
      description: "Track website traffic, user behavior, and conversion metrics.",
      url: "https://analytics.google.com",
      category: "Analytics",
      price: "Free",
      features: ["Traffic Analysis", "User Behavior", "Goal Tracking", "E-commerce Tracking"]
    },
    {
      name: "Google Keyword Planner",
      description: "Research keywords and get search volume data directly from Google.",
      url: "https://ads.google.com/home/tools/keyword-planner/",
      category: "Keyword Research",
      price: "Free",
      features: ["Search Volume", "Keyword Ideas", "Competition Data", "Bid Estimates"]
    },
    {
      name: "PageSpeed Insights",
      description: "Analyze your website's loading speed and get optimization recommendations.",
      url: "https://pagespeed.web.dev/",
      category: "Performance",
      price: "Free",
      features: ["Core Web Vitals", "Performance Score", "Optimization Tips", "Mobile & Desktop"]
    },
    {
      name: "Ubersuggest",
      description: "Free keyword research tool with competitive analysis features.",
      url: "https://neilpatel.com/ubersuggest/",
      category: "Keyword Research",
      price: "Freemium",
      features: ["Keyword Ideas", "Content Ideas", "Backlink Data", "Site Audit"]
    },
    {
      name: "Answer The Public",
      description: "Discover what questions people are asking about your topics.",
      url: "https://answerthepublic.com/",
      category: "Content Research",
      price: "Freemium",
      features: ["Question Research", "Content Ideas", "Search Insights", "Trend Data"]
    }
  ],
  checklists: [
    {
      title: "New Website SEO Launch Checklist",
      items: [
        "Set up Google Search Console and Analytics",
        "Create and submit XML sitemap",
        "Optimize title tags and meta descriptions",
        "Set up proper URL structure",
        "Ensure mobile-friendly design",
        "Optimize page loading speed",
        "Create robots.txt file",
        "Set up local SEO (if applicable)",
        "Install SSL certificate",
        "Create quality, original content"
      ]
    },
    {
      title: "Monthly SEO Maintenance Checklist",
      items: [
        "Review Google Search Console for errors",
        "Check website speed and Core Web Vitals",
        "Update and optimize existing content",
        "Monitor keyword rankings",
        "Analyze competitor activities",
        "Build quality backlinks",
        "Update internal linking structure",
        "Review and update meta tags",
        "Check for broken links",
        "Monitor local SEO performance"
      ]
    }
  ]
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <FontAwesomeIcon icon={faBookOpen} className="text-6xl text-blue-400 mb-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Free SEO Resources
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Everything you need to learn SEO from scratch. Comprehensive guides, tools, and checklists to boost your website&apos;s search rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#beginner-guides"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Learning SEO
            </Link>
            <Link 
              href="#tools"
              className="border border-slate-400 text-slate-300 hover:text-white hover:border-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Browse Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Beginner Guides Section */}
      <section id="beginner-guides" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-green-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-light mb-4">SEO Learning Guides</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Step-by-step guides to master SEO fundamentals and advanced techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoResources.beginner.map((guide, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-750 transition-all duration-300 border border-slate-700 hover:border-blue-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <FontAwesomeIcon icon={guide.icon} className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">{guide.type}</span>
                      <span className="bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full">{guide.difficulty}</span>
                      <span className="text-slate-400 text-xs">{guide.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{guide.title}</h3>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">{guide.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faBookOpen} />
                  Read Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tools Section */}
      <section id="tools" className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FontAwesomeIcon icon={faTools} className="text-4xl text-purple-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-light mb-4">Essential SEO Tools</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Free and premium tools to analyze, optimize, and track your SEO performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoResources.tools.map((tool, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-6 hover:bg-slate-850 transition-all duration-300 border border-slate-700 hover:border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      tool.price === 'Free' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                    }`}>
                      {tool.price}
                    </span>
                    <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-400 text-xs flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Visit Tool
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Checklists Section */}
      <section id="checklists" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FontAwesomeIcon icon={faFileAlt} className="text-4xl text-amber-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-light mb-4">SEO Checklists</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Actionable checklists to ensure you never miss important SEO tasks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seoResources.checklists.map((checklist, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon icon={faFileAlt} className="text-amber-400 text-2xl" />
                  <h3 className="text-xl font-semibold text-white">{checklist.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {checklist.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 p-3 bg-slate-900 rounded-lg hover:bg-slate-750 transition-all duration-200">
                      <input 
                        type="checkbox" 
                        className="mt-1 w-4 h-4 text-amber-400 bg-slate-700 border-slate-600 rounded focus:ring-amber-400 focus:ring-2"
                      />
                      <label className="text-slate-300 text-sm leading-relaxed cursor-pointer flex-1">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faDownload} />
                  Download Checklist
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <FontAwesomeIcon icon={faRocket} className="text-5xl text-white mb-6" />
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Take Your SEO to the Next Level?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Get personalized SEO guidance and AI-enhanced strategies tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              View SEO Services
            </Link>
            <Link 
              href="/#contact"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumbs for SEO */}
      <nav className="sr-only" aria-label="Breadcrumb">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">SEO Resources</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>
    </div>
  );
}
