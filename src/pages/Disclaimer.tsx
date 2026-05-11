import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const Disclaimer = () => {
  return (
    <LegalPageLayout
      title="Disclaimer"
      breadcrumbName="Disclaimer"
      lastUpdated="May 11, 2024"
      description="Legal disclaimer for usage of tools and information provided on PakToolsHub."
    >
      <p>
        If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <strong>support@paktoolshub.com</strong>.
      </p>

      <h2>Disclaimers for PakToolsHub</h2>
      <p>
        All the information on this website - <a href="https://paktoolshub.com">https://paktoolshub.com</a> - is published in good faith and for general information purpose only. PakToolsHub does not make any warranties about the completeness, reliability and accuracy of this information. 
      </p>
      <p>
        Any action you take upon the information you find on this website (PakToolsHub), is strictly at your own risk. PakToolsHub will not be liable for any losses and/or damages in connection with the use of our website.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        The tools on this website (including but not limited to the Salary Tax Calculator, Zakat Calculator, and Loan EMI Calculator) are for informational purposes only and do not constitute financial, legal, or religious advice. 
      </p>
      <p>
        While we strive for accuracy, tax laws and religious rulings (Masail) can be complex and subject to change. Always consult with a certified professional (Chartered Accountant, Lawyer, or Religious Scholar) before making significant decisions.
      </p>

      <h2>External Links</h2>
      <p>
        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our disclaimer and agree to its terms.
      </p>

      <h2>Update</h2>
      <p>
        Should we update, amend or make any changes to this document, those changes will be prominently posted here.
      </p>
    </LegalPageLayout>
  );
};
