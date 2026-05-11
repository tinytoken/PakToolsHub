import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { Shield, Target, Users, Zap } from 'lucide-react';

export const About = () => {
  return (
    <LegalPageLayout
      title="About PakToolsHub"
      breadcrumbName="About Us"
      description="Learn about PakToolsHub, Pakistan's leading platform for free online utility tools, calculators, and student resources."
    >
      <p className="text-lg">
        Welcome to <strong>PakToolsHub</strong>, your comprehensive digital workstation designed specifically for the needs of the Pakistani community, students, and professionals worldwide.
      </p>

      <h2>Our Story</h2>
      <p>
        PakToolsHub was born out of a simple observation: while the internet is full of utility tools, many are cluttered with intrusive ads, complex interfaces, or don't cater to specific local needs like FBR Salary Tax slabs, Zakat calculations based on local gold rates, or university-specific grading systems in Pakistan.
      </p>
      <p>
        In 2024, we set out to build a "Swiss Army Knife" for the Pakistani digital citizen—a place where tools are fast, private, and 100% free.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 my-12 not-prose">
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-gray-800">
          <Target className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            To democratize access to premium-grade utility tools for students, bloggers, and creators across Pakistan without any cost barriers.
          </p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-gray-800">
          <Zap className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Performance First</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            We believe tools should be lightning fast. Our architecture processes calculations in your browser, ensuring zero lag.
          </p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-gray-800">
          <Shield className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Privacy Centric</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            We don't store your sensitive calculation data. What stays in your browser, stays in your browser.
          </p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-gray-800">
          <Users className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Community Driven</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Every tool we build is a result of user feedback from students and professionals across Punjab, Sindh, KPK, and Balochistan.
          </p>
        </div>
      </div>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Academic Tools:</strong> CGPA and Percentage calculators optimized for HEC and BISE standards.</li>
        <li><strong>Financial Utilities:</strong> FBR Income Tax, Zakat, and Loan EMI calculators.</li>
        <li><strong>Media Tools:</strong> Professional image compression and PDF merging with high-security standards.</li>
        <li><strong>SEO Resources:</strong> Meta tag generators and word counters for digital creators and bloggers.</li>
      </ul>

      <h2>The PakToolsHub Promise</h2>
      <p>
        We are committed to keeping PakToolsHub free for everyone. Whether you are a student preparing for matric exams or a freelancer calculating your quarterly tax, we are here to simplify your life with software that just works.
      </p>

      <div className="mt-12 p-8 bg-indigo-600 rounded-3xl text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Have a Tool Suggestion?</h3>
        <p className="text-indigo-100 mb-8 max-w-xl mx-auto text-sm">
          Think we're missing something? We build based on your needs. Let us know what tool you'd like to see next.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
          Contact Our Team
        </button>
      </div>
    </LegalPageLayout>
  );
};
