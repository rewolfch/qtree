import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Framework from './pages/Framework';
import AppTool from './pages/AppTool';
import Author from './pages/Author';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BranchDetail from './pages/BranchDetail';
import LevelDetail from './pages/LevelDetail';
import BlogPostDetail from './pages/BlogPostDetail';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/framework" element={<Framework />} />
                <Route path="/framework/:id" element={<BranchDetail />} />
                <Route path="/framework/:branchId/level/:levelId" element={<LevelDetail />} />
                <Route path="/app" element={<AppTool />} />
                <Route path="/author" element={<Author />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPostDetail />} />
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
