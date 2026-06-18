import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { Sparkles } from "lucide-react";

export default function Contact() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-xl mx-auto bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-200 dark:border-dark-border text-center shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            For support, partnerships, or business inquiries regarding ApliSense,
            please contact us via email below.
          </p>

          <p className="text-lg font-semibold text-accent-cyan break-words">
            contactaplisense@gmail.com
          </p>
        </div>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
              <a href="/"><Sparkles className="w-4 h-4 text-white" /></a>
            </div>
            <a href="/"><span className="font-bold text-gray-900 dark:text-white">ApliSense</span></a>
          </div>

          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 flex-wrap justify-center sm:justify-start">
            <a href="/about" className="hover:text-accent-cyan">About</a>
            <a href="/privacy" className="hover:text-accent-cyan">Privacy</a>
            <a href="/terms" className="hover:text-accent-cyan">Terms & Conditions</a>
            <a href="/contact" className="hover:text-accent-cyan">Contact</a>
          </div>

          <p className="text-sm text-gray-400 dark:text-gray-500 text-center sm:text-left">
            ©️ 2026 ApliSense. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}