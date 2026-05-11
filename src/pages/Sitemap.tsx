import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calculator, 
  GraduationCap, 
  Image as ImageIcon, 
  Search, 
  Layout, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  TrendingUp,
  Map as MapIcon,
  BookOpen
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TOOLS, CATEGORIES } from '../data/tools';
import { BLOG_POSTS } from '../data/blogs';

const SitemapSection = ({ 
  title, 
  icon: Icon, 
  links, 
  description 
}: { 
  title: string; 
  icon: any; 
  links: { name: string; path: string }[]; 
  description?: string;
}) => (
  <div className="bg-white dark:bg-gray-900 rounded-3xl border border-slate-200 dark:border-gray-800 p-8 space-y-6 hover:border-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/5">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{title}</h2>
        {description && <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{description}</p>}
      </div>
    </div>
    <ul className="grid grid-cols-1 gap-3">
      {links.map((link, i) => (
        <li key={i}>
          <Link 
            to={link.path} 
            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group"
          >
            <div className="w-1 h-1 bg-slate-200 dark:bg-gray-700 rounded-full group-hover:bg-indigo-500 group-hover:scale-150 transition-all"></div>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Sitemap = () => {
  const [filter, setFilter] = React.useState('');

  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'All Tools', path: '/tools' },
    { name: 'Blog Archive', path: '/blog' },
    { name: 'About PakToolsHub', path: '/about' },
    { name: 'Contact Support', path: '/contact' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Refund Policy', path: '/refund' },
    { name: 'DMCA Notice', path: '/dmca' },
    { name: 'Accessibility', path: '/accessibility' },
  ];

  const toolsByCategory = CATEGORIES.map(cat => ({
    title: cat.name,
    icon: cat.id === 'calculators' ? Calculator : 
          cat.id === 'students' ? GraduationCap :
          cat.id === 'pakistan' ? MapIcon :
          cat.id === 'pdf' ? FileText :
          cat.id === 'image' ? ImageIcon : Search,
    description: `${TOOLS.filter(t => t.category === cat.id).length} Active Tools`,
    links: TOOLS.filter(t => t.category === cat.id).map(t => ({ name: t.name, path: t.path }))
  }));

  const blogLinks = BLOG_POSTS.map(post => ({ name: post.title, path: `/blog/${post.slug}` }));

  // Helper filter logic
  const allSections = [
    { title: 'Main Navigation', icon: Layout, links: mainPages, description: 'Core Pages' },
    ...toolsByCategory,
    { title: 'The Learning Hub', icon: BookOpen, links: blogLinks, description: 'Guides & Articles' },
    { title: 'Compliance & Safety', icon: ShieldCheck, links: legalPages, description: 'Legal Terms' }
  ].filter(section => 
    section.title.toLowerCase().includes(filter.toLowerCase()) || 
    section.links.some(l => l.name.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto py-8">
      <SEO 
        title="HTML Sitemap - Browse All Tools & Guides | PakToolsHub" 
        description="Navigate PakToolsHub effortlessly. Find all professional calculator tools, student utilities, Pakistan-specific services, and expert SEO blog posts." 
      />

      <Breadcrumbs items={[{ name: 'Sitemap', path: '/sitemap' }]} />

      <div className="px-8 mt-12 space-y-16">
        {/* Hero Section */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-[0.3em] rounded-lg">
            <Layout className="w-3 h-3" /> Navigation Hub
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
            Digital Directory: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Scan & Discover</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl">
            A comprehensive map of all professional utilities and expert guides available on PakToolsHub. 
            Designed for both humans and search engines to find information instantly.
          </p>

          <div className="max-w-xl relative group pt-4">
            <input 
              type="text"
              placeholder="Search sitemap for pages, tools, or guides..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none pr-12 dark:bg-gray-900 dark:text-white text-sm"
            />
            <div className="absolute right-4 top-8 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
              <Search className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white flex gap-6 items-center">
            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center shrink-0">
               <Clock className="w-8 h-8 text-indigo-200" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Recently Added</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {TOOLS.slice(-3).map(t => (
                  <Link key={t.id} to={t.path} className="text-xs bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-all">{t.name}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex gap-6 items-center">
            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center shrink-0">
               <TrendingUp className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Popular Right Now</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {TOOLS.slice(0, 3).map(t => (
                  <Link key={t.id} to={t.path} className="text-xs bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-all">{t.name}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSections.map((section, i) => (
            <SitemapSection key={i} {...section} />
          ))}
        </div>

        {/* Bottom Semantic CTA */}
        <div className="py-12 px-8 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-200 dark:border-gray-800 text-center space-y-4">
           <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Couldn't find what you need?</h4>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="px-8 py-3 bg-indigo-600 text-white font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                Request a Custom Tool
              </Link>
              <Link to="/blog" className="px-8 py-3 bg-white dark:bg-gray-800 text-slate-900 dark:text-white border border-slate-200 dark:border-gray-700 font-black rounded-xl text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors">
                Browse Expert Blog
              </Link>
           </div>
        </div>
      </div>

      {/* HTML Sitemap Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "PakToolsHub HTML Sitemap",
          "itemListElement": allSections.flatMap(s => s.links).map((l, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://paktoolshub.com${l.path}`,
            "name": l.name
          }))
        })}
      </script>
    </div>
  );
};
