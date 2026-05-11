import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { type Tool } from '@/src/data/tools';
import { cn } from '@/src/lib/utils';

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, featured }) => {
  const IconComponent = (Icons as any)[tool.icon] || Icons.Wrench;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn(
        "group h-full bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-gray-800 cursor-pointer flex flex-col",
        featured && "ring-2 ring-indigo-500/20"
      )}
    >
      <Link to={tool.path} className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xs group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
            {tool.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase()}
          </div>
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {tool.name}
          </h3>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-grow">
          {tool.description}
        </p>
        <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
          Try tool
          <Icons.ArrowRight className="w-3 h-3 ml-1" />
        </div>
      </Link>
    </motion.div>
  );
};
