import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles } from 'lucide-react';

export default function Contact() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-card rounded-3xl p-8 border border-gray-200 dark:border-dark-border text-center">
           <h1 className="text-3xl md:text-4xl font-bold mb-6">
             Terms & Conditions
           </h1>
           <p className="text-gray-600 dark:text-gray-300 mb-6">
             By using this website, you agree to the following terms and conditions.
           </p>

         <div className="max-w-4xl mx-auto text-left space-y-6 text-gray-700 dark:text-gray-300">
           <div>
             <h2 className="font-semibold text-lg mb-2">1. Use of Service</h2>
             <p>
               This platform provides CV analysis and career guidance tools.
               You agree to use this service responsibly and not for unlawful purposes.
             </p>
           </div>

           <div>
             <h2 className="font-semibold text-lg mb-2">2. No Guarantee</h2>
             <p>
               We do not guarantee job placement, visa approval, or admission outcomes.
               Results depend on individual qualifications and external institutions.
             </p>
           </div>

           <div>
             <h2 className="font-semibold text-lg mb-2">3. Data Usage</h2>
             <p>
               Uploaded documents may be processed for analysis.
               We do not sell personal data to third parties.
             </p>
           </div>

           <div>
             <h2 className="font-semibold text-lg mb-2">4. Changes</h2>
             <p>
               These terms may be updated at any time.
               Continued use of the platform means acceptance of updated terms.
             </p>
           </div>
         </div>
            </div>
                </main>


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