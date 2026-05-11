import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { CATEGORIES, TOOLS } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { SaaSBenefits } from '../components/SaaSBenefits';

export const Home = () => {
  const [search, setSearch] = React.useState('');
  const featuredTools = TOOLS.filter(t => !t.category || t.category === 'calculators').slice(0, 4);

  return (
    <div className="relative">
      <SEO title="Free Online Tools for Pakistan - PakToolsHub" description="The complete digital utility hub for students, freelancers, and citizens in Pakistan. Accuracy, speed, and privacy guaranteed." />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-slate-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-widest border border-indigo-100 dark:border-indigo-900/30"
          >
            <Sparkles className="w-3 h-3" />
            Pakistan's Premium Utility Hub
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none"
            >
              Precision Tools for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Digital Pakistan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
            >
              The most reliable utility hub for students, professionals, and citizens. 
              100% Free, Secure, and Built for High Performance.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative group"
          >
            <input 
              type="text"
              placeholder="Search 100+ professional tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-xl shadow-indigo-500/5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none pr-14 dark:bg-gray-900 dark:text-white text-base transition-all"
            />
            <div className="absolute right-5 top-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
              <Search className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Horizontal Scroll or Grid */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors border-y border-slate-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Workspace</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Browse by Category</h3>
            </div>
            <Link to="/tools" className="group text-sm font-bold text-indigo-600 flex items-center gap-2 hover:gap-3 transition-all">
              EXPLORE ALL TOOLS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/category/${cat.id}`} className="block group p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-gray-800 hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-gray-800 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cat.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{cat.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT Benefits Section */}
      <SaaSBenefits />

      {/* Popular Tools */}
      <section className="py-24 bg-slate-50 dark:bg-gray-900/30 transition-colors">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">The Registry</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Most Popular Tools</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} featured={i < 2} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/tools" className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 dark:bg-indigo-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-slate-900/20">
              View Entire Collection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final SEO CTA */}
      <section className="py-24 bg-indigo-600 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Ready to streamline your <br/>
            digital workflow?
          </h2>
          <p className="text-indigo-100 text-lg font-medium opacity-90 max-w-xl mx-auto">
            Join thousands of Pakistani students and professionals using PakToolsHub to work smarter every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/tools" className="px-10 py-4 bg-white text-indigo-600 font-black rounded-2xl hover:shadow-2xl transition-all uppercase tracking-wider text-xs">
              Go to Tools
            </Link>
            <Link to="/contact" className="px-10 py-4 bg-indigo-500 text-white font-black rounded-2xl hover:bg-indigo-400 transition-all uppercase tracking-wider text-xs border border-white/20">
              Request a Tool
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
