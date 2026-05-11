import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const DMCAPolicy = () => {
  return (
    <LegalPageLayout
      title="DMCA Policy"
      breadcrumbName="DMCA"
      lastUpdated="May 11, 2024"
      description="Digital Millennium Copyright Act policy for PakToolsHub users and copyright holders."
    >
      <p>
        PakToolsHub respects the intellectual property rights of others. We expect our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond expeditiously to claims of copyright infringement.
      </p>

      <h2>Copyright Infringement Notification</h2>
      <p>
        If you are a copyright owner, or are authorized to act on behalf of one, please report alleged copyright infringements taking place on or through the site by completing a notice of alleged infringement and delivering it to our designated agent.
      </p>

      <h2>What to Include in Your Notice</h2>
      <ol>
        <li>Identify the copyrighted work that you claim has been infringed.</li>
        <li>Identify the material that you claim is infringing (Provide the URL).</li>
        <li>Your contact information (Name, Address, Email).</li>
        <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner.</li>
        <li>A statement that the information in the notification is accurate.</li>
        <li>Your physical or electronic signature.</li>
      </ol>

      <h2>Delivery of Notice</h2>
      <p>
        All DMCA notices should be sent to: <strong>dmca@paktoolshub.com</strong>.
      </p>

      <h2>Counter-Notification</h2>
      <p>
        If you believe that your content was removed by mistake or misidentification, you may submit a counter-notification to us. Please ensure you include your contact details and a statement of why the removal was wrong.
      </p>

      <h2>Note to Users</h2>
      <p>
        Please be aware that PakToolsHub is a tool service. We do not host user-generated content on our main tools (like PDF combining). Files are processed and deleted. If the infringement is in a blog post or a specific tool description, please report it immediately.
      </p>
    </LegalPageLayout>
  );
};
