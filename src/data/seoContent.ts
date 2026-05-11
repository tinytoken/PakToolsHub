export interface SEOContent {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  nlpKeywords: string[];
  faqs: { question: string; answer: string }[];
  howToUse: string[];
  benefits: string[];
}

export const CATEGORY_SEO: Record<string, SEOContent> = {
  calculators: {
    title: "Free Online Calculators - Precision Tools for Daily Needs",
    metaDescription: "Access 100% free professional online calculators. From age to EMI, get accurate results instantly with PakToolsHub's advanced math utilities.",
    h1: "Professional Online Calculator Suite",
    intro: "Navigating complex calculations shouldn't be a hassle. Our suite of professional calculators is designed for precision, speed, and ease of use. Whether you're managing personal finances or academic deadlines, we provide the numerical clarity you need.",
    nlpKeywords: ["mathematical precision", "instant calculation", "accuracy guarantee", "user-friendly interface", "real-time results"],
    faqs: [
      { question: "Are these calculators accurate?", answer: "Yes, our calculators use standard industry algorithms and are regularly tested for mathematical precision." },
      { question: "Do I need to pay for any calculator?", answer: "No, all tools on PakToolsHub are 100% free for everyone." }
    ],
    howToUse: ["Select a calculator", "Enter your data", "View instant results"],
    benefits: ["Save time", "Eliminate errors", "Free access"]
  },
  students: {
    title: "Best Student Tools for Pakistan - CGPA, Percentage & Grade Calculators",
    metaDescription: "Empowering Pakistani students with free tools for CGPA calculation, Matric percentage, and academic planning. Built for HEC and BISE standards.",
    h1: "Ultimate Academic Utility Hub for Students",
    intro: "Education in Pakistan is competitive. We help you stay ahead by providing specialized tools to track your grades, calculate percentages, and plan your academic journey using local university and board standards.",
    nlpKeywords: ["HEC standards", "BISE Lahore", "GPA to CGPA", "Matric results", "University grading", "academic success"],
    faqs: [
      { question: "Does the CGPA calculator work for all universities?", answer: "It follows the standard 4.0 scale used by HEC-recognized universities in Pakistan." },
      { question: "Can I use these tools on my phone?", answer: "Yes, PakToolsHub is fully optimized for mobile devices." }
    ],
    howToUse: ["Choose your academic tool", "Input your marks/grades", "Check your performance"],
    benefits: ["HEC Compliance", "Mobile Friendly", "Instant Academic Tracking"]
  },
  pakistan: {
    title: "Pakistan Utility Tools - Salary Tax, Zakat & Electricity Estimators",
    metaDescription: "Free utility tools for Pakistani citizens. Calculate FBR Salary Tax (2024-25), Zakat on Gold/Silver, and estimate Electricity bills (LESCO, K-Electric).",
    h1: "Pakistan Digital Utility Services",
    intro: "Staying compliant with local taxes and managing household utility costs is now easier. Our Pakistan-specific tools are updated with the latest FBR slabs and utility rates to give you reliable estimates.",
    nlpKeywords: ["FBR Tax Slabs 2024", "Zakat Nisab Pakistan", "K-Electric Bill Calculator", "LESCO", "IESCO", "Utility Estimation"],
    faqs: [
      { question: "Is the Salary Tax updated for 2024-25?", answer: "Yes, we update our tax slabs as soon as the Federal Budget is announced and gazetted." },
      { question: "How is Zakat Nisab calculated?", answer: "We use current market estimates for gold and silver prices in Pakistan." }
    ],
    howToUse: ["Select Pakistan Utility", "Enter current rates or values", "Analyze your financial impact"],
    benefits: ["Local Compliance", "Updated Data", "Financial Clarity"]
  }
};

export const TOOL_SEO: Record<string, SEOContent> = {
  'age-calculator': {
    title: "Age Calculator Online - Find Your Exact Age (Years, Months, Days)",
    metaDescription: "Calculate your exact age from date of birth. Our free age calculator shows your age in years, months, weeks, days, and even minutes.",
    h1: "Precision Age Calculator",
    intro: "Our Age Calculator is a highly precise tool that determines your exact age chronologically. Whether for official documents or personal curiosity, get your age breakdown in seconds.",
    nlpKeywords: ["chronological age", "birth date", "age in days", "leap year calculation", "time elapsed"],
    faqs: [
      { question: "How does the age calculator handle leap years?", answer: "Our algorithm accurately accounts for leap years to provide a precise day-count." },
      { question: "Can I calculate age for historical dates?", answer: "Yes, you can input any past date to find the age or duration." }
    ],
    howToUse: [
      "Select your birth date from the calendar picker.",
      "Click the 'Calculate Age' button.",
      "Review your age in years, months, and days instantly."
    ],
    benefits: [
      "Extremely Accurate",
      "Calculates Leap Years",
      "Instant Results",
      "Privacy Focused"
    ]
  },
  'zakat-calculator': {
    title: "Zakat Calculator Pakistan 2024 - Calculate Your Zakat Instantly",
    metaDescription: "Free online Zakat calculator for Pakistan. Calculate Zakat on gold, silver, cash, and business assets based on current Nisab values.",
    h1: "Islamic Zakat Calculator (Pakistan)",
    intro: "Perform your religious duty with precision. Our Zakat calculator helps you determine your Zakat Al-Maal based on the 2.5% rate and current Nisab thresholds in Pakistan.",
    nlpKeywords: ["Zakat Al-Maal", "Nisab threshold", "2.5% Charity", "Islamic Finance", "Asset Calculation"],
    faqs: [
      { question: "What is Nisab for 2024?", answer: "Nisab is usually based on 52.5 tolas of silver or 7.5 tolas of gold. Our tool estimates this based on current market rates." },
      { question: "Is my financial data saved?", answer: "No, your financial inputs never leave your browser for your privacy and security." }
    ],
    howToUse: [
      "Enter your cash, gold weight, and silver weight.",
      "Subtract any immediate liabilities or debts.",
      "View the calculated Zakat if it exceeds the Nisab."
    ],
    benefits: [
      "Shariah Compliant Logic",
      "Local PKR Support",
      "Private & Secure",
      "Updated Nisab Guidance"
    ]
  },
  'salary-tax': {
    title: "FBR Salary Tax Calculator 2024-25 - Pakistan Income Tax",
    metaDescription: "Calculate your monthly and annual income tax in Pakistan. Latest FBR tax slabs for 2024-2025 included for salaried individuals.",
    h1: "FBR Salary Tax Calculator (Latest)",
    intro: "Stay informed about your take-home pay. Our calculator uses the latest Federal Board of Revenue (FBR) tax brackets for the current fiscal year to give you accurate monthly and annual tax deductions.",
    nlpKeywords: ["FBR Tax Slabs", "Taxable Income", "Income Tax Ordinance", "Take-home pay", "Pakistani Taxpayer"],
    faqs: [
      { question: "Are tax slabs updated for 2024-25?", answer: "Yes, we integrate the latest budget announcements into our tool." },
      { question: "Does this handle non-salaried income?", answer: "This specific tool is optimized for salaried individuals under current FBR laws." }
    ],
    howToUse: [
      "Enter your gross monthly salary in PKR.",
      "The tool automatically calculates the relevant slabs.",
      "View your tax breakdown: Monthly and Yearly."
    ],
    benefits: [
      "FBR Compliant",
      "Updated Slabs",
      "Precise Breakdown",
      "Mobile Ready"
    ]
  }
};
