import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  Sparkles, 
  Filter, 
  X, 
  SlidersHorizontal,
  Rocket, 
  ShieldCheck, 
  Cpu, 
  GraduationCap, 
  Scale, 
  FileCode,
  CheckCircle2
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { BLOG_POSTS, BlogPost } from '../data/blogsData';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO_DATA } from '../data/seoData';

// Category Definitions with Canonical Mapping and Icons
const CATEGORIES = [
  { id: 'All', label: 'All Articles', icon: BookOpen },
  { id: 'Patent Law', label: 'Patents', icon: Scale },
  { id: 'Startup Concessions', label: 'Startups & VC', icon: Rocket },
  { id: 'Trademark Strategy', label: 'Trademarks', icon: ShieldCheck },
  { id: 'Deep Tech & AI', label: 'Deep Tech & AI', icon: Cpu },
  { id: 'Academic IPR & NIRF', label: 'Colleges & NIRF', icon: GraduationCap },
  { id: 'Copyright & Design', label: 'Copyright & Design', icon: FileCode }
];

export default function BlogList() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read category and tag from URL params or default
  const categoryParam = searchParams.get('category') || 'All';
  const tagParam = searchParams.get('tag') || '';
  const searchParam = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedTag, setSelectedTag] = useState<string>(tagParam);
  const [searchQuery, setSearchQuery] = useState<string>(searchParam);
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'readTime'>('latest');

  // Keep state in sync with URL parameters
  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    const tag = searchParams.get('tag') || '';
    const q = searchParams.get('q') || '';
    setSelectedCategory(cat);
    setSelectedTag(tag);
    setSearchQuery(q);
  }, [searchParams]);

  // Update URL params helper
  const updateUrlParams = (cat: string, tag: string, query: string) => {
    const params: Record<string, string> = {};
    if (cat && cat !== 'All') params.category = cat;
    if (tag) params.tag = tag;
    if (query.trim()) params.q = query.trim();
    setSearchParams(params);
  };

  // Handle Category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    updateUrlParams(category, selectedTag, searchQuery);
  };

  // Handle Tag selection
  const handleTagSelect = (tag: string) => {
    const newTag = selectedTag === tag ? '' : tag;
    setSelectedTag(newTag);
    updateUrlParams(selectedCategory, newTag, searchQuery);
  };

  // Handle Search Input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    updateUrlParams(selectedCategory, selectedTag, query);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedTag('');
    setSearchQuery('');
    setSearchParams({});
  };

  // Curated Popular Tag Cloud with clean display names
  const popularTags = useMemo(() => {
    const tagSet = new Set<string>();
    BLOG_POSTS.forEach(post => {
      post.keywords.forEach(kw => {
        // Normalize or pick key search tags
        tagSet.add(kw);
      });
    });
    return [
      'DPIIT patent fee rebate 80 percent',
      'software patent Section 3k India',
      'form 18A expedited patent examination',
      'NICE classification trademark class 9 35 42',
      'NIRF ranking research patent score',
      'AICTE KAPILA patent funding',
      'PCT international patent filing India',
      'VC due diligence IP checklist India',
      'copyright vs patent software code',
      'provisional specification form 2'
    ];
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: BLOG_POSTS.length };
    BLOG_POSTS.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & Sort Posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      // 1. Category filter
      const matchesCategory = 
        selectedCategory === 'All' || 
        post.category === selectedCategory;

      // 2. Tag filter
      const matchesTag = 
        !selectedTag || 
        post.keywords.some(k => k.toLowerCase().includes(selectedTag.toLowerCase())) ||
        post.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
        post.category.toLowerCase().includes(selectedTag.toLowerCase());

      // 3. Search query filter
      const matchesSearch = 
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesTag && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      } else if (sortBy === 'readTime') {
        const timeA = parseInt(a.readTime) || 0;
        const timeB = parseInt(b.readTime) || 0;
        return timeA - timeB;
      }
      return 0;
    });
  }, [selectedCategory, selectedTag, searchQuery, sortBy]);

  const featuredPost = BLOG_POSTS[0];
  const isFilteringActive = selectedCategory !== 'All' || selectedTag !== '' || searchQuery.trim() !== '';

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-20 transition-colors duration-300">
      <SEOHead 
        customMeta={PAGE_SEO_DATA['/blog']}
        breadcrumbs={[
          { name: 'Home', url: 'https://ipdefensesolutions.com/' },
          { name: 'IP Knowledge Blog', url: 'https://ipdefensesolutions.com/blog' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-200 dark:border-red-900/50 shadow-sm">
            <BookOpen className="w-4 h-4 text-red-600" />
            <span>IP Thought Leadership, Case Law &amp; Strategic Guides</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            IP Defence <span className="text-red-600 dark:text-red-500">Insights &amp; Articles</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical prosecution tactics, DPIIT subsidies, Section 3(k) software eligibility, and university NIRF patenting frameworks.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CATEGORY & TAG FILTER CONTROLS */}
        {/* ========================================================================= */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-12">
          {/* Top Bar: Search & Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search articles by keyword, section, or topic..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    updateUrlParams(selectedCategory, selectedTag, '');
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort & Count Controls */}
            <div className="flex items-center justify-between w-full md:w-auto gap-4">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Showing <strong className="text-slate-900 dark:text-white">{filteredPosts.length}</strong> of {BLOG_POSTS.length} articles
              </span>

              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-red-500 cursor-pointer"
                >
                  <option value="latest">Sort by Latest</option>
                  <option value="oldest">Sort by Oldest</option>
                  <option value="readTime">Fastest Read</option>
                </select>
              </div>
            </div>
          </div>

          {/* Primary Category Filter Tabs with dynamic counts */}
          <div className="mb-6">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Filter By Domain / Category:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = selectedCategory === cat.id;
                const count = categoryCounts[cat.id] ?? 0;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/25 ring-2 ring-red-600/30'
                        : 'bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900/60'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                    <span>{cat.label}</span>
                    <span 
                      className={`ml-1.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Popular Tag Cloud Filter */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center">
                <Tag className="w-3 h-3 mr-1 text-red-500" /> Filter by High-Intent Keywords &amp; Tags:
              </span>
              {isFilteringActive && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline flex items-center cursor-pointer"
                >
                  <X className="w-3 h-3 mr-1" /> Clear All Filters
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {popularTags.map((tag, idx) => {
                const isSelected = selectedTag.toLowerCase() === tag.toLowerCase();
                return (
                  <button
                    key={idx}
                    onClick={() => handleTagSelect(tag)}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-medium transition-all duration-150 cursor-pointer flex items-center space-x-1 ${
                      isSelected
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400'
                    }`}
                  >
                    <span>#{tag}</span>
                    {isSelected && <X className="w-3 h-3 ml-1 opacity-75" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Chips (if any) */}
          {isFilteringActive && (
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400">Active Filters:</span>
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-900">
                  Category: {selectedCategory}
                  <button 
                    onClick={() => handleCategorySelect('All')} 
                    className="ml-1.5 hover:text-red-800 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold">
                  Tag: #{selectedTag}
                  <button 
                    onClick={() => handleTagSelect(selectedTag)} 
                    className="ml-1.5 hover:opacity-75 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-200 dark:border-blue-900">
                  Search: "{searchQuery}"
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      updateUrlParams(selectedCategory, selectedTag, '');
                    }} 
                    className="ml-1.5 hover:text-blue-800 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* FEATURED POST BANNER (Shown when viewing all with no active filters) */}
        {/* ========================================================================= */}
        {!isFilteringActive && featuredPost && (
          <div className="mb-16">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider flex items-center shadow-sm">
                        <Sparkles className="w-3 h-3 mr-1" /> Featured Analysis
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        {featuredPost.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-tight mb-4">
                      {featuredPost.title}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center space-x-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                      />
                      <div>
                        <span className="block text-xs font-bold text-slate-900 dark:text-white">
                          {featuredPost.author.name}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {featuredPost.publishedDate} • {featuredPost.readTime}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center text-xs font-bold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ========================================================================= */}
        {/* BLOG POST CARDS GRID */}
        {/* ========================================================================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-red-400/40 dark:hover:border-red-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Category Pill */}
                <div className="relative h-48 overflow-hidden">
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="absolute top-4 left-4">
                    <button
                      onClick={() => handleCategorySelect(post.category)}
                      className="px-3 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-red-600 dark:text-red-400 text-xs font-bold rounded-full shadow-sm hover:scale-105 transition-transform cursor-pointer"
                    >
                      {post.category}
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {/* Date & Read Time */}
                  <div className="flex items-center space-x-3 text-xs text-slate-400 dark:text-slate-500 mb-3 font-medium">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" /> {post.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug mb-3 line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Interactive Keyword Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {post.keywords.slice(0, 3).map((kw, kidx) => {
                      const isTagActive = selectedTag.toLowerCase() === kw.toLowerCase();
                      return (
                        <button
                          key={kidx}
                          onClick={() => handleTagSelect(kw)}
                          className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-colors cursor-pointer ${
                            isTagActive
                              ? 'bg-red-600 text-white font-bold'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400'
                          }`}
                        >
                          #{kw}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  By {post.author.name}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs font-bold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform"
                >
                  Read Full <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Articles Found</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              We couldn't find any articles matching your active filters. Try clearing tags or selecting a different category.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Subscribe / Free Consultation Callout */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
          <div>
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-2">
              Stay Ahead in Indian IP Jurisprudence
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              Have an Invention or Trademark You Need to Protect?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Get an instant, confidential patentability assessment with our registered Indian patent agents under strict non-disclosure agreement (NDA).
            </p>
          </div>
          <Link
            to="/consultation"
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-red-600/30 whitespace-nowrap inline-flex items-center"
          >
            Book Free Novelty Search <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
