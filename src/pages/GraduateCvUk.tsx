import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
// import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

export default function GraduateCvUk() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg">
      <Helmet>
        <title>UK Grauduate CV Guide 2026 | First Job CV Tips - ApliSense</title>
        <meta
            name="description"
            content="Learn how to write a powerful UK graduate CV in 2026. Perfect for first jobs, internships, and entry-level roles in competitive industries."
            />
        <meta
        name="keywords"
        content="UK graduate CV, first job CV UK, graduate resume 2026, entry level CV UK"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header theme={theme} toggleTheme={toggleTheme} />

        <main className="pt-28 pb-24 px-6 flex-1">
        <div className='max-w-4xl mx-auto'>
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            How to Write a Winning UK Graduate CV for Jobs & Study Abroad
            </h1>

                <h2 className="text-2xl font-semibold mt-8 mb-4">
            2026 UK Graduate CV Tips for Job Seekers
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
            A graduate CV in the UK is designed for students and recent graduates with limited
            work experience. Employers expect a strong focus on education, academic projects,
            internships, and transferable skills rather than long employment history.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            What UK Recruiters Look for in Graduate CVs
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
            UK recruiters prioritize problem-solving ability, communication skills,
            technical competence, and internship experience. For international graduates,
            highlighting global education, adaptability, and digital skills significantly
            improves employability in the UK job market.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
            Best Sections for a UK Graduate CV
            </h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Education (Most important section)</li>
            <li>Academic Projects</li>
            <li>Internships & Volunteer Experience</li>
            <li>Technical Skills</li>
            <li>Certifications (Cisco, Google, etc.)</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-400 mt-4">
            Graduates applying for competitive roles like cybersecurity, finance, and
            technology should also include measurable achievements, such as project outcomes,
            certifications, and portfolio links to stand out.
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