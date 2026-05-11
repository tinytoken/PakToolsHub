import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogs';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 overflow-hidden hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/5">
      <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-gray-800">
        <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-700">
          {/* In a real app, use <img> with post.featuredImage.filename */}
          <span className="text-xs uppercase font-bold tracking-widest">{post.category}</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded-lg border border-white/20">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 space-y-4">
        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-3 h-3" />
            {post.author}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors line-clamp-2 leading-tight">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
          {post.metaDescription}
        </p>

        <div className="pt-4">
          <Link 
            to={`/blog/${post.slug}`} 
            className="inline-flex items-center gap-2 text-xs font-black text-indigo-600 uppercase tracking-widest group/btn"
          >
            READ FULL ARTICLE 
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
