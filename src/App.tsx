import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ToolsList } from './pages/ToolsList';
import { ToolPage } from './pages/ToolPage';
import { BlogList } from './pages/BlogList';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Disclaimer } from './pages/Disclaimer';
import { Terms } from './pages/Terms';
import { RefundPolicy } from './pages/RefundPolicy';
import { DMCAPolicy } from './pages/DMCAPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { EditorialPolicy } from './pages/EditorialPolicy';
import { Accessibility } from './pages/Accessibility';

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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/dmca" element={<DMCAPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/editorial" element={<EditorialPolicy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/category/:categoryId" element={<ToolsList />} /> {/* Simplified for demo */}
            <Route path="*" element={<div className="py-40 text-center font-bold text-4xl dark:text-white">404 - Page Not Found</div>} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
