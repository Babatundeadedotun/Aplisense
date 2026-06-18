import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function CommonCvMistakes() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />


      <Helmet>
        <title>Common CV Mistakes to Avoid in 2026: Boost Your Interview Chances | ApliSense</title>
          <meta
          name="description"
          content="Learn about common CV mistakes and how to fix them. Avoid errors that prevent your resume from standing out."
          />


                  <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Top CV Mistakes to Avoid in 2026: Boost Your Interview Chances",
          "author": {
            "@type": "Organization",
            "name": "ApliSense"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ApliSense"
          },
        "datePublished": "2026-03-08",
        "dateModified": "2026-03-08"
          }
          `}
          </script>
        </Helmet>


      <main className="max-w-3xl mx-auto px-6 pt-32 pb-16">

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          10 Common CV Mistakes That Prevent Interviews
        </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">

          <p>
          Many job seekers struggle to get interviews not because they lack qualifications, but because their CV contains avoidable mistakes. If you're unsure how to structure your CV correctly, start with our 
          <Link to="/blog/best-cv-format-2026" className="text-accent-cyan hover:underline"> guide to the best CV format for 2026</Link>.
          </p>

          <p>
          One of the most common issues is poor formatting. Recruiters often scan resumes quickly, and cluttered layouts make it difficult to identify important information. A well structured document is essential for both recruiters and 
          <Link to="/blog/how-to-pass-ats" className="text-accent-cyan hover:underline"> applicant tracking systems (ATS)</Link>.
          </p>

          <p>
          Spelling and grammar errors also create a negative impression and suggest a lack of attention to detail. Before submitting applications, it is important to review your CV carefully or run it through a professional analysis tool.
          </p>

          <p>
          Another mistake is failing to include measurable achievements. Instead of listing responsibilities, describe results such as increased revenue, improved efficiency, or successful project delivery.
          </p>

          <p>
          Many resumes are also rejected because they do not contain the right keywords. Learning how 
          <Link to="/blog/ats-resume-keywords" className="text-accent-cyan hover:underline"> ATS resume keywords work</Link> 
          can significantly improve your chances of passing automated screening.
          </p>

          </div>


         {/* Conversion CTA */}

        <div className="mt-12 p-6 border rounded-xl bg-gray-100 dark:bg-dark-card">

          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Check If Your CV Passes ATS Systems
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Upload your CV to ApliSense and get an instant AI-powered resume analysis.
          </p>

          <Link
            to="/"
            className="inline-block px-6 py-3 bg-accent-cyan text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Analyze My CV
          </Link>

        </div>

      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <Link to='/'><Sparkles className="w-4 h-4 text-white" /></Link>
              </div>
              <Link to='/'><span className="font-bold text-gray-900 dark:text-white">ApliSense</span></Link>
            </div>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <Link to="/about" className="hover:text-accent-cyan transition-colors">About</Link>
              <Link to="/privacy" className="hover:text-accent-cyan transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-accent-cyan transition-colors">Terms & Conditions</Link>
              <Link to="/contact" className="hover:text-accent-cyan transition-colors">Contact</Link>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © 2026 ApliSense. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}