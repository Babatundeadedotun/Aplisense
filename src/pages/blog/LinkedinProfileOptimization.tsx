import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function LinkedinProfileOptimization() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Helmet>
        <title>Linkedin Profile Optimization 2026: Get Noticed by Recruiters | ApliSense</title>
          <meta
          name="description"
          content="Learn how to optimize your Linkedin profile in 2026 to attract recruiters, improve search visibility, and increase job opportunities with proven optimization strategies."
          />


                  <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Linkedin Profile Optimization 2026: Get Noticed by Recruiters",
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
          LinkedIn Profile Optimization for Job Seekers
        </h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">

      <p>
      LinkedIn has become one of the most important professional networking platforms in the world. Recruiters often review LinkedIn profiles alongside resumes before scheduling interviews.
      </p>

      <p>
      Optimizing your LinkedIn profile should complement a strong CV. If you haven't structured your resume yet, start with our 
      <Link to="/blog/how-to-write-a-cv" className="text-accent-cyan hover:underline"> guide on writing a professional CV</Link>.
      </p>

      <p>
      Your headline should include relevant skills and keywords that match job searches performed by recruiters. These keywords are similar to the ones used in 
      <Link to="/blog/ats-resume-keywords" className="text-accent-cyan hover:underline"> ATS optimized resumes</Link>.
      </p>

      <p>
      Your experience section should highlight measurable achievements and skills just like a well-structured CV. Following the 
      <Link to="/blog/best-cv-format-2026" className="text-accent-cyan hover:underline"> best CV structure</Link> 
      can help ensure consistency between your profile and resume.
      </p>

      <p>
      A well optimized LinkedIn profile works together with your CV to strengthen your professional brand and improve your visibility to recruiters.
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