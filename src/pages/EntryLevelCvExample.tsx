import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
// import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

export default function EntryLevelCvExample() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg">
      <Helmet>
        <title>Entry Level CV Example 2026 | Beginner Resume Guide - ApliSense</title>
        <meta
            name="description"
            content="Entry-level CV example for 2026 with practical tips and structure. Ideal for graduates, students, and beginners applying for their first job."
            />
        <meta
            name="keywords"
            content="entry level CV example, beginner resume 2026, first job CV sample, student CV template"
            />
            <meta name="robots" content="index, follow" />
      </Helmet>

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-28 pb-24 px-6 flex-1">
        <div className='max-w-4xl mx-auto'>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            How to Write an Entry-Level CV for Jobs & Study Abroad(Complete Guide)
        </h1>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
            Step-by-Step Entry-Level CV Guide for Jobs and Study Abroad Applications
        </h2>

        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Creating a UK-standard CV is essential for job applications and
          university admissions. Recruiters in the UK prefer clear,
          structured, and concise CVs that highlight skills, education,
          and experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Personal Information
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Include your name, email, LinkedIn profile, and location.
          Do not include age, religion, or marital status.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Professional Summary
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Write a short summary tailored to your target job role or
          study abroad program.
        </p>

        {/* Internal Link to your tool */}
        <div className="mt-10 p-6 bg-accent-cyan/10 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">
            Analyze Your CV Instantly
          </h3>
          <a
            href="/"
            className="text-accent-cyan font-semibold underline"
          >
            Use ApliSense CV Analyzer →
          </a>
        </div>
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