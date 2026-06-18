import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
// import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

export default function UkCvFormat() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <Helmet>
        <title>UK CV Format 2026 | Jobs & Study Abroad CV Guide - ApliSense</title>
        <meta
            name="description"
            content="Discover the correct UK CV format for 2026. Learn structure, ATS tips, and job-winning examples for UK jobs and university applications."
            />
        <meta
          name="keywords"
          content="UK CV format 2026, CV for UK jobs, ATS friendly CV UK, UK resume, study abroad CV, ApliSense CV guide"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-28 pb-24 px-6 flex-1">
        <div className='max-w-4xl mx-auto'>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          UK CV Format: Complete Guide for Jobs & Study Abroad
        </h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
                What is a UK CV Format?
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                A UK CV format is a structured professional document used when applying for jobs,
                internships, and university programs in the United Kingdom. Unlike some countries,
                UK recruiters prefer concise CVs that are typically 1–2 pages long and focused on
                skills, achievements, and relevant experience rather than personal details.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                Standard UK CV Structure (2026)
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                The modern UK CV in 2026 follows a clean ATS-friendly structure. Employers and
                universities increasingly use Applicant Tracking Systems (ATS), meaning your CV
                must be keyword-optimized, well-organized, and easy to scan.
                </p>

                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Personal Details (Name, Email, LinkedIn, Location)</li>
                <li>Professional Summary (3–4 lines tailored to role)</li>
                <li>Key Skills (Relevant technical and soft skills)</li>
                <li>Work Experience (Reverse chronological order)</li>
                <li>Education (Degree, Institution, Year)</li>
                <li>Certifications & Projects</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                UK CV vs International CV (Important for Study Abroad Students)
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                International students applying to UK universities or jobs must adapt their CV
                to UK standards. Photos, date of birth, gender, religion, and marital status
                should NOT be included. UK employers value merit-based evaluation and skills-focused
                profiles instead of personal demographics.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                ATS Optimization Tips (Very Important in 2026)
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                To pass automated CV screening systems, use clear section headings, relevant
                keywords from the job description, and simple formatting. Avoid graphics, tables,
                and complex layouts because they reduce ATS readability and can lower your CV score.
                </p>
            </div>
      </main>

      {/* <Footer /> */}
       <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
              <a href='/'><Sparkles className="w-4 h-4 text-white" /></a>
            </div>
            <a href='/'><span className="font-bold text-gray-900 dark:text-white">ApliSense</span></a>
          </div>

          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="/about" className="hover:text-accent-cyan">About</a>
            <a href="/privacy" className="hover:text-accent-cyan">Privacy</a>
            <a href="/terms" className="hover:text-accent-cyan">Terms & Conditions</a>
            <a href="/contact" className="hover:text-accent-cyan">Contact</a>
          </div>

          <p className="text-sm text-gray-400 dark:text-gray-500">
            © 2026 ApliSense. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}