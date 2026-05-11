import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { motion } from 'motion/react';

interface LegalPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  lastUpdated?: string;
  breadcrumbName: string;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ 
  title, 
  description, 
  children, 
  lastUpdated,
  breadcrumbName
}) => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <SEO 
        title={title} 
        description={description}
      />
      
      <Breadcrumbs items={[
        { name: breadcrumbName, path: '#' }
      ]} />

      <div className="max-w-4xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="border-b border-slate-200 dark:border-gray-800 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>PakToolsHub Official</span>
              {lastUpdated && (
                <>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span>Last Updated: {lastUpdated}</span>
                </>
              )}
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none 
            prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed
            prose-li:text-slate-600 dark:prose-li:text-slate-400
            prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 dark:prose-strong:text-white">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
