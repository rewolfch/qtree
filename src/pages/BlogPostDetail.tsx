import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock, User, Calendar, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, ui } = useLanguage();
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{ui("blog_detail.not_found_title")}</h1>
          <p className="text-slate-500 mb-8">{ui("blog_detail.not_found_desc")}</p>
          <Link to="/blog" className="text-brand-600 font-bold hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="h-4 w-4" /> {ui("blog_detail.back")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      <SEO 
        title={t(post.title)}
        description={t(post.excerpt)}
        imageUrl={post.imageUrl}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": t(post.title),
          "image": post.imageUrl,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.date
        }}
      />

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={t(post.title)} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up">
              <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
                <ArrowLeft className="h-4 w-4" /> {ui("blog_detail.back")}
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-brand-500/20 backdrop-blur-md border border-brand-500/30 text-brand-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                {t(post.title)}
              </h1>

              <div className="flex flex-wrap items-center gap-8 text-white/80 text-sm font-medium">
                <span className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Text */}
          <div className="flex-1 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100">
            <ScrollReveal animation="fade-up" delay={200}>
              <div 
                className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand-600 hover:prose-a:text-brand-700 prose-img:rounded-2xl"
                dangerouslySetInnerHTML={{ __html: t(post.content) }}
              />
            </ScrollReveal>

            <div className="mt-16 pt-8 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Share2 className="h-4 w-4" /> {ui("blog_detail.share")}
              </h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#4267B2] hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-8">
            <ScrollReveal animation="fade-left" delay={400}>
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{ui("blog_detail.dive_deeper_title")}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {ui("blog_detail.dive_deeper_desc")}
                </p>
                <Link to="/framework" className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-brand-600 transition-colors shadow-lg">
                  {ui("blog_detail.to_framework")}
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
