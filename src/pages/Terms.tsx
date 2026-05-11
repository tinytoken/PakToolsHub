import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const Terms = () => {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      breadcrumbName="Terms"
      lastUpdated="May 11, 2024"
      description="Read the terms of service governing the use of PakToolsHub platform and its free tools."
    >
      <h2>Welcome to PakToolsHub!</h2>
      <p>
        These terms and conditions outline the rules and regulations for the use of PakToolsHub's Website, located at <a href="https://paktoolshub.com">https://paktoolshub.com</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        We employ the use of cookies. By accessing PakToolsHub, you agreed to use cookies in agreement with the PakToolsHub's Privacy Policy.
      </p>

      <h2>License</h2>
      <p>
        Unless otherwise stated, PakToolsHub and/or its licensors own the intellectual property rights for all material on PakToolsHub. All intellectual property rights are reserved. You may access this from PakToolsHub for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      <p>You must not:</p>
      <ul>
        <li>Republish material from PakToolsHub</li>
        <li>Sell, rent or sub-license material from PakToolsHub</li>
        <li>Reproduce, duplicate or copy material from PakToolsHub</li>
        <li>Redistribute content from PakToolsHub</li>
      </ul>

      <h2>User Responsibilities</h2>
      <p>
        When using our PDF and Image tools, you represent that you have the legal right to the content you are uploading. PakToolsHub does not claim ownership of your files and processes them transiently.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        In no event shall PakToolsHub, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. PakToolsHub, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
      </p>

      <h2>Hyperlinking to our Content</h2>
      <p>
        The following organizations may link to our Website without prior written approval:
      </p>
      <ul>
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>Online directory distributors;</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        The tools are provided "as is," with all faults, and PakToolsHub expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website.
      </p>
    </LegalPageLayout>
  );
};
