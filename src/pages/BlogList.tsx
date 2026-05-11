import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BLOG_POSTS } from '../data/blog';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const BlogList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO title="Blog" description="Read latest guides, tutorials and tips on using online tools and productivity." />
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
      
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-black dark:text-white mb-4">Latest Insights</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Master the web with our expert guides and tools tips.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BLOG_POSTS.map((post, i) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <Link to={`/blog/${post.slug}`}>
              <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-800 rounded-3xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="flex items-center justify-center h-full text-indigo-600/20 dark:text-indigo-400/10 font-bold text-4xl">PAK TOOL HUB</div>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-indigo-600 rounded-full" />
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors mb-3 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold group-hover:gap-4 transition-all">
                Read Story <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
