import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { name: string; path: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex px-8 py-3 bg-white/50 dark:bg-gray-900/50 border-b border-slate-200 dark:border-gray-800 shrink-0 text-xs font-medium" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-slate-400">
        <li>
          <Link to="/" className="hover:text-indigo-600 transition-colors uppercase tracking-wider">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-1">/</span>
            {index === items.length - 1 ? (
              <span className="text-slate-600 dark:text-slate-300 uppercase tracking-wider" aria-current="page">{item.name}</span>
            ) : (
              <Link to={item.path} className="hover:text-indigo-600 transition-colors uppercase tracking-wider">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
