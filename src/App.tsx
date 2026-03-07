import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Author from './pages/Author';
import BlogPostDetail from './pages/BlogPostDetail';

// Placeholder components for missing pages
const Framework = () => <div className="p-20 text-center"><h1 className="text-4xl font-bold">Framework Page</h1><p>Coming Soon</p></div>;
const AppPage = () => <div className="p-20 text-center"><h1 className="text-4xl font-bold">App Page</h1><p>Coming Soon</p></div>;
const Blog = () => <div className="p-20 text-center"><h1 className="text-4xl font-bold">Blog Page</h1><p>Coming Soon</p></div>;

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link to="/" className="font-bold text-xl text-slate-900">Quality Tree</Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-slate-600 hover:text-brand-600">Home</Link>
          <Link to="/framework" className="text-slate-600 hover:text-brand-600">Framework</Link>
          <Link to="/author" className="text-slate-600 hover:text-brand-600">Author</Link>
          <Link to="/blog" className="text-slate-600 hover:text-brand-600">Blog</Link>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} Quality Tree Framework. All rights reserved.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/author" element={<Author />} />
                <Route path="/framework" element={<Framework />} />
                <Route path="/app" element={<AppPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPostDetail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
