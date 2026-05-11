import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, MessageSquare, Phone, MapPin, Send, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you shortly.');
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <SEO title="Contact Us" description="Get in touch with PakToolsHub team for help, tool suggestions, or business inquiries." />
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

      <div className="px-8 mt-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Get in Touch</h1>
            <p className="text-slate-500 dark:text-slate-400">
              Have questions or feedback? We'd love to hear from you. Our team typically responds within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold dark:text-white">Email Us</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">support@paktoolshub.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold dark:text-white">Business Queries</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">ads@paktoolshub.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Follow Us</h3>
            <div className="flex gap-3">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-gray-800 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full px-5 py-3 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none dark:text-white text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none dark:text-white text-sm"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
              <input 
                required
                type="text" 
                value={formData.subject}
                onChange={e => setFormData({...formData, subject: e.target.value})}
                placeholder="How can we help?"
                className="w-full px-5 py-3 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none dark:text-white text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                placeholder="Your detailed message here..."
                className="w-full px-5 py-3 bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none dark:text-white text-sm resize-none"
              />
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>

          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-bold dark:text-white">Common Questions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-gray-800">
                <h4 className="text-sm font-bold mb-2 dark:text-white">Are the tools really free?</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Yes, 100%. We support our servers through non-intrusive advertisements only.</p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-gray-800">
                <h4 className="text-sm font-bold mb-2 dark:text-white">Can I suggest a new tool?</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Absolutely! We love building tools that our community needs. Send us an email.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
