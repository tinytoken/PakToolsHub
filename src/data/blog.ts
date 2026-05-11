export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-calculate-cgpa',
    title: 'How to Calculate CGPA: A Step-by-Step Guide',
    excerpt: 'Learn the easiest way to calculate your CGPA for Pakistani universities.',
    date: '2024-05-10',
    category: 'Student Tips',
    content: `CGPA (Cumulative Grade Point Average) is a critical metric for university students in Pakistan...`
  },
  {
    slug: 'best-online-tools-for-students',
    title: 'Best Online Tools for Students in Pakistan',
    excerpt: 'Top 10 essential tools every Pakistani student should use in 2024.',
    date: '2024-05-08',
    category: 'Productivity',
    content: `Being a student today requires more than just textbooks...`
  },
  {
    slug: 'how-to-compress-images-online',
    title: 'How to Compress Images Online Without Quality Loss',
    excerpt: 'Why image compression matters for your website and how to do it right.',
    date: '2024-05-05',
    category: 'Design',
    content: `Images are often the heaviest part of a webpage...`
  }
];
