import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Github, Wrench } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800 px-8 pt-16 pb-8 transition-colors shrink-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200">PakToolsHub</span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Empowering Pakistan with professional-grade digital utilities. Free, fast, and secure tools for students and professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Tools</h3>
            <ul className="space-y-4 text-xs">
              <li><Link to="/tools" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">All Tools</Link></li>
              <li><Link to="/category/calculators" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Calculators</Link></li>
              <li><Link to="/category/students" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Student Tools</Link></li>
              <li><Link to="/category/pakistan" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Pakistan Utilities</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Company</h3>
            <ul className="space-y-4 text-xs">
              <li><Link to="/about" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Contact</Link></li>
              <li><Link to="/disclaimer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Disclaimer</Link></li>
              <li><Link to="/editorial" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Editorial Policy</Link></li>
              <li><Link to="/accessibility" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Accessibility</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Support</h3>
            <ul className="space-y-4 text-xs">
              <li><Link to="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Cookies Policy</Link></li>
              <li><Link to="/dmca" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">DMCA Policy</Link></li>
              <li><Link to="/refund" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-wider font-bold">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-8">
            <span>© 2024 PakToolsHub.com</span>
            <Link to="/sitemap" className="hover:text-indigo-600">Sitemap</Link>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-full text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};
