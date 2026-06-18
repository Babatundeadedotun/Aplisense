import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function BlogIndex() {
  const { theme, toggleTheme } = useTheme();

  const posts = [
    {
      title: "How to Write a CV (Step-by-Step Guide)",
      link: "/blog/how-to-write-a-cv",
      description: "Learn how to structure a professional CV that recruiters actually read."
    },
    {
      title: "ATS Resume Keywords Explained",
      link: "/blog/ats-resume-keywords",
      description: "Understand how applicant tracking systems scan resumes."
    },
    {
      title: "Common CV Mistakes That Get You Rejected",
      link: "/blog/common-cv-mistakes",
      description: "Avoid the most common resume errors recruiters see."
    },
    {
      title: "Best CV Format for 2026",
      link: "/blog/best-cv-format-2026",
      description: "Modern CV structure used by recruiters and ATS systems."
    },
    {
      title: "How to Pass ATS Screening",
      link: "/blog/how-to-pass-ats",
      description: "Improve your resume score in applicant tracking systems."
    },
    {
      title: "Complete Cover Letter Guide",
      link: "/blog/cover-letter-guide",
      description: "Learn how to write a strong cover letter."
    },
    {
      title: "LinkedIn Profile Optimization",
      link: "/blog/linkedin-profile-optimization",
      description: "Make your LinkedIn profile visible to recruiters."
    },
    {
      title: "International CV Format Guide",
      link: "/blog/international-cv-format",
      description: "Learn CV standards for UK, USA, Canada and Europe."
    },
    {
      title: "Resume vs CV Explained",
      link: "/blog/resume-vs-cv",
      description: "Understand the key difference between resumes and CVs."
    },
    {
      title: "Top Skills for Remote Jobs",
      link: "/blog/skills-for-remote-jobs",
      description: "Important skills needed to land remote jobs."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Career Advice & CV Writing Blog
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.link}
              to={post.link}
              className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-6 hover:border-accent-cyan transition"
            >
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                {post.title}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {post.description}
              </p>
            </Link>
          ))}
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