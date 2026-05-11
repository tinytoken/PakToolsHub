import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const EditorialPolicy = () => {
  return (
    <LegalPageLayout
      title="Editorial Policy"
      breadcrumbName="Editorial"
      lastUpdated="May 11, 2024"
      description="Our guidelines for creating and verifying content for the PakToolsHub blog and tool descriptions."
    >
      <h2>Our Commitment to Accuracy</h2>
      <p>
        At <strong>PakToolsHub</strong>, we take the information we provide seriously. Whether it's a guide on how to calculate CGPA or a tutorial on image compression, our goal is to provide accurate, up-to-date, and helpful content for our Pakistani audience.
      </p>

      <h2>Content Creation Process</h2>
      <ul>
        <li><strong>Research:</strong> Every article and guide starts with deep research into official sources, such as HEC grading policies, FBR tax notifications, and technical documentation.</li>
        <li><strong>Verification:</strong> Tool descriptions and "How-To" guides are tested by our team to ensure the steps perfectly match the tool's behavior.</li>
        <li><strong>Human-Centric Writing:</strong> We avoid generic AI-generated fluff. Our content is written for humans, by humans, focusing on readability and clarity.</li>
      </ul>

      <h2>Correction Policy</h2>
      <p>
        If we find an error in our content—or if a user points one out—we commit to updating the article or tool description as quickly as possible. We regularly audit our finance-based tools (like Salary Tax) whenever the Government of Pakistan releases a new budget or finance bill.
      </p>

      <h2>Transparency</h2>
      <p>
        We are transparent about our tools. If a tool has a limitation (e.g., maximum file size for PDF merging), we state it clearly. We do not promote unethical use of tools.
      </p>

      <h2>Feedback</h2>
      <p>
        We value your input. If you believe any of our editorial content is misleading or outdated, please reach out to us at <strong>editorial@paktoolshub.com</strong>.
      </p>
    </LegalPageLayout>
  );
};
