
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sprout, Layers, GitBranch, ShoppingCart, BookOpen, Star, CheckCircle2, TrendingUp, ShieldCheck, Users, Globe, Calendar, Video, ExternalLink, Search, Zap, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeafIcon, TheGrowingTree, SeedIcon, ForestIcon } from '../components/Illustrations';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const [pulseScore, setPulseScore] = useState<number | null>(null);
  const [treeProgress, setTreeProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ui } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Start animating when the top of the container enters the middle of the viewport
      // End animating when the bottom of the container leaves the middle of the viewport
      // This creates a smoother, continuous progression through the long container
      
      const startOffset = windowHeight * 0.6; 
      const scrolled = startOffset - rect.top;
      const totalScrollable = elementHeight + (windowHeight * 0.2); // Add some buffer
      
      let progress = scrolled / totalScrollable;
      
      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      
      setTreeProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculatePulse = (val: number) => {
    setPulseScore(val);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quality Tree Framework",
    "url": "https://www.quality-tree.com",
    "logo": "https://lucide.dev/favicon.ico",
    "sameAs": [
      "https://www.linkedin.com/in/sergewolf/",
      "https://www.infometis.ch"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white overflow-x-hidden">
      <SEO 
        title={ui("nav.title")}
        description={ui("hero.desc")}
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-24 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Optimized Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            srcSet="
              https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=640&auto=format&fit=crop 640w,
              https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=70&w=1200&auto=format&fit=crop 1200w,
              https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop 2072w
            "
            sizes="100vw"
            alt=""
            className="w-full h-full object-cover opacity-10 mix-blend-overlay animate-pulse-slow"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-brand-900/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="flex-1 text-center lg:text-left">
              <ScrollReveal animation="fade-right" delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
                  {ui("hero.badge")}
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={300}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                  {ui("hero.title_start")} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">{ui("hero.title_end")}</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={500}>
                <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
                  {ui("hero.desc")}
                </p>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-up" delay={700}>
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                  <a 
                    href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full sm:w-auto group bg-brand-600 hover:bg-brand-500 text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-2xl shadow-brand-900/40 hover:-translate-y-1"
                  >
                    <ShoppingCart className="h-6 w-6" /> {ui("hero.cta_book")}
                  </a>
                  <Link 
                    to="/framework" 
                    className="w-full sm:w-auto text-white border border-white/20 hover:bg-white/10 px-8 py-5 rounded-2xl font-bold text-lg backdrop-blur-md flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
                  >
                    {ui("hero.cta_framework")}
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={900}>
                <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white">90+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{ui("hero.stat_practices")}</span>
                  </div>
                  <div className="w-px h-10 bg-slate-700"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white">8</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{ui("hero.stat_dimensions")}</span>
                  </div>
                  <div className="w-px h-10 bg-slate-700"></div>
                  <div className="flex flex-col">
                     <span className="flex items-center gap-1 text-2xl font-black text-white">4.8 <Star className="h-4 w-4 fill-brand-400 text-brand-400" /></span>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{ui("hero.stat_rating")}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex-1 relative">
              <ScrollReveal animation="zoom-in" delay={600} duration={1200}>
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-brand-500 rounded-2xl blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity translate-y-12"></div>
                  
                  <div className="relative transform-gpu transition-transform duration-700 hover:rotate-y-[-10deg] hover:scale-105 animate-float">
                    {/* Optimized Book Cover */}
                    <img 
                      src="https://media.springernature.com/full/springer-static/cover-hires/book/978-3-658-51040-4?as=webp" 
                      alt="Das Quality Tree Framework Buchcover" 
                      width="380"
                      height="548"
                      loading="eager"
                      fetchPriority="high"
                      className="w-[280px] md:w-[380px] h-auto mx-auto rounded-r-2xl shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.7)] border-l-8 border-slate-800"
                    />
                    <div className="absolute -top-6 -right-6 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 hidden md:block animate-float-delayed">
                       <span className="block text-xs font-black text-brand-600 uppercase tracking-widest">Bestseller</span>
                       <span className="block font-bold">Springer Vieweg</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                 <a href="https://swisstestingday.ch" target="_blank" rel="noreferrer" className="text-slate-900 font-black text-xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:text-brand-600 transition-all duration-500">Swiss Testing Day</a>
                 <a href="https://www.springer.com/de" target="_blank" rel="noreferrer" className="text-slate-900 font-black text-xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:text-brand-600 transition-all duration-500">Springer Vieweg</a>
                 <a href="https://www.infometis.ch" target="_blank" rel="noreferrer" className="text-slate-900 font-black text-xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:text-brand-600 transition-all duration-500">Infometis AG</a>
                 <a href="https://www.cic.ch" target="_blank" rel="noreferrer" className="text-slate-900 font-black text-xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:text-brand-600 transition-all duration-500">Bank CIC</a>
              </div>
            </ScrollReveal>
         </div>
      </section>

      {/* Interactive Growth Journey */}
      <section className="py-32 relative bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <ScrollReveal animation="fade-up">
              <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">{ui("home.journey.title")}</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                {ui("home.journey.desc")}
              </p>
            </ScrollReveal>
          </div>

          <div className="relative space-y-48" ref={containerRef}>
            
            {/* The Central Growing Tree Animation */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
               <TheGrowingTree progress={treeProgress} className="w-full h-full" />
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
               <div className="flex-1 lg:text-right order-2 lg:order-1">
                  <ScrollReveal animation="fade-right">
                    <span className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 block">{ui("home.journey.level1")}</span>
                    <h3 className="text-4xl font-black text-slate-900 mb-6">{ui("home.journey.roots.title")}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-lg lg:ml-auto font-light">
                      {ui("home.journey.roots.desc")}
                    </p>
                  </ScrollReveal>
               </div>
               <ScrollReveal animation="zoom-in" delay={200} className="order-1 lg:order-2 z-10 relative">
                 <div className="w-24 h-24 lg:w-32 lg:h-32 bg-amber-500 rounded-[2.5rem] flex items-center justify-center text-white relative shadow-2xl shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500 z-10">
                    <SeedIcon className="h-16 w-16" color="white" />
                 </div>
                 {/* Connection Point Hint */}
                 <div className="absolute top-full left-1/2 -translate-x-1/2 h-20 w-0.5 bg-gradient-to-b from-amber-500/50 to-transparent lg:hidden"></div>
               </ScrollReveal>
               <div className="flex-1 order-3"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
               <div className="flex-1 order-3 lg:order-1"></div>
               <ScrollReveal animation="zoom-in" delay={200} className="order-1 lg:order-2 z-10 relative">
                 <div className="w-24 h-24 lg:w-32 lg:h-32 bg-slate-800 rounded-[2.5rem] flex items-center justify-center text-white relative shadow-2xl shadow-slate-900/20 group-hover:scale-110 transition-transform duration-500 z-10">
                    <Layers className="h-14 w-14" />
                 </div>
               </ScrollReveal>
               <div className="flex-1 lg:text-left order-2 lg:order-3">
                  <ScrollReveal animation="fade-left">
                    <span className="text-slate-400 font-black text-xs uppercase tracking-widest mb-4 block">{ui("home.journey.level2")}</span>
                    <h3 className="text-4xl font-black text-slate-900 mb-6">{ui("home.journey.trunk.title")}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-lg font-light">
                      {ui("home.journey.trunk.desc")}
                    </p>
                  </ScrollReveal>
               </div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
               <div className="flex-1 lg:text-right order-2 lg:order-1">
                  <ScrollReveal animation="fade-right">
                    <span className="text-brand-500 font-black text-xs uppercase tracking-widest mb-4 block">{ui("home.journey.level3")}</span>
                    <h3 className="text-4xl font-black text-slate-900 mb-6">{ui("home.journey.branches.title")}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-lg lg:ml-auto font-light">
                      {ui("home.journey.branches.desc")}
                    </p>
                    <Link to="/framework" className="inline-flex items-center text-brand-600 font-bold mt-6 hover:gap-3 transition-all">
                      {ui("home.journey.branches.link")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </ScrollReveal>
               </div>
               <ScrollReveal animation="zoom-in" delay={200} className="order-1 lg:order-2 z-10 relative">
                 <div className="w-24 h-24 lg:w-32 lg:h-32 bg-brand-600 rounded-[2.5rem] flex items-center justify-center text-white relative shadow-2xl shadow-brand-600/20 group-hover:scale-110 transition-transform duration-500 z-10">
                    <GitBranch className="h-14 w-14" />
                 </div>
               </ScrollReveal>
               <div className="flex-1 order-3"></div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
               <div className="flex-1 order-3 lg:order-1"></div>
               <ScrollReveal animation="zoom-in" delay={200} className="order-1 lg:order-2 z-10 relative">
                 <div className="w-24 h-24 lg:w-32 lg:h-32 bg-emerald-700 rounded-[2.5rem] flex items-center justify-center text-white relative shadow-2xl shadow-emerald-700/20 group-hover:scale-110 transition-transform duration-500 z-10">
                    <ForestIcon className="h-16 w-16" color="white" />
                 </div>
               </ScrollReveal>
               <div className="flex-1 lg:text-left order-2 lg:order-3">
                  <ScrollReveal animation="fade-left">
                    <span className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-4 block">{ui("home.journey.level4")}</span>
                    <h3 className="text-4xl font-black text-slate-900 mb-6">{ui("home.journey.forest.title")}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-lg font-light">
                      {ui("home.journey.forest.desc")}
                    </p>
                  </ScrollReveal>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pulse Check Widget */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-500/5 blur-[120px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <ScrollReveal animation="fade-up">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-16 hover:bg-white/10 transition-colors duration-500">
              <div className="w-16 h-16 bg-brand-500/20 rounded-2xl flex items-center justify-center text-brand-400 mx-auto mb-8 animate-pulse">
                <Zap className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">{ui("home.check.title")}</h2>
              <p className="text-slate-400 mb-12 max-w-xl mx-auto font-light text-lg">
                {ui("home.check.desc")}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                 {[
                   { label: "Manuell", val: 1 },
                   { label: "< 25%", val: 2 },
                   { label: "25 - 80%", val: 3 },
                   { label: "> 80%", val: 4 }
                 ].map((opt, idx) => (
                   <ScrollReveal key={opt.val} animation="fade-up" delay={idx * 100}>
                     <button 
                      onClick={() => calculatePulse(opt.val)}
                      className={`w-full p-5 rounded-2xl border-2 transition-all font-bold text-sm ${pulseScore === opt.val ? 'bg-brand-600 border-brand-500 text-white shadow-xl shadow-brand-600/20 scale-105' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'}`}
                     >
                       {opt.label}
                     </button>
                   </ScrollReveal>
                 ))}
              </div>

              {pulseScore && (
                <div className="mb-10 p-8 bg-brand-900/40 rounded-3xl border border-brand-500/30 animate-fade-in text-left">
                  <p className="text-brand-300 font-black text-xs uppercase tracking-widest mb-3">{ui("home.check.result")}</p>
                  <p className="text-white text-lg leading-relaxed font-light">
                    {pulseScore <= 2 
                      ? ui("home.check.low")
                      : ui("home.check.high")}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/app" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-black hover:bg-brand-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-500/20">
                  {ui("home.check.cta_app")} <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="https://www.amazon.de/Das-Quality-Tree-Framework-Automatisierung/dp/3658510404" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-black hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600 transform hover:-translate-y-1">
                  {ui("home.check.cta_book")}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Author & Booking */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
               <ScrollReveal animation="fade-right">
                 <div className="absolute inset-0 bg-brand-50 rounded-[4rem] -rotate-3 translate-x-6 scale-95 transition-transform group-hover:rotate-0"></div>
                 <img 
                  src="https://cdn.prod.website-files.com/659bd602c8644fb17135bbe7/660c27367443119851a48cd0_Swarmie%20Profile%20-%20Serge%20Wolf.png" 
                  alt="Serge Baumberger" 
                  className="relative rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full aspect-[4/5] object-cover border-8 border-white hover:scale-[1.02]"
                 />
                 <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl max-w-[240px] hidden md:block">
                    <p className="text-sm font-light italic opacity-80 mb-4">"Wir bauen keine Software, wir bauen Vertrauen."</p>
                    <p className="font-bold text-brand-400">Serge Baumberger</p>
                 </div>
               </ScrollReveal>
            </div>
            
            <div className="lg:w-1/2">
              <ScrollReveal animation="fade-left">
                <div className="inline-flex items-center gap-2 text-brand-600 font-black uppercase tracking-widest text-xs mb-8">
                  {ui("home.author.badge")}
                </div>
                <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                  {ui("home.author.title").split(' ').slice(0, 2).join(' ')} <br />
                  {ui("home.author.title").split(' ').slice(2).join(' ')}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
                  {ui("home.author.desc")}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <a 
                    href="https://outlook.office.com/bookwithme/user/33e79517d09745e0a352cadfcab5ae3e@infometis.ch/meetingtype/WszQVIErKkasYuPPlsMhhg2?anonymous&ismsaljsauthenabled&ep=mlink" 
                    target="_blank" rel="noreferrer" 
                    className="flex flex-col p-6 rounded-3xl border border-slate-100 hover:border-brand-500 hover:shadow-xl transition-all group hover:-translate-y-1"
                  >
                    <Calendar className="h-8 w-8 text-brand-600 mb-4" />
                    <h4 className="font-bold text-slate-900">{ui("home.author.meeting_title")}</h4>
                    <p className="text-slate-500 text-sm mt-2">{ui("home.author.meeting_desc")}</p>
                  </a>
                  <div className="flex flex-col p-6 rounded-3xl border border-slate-100 bg-slate-50 group hover:bg-white hover:shadow-lg transition-all">
                    <Video className="h-8 w-8 text-slate-400 mb-4 group-hover:text-brand-600 transition-colors" />
                    <h4 className="font-bold text-slate-900">{ui("home.author.keynote_title")}</h4>
                    <p className="text-slate-500 text-sm mt-2">Swiss Testing Day 2025.</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <Link to="/author" className="text-slate-900 font-black text-sm uppercase tracking-widest border-b-2 border-slate-900 pb-2 hover:text-brand-600 hover:border-brand-600 transition-all">
                    {ui("home.author.bio_link")}
                  </Link>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/sergewolf/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-600 transition-colors transform hover:scale-110">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:info@quality-tree.com" className="text-slate-400 hover:text-brand-600 transition-colors transform hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
