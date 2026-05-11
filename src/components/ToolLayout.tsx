import React from 'react';
import { SEO } from './SEO';
import { Breadcrumbs } from './Breadcrumbs';
import { FAQSection } from './FAQSection';
import { ToolCard } from './ToolCard';
import { TOOLS, type Tool } from '@/src/data/tools';
import { motion } from 'motion/react';
import { CheckCircle2, ListChecks, Info, Lightbulb } from 'lucide-react';

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
  howToUse: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const ToolLayout: React.FC<ToolLayoutProps> = ({ 
  tool, 
  children, 
  howToUse, 
  benefits, 
  faqs 
}) => {
  const relatedTools = TOOLS.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <SEO 
        title={tool.name} 
        description={tool.description}
        canonical={tool.path}
      />
      
      <Breadcrumbs items={[
        { name: 'Tools', path: '/tools' },
        { name: tool.name, path: tool.path }
      ]} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-8 mt-12">
        {/* Main Tool Area */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">{tool.name}</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl">{tool.description}</p>
          </div>

          {/* Interactive Tool Component */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-gray-800">
            {children}
          </div>

          {/* Content Sections */}
          <div className="space-y-12 pb-20">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Usage Guide</h2>
              </div>
              <div className="grid gap-3">
                {howToUse.map((step, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
                      {i + 1}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Service Benefits</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-gray-800 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Ad Slot in Tool Page */}
          <div className="h-48 bg-slate-100 dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Sidebar Ad Slot</span>
          </div>

          <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold">Pro Tip</h3>
            </div>
            <p className="text-xs text-indigo-100 mb-6 leading-relaxed">
              Always double-check your inputs for calculations to get the most accurate results. 
              Our tools are updated regularly for current standards.
            </p>
            <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-semibold transition-all">
              Copy Tool Link
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Related Utilities</h3>
            <div className="grid gap-4">
              {relatedTools.map(t => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="bg-slate-50 dark:bg-gray-950 py-20 px-8">
        <FAQSection items={faqs} />
      </div>
    </div>
  );
};
