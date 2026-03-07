import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../data/blogPosts';
import { Search, Clock, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { t, ui } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => 
    t(post.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(post.excerpt).toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <SEO 
        title={ui("seo.blog.title")}
        description={ui("blog.header_desc")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-200">
              Knowledge Hub
            </div>
            <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">{ui("blog.header_title")}</h1>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              {ui("blog.header_desc")}
            </p>
          </ScrollReveal>
        </div>

        {/* Search */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="max-w-xl mx-auto mb-20 relative">
             <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
               <Search className="h-5 w-5 text-slate-400" />
             </div>
             <input 
              type="text" 
              placeholder={ui("blog.search_placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-lg shadow-lg shadow-slate-200/50 outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all"
             />
          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, idx) => (
              <ScrollReveal key={post.id} animation="fade-up" delay={idx * 100}>
                <Link to={`/blog/${post.id}`} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={t(post.title)} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-700 transition-colors">
                      {t(post.title)}
                    </h2>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                      {t(post.excerpt)}
                    </p>
                    
                    <div className="flex items-center text-brand-600 font-black text-xs uppercase tracking-widest mt-auto">
                      {ui("blog.read_more")} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-slate-100">
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-6">
               <Search className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">{ui("blog.no_results_title")}</h3>
             <p className="text-slate-500 mb-8">{ui("blog.no_results_desc")}</p>
             <button onClick={() => setSearchQuery("")} className="text-brand-600 font-bold hover:underline">
               {ui("blog.reset_search")}
             </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;
