
import React from 'react';
import { Linkedin, Mail, Globe, Calendar, Video } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const Author: React.FC = () => {
  const { ui } = useLanguage();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Serge Baumberger",
    "jobTitle": "Co-CEO Infometis AG",
    "url": "https://www.quality-tree.com/author",
    "image": "https://cdn.prod.website-files.com/659bd602c8644fb17135bbe7/660c27367443119851a48cd0_Swarmie%20Profile%20-%20Serge%20Wolf.png",
    "sameAs": [
        "https://www.linkedin.com/in/sergewolf/",
        "https://www.infometis.ch"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <SEO 
        title="Serge Baumberger" 
        description={ui("author.bio_p1")}
        imageUrl="https://cdn.prod.website-files.com/659bd602c8644fb17135bbe7/660c27367443119851a48cd0_Swarmie%20Profile%20-%20Serge%20Wolf.png"
        schema={schema}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card */}
        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-200 overflow-hidden mb-20">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Section */}
            <div className="lg:w-5/12 relative min-h-[500px] lg:min-h-full bg-slate-900">
              <ScrollReveal animation="zoom-in" className="h-full">
                <img 
                  src="https://cdn.prod.website-files.com/659bd602c8644fb17135bbe7/660c27367443119851a48cd0_Swarmie%20Profile%20-%20Serge%20Wolf.png" 
                  alt="Serge Baumberger" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12">
                   <h1 className="text-5xl font-black text-white mb-2 tracking-tight">Serge Baumberger</h1>
                   <p className="text-brand-400 font-bold uppercase tracking-widest text-sm">Author | Co-CEO Infometis AG</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Biography Content */}
            <div className="lg:w-7/12 p-12 md:p-20 flex flex-col justify-center">
              <ScrollReveal animation="fade-left">
                <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-brand-100">
                  {ui("author.badge")}
                </div>
                
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 mb-12">
                  <p className="text-2xl font-bold text-slate-900 leading-snug mb-8">
                    {ui("author.quote_main")}
                  </p>
                  <p>
                    {ui("author.bio_p1")}
                  </p>
                  <p>
                    {ui("author.bio_p2")}
                  </p>
                </div>

                {/* Booking & Social Integration */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-10 border-t border-slate-100">
                  <a 
                    href="https://outlook.office.com/bookwithme/user/33e79517d09745e0a352cadfcab5ae3e@infometis.ch/meetingtype/WszQVIErKkasYuPPlsMhhg2?anonymous&ismsaljsauthenabled&ep=mlink" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full sm:w-auto flex items-center justify-center bg-slate-900 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold transition-all gap-3 shadow-xl active:scale-95 transform hover:-translate-y-1"
                  >
                    <Calendar className="h-5 w-5" /> {ui("author.book_meeting")}
                  </a>
                  
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/sergewolf/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-all transform hover:scale-110">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:info@quality-tree.com" className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-600 hover:bg-brand-600 hover:text-white transition-all transform hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href="https://www.infometis.ch" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all transform hover:scale-110">
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <ScrollReveal animation="fade-up">
                <h2 className="text-3xl font-black text-slate-900 mb-8">{ui("author.thanks_title")}</h2>
                <div className="prose prose-slate text-slate-600 space-y-6">
                  <p>
                    {ui("author.thanks_p1")}
                  </p>
                  <p>
                    {ui("author.thanks_p2")}
                  </p>
                </div>
                
                <div className="mt-12 p-8 bg-brand-50 rounded-[2rem] border border-brand-100">
                   <p className="italic text-brand-900 font-medium">{ui("author.quote_footer")}</p>
                   <div className="mt-4 flex items-center gap-3">
                      <div className="w-8 h-px bg-brand-300"></div>
                      <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Serge Baumberger</span>
                   </div>
                </div>
              </ScrollReveal>
           </div>
           
           <div className="relative">
              <ScrollReveal animation="zoom-in" delay={300}>
                <div className="absolute inset-0 bg-slate-200 rounded-[3rem] rotate-3 translate-x-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Workshop Context" 
                  className="relative rounded-[3rem] shadow-xl w-full h-[500px] object-cover hover:rotate-1 transition-transform duration-700"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-float">
                   <div className="flex items-center gap-4">
                      <div className="bg-brand-600 text-white p-3 rounded-2xl">
                         <Video className="h-6 w-6" />
                      </div>
                      <div>
                         <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{ui("author.next_talk")}</p>
                         <p className="font-bold text-slate-900">Swiss Testing Day '25</p>
                      </div>
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
