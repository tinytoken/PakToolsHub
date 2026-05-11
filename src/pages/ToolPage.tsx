import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { TOOLS } from '../data/tools';
import { TOOL_SEO } from '../data/seoContent';
import { ToolLayout } from '../components/ToolLayout';
import { AgeCalculator } from '../tools/AgeCalculator';
import { ZakatCalculator } from '../tools/ZakatCalculator';
import { CGPACalculator } from '../tools/CGPACalculator';

const TOOL_COMPONENTS: Record<string, React.ReactNode> = {
  'age-calculator': <AgeCalculator />,
  'zakat-calculator': <ZakatCalculator />,
  'cgpa-calculator': <CGPACalculator />,
};

// Generic fallback Tool UI for those not yet fully implemented with custom logic
const ComingSoonTool = ({ name }: { name: string }) => (
  <div className="text-center py-20">
    <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
      <span className="text-4xl">🛠️</span>
    </div>
    <h3 className="text-2xl font-bold dark:text-white mb-2">{name} is Coming Soon!</h3>
    <p className="text-slate-500 dark:text-slate-400">Our engineers are working hard to bring this professional tool to you.</p>
  </div>
);

export const ToolPage = () => {
  const { toolId } = useParams();
  const tool = TOOLS.find(t => t.id === toolId);
  const seo = toolId ? TOOL_SEO[toolId] : null;

  if (!tool) return <Navigate to="/404" />;

  const howToUse = seo?.howToUse || [
    `Open the ${tool.name} from PakToolsHub.`,
    "Enter the required details in the input fields provided.",
    "The tool will automatically process the data or click 'Calculate'.",
    "View your results instantly on the screen.",
    "Reset the tool if you wish to perform another calculation."
  ];

  const benefits = seo?.benefits || [
    "100% Free to use forever",
    "No registration or login required",
    "Mobile-friendly and responsive design",
    "Accurate results based on latest standards",
    "Private and secure data processing",
    "Fast loading and easy to understand"
  ];

  const faqs = seo?.faqs || [
    { question: `Is ${tool.name} free to use?`, answer: "Yes, all tools on PakToolsHub are completely free for everyone." },
    { question: "Is my data stored on your servers?", answer: "No, we value your privacy. All calculations happen locally in your browser." },
    { question: `How accurate is the ${tool.name}?`, answer: `Our ${tool.name} is designed with precision in mind and follows industry standard algorithms.` }
  ];

  return (
    <ToolLayout 
      tool={tool}
      howToUse={howToUse}
      benefits={benefits}
      faqs={faqs}
    >
      <div className="tool-content">
        {/* Dynamic Tool Title for SEO */}
        <div className="sr-only">
          <h2>{seo?.h1 || tool.name}</h2>
          <p>{seo?.intro || tool.description}</p>
        </div>
        
        {TOOL_COMPONENTS[tool.id] || <ComingSoonTool name={tool.name} />}
      </div>
    </ToolLayout>
  );
};
