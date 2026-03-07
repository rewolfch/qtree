import React from 'react';
import { ArrowRight, CheckCircle2, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { ui } = useLanguage();

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
    <div className="h-[calc(100vh-7rem)] w-full bg-slate-50 overflow-hidden flex flex-col font-sans text-slate-900">
      <SEO 
        title={ui("nav.title")}
        description={ui("hero.desc")}
        schema={schema}
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      {/* Main Content Grid */}
      <main className="flex-grow relative z-10 grid grid-cols-12 gap-6 px-[6%] items-center h-full">
        
        {/* Left Column: Headline & Core Value (35% width approx) */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center h-full py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-[10px] font-bold uppercase tracking-widest mb-8 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
              {ui("hero.badge")}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-slate-900 mb-8">
              {ui("hero.title_start")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
                {ui("hero.title_end")}
              </span>
            </h1>

            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-lg">
              {ui("hero.desc")}
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Holistic Quality Strategy",
                "Automated & Manual Synergy",
                "Business Value Driven"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-slate-700 font-medium text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/app" 
                className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1"
              >
                Start Assessment <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/framework" 
                className="px-8 py-4 rounded-xl font-bold text-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                Explore Framework
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Element (Balance) */}
        <div className="col-span-12 lg:col-span-7 h-full relative hidden lg:flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-2xl aspect-square"
          >
            {/* Abstract Visual Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-2xl border border-slate-100 transform rotate-3"></div>
            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-xl border border-slate-50 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.05),transparent_70%)]"></div>
              
              {/* Central Graphic */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-brand-500 to-emerald-500 rounded-3xl shadow-lg shadow-brand-500/30 flex items-center justify-center mb-8 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Star className="h-16 w-16 text-white fill-white/20" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">Quality Tree</h3>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Framework v1.0</p>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Speed</div>
                    <div className="text-slate-900 font-bold">+40%</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-12 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Quality</div>
                    <div className="text-slate-900 font-bold">A+ Grade</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default Home;
