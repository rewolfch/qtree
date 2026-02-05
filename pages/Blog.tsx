
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { fetchAllPosts } from '../services/blogService';
import { Calendar, User, ArrowRight, BookOpen, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const BlogSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden h-full animate-pulse">
        <div className="h-64 bg-slate-200"></div>
        <div className="p-10">
          <div className="h-3 w-32 bg-slate-200 rounded-full mb-6"></div>
          <div className="h-8 w-full bg-slate-200 rounded mb-4"></div>
          <div className="h-8 w-2/3 bg-slate-200 rounded mb-10"></div>
          <div className="space-y-3">
            <div className="h-3 w-full bg-slate-100 rounded"></div>
            <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Blog: React.FC = () => {
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const { ui, t } = useLanguage();

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const data = await fetchAllPosts();
      setDisplayPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  const filteredPosts = displayPosts.filter(post => 
    t(post.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(post.excerpt).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(post.content).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": ui("seo.blog.title"),
    "description": ui("blog.header_desc"),
    "url": "https://www.quality-tree.com/#/blog"
  };

  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <SEO 
        title={ui("seo.blog.title")}
        description={ui("blog.header_desc")}
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blog Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-2xl mb-6 text-brand-600 border border-brand-200">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">{ui("blog.header_title")}</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {ui("blog.header_desc")}
            </p>
          </ScrollReveal>
        </div>

        {/* Search Bar */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="max-w-2xl mx-auto mb-20 relative group">
             <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
               <Search className="h-5 w-5 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
             </div>
             <input 
              type="text" 
              placeholder={ui("blog.search_placeholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-3xl py-6 pl-16 pr-8 text-lg shadow-2xl shadow-slate-200/50 outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all"
             />
             {searchQuery && (
               <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-xs font-bold animate-fade-in">
                 {filteredPosts.length} {ui("blog.results")}
               </div>
             )}
          </div>
        </ScrollReveal>
        
        {loading ? <BlogSkeleton /> : (
          <>
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal key={post.id} animation="fade-up" delay={index * 100}>
                    <article className="flex flex-col bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group h-full">
                      <Link to={`/blog/${post.id}`} className="block h-64 overflow-hidden bg-slate-200 relative">
                        {post.imageUrl ? (
                          <img 
                            src={post.imageUrl} 
                            alt={t(post.title)} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                            <span className="text-slate-300 text-6xl font-black">QTF</span>
                          </div>
                        )}
                        <div className="absolute top-6 left-6">
                          <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
                            {post.date.split('-')[0]}
                          </span>
                        </div>
                      </Link>

                      <div className="p-10 flex-grow flex flex-col">
                        <div className="flex items-center text-[10px] font-black text-brand-600 mb-6 space-x-4 uppercase tracking-widest">
                          <span className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-2" /> {post.date}</span>
                          <span className="flex items-center"><User className="h-3.5 w-3.5 mr-2" /> {post.author}</span>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 line-clamp-2 group-hover:text-brand-700 transition-colors leading-tight">
                          <Link to={`/blog/${post.id}`}>
                            {t(post.title)}
                          </Link>
                        </h2>
                        
                        <p className="text-slate-500 mb-8 line-clamp-3 text-sm leading-relaxed flex-grow">
                          {t(post.excerpt)}
                        </p>
                        
                        <div className="mt-auto pt-8 border-t border-slate-50 group-hover:border-slate-100">
                          <Link to={`/blog/${post.id}`} className="inline-flex items-center text-slate-900 font-black text-xs uppercase tracking-widest hover:text-brand-600 transition-all gap-2 group/btn">
                            {ui("blog.read_more")} <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-[3rem] border border-slate-100">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-6">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{ui("blog.no_results_title")}</h3>
                <p className="text-slate-500">{ui("blog.no_results_desc")}</p>
                <button onClick={() => setSearchQuery("")} className="mt-6 text-brand-600 font-bold hover:underline">{ui("blog.reset_search")}</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
