import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { Linkedin, Mail, Calendar, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Author: React.FC = () => {
  const { ui, language } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32">
      <SEO 
        title={`${ui("author.title")} - ${ui("author.subtitle")}`} 
        description={ui("author.bio.p1")} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              {ui("author.title")}
            </h1>
            <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-5/12 relative">
            <ScrollReveal animation="fade-right">
              <div className="sticky top-32">
                <div className="absolute inset-0 bg-brand-50 rounded-[4rem] -rotate-3 translate-x-6 scale-95 transition-transform group-hover:rotate-0"></div>
                <img 
                  src="https://cdn.prod.website-files.com/659bd602c8644fb17135bbe7/660c27367443119851a48cd0_Swarmie%20Profile%20-%20Serge%20Wolf.png" 
                  alt="Serge Baumberger" 
                  loading="eager"
                  fetchpriority="high"
                  className="relative rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full aspect-[4/5] object-cover border-8 border-white hover:scale-[1.02]"
                />
                <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl max-w-[240px] hidden md:block">
                  <p className="text-sm font-light italic opacity-80 mb-4">"Wir bauen keine Software, wir bauen Vertrauen."</p>
                  <p className="font-bold text-brand-400">Serge Baumberger</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:w-7/12">
            <ScrollReveal animation="fade-left">
              <h2 className="text-4xl font-black text-slate-900 mb-2">
                {ui("author.subtitle")}
              </h2>
              <p className="text-xl text-brand-600 font-bold mb-10">
                {ui("author.role")}
              </p>

              <div className="prose prose-lg prose-slate max-w-none mb-16">
                <p className="text-slate-600 leading-relaxed font-light text-xl mb-6">
                  {ui("author.bio.p1")}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {ui("author.bio.p2")}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {ui("author.bio.p3")}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
                  {ui("author.contact.title")}
                </h3>
                <p className="text-slate-600 mb-8 relative z-10">
                  {ui("author.contact.desc")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  <a 
                    href="https://outlook.office.com/bookwithme/user/33e79517d09745e0a352cadfcab5ae3e@infometis.ch/meetingtype/WszQVIErKkasYuPPlsMhhg2?anonymous&ismsaljsauthenabled&ep=mlink" 
                    target="_blank" rel="noreferrer" 
                    className="flex items-center p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all group"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-brand-600 group-hover:scale-110 transition-transform">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-slate-900">{ui("author.contact.meeting")}</span>
                  </a>
                  
                  <a 
                    href="mailto:info@quality-tree.com" 
                    className="flex items-center p-4 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all group"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-brand-600 group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-slate-900">{ui("author.contact.email")}</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/sergewolf/" 
                    target="_blank" rel="noreferrer" 
                    className="flex items-center p-4 rounded-2xl border border-slate-200 hover:border-[#0077b5] hover:bg-[#0077b5]/5 transition-all group sm:col-span-2"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-[#0077b5] group-hover:scale-110 transition-transform">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-slate-900">{ui("author.contact.linkedin")}</span>
                    <ArrowRight className="h-4 w-4 ml-auto text-slate-400 group-hover:text-[#0077b5] group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
