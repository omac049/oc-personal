import { NextResponse } from 'next/server';
import { seoData } from '@/data/seo';

export const dynamic = 'force-static';

export async function GET() {
  const manifest = {
    name: seoData.website.name,
    short_name: "Omar Corral SEO",
    description: seoData.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: seoData.technical.backgroundColor,
    theme_color: seoData.technical.themeColor,
    orientation: "portrait-primary",
    categories: ["business", "productivity", "marketing"],
    lang: seoData.website.language,
    dir: "ltr",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any"
      },
      {
        src: "/android-chrome-512x512.png", 
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable any"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16", 
        type: "image/png",
        purpose: "any"
      }
    ],
    screenshots: [
      {
        src: "/screenshot-desktop.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Omar Corral Portfolio Desktop View"
      },
      {
        src: "/screenshot-mobile.png",
        sizes: "390x844",
        type: "image/png", 
        form_factor: "narrow",
        label: "Omar Corral Portfolio Mobile View"
      }
    ],
    related_applications: [
      {
        platform: "web",
        url: seoData.website.url
      }
    ],
    prefer_related_applications: false,
    scope: "/",
    id: seoData.website.url,
    launch_handler: {
      client_mode: ["navigate-existing", "auto"]
    },
    edge_side_panel: {
      preferred_width: 400
    },
    handle_links: "preferred",
    iarc_rating_id: "",
    shortcuts: [
      {
        name: "Contact Omar",
        short_name: "Contact",
        description: "Get in touch for SEO consulting",
        url: "/#contact",
        icons: [
          {
            src: "/icon-contact.png",
            sizes: "96x96",
            type: "image/png"
          }
        ]
      },
      {
        name: "View Skills",
        short_name: "Skills", 
        description: "Explore SEO and AI expertise",
        url: "/#skills",
        icons: [
          {
            src: "/icon-skills.png",
            sizes: "96x96",
            type: "image/png"
          }
        ]
      }
    ]
  };

  return NextResponse.json(manifest, {
    status: 200,
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
    },
  });
}
