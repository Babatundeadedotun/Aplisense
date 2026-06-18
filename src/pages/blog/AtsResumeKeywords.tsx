import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AtsResumeKeywords() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Helmet>
        <title>ATS Resume Keywords | ApliSense</title>

        <meta
          name="description"
          content="Learn how ATS resume keywords help recruiters filter CVs and how to optimize your resume to pass applicant tracking systems."
        />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ATS Resume Keywords: How Recruiters Filter CVs",
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
          ATS Resume Keywords: How Recruiters Filter CVs
        </h1>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">

          <p>
            Applicant Tracking Systems (ATS) are widely used by companies to filter and rank job applications.
            These systems scan resumes for keywords that match the requirements listed in the job description.
            If your CV does not contain the right keywords, it may never reach a human recruiter.
          </p>

          <p>
            Keywords typically include job titles, industry terminology, technical skills, certifications,
            and specific tools used in the profession. For example, a{" "}
            <Link
              to="/resume-keywords/software-engineer"
              className="text-accent-cyan hover:underline"
            >
              software engineer resume
            </Link>{" "}
            may require keywords such as JavaScript, React, APIs, and Git.
          </p>

          <p>
            For analytical roles, the keywords can be different. A{" "}
            <Link
              to="/resume-keywords/data-analyst"
              className="text-accent-cyan hover:underline"
            >
              data analyst resume
            </Link>{" "}
            might require terms like SQL, Python, Tableau, Excel, and data visualization.
          </p>

          <p>
            Security professionals must also optimize their resumes for ATS systems. If you are applying for
            cybersecurity roles, it helps to include keywords commonly found in{" "}
            <Link
              to="/resume-keywords/cybersecurity-analyst"
              className="text-accent-cyan hover:underline"
            >
              cybersecurity analyst resumes
            </Link>{" "}
            such as threat detection, SIEM tools, incident response, and network security.
          </p>

          <p>
            Management positions rely on another set of keywords. Recruiters often look for terms found in{" "}
            <Link
              to="/resume-keywords/project-manager"
              className="text-accent-cyan hover:underline"
            >
              project manager resumes
            </Link>{" "}
            including Agile methodology, stakeholder management, sprint planning, and risk management.
          </p>

          <p>
            Including these keywords naturally within your experience descriptions and skills section
            improves the likelihood that your application will be recognized as relevant by automated
            screening systems.
          </p>

          <p>
            However, keyword stuffing should be avoided. Instead, integrate keywords naturally within
            your experience descriptions, achievements, and technical skills.
          </p>

          <p>
            Tools like <strong>ApliSense</strong> help identify missing keywords by comparing your CV
            against the requirements of your target job role and highlighting gaps that may prevent
            your resume from passing ATS filters.
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
                <Link to="/">
                  <Sparkles className="w-4 h-4 text-white" />
                </Link>
              </div>

              <Link to="/">
                <span className="font-bold text-gray-900 dark:text-white">
                  ApliSense
                </span>
              </Link>
            </div>

            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <Link to="/about" className="hover:text-accent-cyan transition-colors">About</Link>
              <Link to="/privacy" className="hover:text-accent-cyan transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-accent-cyan transition-colors">Terms & Conditions</Link>
              <Link to="/contact" className="hover:text-accent-cyan transition-colors">Contact</Link>
            </div>

            <p className="text-sm text-gray-400 dark:text-gray-500">
              ©️ 2026 ApliSense. All rights reserved.
            </p>

          </div>
        </div>
      </footer>

    </div>
  );
}