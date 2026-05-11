import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from '../data/blogs';
import { TOOLS } from '../data/tools';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  const relatedTools = TOOLS.filter(t => post.toolLinks.includes(t.id));
  const suggestedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <SEO 
        title={post.metaTitle} 
        description={post.metaDescription}
      />

      <Breadcrumbs items={[
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` }
      ]} />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 px-8">
        {/* Main Content */}
        <article className="lg:col-span-8 space-y-12">
          <header className="space-y-6">
            <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3 h-3" />
                {post.author}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              {post.h1}
            </h1>

            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              {post.intro}
            </p>
          </header>

          {/* Featured Image Placeholder */}
          <div className="aspect-video relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-800 group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
               <span className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">{post.category} Focus</span>
               <h2 className="text-2xl font-black text-slate-300 dark:text-slate-700">{post.title}</h2>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/20 text-[10px] text-white/50 italic text-center">
              {post.featuredImage.caption}
            </div>
          </div>

          <div className="markdown-body prose prose-slate dark:prose-invert max-w-none prose-h2:text-2xl prose-h2:font-black prose-h2:tracking-tight prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed">
            {post.sections.map((section, i) => (
              <div key={i} className="space-y-6 py-4">
                <h2 id={`section-${i}`}>{section.title}</h2>
                <ReactMarkdown>{section.content}</ReactMarkdown>
                {section.type === 'table' && section.tableData && (
                  <div className="overflow-x-auto my-8">
                    <table className="w-full text-sm border-collapse rounded-2xl overflow-hidden border border-slate-200 dark:border-gray-800">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-gray-800/50">
                          {section.tableData.headers.map((h, j) => (
                            <th key={j} className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-gray-800">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.tableData.rows.map((row, j) => (
                          <tr key={j} className="border-b border-slate-100 dark:border-gray-900 last:border-0">
                            {row.map((cell, k) => (
                              <td key={k} className="px-4 py-3 text-slate-600 dark:text-slate-400">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="pt-12 border-t border-slate-200 dark:border-gray-800 space-y-8">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
            <div className="grid gap-6">
              {post.faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-slate-50 dark:bg-gray-900/50 rounded-2xl border border-slate-200 dark:border-gray-800">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <div className="p-8 bg-indigo-50 dark:bg-indigo-900/10 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 space-y-4">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-400">Final Thoughts</h2>
            <p className="text-slate-600 dark:text-slate-400 italic">
              {post.conclusion}
            </p>
          </div>

          {/* Semantic Tags */}
          <div className="flex flex-wrap gap-2 pt-8">
            {post.nlpKeywords.map((tag, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-gray-800 text-slate-500 text-[10px] font-bold rounded-lg uppercase tracking-widest">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Related Tools */}
          <div className="p-8 bg-slate-900 text-white rounded-3xl space-y-6">
            <h3 className="text-lg font-bold tracking-tight">Try Professional Tools</h3>
            <div className="space-y-4">
              {relatedTools.map(tool => (
                <Link key={tool.id} to={tool.path} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">{tool.name}</h4>
                    <p className="text-[10px] text-white/50 font-medium">Precision Utility</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-400" />
                </Link>
              ))}
            </div>
            <Link to={post.cta.link} className="block w-full py-4 bg-indigo-600 text-center font-black rounded-xl hover:bg-indigo-500 transition-colors uppercase tracking-widest text-[10px]">
              {post.cta.text}
            </Link>
          </div>

          {/* Table of Contents Placeholder/Simple Column */}
          <div className="p-8 border border-slate-200 dark:border-gray-800 rounded-3xl space-y-6">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Related Articles</h3>
            <div className="space-y-6">
              {suggestedPosts.map(p => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="block group space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Calendar className="w-3 h-3" /> {new Date(p.date).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Proof/Share */}
          <div className="p-8 bg-slate-50 dark:bg-gray-800/30 rounded-3xl border border-slate-200 dark:border-gray-800 text-center space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Help others work smarter</h4>
            <button className="inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">
              <Share2 className="w-4 h-4" /> Share Guide
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
