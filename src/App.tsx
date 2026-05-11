import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ToolsList } from './pages/ToolsList';
import { ToolPage } from './pages/ToolPage';
import { BlogList } from './pages/BlogList';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<ToolsList />} />
            <Route path="/tool/:toolId" element={<ToolPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/category/:categoryId" element={<ToolsList />} /> {/* Simplified for demo */}
            <Route path="*" element={<div className="py-40 text-center font-bold text-4xl dark:text-white">404 - Page Not Found</div>} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
