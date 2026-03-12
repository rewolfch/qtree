import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = React.lazy(() => import('../pages/Home'));
const Blog = React.lazy(() => import('../pages/Blog'));
const BlogPostDetail = React.lazy(() => import('../pages/BlogPostDetail'));
const Framework = React.lazy(() => import('../pages/Framework'));
const BranchDetail = React.lazy(() => import('../pages/BranchDetail'));
const AppTool = React.lazy(() => import('../pages/AppTool'));
const AdminCreatePost = React.lazy(() => import('../pages/AdminCreatePost'));
const Author = React.lazy(() => import('../pages/Author'));
const FAQ = React.lazy(() => import('../pages/FAQ'));

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div></div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPostDetail />} />
                  <Route path="/framework" element={<Framework />} />
                  <Route path="/framework/:id" element={<BranchDetail />} />
                  <Route path="/app" element={<AppTool />} />
                  <Route path="/admin" element={<AdminCreatePost />} />
                  <Route path="/author" element={<Author />} />
                  <Route path="/faq" element={<FAQ />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
