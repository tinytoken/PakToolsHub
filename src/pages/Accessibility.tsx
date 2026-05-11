import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const Accessibility = () => {
  return (
    <LegalPageLayout
      title="Accessibility Statement"
      breadcrumbName="Accessibility"
      lastUpdated="May 11, 2024"
      description="PakToolsHub's commitment to making digital tools accessible for everyone in Pakistan."
    >
      <h2>Our Goal</h2>
      <p>
        <strong>PakToolsHub</strong> is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
      </p>

      <h2>Conformance Status</h2>
      <p>
        The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We strive to maintain WCAG 2.1 level AA conformance.
      </p>

      <h2>Features for Accessibility</h2>
      <ul>
        <li><strong>High Contrast:</strong> Our professional polish theme includes a high-contrast dark mode to assist users with visual sensitivities.</li>
        <li><strong>Responsive Text:</strong> Our design allows for browser zooming without breaking the layout.</li>
        <li><strong>Semantic HTML:</strong> We use proper HTML tags to ensure screen readers can navigate our tools and blog accurately.</li>
        <li><strong>Keyboard Navigation:</strong> Our interactive tools are designed to be navigable via Tab keys.</li>
      </ul>

      <h2>Ongoing Efforts</h2>
      <p>
        We understand that accessibility is an ongoing journey. We regularly test our tools with various assistive technologies to identify and fix barriers.
      </p>

      <h2>Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of PakToolsHub. Please let us know if you encounter accessibility barriers on our site:
      </p>
      <ul>
        <li>Email: <strong>accessibility@paktoolshub.com</strong></li>
      </ul>
      <p>
        We try to respond to feedback within 5 business days.
      </p>
    </LegalPageLayout>
  );
};
