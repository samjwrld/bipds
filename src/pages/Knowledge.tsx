import React from 'react';
import { Search, ArrowRight, BookOpen, FileText, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Knowledge() {
  const articles = [
    {
      category: "Trademarks",
      title: "What is a Trademark and Why Do You Need One?",
      excerpt: "A trademark is more than just a logo; it's your brand's identity. Learn how registering a trademark protects your business reputation and prevents copycats.",
      readTime: "5 min read",
      icon: Search
    },
    {
      category: "Patents",
      title: "Patent vs. Copyright: Understanding the Difference",
      excerpt: "Confused about whether to file a patent or a copyright? We break down the key differences, what each protects, and which one is right for your innovation.",
      readTime: "7 min read",
      icon: FileText
    },
    {
      category: "Startups",
      title: "5 Common Legal Mistakes Startups Make with IP",
      excerpt: "From failing to sign NDAs to delaying patent filings, discover the most common IP pitfalls that can cost startups their competitive edge.",
      readTime: "6 min read",
      icon: Scale
    },
    {
      category: "Process",
      title: "The Step-by-Step Guide to Filing a Patent in India",
      excerpt: "Navigating the Indian Patent Office can be complex. This guide simplifies the process, explaining each stage from application to grant.",
      readTime: "10 min read",
      icon: BookOpen
    },
    {
      category: "Copyright",
      title: "Protecting Software Code: Copyright or Patent?",
      excerpt: "Software protection is a grey area. Learn when to use copyright for your code and when a patent might be the better option for your algorithm.",
      readTime: "8 min read",
      icon: FileText
    },
    {
      category: "Enforcement",
      title: "What to Do If Someone Infringes Your IP Rights",
      excerpt: "Discover the legal steps you can take if you find someone using your patented invention or trademarked brand without permission.",
      readTime: "6 min read",
      icon: Scale
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Knowledge <span className="text-red-600 dark:text-red-500">Center</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Insights, guides, and resources to help you navigate the world of Intellectual Property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider bg-red-50 dark:bg-red-950/60 px-3 py-1 rounded-full">{article.category}</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{article.readTime}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{article.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow">{article.excerpt}</p>
              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm font-medium">
                  <article.icon className="w-4 h-4 mr-2" />
                  Read Article
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Have a specific question?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Our experts are here to help. Reach out to us for personalized advice on your IP matters.
          </p>
          <Link to="/consultation" className="bg-slate-900 dark:bg-red-600 hover:bg-slate-800 dark:hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl inline-flex items-center">
            Ask an Expert <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
