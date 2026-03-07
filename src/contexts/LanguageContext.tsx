import React, { createContext, useContext, ReactNode, useState } from 'react';
import { LocalizedString } from '../types';

interface LanguageContextType {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
  ui: (key: string) => string;
  t: (content: LocalizedString | string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  const ui = (key: string) => {
    const translations: Record<string, string> = {
      "nav.title": "Quality Tree Framework",
      "hero.badge": "OFFICIAL FRAMEWORK",
      "hero.title_start": "Grow Your",
      "hero.title_end": "Quality",
      "hero.desc": "A strategic blueprint for software quality, growth, and automation.",
      "hero.cta_book": "Buy the Book",
      "hero.cta_framework": "Explore Framework",
      "hero.stat_practices": "Practices",
      "hero.stat_dimensions": "Dimensions",
      "hero.stat_rating": "Rating",
      "home.journey.title": "The Growth Journey",
      "home.journey.desc": "From roots to forest, see how quality evolves.",
      "home.journey.level1": "Level 1",
      "home.journey.roots.title": "Roots",
      "home.journey.roots.desc": "Establishing the foundation.",
      "home.journey.level2": "Level 2",
      "home.journey.trunk.title": "Trunk",
      "home.journey.trunk.desc": "Building core strength.",
      "home.journey.level3": "Level 3",
      "home.journey.branches.title": "Branches",
      "home.journey.branches.desc": "Expanding reach.",
      "home.journey.branches.link": "Learn more",
      "home.journey.level4": "Level 4",
      "home.journey.forest.title": "Forest",
      "home.journey.forest.desc": "Ecosystem at scale.",
      "home.check.title": "Pulse Check",
      "home.check.desc": "How healthy is your quality culture?",
      "home.check.result": "Result",
      "home.check.low": "Needs attention.",
      "home.check.high": "Doing great!",
      "home.check.cta_app": "Get the App",
      "home.check.cta_book": "Get the Book",
      "home.services.badge": "SERVICES",
      "home.services.title": "Professional Assessment",
      "home.services.desc": "Get a professional assessment of your quality maturity.",
      "home.services.feature1": "Expert Analysis",
      "home.services.feature2": "Roadmap Creation",
      "home.services.feature3": "Team Workshops",
      "home.services.cta": "Learn More",
      "home.author.badge": "AUTHOR",
      "home.author.title": "Meet the Author",
      "home.author.desc": "Serge Baumberger is a leading expert in software quality.",
      "home.author.meeting_title": "Book a Meeting",
      "home.author.meeting_desc": "Discuss your quality strategy.",
      "home.author.keynote_title": "Keynote Speaker",
      "home.author.bio_link": "Read Bio",
      "author.bio_p1": "Serge Baumberger is the creator of the Quality Tree Framework.",
      "author.badge": "AUTHOR",
      "author.quote_main": "Quality is not an act, it is a habit.",
      "author.bio_p2": "He has over 20 years of experience in the industry.",
      "author.book_meeting": "Book Meeting",
      "author.thanks_title": "Thank You",
      "author.thanks_p1": "Thanks for visiting.",
      "author.thanks_p2": "Hope you find value here.",
      "author.quote_footer": "Keep growing.",
      "author.next_talk": "Next Talk",
      "blog_detail.not_found_title": "Post Not Found",
      "blog_detail.not_found_desc": "The post you are looking for does not exist.",
      "blog_detail.back": "Back to Blog",
      "blog_detail.dive_deeper_title": "Dive Deeper",
      "blog_detail.dive_deeper_desc": "Explore the framework in detail.",
      "blog_detail.to_framework": "Go to Framework",
      "blog_detail.share": "Share this post",
    };
    return translations[key] || key;
  };

  const t = (content: LocalizedString | string) => {
    if (typeof content === 'string') return content;
    return content[language] || content['en'] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, ui, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
