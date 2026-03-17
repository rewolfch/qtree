import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

const FAQ: React.FC = () => {
  const { ui } = useLanguage();

  const faqs = [
    {
      question: ui("faq.q1"),
      answer: ui("faq.a1")
    },
    {
      question: ui("faq.q2"),
      answer: ui("faq.a2")
    },
    {
      question: ui("faq.q3"),
      answer: ui("faq.a3")
    },
    {
      question: ui("faq.q4"),
      answer: ui("faq.a4")
    },
    {
      question: ui("faq.q5"),
      answer: ui("faq.a5")
    },
    {
      question: ui("faq.q6"),
      answer: ui("faq.a6")
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32">
      <SEO 
        title={ui("seo.faq.title")} 
        description={ui("seo.faq.description")} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              {ui("faq.title")}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              {ui("faq.subtitle")}
            </p>
            <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
