
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById } from '../services/blogService';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, User, Linkedin, Twitter, Mail, Share2, TreeDeciduous, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

const PostSkeleton = () => (
  <div className="min-h-screen bg-slate-50 pb-16 animate-pulse">
    <div className="w-full h-64 md:h-96 bg-slate-200"></div>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
      <div className="h-8 w-32 bg-white/80 rounded-full mb-6"></div>
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden p-8 md:p-12">
        <div className="flex gap-4 mb-6">
          <div className="h-6 w-24 bg-slate-100 rounded"></div>
          <div className="h-6 w-24 bg-slate-100 rounded"></div>
        </div>
        <div className="h-10 w-full bg-slate-200 rounded mb-4"></div>
        <div className="h-10 w-3/4 bg-slate-200 rounded mb-12"></div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-slate-50 rounded"></div>
          <div className="h-4 w-full bg-slate-50 rounded"></div>
          <div className="h-4 w-5/6 bg-slate-50 rounded"></div>
          <div className="h-4 w-full bg-slate-50 rounded mt-8"></div>
          <div className="h-4 w-full bg-slate-50 rounded"></div>
          <div className="h-4 w-2/3 bg-slate-50 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const { ui, t } = useLanguage();

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      if (id) {
        const found = await fetchPostById(id);
        setPost(found);
      }
      setLoading(false);
    };

    loadPost();
  }, [id]);

  if (loading) return <PostSkeleton />;

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 flex flex-col items-center justify-center text-center px-4">
        <SEO title={ui("blog_detail.not_found_title")} description={ui("blog_detail.not_found_desc")} />
        <h1 className="text-2xl font-bold text-slate-900 mb-4">{ui("blog_detail.not_found_title")}</h1>
        <p className="text-slate-600 mb-8">{ui("blog_detail.not_found_desc")}</p>
        <Link to="/blog" className="text-brand-600 hover:text-brand-700 font-medium flex items-center justify-center">
           <ArrowLeft className="h-4 w-4 mr-2" /> {ui("blog_detail.back")}
        </Link>
      </div>
    );
  }

  const postTitle = t(post.title);
  const postExcerpt = t(post.excerpt);
  const postContent = t(post.content);

  const currentUrl = window.location.href;
  const shareText = encodeURIComponent(postTitle);
  const shareUrl = encodeURIComponent(currentUrl);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postTitle,
    "image": post.imageUrl ? [post.imageUrl] : [],
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Quality Tree Framework",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lucide.dev/favicon.ico" 
      }
    },
    "description": postExcerpt
  };

  const parseMarkdown = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      
      const linkParts = part.split(/(\[[^\]]+\]\([^)]+\))/g);
      
      return (
        <span key={index}>
          {linkParts.map((subPart, subIndex) => {
            const linkMatch = subPart.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (linkMatch) {
              return (
                <a 
                  key={subIndex} 
                  href={linkMatch[2]} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-600 hover:text-brand-800 underline decoration-brand-200 hover:decoration-brand-600 transition-all font-medium"
                >
                  {linkMatch[1]}
                </a>
              );
            }
            return subPart;
          })}
        </span>
      );
    });
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
        const trimmed = line.trim();
        if (trimmed === '') return <div key={index} className="h-4"></div>;
        if (trimmed.startsWith('### ')) return <h3 key={index} className="text-xl font-bold text-slate-900 mt-8 mb-4">{parseMarkdown(trimmed.replace('### ', ''))}</h3>;
        if (trimmed.startsWith('## ')) return <h2 key={index} className="text-2xl font-bold text-slate-800 mt-10 mb-5 pb-2 border-b border-slate-100">{parseMarkdown(trimmed.replace('## ', ''))}</h2>;
        if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) return <li key={index} className="ml-4 list-disc text-slate-700 mb-2 pl-2">{parseMarkdown(trimmed.substring(2))}</li>
        return <p key={index} className="mb-4 text-slate-700 leading-relaxed">{parseMarkdown(trimmed)}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <SEO 
        title={postTitle} 
        description={postExcerpt} 
        type="article" 
        imageUrl={post.imageUrl}
        author={post.author}
        publishedTime={post.date}
        schema={schema}
      />

      {post.imageUrl && (
        <div className="w-full h-64 md:h-96 relative bg-slate-900">
           <img 
             src={post.imageUrl} 
             alt={postTitle} 
             className="w-full h-full object-cover opacity-80"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
        </div>
      )}

      <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${post.imageUrl ? '-mt-20 relative z-10' : 'pt-12'}`}>
        <div className="flex justify-between items-center mb-6">
          <Link to="/blog" className="inline-flex items-center text-slate-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full hover:text-brand-600 transition-colors group shadow-sm border border-slate-200/50">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> {ui("blog_detail.back")}
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-8">
          <div className="p-8 md:p-12">
            <header className="mb-8 border-b border-slate-100 pb-8">
               <div className="flex flex-wrap items-center text-sm text-slate-500 mb-4 gap-4">
                <span className="flex items-center bg-slate-50 px-2 py-1 rounded"><Calendar className="h-4 w-4 mr-1.5 text-brand-500" /> {post.date}</span>
                <span className="flex items-center bg-slate-50 px-2 py-1 rounded"><User className="h-4 w-4 mr-1.5 text-brand-500" /> {post.author}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">{postTitle}</h1>
            </header>
            
            <div className="prose prose-slate prose-lg max-w-none">
              {renderContent(postContent)}
            </div>
            
            <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row items-center gap-6">
                <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                    <TreeDeciduous className="h-8 w-8" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{ui("blog_detail.dive_deeper_title")}</h3>
                    <p className="text-slate-600 text-sm mb-3">{ui("blog_detail.dive_deeper_desc")}</p>
                    <Link to="/framework" className="text-brand-600 hover:text-brand-800 font-semibold text-sm flex items-center">
                        {ui("blog_detail.to_framework")} <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                </div>
            </div>
          </div>
        </article>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-slate-700 font-medium">
            <Share2 className="h-5 w-5 mr-2 text-brand-600" />
            {ui("blog_detail.share")}
          </div>
          <div className="flex gap-3">
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006097] transition-colors text-sm font-medium"
            >
              <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              <Twitter className="h-4 w-4 mr-2" /> X / Twitter
            </a>
            <a 
              href={`mailto:?subject=${shareText}&body=Lies diesen Artikel: ${shareUrl}`}
              className="flex items-center justify-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
            >
              <Mail className="h-4 w-4 mr-2" /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
