import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function CoverLetterGuide() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />


       <Helmet>
        <title>Ultimate Cover Letter Guide 2026: Land Interviews Faster | ApliSense</title>
          <meta
          name="description"
          content="Learn how to write a cover letter that impress recruiters and helps you land your dream job."
          />


                  <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ultimate Cover Letter Guide 2026: Land Interviews Faster",
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
          Complete Cover Letter Writing Guide
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
          A cover letter is an important component of many job applications. While the CV provides a structured overview of your experience, the cover letter allows you to explain why you are the right candidate for a specific role.

          A strong cover letter should be concise, personalized, and directly relevant to the job you are applying for.
          </p>

          <p>
          Begin with a professional greeting and a brief introduction explaining the position you are applying for. Mention where you discovered the job opportunity and express your interest in the company.

          The next paragraph should highlight your most relevant experience and skills.
          </p>
          
          <p>
            Instead of repeating information from your CV, focus on explaining how your background aligns with the company’s needs.

          Using specific examples can make your cover letter more persuasive. For example, you may describe a project where you improved efficiency, increased sales, or successfully solved a complex problem.

          Another important element is demonstrating knowledge of the company.
          </p>
          
          <p>
            Employers appreciate candidates who show genuine interest in their mission, values, and industry.

          Conclude your cover letter by thanking the employer for considering your application and expressing your interest in discussing the opportunity further.
          </p>

          <p>
          A well-written cover letter complements your CV and helps recruiters understand the value you can bring to their organization.
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