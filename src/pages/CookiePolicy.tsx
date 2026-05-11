import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export const CookiePolicy = () => {
  return (
    <LegalPageLayout
      title="Cookies Policy"
      breadcrumbName="Cookies"
      lastUpdated="May 11, 2024"
      description="Learn about how we use cookies on PakToolsHub to enhance your experience."
    >
      <h2>What Are Cookies</h2>
      <p>
        As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. 
      </p>

      <h2>Disabling Cookies</h2>
      <p>
        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
      </p>

      <h2>The Cookies We Set</h2>
      <ul>
        <li>
          <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. To remember your preferences we need to set cookies (e.g. Dark Mode setting).
        </li>
      </ul>

      <h2>Third Party Cookies</h2>
      <p>
        In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
      </p>
      <ul>
        <li>
          <strong>Google Adsense:</strong> The Google AdSense service uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.
        </li>
        <li>
          <strong>Google Analytics:</strong> This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience.
        </li>
      </ul>

      <h2>More Information</h2>
      <p>
        Hopefully that has clarified things for you. As was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
      </p>
    </LegalPageLayout>
  );
};
