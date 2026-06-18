import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function InternationalCvFormat() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />


      <Helmet>
        <title>International CV Format 2026: How to Write a CV for Global Jobs | ApliSense</title>
          <meta
          name="description"
          content="Applying for Jobs abroad? Learn the best international CV format for 2026. Discover how to structure your CV for global employers and pass ATS screening systems."
          />


                  <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "International CV Format 2026: How to Write a CV for Global Jobs",
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
          International CV Format Guide for Global Job Applications
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    
          <p>
            
            When applying for jobs internationally, it is important to understand that CV expectations vary between countries. A resume that is acceptable in one country may not follow the standard structure expected by recruiters in another region.

            For example, CVs used in the United States are typically called resumes and are usually limited to one page for early-career applicants.
            </p>
            
            <p>
            These documents focus heavily on achievements, measurable results, and concise descriptions of professional experience.

            In the United Kingdom and many European countries, CVs are typically two pages long and may include additional sections such as professional profiles, certifications, and technical skills.
            
            </p>
            
            <p>Recruiters in these regions often expect a clear chronological structure that highlights both experience and education.

            In some countries, including parts of Europe and Asia, it may also be acceptable to include a professional photograph or personal details that would normally be excluded in countries like the United States.
            </p>
            <p>
            Because of these differences, international applicants should always research the preferred CV format for the country they are applying to.

            Another important factor is language and terminology. Certain job titles or skill descriptions may vary between regions, so adapting your wording to match the local industry terminology can improve your application.

            </p>

            <p>
            International job applications also require careful attention to formatting clarity. Recruiters reviewing global applications often scan resumes quickly, so using simple headings, bullet points, and clear spacing helps ensure your qualifications are easily understood.

            Preparing an internationally compatible CV increases your chances of successfully applying for jobs, graduate programs, and professional opportunities across different countries.
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