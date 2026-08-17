import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_SEO_DATA, SITE_CONFIG, generateOrganizationSchema, PageMeta } from '../data/seoData';

interface SEOHeadProps {
  customMeta?: Partial<PageMeta>;
  structuredData?: Record<string, any>;
  breadcrumbs?: { name: string; url: string }[];
}

export default function SEOHead({ customMeta, structuredData, breadcrumbs }: SEOHeadProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const defaultMeta: PageMeta = PAGE_SEO_DATA[currentPath] || {
    title: `${SITE_CONFIG.siteName} | Intellectual Property & Patent Consultants`,
    tagline: 'Defending Indian Innovation with Fast-Track Patent Grants',
    description: PAGE_SEO_DATA['/'].description,
    keywords: PAGE_SEO_DATA['/'].keywords,
    canonicalUrl: `${SITE_CONFIG.siteUrl}${currentPath}`,
    ogType: 'website'
  };

  const meta = {
    ...defaultMeta,
    ...customMeta,
  };

  useEffect(() => {
    // 1. Update Document Title
    document.title = meta.title;

    // Helper to safely set or create a meta tag
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'keywords', meta.keywords.join(', '));
    setMetaTag('name', 'author', meta.author || SITE_CONFIG.officialLegalName);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'geo.region', 'IN-TG');
    setMetaTag('name', 'geo.placename', 'Hyderabad, India');
    setMetaTag('name', 'geo.position', '17.5164213;78.3693247');
    setMetaTag('name', 'ICBM', '17.5164213, 78.3693247');

    // 3. OpenGraph Social Tags
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', meta.canonicalUrl);
    setMetaTag('property', 'og:type', meta.ogType || 'website');
    setMetaTag('property', 'og:site_name', SITE_CONFIG.siteName);
    setMetaTag('property', 'og:image', SITE_CONFIG.defaultOgImage);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', SITE_CONFIG.defaultOgImage);
    setMetaTag('name', 'twitter:site', '@BharatIPDefence');

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', meta.canonicalUrl);

    // 6. JSON-LD Structured Data Schema Injection
    const schemaId = 'bharat-ip-structured-data';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemasToInject: any[] = [
      generateOrganizationSchema(),
      ...(structuredData ? [structuredData] : [])
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          'position': i + 1,
          'name': b.name,
          'item': b.url
        }))
      });
    }

    scriptTag.textContent = JSON.stringify(schemasToInject);
  }, [meta.title, meta.description, meta.canonicalUrl, meta.keywords, meta.ogType, structuredData, breadcrumbs]);

  return null;
}
