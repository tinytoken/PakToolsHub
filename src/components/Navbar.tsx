import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Wrench, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Sync with HTML class
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-indigo-700 transition-colors">
                P
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                PakToolsHub
              </span>
            </Link>
            
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <Link to="/" className={cn("hover:text-indigo-600 transition-colors", location.pathname === "/" && "text-indigo-600")}>Home</Link>
              <Link to="/tools" className={cn("hover:text-indigo-600 transition-colors", location.pathname.startsWith("/tool") && "text-indigo-600")}>Tools</Link>
              <Link to="/blog" className={cn("hover:text-indigo-600 transition-colors", location.pathname.startsWith("/blog") && "text-indigo-600")}>Blog</Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/tools" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200 dark:shadow-none">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link to="/tools" onClick={() => setIsOpen(false)} className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 font-medium py-2">Tools</Link>
              <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 font-medium py-2">Blog</Link>
              <Link to="/tools" onClick={() => setIsOpen(false)} className="block w-full text-center bg-indigo-600 text-white px-4 py-3 rounded-xl font-medium">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
