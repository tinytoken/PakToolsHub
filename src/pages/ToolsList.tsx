import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TOOLS } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { SEO } from '../components/SEO';

export const ToolsList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO title="All Tools" description="Browse our complete list of free online tools for Pakistan." />
      <Breadcrumbs items={[{ name: 'Tools', path: '/tools' }]} />
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold dark:text-white mb-4">All Professional Tools</h1>
        <p className="text-gray-600 dark:text-gray-400">The most comprehensive collection of utilities for Pakistani users.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TOOLS.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};
