import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const RefundPolicy = () => {
  return (
    <LegalPageLayout
      title="Refund Policy"
      breadcrumbName="Refund Policy"
      lastUpdated="May 11, 2024"
      description="Policy regarding refunds for services provided on PakToolsHub."
    >
      <h2>All Tools are Free</h2>
      <p>
        At <strong>PakToolsHub</strong>, we believe in providing value without boundaries. All the tools, calculators, and services currently hosted on our platform are <strong>100% free to use</strong> for all our visitors.
      </p>

      <h2>No Payment Processing</h2>
      <p>
        Since we do not charge our users for using the tools (Age Calculator, CGPA Calculator, PDF tools, etc.), we do not collect any payments, credit card information, or subscription fees.
      </p>

      <h2>Why No Refunds Apply</h2>
      <ul>
        <li>There are no subscription fees to refund.</li>
        <li>There are no "pro" features hidden behind a paywall.</li>
        <li>No one will ever ask you for money on PakToolsHub.com.</li>
      </ul>

      <h2>Donations</h2>
      <p>
        If we ever implement a "Buy me a Coffee" or donation system, please note that any voluntary contributions are non-refundable as they are considered gifts to support the server maintenance and development costs.
      </p>

      <h2>Advertising</h2>
      <p>
        We support our platform through advertising. If you have concerns about the ads shown by Google Adsense, please refer to our Privacy Policy. Clicking on ads is a third-party interaction and does not constitute a purchase from PakToolsHub.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this policy or if someone has fraudulent claimed to represent PakToolsHub for a payment, please contact us immediately at: <strong>support@paktoolshub.com</strong>.
      </p>
    </LegalPageLayout>
  );
};
