import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  CheckCircle2, 
  Tag, 
  BookOpen, 
  ArrowRight, 
  ShieldCheck, 
  Copy, 
  Check, 
  Linkedin, 
  Twitter, 
  Facebook 
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogsData';
import SEOHead from '../components/SEOHead';
import { SITE_CONFIG } from '../data/seoData';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentUrl = `${SITE_CONFIG.siteUrl}/blog/${post.slug}`;

  const relatedPosts = BLOG_POSTS
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_CONFIG.siteUrl}/` },
    { name: 'Blog', url: `${SITE_CONFIG.siteUrl}/blog` },
    { name: post.title, url: currentUrl }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'image': post.featuredImage,
    'datePublished': post.publishedDate,
    'dateModified': post.publishedDate,
    'author': {
      '@type': 'Person',
      'name': post.author.name,
      'jobTitle': post.author.role
    },
    'publisher': {
      '@type': 'Organization',
      'name': SITE_CONFIG.siteName,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_CONFIG.siteUrl}/logo.svg`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    'keywords': post.keywords.join(', ')
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-24 transition-colors duration-300">
      <SEOHead
        customMeta={{
          title: `${post.title} | Bharat IP Defence`,
          tagline: post.tagline,
          description: post.excerpt,
          keywords: post.keywords,
          canonicalUrl: currentUrl,
          ogType: 'article',
          publishedTime: post.publishedDate,
          author: post.author.name
        }}
        breadcrumbs={breadcrumbs}
        structuredData={articleSchema}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to All Articles
          </Link>
        </div>

        {/* Article Hero / Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Calendar className="w-3.5 h-3.5 mr-1" /> {post.publishedDate}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5 mr-1" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-red-500 pl-4 mb-8">
            "{post.tagline}"
          </p>

          {/* Author Card & Share Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
              />
              <div>
                <span className="block text-sm font-bold text-slate-900 dark:text-white">
                  {post.author.name}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {post.author.role}
                </span>
              </div>
            </div>

            {/* Social Share Controls */}
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
                Share:
              </span>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 text-xs font-medium flex items-center transition-colors shadow-sm"
                title="Copy Article Link"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 text-xs font-medium transition-colors shadow-sm"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-500 text-xs font-medium transition-colors shadow-sm"
                title="Share on Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 h-80 sm:h-96">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Body */}
          <div className="lg:col-span-8">
            {/* Key Takeaways Callout Box */}
            <div className="bg-red-50/70 dark:bg-red-950/40 rounded-3xl p-6 sm:p-8 border border-red-200 dark:border-red-900/50 mb-10 shadow-sm">
              <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Executive Summary &amp; Key Takeaways</span>
              </div>
              <ul className="space-y-3">
                {post.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-12">
              {post.content.map((sec, sIdx) => (
                <div key={sIdx} id={sec.sectionId} className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                    {sec.heading}
                  </h2>
                  <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="whitespace-pre-line">
                        {p}
                      </p>
                    ))}
                  </div>

                  {sec.callout && (
                    <div className={`mt-6 p-6 rounded-2xl border ${
                      sec.callout.type === 'warning'
                        ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200'
                        : sec.callout.type === 'stat'
                        ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200'
                        : 'bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-900 text-green-900 dark:text-green-200'
                    }`}>
                      <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">
                        {sec.callout.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                        {sec.callout.message}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Keyword Tags Cloud */}
            <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3">
                Indexed Keywords &amp; Topics:
              </span>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((kw, kIdx) => (
                  <span
                    key={kIdx}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium"
                  >
                    <Tag className="w-3 h-3 text-red-500 mr-1" />
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Biography Box */}
            <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-red-500 flex-shrink-0"
              />
              <div>
                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest block mb-1">
                  Written By Senior IP Counsel
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {post.author.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  {post.author.role} • Registered Indian Patent Agent &amp; Trademark Advocate
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Specializing in drafting computer-implemented inventions, defending Section 3(k) objections at the Delhi &amp; Chennai Patent Offices, and managing international PCT portfolios.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar: Table of Contents & Consultation Callout */}
          <div className="lg:col-span-4 space-y-8">
            {/* Sticky Table of Contents */}
            <div className="sticky top-28 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <BookOpen className="w-4 h-4 text-red-600" />
                <span>Table of Contents</span>
              </div>
              <nav className="space-y-2.5">
                {post.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 leading-relaxed font-medium transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              {/* Quick Consultation CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Have Questions on This Topic?
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Talk directly with our patent attorneys for a confidential case assessment.
                </p>
                <Link
                  to="/consultation"
                  className="w-full bg-red-600 hover:bg-red-500 text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center shadow-md"
                >
                  Book Free 1-on-1 Session <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="max-w-5xl mx-auto mt-20 pt-16 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Related IP Knowledge Articles
            </h3>
            <Link
              to="/blog"
              className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline inline-flex items-center"
            >
              View All Articles <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all"
              >
                <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block mb-2">
                  {rel.category}
                </span>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
                  {rel.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
