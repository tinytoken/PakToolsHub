import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      breadcrumbName="Privacy"
      lastUpdated="May 11, 2024"
      description="Read how PakToolsHub protects your data and maintains your privacy while using our online tools."
    >
      <p>
        At <strong>PakToolsHub</strong>, accessible from <a href="https://paktoolshub.com">paktoolshub.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PakToolsHub and how we use it.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </p>

      <h2>Information we collect</h2>
      <p>
        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
      </p>
      <p>
        When you use our tools (like the Age Calculator or Zakat Calculator), the data stays in your browser. We do not transmit or store the values you enter in our calculation tools to our servers.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>Provide, operate, and maintain our website.</li>
        <li>Improve, personalize, and expand our website.</li>
        <li>Understand and analyze how you use our website.</li>
        <li>Develop new products, services, features, and functionality.</li>
        <li>Send you emails for support and updates (only if you contact us).</li>
        <li>Find and prevent fraud.</li>
      </ul>

      <h2>Log Files</h2>
      <p>
        PakToolsHub follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
      </p>

      <h2>Google DoubleClick DART Cookie</h2>
      <p>
        Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to PakToolsHub and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a>
      </p>

      <h2>Our Advertising Partners</h2>
      <p>
        Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:
      </p>
      <ul>
        <li>Google Adsense</li>
      </ul>

      <h2>GDPR Data Protection Rights</h2>
      <p>
        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
      </p>
      <ul>
        <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
        <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
        <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
      </ul>
    </LegalPageLayout>
  );
};
