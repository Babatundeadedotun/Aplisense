import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HowToWriteCv() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />


<Helmet>
        <title>How to Write a CV in 2026: Step-by-Step Guide to Land Interviews | ApliSense</title>
          <meta
          name="description"
          content="Learn How to Write a professional CV in 2026 with our step-by-step guide. Discover the best CV structure, examples, and tips to impress recruiters and pass ATS systems."
          />


                  <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How to Write a CV in 2026: Step-by-step Guide to Land Interviews",
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
          How to Write a CV That Gets Interviews in 2026
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">

        <p>
        Writing a strong CV is one of the most important steps in securing a job interview. If you are new to resume writing, understanding the 
        <Link to="/blog/best-cv-format-2026" className="text-accent-cyan hover:underline"> best CV format for modern hiring systems</Link> 
        is an excellent place to start.
        </p>

        <p>
        A professional CV should clearly present your experience, achievements, and skills in a structure that is easy for both recruiters and automated screening systems to understand.
        </p>

        <p>
        Many companies now rely on automated filters to review applications. Learning 
        <Link to="/blog/how-to-pass-ats" className="text-accent-cyan hover:underline"> how to pass ATS screening</Link> 
        can significantly increase your chances of reaching a recruiter.
        </p>

        <p>
        Your work experience should appear in reverse chronological order and focus on measurable achievements. For example, increasing revenue, improving operational efficiency, or delivering successful projects.
        </p>

        <p>
        Finally, always review your CV for errors. Avoid common formatting and content problems highlighted in our article on 
        <Link to="/blog/common-cv-mistakes" className="text-accent-cyan hover:underline"> common CV mistakes</Link>.
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