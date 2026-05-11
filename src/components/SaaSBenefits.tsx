import React from 'react';
import { Target, Zap, Shield, Sparkles } from 'lucide-react';

const BENEFITS = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every tool is calibrated against official Pakistani standards and global mathematical models to ensure results you can trust."
  },
  {
    icon: Zap,
    title: "Zero Server Delay",
    description: "Unlike other tools that process on slow servers, PakToolsHub runs 99% of tasks in your browser for instant performance."
  },
  {
    icon: Shield,
    title: "Privacy First (EEAT)",
    description: "Your sensitive inputs never leave your device. We use browser-side JS to process data, maintaining absolute data sovereignty."
  },
  {
    icon: Sparkles,
    title: "Updated Daily",
    description: "From FBR tax slabs to gold rates for Zakat, we update our data repositories daily to match the current market."
  }
];

export const SaaSBenefits = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-2">Our Standard</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Built for Professionals</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            PakToolsHub isn't just a collection of links. It's a precision-built platform designed to solve 
            the specific digital challenges faced by Pakistani students and creators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, i) => (
            <div key={i} className="group p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-gray-800 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{benefit.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
