export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  path: string;
  icon: string;
}

export const CATEGORIES = [
  { id: 'calculators', name: 'Calculator Tools', description: 'Advanced calculators for daily needs.' },
  { id: 'students', name: 'Student Tools', description: 'Essential utilities for Pakistani students.' },
  { id: 'pakistan', name: 'Pakistan Utility Tools', description: 'Tools specific to Pakistani laws and systems.' },
  { id: 'pdf', name: 'PDF Tools', description: 'Fast and secure PDF processing.' },
  { id: 'image', name: 'Image Tools', description: 'Optimize and convert images.' },
  { id: 'seo', name: 'SEO Tools', description: 'Improve your website search rankings.' },
];

export const TOOLS: Tool[] = [
  { id: 'age-calculator', name: 'Age Calculator', description: 'Calculate your exact age in years, months, and days.', category: 'calculators', path: '/tool/age-calculator', icon: 'Clock' },
  { id: 'cgpa-calculator', name: 'CGPA Calculator', description: 'Calculate your CGPA based on semester credits and grades.', category: 'students', path: '/tool/cgpa-calculator', icon: 'GraduationCap' },
  { id: 'matric-percentage', name: 'Matric Percentage Calculator', description: 'Calculate percentage and grade for Matric/SSC results.', category: 'students', path: '/tool/matric-percentage', icon: 'Calculator' },
  { id: 'zakat-calculator', name: 'Zakat Calculator Pakistan', description: 'Calculate Zakat based on current gold/silver prices and assets.', category: 'pakistan', path: '/tool/zakat-calculator', icon: 'Coins' },
  { id: 'salary-tax', name: 'Salary Tax Calculator Pakistan', description: 'Latest FBR income tax calculator for Pakistani employees.', category: 'pakistan', path: '/tool/salary-tax', icon: 'Banknote' },
  { id: 'loan-emi', name: 'Loan EMI Calculator', description: 'Estimate monthly loan repayments with interest.', category: 'calculators', path: '/tool/loan-emi', icon: 'Landmark' },
  { id: 'electricity-bill', name: 'Electricity Bill Estimator', description: 'Estimate your K-Electric, LESCO, IESCO bill based on units.', category: 'pakistan', path: '/tool/electricity-bill', icon: 'Zap' },
  { id: 'image-compressor', name: 'Image Compressor', description: 'Reduce image file size without losing quality.', category: 'image', path: '/tool/image-compressor', icon: 'Image' },
  { id: 'jpg-to-png', name: 'JPG to PNG Converter', description: 'Convert your JPG images to PNG format instantly.', category: 'image', path: '/tool/jpg-to-png', icon: 'FileImage' },
  { id: 'pdf-merge', name: 'PDF Merge Tool', description: 'Combine multiple PDF files into a single document.', category: 'pdf', path: '/tool/pdf-merge', icon: 'FileMerge' },
  { id: 'word-counter', name: 'Word Counter', description: 'Count words, characters, and sentences in your text.', category: 'seo', path: '/tool/word-counter', icon: 'Type' },
  { id: 'meta-generator', name: 'Meta Tag Generator', description: 'Generate SEO meta tags for your website.', category: 'seo', path: '/tool/meta-generator', icon: 'Search' },
];
