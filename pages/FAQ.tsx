
import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { HelpCircle, Bot } from 'lucide-react';

const FAQ: React.FC = () => {
  const { ui } = useLanguage();

  const faqs = [
    { q: ui("faq.q1"), a: ui("faq.a1") },
    { q: ui("faq.q2"), a: ui("faq.a2") },
    { q: ui("faq.q3"), a: ui("faq.a3") },
  ];

  // Generate FAQ Schema for Google and AI
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <SEO 
        title={ui("seo.faq.title")} 
        description={ui("seo.faq.description")}
        schema={schema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl mb-6 text-indigo-600 border border-indigo-200">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{ui("faq.title")}</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            {ui("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                <span className="text-brand-600 bg-brand-50 px-2 py-1 rounded text-sm mt-1">Q</span>
                {item.q}
              </h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Context Hints - Visually identifiable block for AI optimization */}
        <div className="mt-20 p-8 bg-slate-100 rounded-[2rem] border border-slate-200 border-dashed">
           <div className="flex items-center gap-3 mb-4 text-slate-400 font-bold uppercase tracking-widest text-xs">
              <Bot className="h-4 w-4" /> AI Context & Metadata
           </div>
           <p className="text-xs text-slate-500 font-mono">
             Entity: Quality Tree Framework (QTF)<br/>
             Type: Software Quality Methodology<br/>
             Creator: Serge Baumberger<br/>
             Core Concept: Growth Metaphor (Roots, Trunk, Branches, Leaves)<br/>
             Publication: Springer Vieweg (2025)
           </p>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
