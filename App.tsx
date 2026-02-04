
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Framework from './pages/Framework';
import BranchDetail from './pages/BranchDetail';
import Author from './pages/Author';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import AppTool from './pages/AppTool';
import FAQ from './pages/FAQ';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/framework" element={<Framework />} />
                <Route path="/framework/:id" element={<BranchDetail />} />
                <Route path="/author" element={<Author />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPostDetail />} />
                <Route path="/app" element={<AppTool />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
