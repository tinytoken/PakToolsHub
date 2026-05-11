import React from 'react';
import { useParams } from 'react-router-dom';
import { Search, Zap, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';
import { TOOLS, CATEGORIES } from '../data/tools';
import { CATEGORY_SEO } from '../data/seoContent';
import { ToolCard } from '../components/ToolCard';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ToolsList = () => {
  const { categoryId } = useParams();
  const [search, setSearch] = React.useState('');
  
  const category = categoryId ? CATEGORIES.find(c => c.id === categoryId) : null;
  const seo = categoryId ? CATEGORY_SEO[categoryId] : null;

  const tools = TOOLS.filter(tool => {
    const matchesCategory = categoryId ? tool.category === categoryId : true;
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || 
                         tool.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-8">
      <SEO 
        title={seo?.title || (category ? `${category.name} - PakToolsHub` : "All Online Utility Tools")} 
        description={seo?.metaDescription || category?.description || "Explore our collection of free, professional online tools for calculations, students, and digital utilities."}
      />
      
      <Breadcrumbs items={[
        { name: 'Tools', path: '/tools' },
        ...(category ? [{ name: category.name, path: `/category/${category.id}` }] : [])
      ]} />

      <div className="px-8 mt-12 space-y-12">
        {/* Category Header */}
        <div className="max-w-4xl space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {seo?.h1 || category?.name || "All Digital Utilities"}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              {seo?.intro || category?.description || "High-performance, secure, and privacy-focused online tools designed for the modern Pakistani workforce and students."}
            </p>
          </div>

          {/* NLP Tags for Topical Authority */}
          {seo?.nlpKeywords && (
            <div className="flex flex-wrap gap-2 pt-2">
              {seo.nlpKeywords.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="max-w-xl relative group">
          <input 
            type="text"
            placeholder={`Search ${category ? category.name : 'all'} tools...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none pr-12 dark:bg-gray-900 dark:text-white text-sm"
          />
          <div className="absolute right-4 top-3 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/* Tools Grid */}
        <div>
          {tools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tools.map((tool, i) => (
                <ToolCard key={tool.id} tool={tool} featured={i < 2} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No tools found</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Try using different keywords or explore other categories.</p>
            </div>
          )}
        </div>

        {/* SEO FAQ Section */}
        {seo?.faqs && (
          <div className="pt-20 border-t border-slate-200 dark:border-gray-800">
            <div className="max-w-3xl">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {seo.faqs.map((faq, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{faq.question}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits Footnote */}
        <div className="py-12 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-gray-800 px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Privacy & Performance Verified</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg">
              Every tool in the {category?.name || 'PakToolsHub'} category is engineered for browser-side processing, ensuring your sensitive data never touches our servers.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700">
              <Zap className="w-3 h-3 text-indigo-600" /> INSTANT
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700">
              <Shield className="w-3 h-3 text-indigo-600" /> SECURE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
