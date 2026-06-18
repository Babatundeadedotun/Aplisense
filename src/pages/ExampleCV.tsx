import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';

export default function ExampleCV() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-white dark:bg-dark-card p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-dark-border">

          {/* Header */}
          <div className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              John Doe
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Software Engineer | Cybersecurity Enthusiast
            </p>
            <p className="text-sm text-gray-500">
              London, UK | johndoe@email.com | LinkedIn.com/in/johndoe
            </p>
          </div>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Results-driven software engineer with strong experience in web development,
              cybersecurity fundamentals, and AI-powered applications. Skilled in React,
              JavaScript, and modern ATS-optimized CV strategies with a passion for building
              scalable digital solutions.
            </p>
          </section>

          {/* Key Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Key Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
              <li>• JavaScript & React</li>
              <li>• Cybersecurity Basics</li>
              <li>• CV Optimization</li>
              <li>• AI Tools Integration</li>
              <li>• Problem Solving</li>
              <li>• Data Analysis</li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
            <div className="mb-4">
              <h3 className="font-bold">Frontend Developer – Tech Solutions Ltd</h3>
              <p className="text-sm text-gray-500">2023 – Present</p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Developed responsive web applications using React and TypeScript</li>
                <li>Improved UI performance by 35% through optimization</li>
                <li>Collaborated with cross-functional teams to deliver scalable features</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p className="text-gray-600 dark:text-gray-400">
              BSc Computer Engineering – Glasgow Caledonian University (Expected)
            </p>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>Cisco Networking Basics – Cisco Networking Academy</li>
              <li>Cybersecurity Fundamentals</li>
            </ul>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
              <li>ApliSense – AI CV Analyzer Web Application</li>
              <li>Portfolio Website with SEO Optimization</li>
            </ul>
          </section>

        </div>
      </main>

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