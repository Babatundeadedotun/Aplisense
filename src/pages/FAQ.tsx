import { Header } from '@/components/Header';
import { useTheme } from '@/hooks/useTheme';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
            <Link to='/'><Sparkles className="w-4 h-4 text-white" /></Link>
          </div>
          <Link to='/'><span className="font-bold text-gray-900 dark:text-white">ApliSense</span></Link>
        </div>
        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 flex-wrap justify-center">
          <Link to="/about" className="hover:text-accent-cyan">About</Link>
          <Link to="/privacy" className="hover:text-accent-cyan">Privacy</Link>
          <Link to="/terms" className="hover:text-accent-cyan">Terms</Link>
          <Link to="/contact" className="hover:text-accent-cyan">Contact</Link>
          <Link to="/faq" className="hover:text-accent-cyan">FAQ</Link>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">© 2026 ApliSense. All rights reserved.</p>
      </div>
    </footer>
  );
}

const faqs = [
  { category: 'About ApliSense', items: [
    { q: 'What is ApliSense?', a: 'ApliSense is a free, AI-powered CV analysis platform that helps job seekers, graduates, and professionals optimize their resumes for Applicant Tracking Systems (ATS) and real-world recruiter expectations. Upload your CV, select a target role, and receive a detailed match score with personalized recommendations.' },
    { q: 'Is ApliSense really free?', a: 'Yes. All core features are completely free. No hidden charges, no sign-up requirements, no credit card needed. We are funded through advertising.' },
    { q: 'Do I need to create an account?', a: 'No account needed. Simply upload your CV, choose your target role, and get your results instantly.' },
  ]},
  { category: 'CV Analysis & ATS', items: [
    { q: 'What does ATS mean and why does it matter?', a: 'ATS stands for Applicant Tracking System. Studies estimate up to 75% of CVs are rejected by ATS software before being seen by a person. ApliSense helps you optimize your CV specifically for ATS compatibility.' },
    { q: 'How does the CV analysis work?', a: 'Our analysis engine extracts key sections from your uploaded CV and compares them against a database of job role requirements, industry standards, and ATS criteria. You receive a detailed compatibility score with specific improvement recommendations.' },
    { q: 'What file formats does ApliSense accept?', a: 'ApliSense accepts CVs in PDF and DOCX (Microsoft Word) formats.' },
    { q: 'What is a good CV match score?', a: 'A score of 70% or above indicates your CV is well-aligned with the target role. Scores between 50-69% suggest moderate alignment with identifiable gaps. Below 50% indicates significant misalignment.' },
  ]},
  { category: 'Privacy & Data', items: [
    { q: 'Is my CV data stored or shared?', a: 'No. Your uploaded CV is processed temporarily to generate analysis results and discarded afterward. We do not permanently store your documents or share your data with third parties.' },
    { q: 'Is it safe to upload my CV?', a: 'Yes. All data is encrypted using HTTPS. Your documents are not retained after the analysis session completes.' },
  ]},
  { category: 'Improving Your CV', items: [
    { q: 'What are the most common CV mistakes?', a: 'Common mistakes include: generic objective statements instead of targeted summaries, listing duties instead of achievements, missing ATS keywords, using tables or columns that confuse parsers, and not tailoring the CV for each application.' },
    { q: 'How long should my CV be?', a: 'For most professionals with under ten years of experience, one page is ideal. For more experienced professionals, two pages is acceptable.' },
    { q: 'Should I use the same CV for every application?', a: 'No. ATS systems score untargeted CVs lower because they lack the specific keywords for each role. Always tailor your CV for each application.' },
  ]},
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-dark-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-bg transition">
        <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-accent-cyan shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-2 bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <Helmet>
        <title>FAQ – Frequently Asked Questions | ApliSense CV Analyzer</title>
        <meta name="description" content="Find answers to the most common questions about ApliSense — how our CV analysis works, ATS optimization, data privacy, file formats, match scores, and more." />
      </Helmet>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to know about ApliSense, how our CV analysis works, and how to get the most from our free tools.</p>
          </div>
          <div className="space-y-10">
            {faqs.map(({ category, items }) => (
              <div key={category}>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-6 rounded bg-accent-cyan inline-block"></span>{category}
                </h2>
                <div className="space-y-3">{items.map(item => <FaqItem key={item.q} {...item} />)}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 rounded-3xl p-8 border border-accent-cyan/20">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Still have questions?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-5">Reach out and we will be happy to help.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="px-6 py-3 bg-accent-cyan text-white rounded-xl font-semibold hover:opacity-90 transition text-sm">Contact Us</Link>
              <Link to="/" className="px-6 py-3 border border-accent-cyan text-accent-cyan rounded-xl font-semibold hover:bg-accent-cyan hover:text-white transition text-sm">Try CV Analysis Free</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
