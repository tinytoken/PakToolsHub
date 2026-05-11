import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Search, Zap, Shield, Sparkles, Wrench } from 'lucide-react';
import { SEO } from '../components/SEO';
import { CATEGORIES, TOOLS } from '../data/tools';
import { ToolCard } from '../components/ToolCard';

export const Home = () => {
  const [search, setSearch] = React.useState('');
  const featuredTools = TOOLS.slice(0, 6);

  return (
    <div className="relative">
      <SEO title="Home" />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-widest border border-indigo-100 dark:border-indigo-900/30"
          >
            <Sparkles className="w-3 h-3" />
            Pakistan's #1 Utility Hub
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
          >
            Free Online Tools for <span className="text-indigo-600">Pakistan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            The complete utility hub for students, professionals, and citizens. 
            SEO optimized, mobile-first, and 100% free to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative group"
          >
            <input 
              type="text"
              placeholder="Search for Age Calculator, Zakat, PDF tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none pr-12 dark:bg-gray-900 dark:text-white text-sm"
            />
            <div className="absolute right-4 top-3 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
              <Search className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Ad Slot Placeholder from Design */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-20 bg-indigo-50/50 dark:bg-indigo-900/10 border border-dashed border-indigo-200 dark:border-indigo-900/30 rounded-xl flex items-center justify-center max-w-4xl mx-auto"
          >
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">Sponsorship / Adsense Slot</span>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white dark:bg-gray-950 transition-colors border-y border-slate-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Tool categories</h2>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Explore our workspace</h3>
            </div>
            <Link to="/tools" className="text-xs font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/category/${cat.id}`} className="block group p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-900 transition-all hover:shadow-lg hover:shadow-indigo-500/5">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 transition-colors">{cat.name}</h3>
                    <div className="p-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-100 dark:border-gray-800 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{cat.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="py-16 bg-slate-50 dark:bg-gray-900/20 transition-colors">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Most used utilities</h2>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Daily Essentials</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredTools.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 shadow-sm">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold mb-2 dark:text-white">Lightning Fast</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Calculations and processing happen in real-time, right in your browser.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 shadow-sm">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold mb-2 dark:text-white">Privacy First</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Your data never leaves your device. We don't store your sensitive inputs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 shadow-sm">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold mb-2 dark:text-white">Updated Daily</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Tax laws, gold rates, and university standards are updated regularly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
