
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { LocalizedString } from '../types';

export type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (content: LocalizedString | string, key?: string) => string;
  ui: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// UI Translations Dictionary
const uiTranslations: Record<string, Record<Language, string>> = {
  "nav.title": { de: "Quality Tree Framework", en: "Quality Tree Framework" },
  
  "nav.home": { de: "Home", en: "Home" },
  "nav.framework": { de: "Framework", en: "Framework" },
  "nav.blog": { de: "Blog", en: "Blog" },
  "nav.author": { de: "Autor", en: "Author" },
  "nav.app": { de: "QTF App", en: "QTF App" },
  "nav.book": { de: "Buch", en: "Book" },
  "nav.course": { de: "Kurs", en: "Course" },
  "nav.faq": { de: "FAQ & Definitionen", en: "FAQ & Definitions" },
  
  "hero.badge": { de: "Jetzt als Bestseller erhältlich", en: "Now available as Bestseller" },
  "hero.title_start": { de: "Qualität ist", en: "Quality is" },
  "hero.title_end": { de: "Wachstum.", en: "Growth." },
  "hero.desc": { de: "Das strategische Bauplan für moderne Softwarequalität, Automatisierung und echtes Business-Wachstum.", en: "The strategic blueprint for modern software quality, automation, and real business growth." },
  "hero.cta_book": { de: "Buch bestellen", en: "Order Book" },
  "hero.cta_framework": { de: "Das Framework entdecken", en: "Explore Framework" },
  "hero.stat_practices": { de: "Best Practices", en: "Best Practices" },
  "hero.stat_dimensions": { de: "Dimensionen", en: "Dimensions" },
  "hero.stat_rating": { de: "Bewertung", en: "Rating" },

  "home.journey.title": { de: "Vom Samen zum Wald.", en: "From Seed to Forest." },
  "home.journey.desc": { de: "Softwarequalität ist kein statisches Ziel, sondern ein Ökosystem. Der Quality Tree gibt dir die Struktur, um dieses System zu steuern.", en: "Software quality is not a static goal, but an ecosystem. The Quality Tree gives you the structure to manage this system." },
  
  "home.journey.level1": { de: "Ebene 01", en: "Level 01" },
  "home.journey.roots.title": { de: "Wurzeln: Kultur & Werte", en: "Roots: Culture & Values" },
  "home.journey.roots.desc": { de: "Ohne die richtige Einstellung zur Qualität hilft die beste Technologie nicht. Wir pflanzen Prinzipien, die das Team über Jahre hinweg tragen.", en: "Without the right mindset towards quality, even the best technology won't help. We plant principles that sustain the team for years." },

  "home.journey.level2": { de: "Ebene 02", en: "Level 02" },
  "home.journey.trunk.title": { de: "Stamm: Architektur & CI/CD", en: "Trunk: Architecture & CI/CD" },
  "home.journey.trunk.desc": { de: "Der Stamm ist das Rückgrat. Automatisierte Pipelines und eine skalierbare Architektur tragen die Last Ihrer digitalen Produkte.", en: "The trunk is the backbone. Automated pipelines and a scalable architecture support the load of your digital products." },

  "home.journey.level3": { de: "Ebene 03", en: "Level 03" },
  "home.journey.branches.title": { de: "Äste: Die 8 Themengebiete", en: "Branches: The 8 Domains" },
  "home.journey.branches.desc": { de: "Von Deployment-Praktiken bis zum Test-Management. Wir strukturieren die Komplexität in greifbare Wissensbereiche.", en: "From deployment practices to test management. We structure complexity into tangible areas of knowledge." },
  "home.journey.branches.link": { de: "Die Äste erkunden", en: "Explore the Branches" },

  "home.journey.level4": { de: "Ebene 04", en: "Level 04" },
  "home.journey.forest.title": { de: "Wald: Der volle Umfang", en: "Forest: The Full Scope" },
  "home.journey.forest.desc": { de: "Das Ziel ist ein selbsterhaltendes Ökosystem. Mit 90 Praktiken erreichen Sie eine Qualität, die den Markt anführt.", en: "The goal is a self-sustaining ecosystem. With 90 practices, you achieve quality that leads the market." },

  "home.check.title": { de: "Schnell-Check.", en: "Quick Check." },
  "home.check.desc": { de: "Wie hoch ist der Grad Ihrer Testautomatisierung im Durchschnitt?", en: "What is your average degree of test automation?" },
  "home.check.result": { de: "Ergebnis & Empfehlung", en: "Result & Recommendation" },
  "home.check.low": { de: "Basis vorhanden, aber Skalierung fehlt. Ihr Tree braucht jetzt stabilere Wurzeln in der CI/CD Architektur. Lesen Sie Kapitel 4 im Buch.", en: "Foundation present, but scaling is missing. Your tree needs stronger roots in CI/CD architecture. Read Chapter 4." },
  "home.check.high": { de: "Exzellente Performance! Sie sind bereit für AI-gestütztes Testing. Kapitel 8 liefert Ihnen die notwendigen Deep Dives.", en: "Excellent performance! You are ready for AI-supported testing. Chapter 8 provides the necessary deep dives." },
  "home.check.cta_app": { de: "Vollständiges Assessment", en: "Full Assessment" },
  "home.check.cta_book": { de: "Lösungsbuch kaufen", en: "Buy Solution Book" },

  "home.author.badge": { de: "Der Kopf hinter dem System", en: "The Mind Behind the System" },
  "home.author.title": { de: "Vom Workshop zur Weltbühne.", en: "From Workshop to World Stage." },
  "home.author.desc": { de: "Serge Baumberger (Co-CEO Infometis AG) hat in über 25 Jahren hunderte QA-Teams begleitet. Der Quality Tree ist die Essenz dieser Erfahrung – jetzt komprimiert in einem Buch und einer interaktiven App.", en: "Serge Baumberger (Co-CEO Infometis AG) has guided hundreds of QA teams over 25 years. The Quality Tree is the essence of this experience – now compressed into a book and an interactive app." },
  "home.author.meeting_title": { de: "1:1 Gespräch", en: "1:1 Meeting" },
  "home.author.meeting_desc": { de: "Strategie-Checkup vereinbaren.", en: "Schedule strategy checkup." },
  "home.author.keynote_title": { de: "Keynote Speaker", en: "Keynote Speaker" },
  "home.author.bio_link": { de: "Biographie lesen", en: "Read Biography" },

  "framework.title": { de: "Das Framework.", en: "The Framework." },
  "framework.subtitle": { de: "8 Äste, 90 Praktiken. Finden Sie genau die Themenbereiche, die Ihr Team heute voranbringen.", en: "8 Branches, 90 Practices. Find exactly the topics that move your team forward today." },
  "framework.search_placeholder": { de: "Nach Themen suchen (z.B. CI/CD, Automatisierung, AI...)", en: "Search topics (e.g., CI/CD, Automation, AI...)" },
  "framework.results": { de: "Ergebnisse", en: "Results" },
  "framework.no_results": { de: "Keine Äste gefunden", en: "No branches found" },
  "framework.discover": { de: "Levels entdecken", en: "Discover Levels" },
  "framework.cta_title": { de: "Bereit, Ihren Baum zu pflanzen?", en: "Ready to plant your tree?" },
  "framework.cta_desc": { de: "Nutzen Sie das Assessment-Tool, um Ihren IST-Zustand zu visualisieren.", en: "Use the assessment tool to visualize your current state." },
  "framework.cta_btn": { de: "Zum Assessment Tool", en: "Go to Assessment Tool" },

  "branch.back": { de: "Zurück zur Übersicht", en: "Back to Overview" },
  "branch.dimension": { de: "Framework Dimension", en: "Framework Dimension" },
  "branch.levels": { de: "Reifestufen (Levels)", en: "Maturity Levels (Levels)" },
  "branch.cta": { de: "Assessment starten", en: "Start Assessment" },

  "app.welcome": { de: "Willkommen", en: "Welcome" },
  "app.project_name": { de: "Projektname", en: "Project Name" },
  "app.owner": { de: "Verantwortlicher", en: "Owner" },
  "app.start": { de: "Start Assessment", en: "Start Assessment" },
  "app.score": { de: "Maturity Score", en: "Maturity Score" },
  "app.leaves": { de: "leaves", en: "leaves" },
  "app.search_nodes": { de: "Suche...", en: "Search..." },
  "app.view_map": { de: "Netzwerk", en: "Network" },
  "app.view_list": { de: "Liste", en: "List" },
  "app.export": { de: "Report", en: "Report" },
  "app.view": { de: "View", en: "View" },
  "app.assess": { de: "Assess", en: "Assess" },
  "app.discipline": { de: "Disziplin wählen", en: "Select Discipline" },
  "app.back": { de: "Zurück", en: "Back" },
  "app.expand_all": { de: "Alles ausklappen", en: "Expand All" },
  "app.collapse_all": { de: "Alles einklappen", en: "Collapse All" },
  "app.completed": { de: "abgeschlossen", en: "completed" },
  "app.description": { de: "Beschreibung", en: "Description" },
  "app.prerequisites": { de: "Voraussetzungen", en: "Prerequisites" },
  "app.okrs": { de: "Akzeptanzkriterien (OKRs)", en: "Acceptance Criteria (OKRs)" },
  "app.not_relevant": { de: "Nicht relevant", en: "Not relevant" },
  "app.in_progress": { de: "In Arbeit", en: "In Progress" },
  "app.done": { de: "Erledigt", en: "Done" },
  "app.reason_na": { de: "Warum ist dieser Punkt nicht relevant?", en: "Why is this item not relevant?" },
  "app.reason_placeholder": { de: "Begründung eingeben...", en: "Enter reason..." },
  "app.confirm": { de: "Bestätigen", en: "Confirm" },
  "app.cancel": { de: "Abbrechen", en: "Cancel" },
  "app.ai_placeholder": { de: "Frage etwas...", en: "Ask something..." },
  "app.ast": { de: "AST", en: "BRANCH" },
  "app.level": { de: "Level", en: "Level" },
  "app.list_view_placeholder": { de: "Listenansicht Platzhalter (Implementierung ähnlich der Kartenansicht)", en: "List View Placeholder (Implementation similar to Map View logic)" },
  
  "author.badge": { de: "Die Vision hinter dem Baum", en: "The Vision Behind the Tree" },
  "author.quote_main": { de: "\"Qualität ist kein Endzustand, sondern ein kontinuierlicher Wachstumsprozess, den man gestalten muss.\"", en: "\"Quality is not a final state, but a continuous growth process that must be managed.\"" },
  "author.bio_p1": { de: "Seit über zwei Jahrzehnten widmet sich Serge Baumberger der Transformation von IT-Organisationen. Als Co-CEO der Infometis AG begleitet er Unternehmen dabei, Softwarequalität nicht als technisches Problem, sondern als strategischen Wettbewerbsvorteil zu begreifen.", en: "For over two decades, Serge Baumberger has dedicated himself to the transformation of IT organizations. As Co-CEO of Infometis AG, he guides companies to perceive software quality not as a technical problem, but as a strategic competitive advantage." },
  "author.bio_p2": { de: "Mit dem Quality Tree Framework hat er seine Erfahrungen aus hunderten Projekten in eine Methode übersetzt, die heute als Standardwerk für modernes Quality Engineering gilt.", en: "With the Quality Tree Framework, he has translated his experience from hundreds of projects into a method that is now considered a standard for modern Quality Engineering." },
  "author.book_meeting": { de: "Termin buchen", en: "Book Appointment" },
  "author.thanks_title": { de: "Danksagung & Inspiration.", en: "Acknowledgments & Inspiration." },
  "author.thanks_p1": { de: "Jeder Baum braucht festen Boden. Mein Dank gilt der Infometis AG, die mir den Raum gab, dieses Framework zu entwickeln und in echten Projekten zu verfeinern.", en: "Every tree needs solid ground. My thanks go to Infometis AG for giving me the space to develop this framework and refine it in real projects." },
  "author.thanks_p2": { de: "Das Quality Tree Framework ist das Ergebnis tausender Diskussionen, gelöster Bugs und strategischer Weichenstellungen der letzten 25 Jahre. Es ist mein Versuch, all das Wissen, das mir geschenkt wurde, zurückzugeben – als klarer, wachsender Bauplan für andere.", en: "The Quality Tree Framework is the result of thousands of discussions, resolved bugs, and strategic decisions over the last 25 years. It is my attempt to give back all the knowledge I have been gifted – as a clear, growing blueprint for others." },
  "author.quote_footer": { de: "\"Ein Baum wächst nicht über Nacht, aber mit der richtigen Struktur erreicht er Dimensionen, die zuvor unvorstellbar waren.\"", en: "\"A tree doesn't grow overnight, but with the right structure, it reaches dimensions previously unimaginable.\"" },
  "author.next_talk": { de: "Next Talk", en: "Next Talk" },

  "blog.header_title": { de: "Insights & Strategy.", en: "Insights & Strategy." },
  "blog.header_desc": { de: "Aktuelle Gedanken zu Quality Engineering, Leadership und Erfahrungen aus der Praxis direkt vom Autor des Quality Tree Frameworks.", en: "Current thoughts on Quality Engineering, Leadership, and practical experiences directly from the author of the Quality Tree Framework." },
  "blog.search_placeholder": { de: "Nach Artikeln suchen (z.B. Testing, AI, Leadership...)", en: "Search articles (e.g., Testing, AI, Leadership...)" },
  "blog.results": { de: "Ergebnisse", en: "Results" },
  "blog.read_more": { de: "Beitrag lesen", en: "Read article" },
  "blog.no_results_title": { de: "Keine Artikel gefunden", en: "No articles found" },
  "blog.no_results_desc": { de: "Versuchen Sie es mit einem anderen Suchbegriff.", en: "Try a different search term." },
  "blog.reset_search": { de: "Suche zurücksetzen", en: "Reset search" },

  "blog_detail.not_found_title": { de: "Artikel nicht gefunden", en: "Article not found" },
  "blog_detail.not_found_desc": { de: "Der gesuchte Blog-Artikel existiert leider nicht.", en: "The requested blog article does not exist." },
  "blog_detail.back": { de: "Zurück zum Blog", en: "Back to Blog" },
  "blog_detail.dive_deeper_title": { de: "Möchtest du tiefer eintauchen?", en: "Want to dive deeper?" },
  "blog_detail.dive_deeper_desc": { de: "Erkunde das Framework und verstehe die Zusammenhänge.", en: "Explore the framework and understand the connections." },
  "blog_detail.to_framework": { de: "Zum Quality Tree Framework", en: "Go to Quality Tree Framework" },
  "blog_detail.share": { de: "Diesen Artikel teilen", en: "Share this article" },

  "footer.rights": { de: "All rights reserved.", en: "All rights reserved." },
  "footer.connect": { de: "Connect", en: "Connect" },
  "footer.explore": { de: "Explore", en: "Explore" },

  "seo.framework.title": { de: "Framework Explorer", en: "Framework Explorer" },
  "seo.framework.description": { de: "Erkunden Sie die Struktur des Quality Tree Frameworks.", en: "Explore the Quality Tree Framework structure." },
  "seo.blog.title": { de: "Quality Engineering Blog & Strategie", en: "Quality Engineering Blog & Strategy" },
  "seo.app.title": { de: "Assessment App", en: "Assessment App" },
  "seo.app.description": { de: "Bewerten Sie Ihre Softwarequalität mit dem interaktiven Quality Tree Tool.", en: "Assess your software quality with the interactive Quality Tree tool." },
  "seo.faq.title": { de: "FAQ & Wissen", en: "FAQ & Knowledge" },
  "seo.faq.description": { de: "Häufig gestellte Fragen und Definitionen zum Quality Tree Framework für Teams und KI-Kontext.", en: "Frequently asked questions and definitions about the Quality Tree Framework for teams and AI context." },

  "faq.title": { de: "Wissen & Kontext", en: "Knowledge & Context" },
  "faq.subtitle": { de: "Definitionen, Antworten und Kontext für Menschen und Maschinen.", en: "Definitions, answers, and context for humans and machines." },
  "faq.q1": { de: "Was ist das Quality Tree Framework?", en: "What is the Quality Tree Framework?" },
  "faq.a1": { de: "Das Quality Tree Framework (QTF) ist ein strategisches Modell für Softwarequalität, entwickelt von Serge Baumberger. Es visualisiert Qualität als Baum: Wurzeln (Kultur), Stamm (Architektur), Äste (Dimensionen) und Blätter (Praktiken). Es hilft Teams, von manuellem Testen zu skalierbarer Quality Engineering zu wachsen.", en: "The Quality Tree Framework (QTF) is a strategic model for software quality developed by Serge Baumberger. It visualizes quality as a tree: Roots (Culture), Trunk (Architecture), Branches (Dimensions), and Leaves (Practices). It helps teams grow from manual testing to scalable Quality Engineering." },
  "faq.q2": { de: "Wer ist der Autor?", en: "Who is the author?" },
  "faq.a2": { de: "Serge Baumberger, Co-CEO der Infometis AG, ist der Schöpfer des Frameworks. Er verfügt über 25+ Jahre Erfahrung in QA, Testing und Agiler Transformation.", en: "Serge Baumberger, Co-CEO of Infometis AG, is the creator of the framework. He has 25+ years of experience in QA, testing, and agile transformation." },
  "faq.q3": { de: "Was sind die 8 Dimensionen (Äste)?", en: "What are the 8 Dimensions (Branches)?" },
  "faq.a3": { de: "Die 8 Äste sind: Configuration Management, Unit Testing, Build Practices, Deployment Practices, Test Automation, Virtualization, Manual Testing und Test Management.", en: "The 8 branches are: Configuration Management, Unit Testing, Build Practices, Deployment Practices, Test Automation, Virtualization, Manual Testing, and Test Management." },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    const savedLang = localStorage.getItem('qtf-lang');
    if (savedLang === 'en' || savedLang === 'de') {
      setLanguage(savedLang);
    } else {
      // Auto-detect
      const browserLang = navigator.language.startsWith('de') ? 'de' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('qtf-lang', lang);
  };

  // Helper for content objects {de: "...", en: "..."}
  const t = (content: LocalizedString | string, key?: string): string => {
    if (typeof content === 'object' && content !== null && 'de' in content) {
      return content[language] || content['de'];
    }
    // Fallback if string is passed but might be a key
    if (typeof content === 'string') {
        // If it matches a UI key directly
        if (uiTranslations[content]) return uiTranslations[content][language];
        return content;
    }
    return '';
  };

  // Helper for UI keys only
  const ui = (key: string): string => {
    return uiTranslations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, ui }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
