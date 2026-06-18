import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function SkillsForRemoteJobs() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />


      <Helmet>
        <title>Top Skills for Remote Jobs in 2026: What Employers Look For | ApliSense</title>
          <meta
          name="description"
          content="Discover the most in-demand skills for remote jobs in 2026. Learn which skills employers look for in remote workers and how to highlight them on your CV."
          />


                  <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Top skills for Remote Jobs in 2026: What Employers Look For",
          "author": {
            "@type": "Organization",
            "name": "ApliSense"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ApliSense"
          }
          }
          `}
          </script>
        </Helmet>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16">

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Top Skills Needed for Remote Jobs
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">

        <p>
        Remote work has become increasingly common across many industries. Professionals applying for remote roles must demonstrate strong communication, organization, and technical skills.
        </p>

        <p>
        Employers evaluating remote candidates often rely on both CVs and LinkedIn profiles. Learning 
        <Link to="/blog/linkedin-profile-optimization" className="text-accent-cyan hover:underline"> how to optimize your LinkedIn profile</Link> 
        can improve your chances of being discovered by recruiters.
        </p>

        <p>
        When applying for remote positions, your resume should highlight relevant technical skills similar to those used in 
        <Link to="/resume-keywords/software-engineer" className="text-accent-cyan hover:underline"> software engineering roles</Link> 
        or 
        <Link to="/resume-keywords/data-analyst" className="text-accent-cyan hover:underline"> data analysis positions</Link>.
        </p>

        <p>
        Employers also look for time management, accountability, and independent problem solving. Structuring your experience using the 
        <Link to="/blog/best-cv-format-2026" className="text-accent-cyan hover:underline"> best CV format</Link> 
        can help highlight these qualities effectively.
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

          <a
            href="/"
            className="inline-block px-6 py-3 bg-accent-cyan text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Analyze My CV
          </a>

        </div>

      </main>

       {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <a href='/'><Sparkles className="w-4 h-4 text-white" /></a>
              </div>
              <a href='/'><span className="font-bold text-gray-900 dark:text-white">ApliSense</span></a>
            </div>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <a href="/about" className="hover:text-accent-cyan transition-colors">About</a>
              <a href="/privacy" className="hover:text-accent-cyan transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-accent-cyan transition-colors">Terms & Conditions</a>
              <a href="/contact" className="hover:text-accent-cyan transition-colors">Contact</a>
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