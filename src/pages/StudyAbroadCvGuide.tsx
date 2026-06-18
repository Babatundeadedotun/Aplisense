import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
// import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

export default function StudyAbroadCvGuide() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg">
      <Helmet>
        <title>Study Abroad CV Guide 2026 | University Applications - ApliSense</title>
        <meta
            name="description"
            content="Complete study abroad CV guide for 2026. Learn how to structure your academic CV for UK, USA, and European university applications."
            />
        <meta
        name="keywords"
        content="study abroad CV, academic CV example, university application CV, international student CV"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-28 pb-24 px-6 flex-1">
        <div className='max-w-4xl mx-auto'>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Study Abroad CV Guide 2026: How to Write a Winning CV for UK, USA, Canada & Europe
        </h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            What a Study Abroad CV is and Why It's Crucial for University Applications
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
            A study abroad CV is used for university applications, scholarships,
            and international academic programs. Unlike job CVs, academic CVs focus
            more on education, research, academic achievements, and extracurricular
            activities.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            Key Sections for a Study Abroad CV
            </h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Academic Profile & Education History</li>
            <li>Research Projects & Publications</li>
            <li>Leadership & Extracurricular Activities</li>
            <li>Certifications and Online Courses</li>
            <li>Career Goals & Personal Statement Summary</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            CV Tips for International Students (Nigeria & Global Applicants)
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
            Students applying abroad should highlight academic excellence, leadership,
            community impact, and global skills. Universities in the UK and Europe
            value structured CVs that demonstrate clarity, ambition, and alignment
            with the chosen course of study.
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