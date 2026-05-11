import React from 'react';
import { Search } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from '../data/blogs';
import { BlogCard } from '../components/BlogCard';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const BlogList = () => {
  const [search, setSearch] = React.useState('');

  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase()) || 
    post.metaDescription.toLowerCase().includes(search.toLowerCase()) ||
    post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-8">
      <SEO 
        title="PakToolsHub Blog - Expert Guides & Digital Utility Tips" 
        description="Master your digital workflow with expert guides on SEO, student utilities, financial planning in Pakistan, and professional image optimization." 
      />

      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />

      <div className="px-8 mt-12 space-y-12">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
            Digital Wisdom for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Better Productivity</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
            Explore our library of expert-written guides designed to help you navigate the 
            complexity of modern academics, finance, and SEO.
          </p>
        </div>

        <div className="max-w-xl relative group">
          <input 
            type="text"
            placeholder="Search guides and tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none pr-12 dark:bg-gray-900 dark:text-white text-sm"
          />
          <div className="absolute right-4 top-3 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
            <Search className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}

          {filteredPosts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-xl font-bold dark:text-white">No guides found matching your search.</h3>
              <p className="text-slate-500">Try using broader keywords or browse all categories.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
