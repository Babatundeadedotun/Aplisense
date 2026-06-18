import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ResumeVsCv() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />



      <Helmet>
        <title>Resume vs CV: What's the Difference in 2026? | ApliSense</title>
          <meta
          name="description"
          content="Resume vs CV: Learn the key differences and when to use each in 2026. Discover which format employers expect and how to structure your document for job applications."
          />


                  <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Resume vs CV: What's the difference in 2026?",
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
          Resume vs CV: Understanding the Difference
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            The terms “resume” and “CV” are often used interchangeably, but they actually refer to different types of professional documents.

            A resume is typically a concise summary of a candidate’s professional experience, skills, and achievements.
            </p>
            
            <p>In most cases, resumes are limited to one page, particularly for early-career professionals.

            Resumes are widely used in countries such as the United States and Canada. They are designed to be brief, targeted, and tailored for specific job applications.
            </p>

            <p>
            A CV, which stands for Curriculum Vitae, is usually more detailed than a resume. CVs provide a comprehensive overview of a person’s academic background, work experience, certifications, publications, and professional achievements.

            CVs are commonly used in the United Kingdom, Europe, and for academic or research positions worldwide.
            </p>
            <p>
            The key difference lies in length and purpose. Resumes focus on concise summaries for job applications, while CVs provide a more complete record of professional and academic history.

            Understanding which document format is expected by employers in your region is important when preparing job applications.
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