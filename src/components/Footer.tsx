import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Github, Wrench } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800 px-8 py-8 transition-colors shrink-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200">PakToolsHub</span>
            </Link>
            <span className="text-xs text-slate-400 font-medium">© 2024 PakToolsHub.com</span>
          </div>

          <div className="flex gap-6 text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">
            <Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
            <Link to="/sitemap" className="hover:text-indigo-600 transition-colors">Sitemap</Link>
            <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-2 text-[10px] bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-full text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};
